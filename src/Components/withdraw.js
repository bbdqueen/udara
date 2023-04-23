import React from 'react';
import {TextInput, View} from 'react-native';
import {emitter} from '../../Udara';
import {hp, wp} from '../utils/dimensions';
import {get_request, post_request} from '../utils/services';
import toast from '../utils/toast';
import Bank_account from './bank_account';
import Bank_accounts from './bank_accounts';
import Bg_view from './Bg_view';
import Cool_modal from './cool_modal';
import Fr_text from './Fr_text';
import Icon from './Icon';
import Loadindicator from './load_indicator';
import Stretched_button from './Stretched_button';
import Text_btn from './Text_btn';

class Withdraw extends React.Component {
  constructor(props) {
    super(props);

    let {currency, default_value} = this.props;
    this.state = {
      currency: currency || 'naira',
      value: default_value ? String(default_value) : '',
    };
  }

  componentDidMount = async () => {
    let {paycheck} = this.props;

    if (paycheck) {
      let paycheck_account = await get_request('paycheck_bank_account');
      this.setState({paycheck_account});
    }
  };

  set_currency = currency => {
    this.setState({currency});

    this.currency_modal && this.currency_modal.toggle_show_modal();
  };

  set_value = value => {
    let {paycheck, wallet} = this.props;
    let {valid} = this.state;

    valid = Number(value) && Number(value) > 0;
    if (valid) {
      if (paycheck) valid = Number(value) <= wallet.profits;
      else valid = Number(value) <= wallet.naira;
    }

    this.setState({
      value,
      valid,
    });
  };

  set_bank_account = bank_account =>
    this.setState({bank_account}, () =>
      this.bank_accounts?.toggle_show_modal(),
    );

  withdraw = async () => {
    this.setState({loading: true});
    let {decorator, user, paycheck} = this.props;
    let {value, currency, bank_account} = this.state;
    60;
    // return console.log(bank_account);
    if (!Number(value)) {
      toast('Invalid transaction value');
      return this.setState({loading: false});
    }

    try {
      let result = await post_request('withdraw', {
        user: user._id,
        wallet: user.wallet._id,
        bank_account,
        amount: value,
        paycheck,
      });

      if (result && result.ok)
        emitter.emit('withdraw', {
          value: Number(value),
          paycheck,
          transaction: result.transaction,
          currency,
        });
      else toast('Err, Something went wrong.');
    } catch (e) {}

    decorator && decorator();
  };

  render = () => {
    let {user, paycheck} = this.props;
    let {value, valid, paycheck_account, bank_account, loading} = this.state;

    let disabled = !valid;
    if (paycheck) {
      if (!paycheck_account && !disabled) disabled = true;
    } else disabled = disabled || !bank_account;

    return (
      <Bg_view
        style={{
          elevation: 10,
          margin: wp(5.6),
          padding: wp(2.8),
          shadowColor: '#000',
          borderRadius: wp(4),
        }}>
        <Fr_text bold size={wp(5)} style={{margin: wp(2.8)}}>
          {paycheck ? `Paycheck` : `Amount to withdraw`}
        </Fr_text>
        <Bg_view
          horizontal
          style={{
            alignItems: 'center',
            borderRadius: wp(1.4),
            shadowColor: '#000',
            elevation: 5,
            margin: wp(2.8),
          }}>
          <TextInput
            placeholder="Enter amount"
            autoFocus
            value={value}
            keyboardType="phone-pad"
            onChangeText={this.set_value}
            style={{
              flex: 1,
              borderRadius: wp(1),
              padding: wp(2.8),
              fontSize: wp(5),
              color: '#000',
            }}
          />
          <View>
            <Bg_view
              horizontal
              style={{
                borderRadius: wp(1),
                height: hp(7.5),
                padding: wp(2.8),
                borderLeftColor: '#ccc',
                borderLeftWidth: 1,
              }}>
              <Icon
                icon={require('../assets/Icons/nigeria_flag_rectangle.png')}
              />
              <Fr_text style={{marginLeft: wp(1.4)}}>{'NGN'}</Fr_text>
            </Bg_view>
          </View>
        </Bg_view>

        {paycheck ? (
          <Bg_view>
            {paycheck_account ? (
              <Bank_account account={paycheck_account} action={() => {}} />
            ) : (
              <Loadindicator />
            )}
          </Bg_view>
        ) : bank_account ? (
          <Bank_account
            account={bank_account}
            action={() => this.bank_accounts?.toggle_show_modal()}
          />
        ) : (
          <Bg_view style={{alignItems: 'center'}}>
            <Text_btn
              text="Select Bank Account"
              centralise
              accent
              action={() => this.bank_accounts?.toggle_show_modal()}
            />
          </Bg_view>
        )}
        <Stretched_button
          disabled={disabled}
          loading={loading}
          title="continue"
          action={this.withdraw}
        />

        <Cool_modal ref={bank_accounts => (this.bank_accounts = bank_accounts)}>
          <Bank_accounts
            user={user}
            action={this.set_bank_account}
            toggle={() => this.bank_accounts?.toggle_show_modal()}
          />
        </Cool_modal>
      </Bg_view>
    );
  };
}

export default Withdraw;
