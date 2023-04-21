import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {emitter} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Cool_modal from '../Components/cool_modal';
import Country_codes from '../Components/country_codes';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Stretched_button from '../Components/Stretched_button';
import Text_input from '../Components/Text_input';
import {hp, wp} from '../utils/dimensions';
import {validate_phone} from '../utils/functions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';
import Text_btn from '../Components/Text_btn';

class Reset_password extends React.Component {
  constructor(props) {
    super(props);

    let {route} = this.props;

    this.state = {
      password: '',
      confirm_password: '',
    };
  }

  componentDidMount = async () => {};

  toggle_reveal_password = () =>
    this.setState({reveal_password: !this.state.reveal_password});

  set_password = password => this.setState({password});

  set_confirm_password = confirm_password => this.setState({confirm_password});

  is_set = () => {
    let {email, password, confirm_password} = this.state;
    return (
      validate_phone(email) &&
      password.length >= 6 &&
      confirm_password === password
    );
  };

  reset = async () => {
    let {route, navigation} = this.props;
    let {user, email} = route.params;

    let {password} = this.state;

    this.setState({loading: true});

    let res = await post_request('update_password', {user, key: password});

    if (res?.user) {
      navigation.navigate('login', {email});
    } else {
      this.setState({loading: false}, () =>
        toast(res?.message || 'Cannot reset password at the moment'),
      );
    }
  };

  render = () => {
    let {navigation} = this.props;
    let {password, confirm_password, reveal_password, loading} = this.state;

    return (
      <Bg_view flex>
        <KeyboardAvoidingView style={{flex: 1}}>
          <ScrollView showVerticalScrollIndicator={false} style={{flex: 1}}>
            <Bg_view style={{alignItems: 'center'}} flex no_bg>
              <Icon
                icon={require('../assets/Icons/udara_logo.png')}
                style={{height: hp(10), width: wp(50), marginTop: hp(10)}}
              />
              <Bg_view
                style={{
                  elevation: 10,
                  shadowColor: '#000',
                  width: wp(88.8),
                  height: hp(70),
                  justifyContent: 'center',
                  borderRadius: wp(5.6),
                  padding: wp(5.6),
                  paddingBottom: wp(2.8),
                  marginVertical: hp(5),
                }}>
                <Fr_text
                  bold="900"
                  size={wp(7.5)}
                  color="#28100B"
                  centralise
                  style={{marginBottom: hp(4)}}>
                  Reset_password
                </Fr_text>

                <Text_input
                  value={password}
                  label={'new password'}
                  secure={!reveal_password}
                  placeholder="type your password"
                  on_change_text={this.set_password}
                  right_icon={
                    <Icon
                      icon={
                        reveal_password
                          ? require('./../assets/Icons/eye.png')
                          : require('./../assets/Icons/hidden.png')
                      }
                      action={this.toggle_reveal_password}
                    />
                  }
                />

                <Text_input
                  value={confirm_password}
                  label={'confirm password'}
                  secure={!reveal_password}
                  placeholder="type your confirm password"
                  on_change_text={this.set_confirm_password}
                  right_icon={
                    <Icon
                      icon={
                        reveal_password
                          ? require('./../assets/Icons/eye.png')
                          : require('./../assets/Icons/hidden.png')
                      }
                      action={this.toggle_reveal_password}
                    />
                  }
                />

                <Stretched_button
                  title="login"
                  loading={loading}
                  style={{marginHorizontal: 0, marginTop: hp(2)}}
                  action={this.reset}
                />

                <Bg_view flex style={{alignItems: 'center'}}>
                  <Text_btn
                    text="Back to login"
                    accent
                    action={() => navigation.navigate('login')}
                  />
                </Bg_view>
              </Bg_view>
            </Bg_view>
          </ScrollView>
        </KeyboardAvoidingView>
      </Bg_view>
    );
  };
}

export default Reset_password;
