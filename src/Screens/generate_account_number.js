import React from 'react';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Header from '../Components/header';
import Loadindicator from '../Components/load_indicator';
import {hp, wp} from '../utils/dimensions';
import {get_request} from '../utils/services';
import Text_btn from '../Components/Text_btn';
import Clipboard from '@react-native-clipboard/clipboard';
import toast from '../utils/toast';
import {Linking} from 'react-native';

class Generate_account_number extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requesting: true,
    };
  }

  componentDidMount = async () => {
    let {brass_account, user} = this.props.route.params;

    if (!brass_account) {
      brass_account = await get_request(`user_brass_account/${user._id}`);
    }

    this.setState({requesting: false, account_details: brass_account});
  };

  render() {
    let {navigation, route} = this.props;
    let {user} = route.params;
    let {requesting, account_details, error_message} = this.state;

    let payment_url =
      account_details &&
      `https://pages.trybrass.com/payment/${account_details?.account_id}`;

    return (
      <Bg_view flex>
        <Header title="Top Up" navigation={navigation} />

        <Bg_view style={{padding: wp(5.6), lineHeight: 32}}>
          <Fr_text size={19}>
            Make a bank transfer to the bank details below to fund your wallet.
          </Fr_text>
          <Fr_text size={19} style={{lineHeight: 32}}>
            Deposits can take up to 30 minutes to reflect.
          </Fr_text>

          <Bg_view shadowed style={{borderRadius: wp(4), marginTop: hp(1.4)}}>
            {requesting ? (
              <Loadindicator />
            ) : error_message ? (
              <Bg_view style={{padding: wp(4), alignItems: 'center'}}>
                <Fr_text bold italic>
                  {error_message}
                </Fr_text>
              </Bg_view>
            ) : (
              <Bg_view style={{alignItems: 'center', padding: wp(4)}}>
                <Fr_text size={16}>Account Number</Fr_text>

                <Text_btn
                  text={account_details?.number}
                  size={22}
                  bold
                  action={() => {
                    Clipboard.setString(account_details?.number);
                    toast('Account number copied.');
                  }}
                />
                <Fr_text size={16} style={{marginTop: hp(1.4)}}>
                  Account Name
                </Fr_text>
                <Fr_text bold size={22}>
                  {account_details?.name}
                </Fr_text>

                <Fr_text size={16} style={{marginTop: hp(1.4)}}>
                  Bank
                </Fr_text>
                <Fr_text bold size={22}>
                  {account_details?.bank_name || 'PAGA'}
                </Fr_text>

                <Bg_view style={{alignItems: 'center', marginTop: 20}}>
                  <Fr_text>Or alternatively; Pay using Link</Fr_text>

                  <Text_btn
                    accent
                    text={payment_url}
                    long_action={() => {
                      payment_url && Clipboard.setString(payment_url);
                      toast('Payment URL copied!');
                    }}
                    bold
                    action={() => Linking.openURL(payment_url)}
                  />
                </Bg_view>
              </Bg_view>
            )}
          </Bg_view>
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Generate_account_number;
