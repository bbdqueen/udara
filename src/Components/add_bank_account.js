import React from 'react';
import {emitter} from '../../Udara';
import {hp, wp} from '../utils/dimensions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';
import Bg_view from './Bg_view';
import Cool_modal from './cool_modal';
import Fr_text from './Fr_text';
import Get_banks from './get_banks';
import Icon from './Icon';
import Loadindicator from './load_indicator';
import Stretched_button from './Stretched_button';
import Text_btn from './Text_btn';
import Text_input from './Text_input';

class Add_bank_account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account_number: '',
    };
  }

  resolve_account_name = async () => {
    let {account_number, bank} = this.state;
    if (account_number.length === 10 && bank) {
      this.setState({resolving_name: true});
      let account_name = await post_request(`resolve_bank_account_name`, {
        account_number,
        bank: bank.code,
      });

      if (account_name && account_name.account_name)
        this.setState({account_name: account_name.account_name});
      else {
        this.setState({message: 'Cannot resolve account name'});
        toast('Cannot resolve account name');
      }
      this.setState({resolving_name: false});
    }
  };

  set_account_number = account_number =>
    this.setState({account_number}, this.resolve_account_name);

  set_bank = bank => this.setState({bank}, this.resolve_account_name);

  save_bank_account = async () => {
    let {user, toggle} = this.props;
    let {bank, account_name, account_number} = this.state;

    let bank_account = {
      bank_id: bank.id,
      bank: bank.code,
      bank_name: bank.name,
      account_name,
      account_number,
      user: user._id,
      wallet: user.wallet._id,
    };

    let result = await post_request('add_bank_account', bank_account);
    bank_account._id = result._id;
    bank_account.created = result.created;

    emitter.emit('new_bank_account', bank_account);
    toggle();
  };

  render() {
    let {toggle} = this.props;
    let {account_number, account_name, message, resolving_name, bank} =
      this.state;

    return (
      <Bg_view
        style={{
          paddingVertical: hp(2.8),
          elevation: 10,
          shadowColor: '#000',
          maxHeight: hp(),
        }}>
        <Bg_view
          horizontal
          style={{justifyContent: 'space-between', paddingLeft: wp(5.6)}}>
          <Fr_text bold>Add Bank Account</Fr_text>
          <Icon
            icon={require('../assets/Icons/close_icon.png')}
            action={() => toggle && toggle()}
            style={{
              alignSelf: 'flex-end',
              marginHorizontal: wp(5.6),
            }}
          />
        </Bg_view>
        <Bg_view style={{padding: wp(5.6)}}>
          <Bg_view style={{marginVertical: hp(1.4), alignItems: 'center'}}>
            <Text_btn
              accent
              text={(bank && bank.name) || 'Select Bank'}
              action={() =>
                this.get_banks && this.get_banks.toggle_show_modal()
              }
            />
          </Bg_view>
          <Text_input
            placeholder="Enter your account number"
            type="decimal-pad"
            on_change_text={this.set_account_number}
            label="Account Number"
            value={account_number}
          />
        </Bg_view>

        {resolving_name ? (
          <Loadindicator />
        ) : (
          <Bg_view style={{alignItems: 'center'}}>
            {account_name ? <Fr_text>Account Name</Fr_text> : null}
            <Text_btn text={account_name || message} />
          </Bg_view>
        )}

        <Stretched_button
          title="save"
          action={this.save_bank_account}
          disabled={
            !bank ||
            !account_name ||
            !account_number ||
            (account_number && account_number.length !== 10)
          }
        />

        <Cool_modal ref={get_banks => (this.get_banks = get_banks)}>
          <Get_banks
            select={this.set_bank}
            toggle={() => this.get_banks && this.get_banks.toggle_show_modal()}
          />
        </Cool_modal>
      </Bg_view>
    );
  }
}

export default Add_bank_account;
