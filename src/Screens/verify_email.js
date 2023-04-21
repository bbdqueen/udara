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

class Verify_email extends React.Component {
  constructor(props) {
    super(props);

    let {route} = this.props;
    let {email} = route.params;

    email = email || '';

    this.state = {email, valid_code: email_regex.test(email)};
  }

  resend_otp = async () => {
    let {email} = this.props.route.params;
    return await post_request('request_otp', {email});
  };

  set_code = code =>
    this.setState({
      code: code.trim(),
      valid_code: /^[0-9]{6}$/.test(String(code)),
    });

  verify = async () => {
    let {navigation, route} = this.props;
    let {email} = route.params;
    let {code} = this.state;

    let res = await post_request('verify_email', {email, code});

    if (res?.user) {
      navigation.navigate('reset_password', {email, user: res.user});
    } else toast(res?.message || 'Email verification failed');
  };

  render = () => {
    let {route} = this.props;
    let {email} = route.params;
    let {valid_code, loading, code} = this.state;

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
                Verify Email
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
                {`enter the 6 digit number that was sent to ${email}`}
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
                  title="verify"
                  disabled={!valid_code}
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

export default Verify_email;
