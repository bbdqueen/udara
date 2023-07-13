import React from 'react';
import {TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Otp_counter from '../Components/otp_counter';
import Stretched_button from '../Components/Stretched_button';
import {hp, wp} from '../utils/dimensions';
import {email_regex, to_title} from '../utils/functions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';
import {emitter} from '../../Udara';

class Two_factor_auth_login extends React.Component {
  constructor(props) {
    super(props);

    let {route, navigation} = this.props;
    let {user, wallet} = route.params;

    if (!user) return navigation.goBack();

    let email = user?.email;

    this.state = {user, wallet, email, valid_code: email_regex.test(email)};
  }

  resend_otp = async () => {
    let {user} = this.props.route.params;
    let res = await post_request('request_otp', {
      email: user.email,
      relogin: true,
    });

    if (res?.message) {
      return toast(res.message);
    }
  };

  set_code = code =>
    this.setState({
      code: code?.trim(),
      valid_code: /^[0-9]{6}$/.test(String(code)),
    });

  verify = async () => {
    let {route} = this.props;
    let {user, wallet} = route.params;
    let {code, email, loading} = this.state;

    if (loading) return;

    this.setState({loading: true});

    let res = await post_request('verify_email', {
      email,
      code: code?.trim(),
    });

    if (res?.user || res?.email) {
      emitter.emit('logged_in', {user, wallet});
    } else toast(res?.message || 'Email verification failed');
  };

  render = () => {
    let {route} = this.props;
    let {user} = route.params;
    let {valid_code, loading, email, code} = this.state;

    return (
      <Bg_view flex>
        <KeyboardAvoidingView style={{flex: 1}}>
          <ScrollView showVerticalScrollIndicator={false}>
            <Bg_view style={{alignItems: 'center'}}>
              <Icon
                icon={require('./../assets/Icons/Verification_2.png')}
                style={{height: hp(35), width: wp(85)}}
              />

              <Fr_text bold="900" size={wp(7)} color="#28100B">
                Welcome, {to_title(user.username)}
              </Fr_text>
              <Fr_text
                size={wp(4.2)}
                centralise
                capitalise
                line_height={wp(7)}
                opacity={0.8}
                style={{
                  marginHorizontal: wp(20),
                  marginTop: hp(1.4),
                }}>
                {`Authentication Code has been sent to`}
              </Fr_text>
              <Fr_text centralise style={{marginBottom: hp(2.8)}} accent>
                {email}
              </Fr_text>
              <Bg_view
                style={{
                  backgroundColor: '#fff',
                  width: wp(88.8),
                  height: hp(35),
                  marginBottom: 20,
                  justifyContent: 'center',
                  borderRadius: wp(5.6),
                  padding: wp(5.6),
                  elevation: 10,
                  shadowColor: '#000',
                }}>
                <Bg_view
                  style={{
                    height: hp(7.5),
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: wp(4),
                    marginTop: hp(4),
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: wp(4),
                    paddingRight: wp(2.8),
                  }}>
                  <TextInput
                    placeholder="_ _ _ _ _ _"
                    keyboardType="decimal-pad"
                    placeholderTextColor="#ccc"
                    onChangeText={this.set_code}
                    value={code}
                    style={{
                      flex: 1,
                      fontSize: wp(4.5),
                      color: '#28100B',
                      marginRight: wp(1.4),
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  />
                  {valid_code ? (
                    <Icon
                      icon={require('../assets/Icons/valid.png')}
                      style={{height: wp(7.5), width: wp(7.5)}}
                    />
                  ) : null}
                </Bg_view>
                <Stretched_button
                  title="Proceed"
                  disabled={!valid_code || !code}
                  loading={loading}
                  style={{marginHorizontal: 0, marginTop: hp(4)}}
                  action={this.verify}
                />
              </Bg_view>

              <Otp_counter resend_otp={this.resend_otp} />
            </Bg_view>
          </ScrollView>
        </KeyboardAvoidingView>
      </Bg_view>
    );
  };
}

export default Two_factor_auth_login;
