import React from 'react';
import {TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import {emitter} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Otp_counter from '../Components/otp_counter';
import Stretched_button from '../Components/Stretched_button';
import {hp, wp} from '../utils/dimensions';
import {email_regex} from '../utils/functions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';

class Forgot_password extends React.Component {
  constructor(props) {
    super(props);

    let {route} = this.props;
    let {email} = route.params;

    email = email || '';

    this.state = {email, valid_email: email_regex.test(email)};
  }

  resend_otp = async () => {
    let {email} = this.props.route.params;
    return await post_request('request_otp', {email});
  };

  set_email = email =>
    this.setState({
      email,
      valid_email: email_regex.test(email),
    });

  get_code = async () => {
    let {navigation} = this.props;
    let {email} = this.state;

    let res = await post_request('forgot_password', {email});

    if (res?.user) {
      navigation.navigate('verify_email', {email, user: res.user});
    } else toast(res?.message || "Coundn't get OTP at the moment");
  };

  render = () => {
    let {valid_email, loading, email} = this.state;

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
                Forgot Password
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
                  marginBottom: hp(2.8),
                }}>
                {`Enter email address registered to your account`}
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
                    placeholder="your@mail.com"
                    keyboardType="email"
                    placeholderTextColor="#ccc"
                    onChangeText={this.set_email}
                    value={email}
                    style={{
                      flex: 1,
                      fontSize: wp(4.5),
                      color: '#28100B',
                      marginRight: wp(1.4),
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  />
                  {valid_email ? (
                    <Icon
                      icon={require('../assets/Icons/valid.png')}
                      style={{height: wp(7.5), width: wp(7.5)}}
                    />
                  ) : null}
                </Bg_view>
                <Stretched_button
                  title="get code"
                  disabled={!valid_email}
                  loading={loading}
                  style={{marginHorizontal: 0, marginTop: hp(4)}}
                  action={this.get_code}
                />
              </Bg_view>
            </Bg_view>
          </ScrollView>
        </KeyboardAvoidingView>
      </Bg_view>
    );
  };
}

export default Forgot_password;
