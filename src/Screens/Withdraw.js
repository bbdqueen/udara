import React from 'react';
import {TextInput, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {emitter} from '../../Udara';
import {hp, wp} from '../utils/dimensions';
import {get_request, post_request} from '../utils/services';
import toast from '../utils/toast';
import Bank_account from '../Components/bank_account';
import Bank_accounts from '../Components/bank_accounts';
import Bg_view from '../Components/Bg_view';
import Cool_modal from '../Components/cool_modal';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Loadindicator from '../Components/load_indicator';
import Stretched_button from '../Components/Stretched_button';
import Text_btn from '../Components/Text_btn';
import Header from '../Components/header';

class Withdraw extends React.Component {
  constructor(props) {
    super(props);

    let {currency, default_value} = this.props.route.params;
    this.state = {
      currency: currency || 'naira',
      value: default_value ? String(default_value) : '',
    };
  }

  componentDidMount = async () => {
    let {paycheck} = this.props.route.params;

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
    let {paycheck, wallet} = this.props.route.params;
    let {valid} = this.state;

    valid = Number(value) && Number(value) > 0;
    if (valid) {
      if (paycheck) valid = Number(value) <= wallet.profits;
      else valid = Number(value) <= wallet.available_balance;
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
    let {decorator, user, paycheck} = this.props.route.params;
    let {value, currency, bank_account} = this.state;

    value = Number(value);
    let msg = !value
      ? 'Invalid transaction value'
      : value < 100
      ? 'Amount cannot be below 100'
      : null;

    if (msg) {
      toast(msg);
      return this.setState({loading: false, message: null});
    }

    try {
      let result = await post_request('withdraw', {
        user: user._id,
        wallet: user.wallet._id,
        bank_account,
        amount: value,
        paycheck,
      });

      if (result?.ok)
        emitter.emit('withdraw', {
          value: Number(value),
          paycheck,
          transaction: result.transaction,
          currency,
        });
      else {
        result?.wallet && emitter.emit('refresh_wallet', wallet);
        toast(result?.message || 'Err, Something went wrong.');
        result?.message && this.setState({message, perhaps: result?.perhaps});
      }
    } catch (e) {}

    decorator && decorator();
  };

  render = () => {
    let {navigation} = this.props;
    let {user, paycheck} = this.props.route?.params;
    let {
      value,
      valid,
      perhaps,
      paycheck_account,
      message,
      bank_account,
      loading,
    } = this.state;

    let disabled = !valid;
    if (paycheck) {
      if (!paycheck_account && !disabled) disabled = true;
    } else disabled = disabled || !bank_account;

    return (
      <Bg_view flex>
        <Header title="Withdraw" navigation={navigation} />
        <ScrollView contentContainerStyle={{justifyContent: 'center', flex: 1}}>
          <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}}>
            <Bg_view flex style={{justifyContent: 'center'}}>
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
                    placeholderTextColor="#ccc"
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
                      <Bank_account
                        account={paycheck_account}
                        action={() => {}}
                      />
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

                {message ? (
                  <Text_btn
                    italic
                    centralise
                    text={
                      perhaps
                        ? "It could be that your topup hasn't been fully processed. This usually take around 30 mins. T:messagery again."
                        : message
                    }
                  />
                ) : null}

                <Stretched_button
                  disabled={disabled}
                  loading={loading}
                  title="continue"
                  action={this.withdraw}
                />

                <Cool_modal
                  ref={bank_accounts => (this.bank_accounts = bank_accounts)}>
                  <Bank_accounts
                    user={user}
                    action={this.set_bank_account}
                    toggle={() => this.bank_accounts?.toggle_show_modal()}
                  />
                </Cool_modal>
              </Bg_view>
            </Bg_view>
          </KeyboardAvoidingView>
        </ScrollView>
      </Bg_view>
    );
  };
}

export default Withdraw;
