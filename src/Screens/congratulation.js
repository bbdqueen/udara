import React from 'react';
import {KeyboardAvoidingView, ScrollView, TextInput} from 'react-native';
import {emitter} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Stretched_button from '../Components/Stretched_button';
import {hp, wp} from '../utils/dimensions';
import {phone_regex} from '../utils/functions';
import {post_request} from '../utils/services';
import Text_btn from '../Components/Text_btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Congratulation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  done = async () => {
    let {route} = this.props;
    let {user, email} = route.params;
    let {username, phone, password} = this.state;

    if (!phone_regex.test(phone) || !username) return;

    this.setState({loading: true});

    await post_request('update_user_data', {user, username, phone});

    emitter.emit('update_user_data', {username, phone});

    await post_request('update_password', {
      key: password,
      new_user: true,
      user,
    });

    let result = await post_request('logging_in', {
      email,
      key: password,
      new_user: true,
    });

    await AsyncStorage.removeItem('new_user');
    this.setState({loading: false});

    if (result?.user)
      emitter.emit('logged_in', {user: result.user, wallet: result.wallet});
    else toast(result?.message || 'Cannot login at the moment.');
  };

  render = () => {
    let {username, phone, loading, password, show} = this.state;

    return (
      <Bg_view flex>
        <KeyboardAvoidingView style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Bg_view style={{alignItems: 'center', paddingTop: hp(10)}}>
              <Icon
                icon="Verification_2.png"
                style={{height: wp(30), width: wp(100)}}
              />

              <Fr_text bold="900" size={wp(7)} color="maroon">
                Congratulation!
              </Fr_text>
              <Fr_text>Setup your user profile details</Fr_text>
              <Bg_view
                style={{
                  backgroundColor: '#fff',
                  width: wp(88.8),
                  marginTop: hp(5),
                  minHeight: hp(30),
                  justifyContent: 'center',
                  borderRadius: wp(5.6),
                  padding: wp(5.6),
                  marginBottom: hp(10),
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
                    placeholder="Username"
                    placeholderTextColor="#ccc"
                    keyboardType="text"
                    onChangeText={username => this.setState({username})}
                    value={username}
                    style={{
                      flex: 1,
                      fontSize: wp(4.5),
                      color: '#28100B',
                      marginRight: wp(1.4),
                      fontWeight: 'bold',
                    }}
                  />
                </Bg_view>
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
                    placeholder="Phone"
                    placeholderTextColor="#ccc"
                    keyboardType="decimal-pad"
                    onChangeText={phone => this.setState({phone})}
                    value={phone}
                    style={{
                      flex: 1,
                      fontSize: wp(4.5),
                      color: '#28100B',
                      marginRight: wp(1.4),
                      fontWeight: 'bold',
                    }}
                  />
                </Bg_view>

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
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry={!show}
                    onChangeText={password => this.setState({password})}
                    value={password}
                    style={{
                      flex: 1,
                      fontSize: wp(4.5),
                      color: '#28100B',
                      marginRight: wp(1.4),
                      fontWeight: 'bold',
                    }}
                  />
                </Bg_view>
                <Bg_view style={{alignItems: 'flex-end'}}>
                  <Text_btn
                    accent
                    text={show ? 'Hide' : 'Show'}
                    action={() => this.setState({show: !show})}
                  />
                </Bg_view>
                {password?.length < 6 ? (
                  <Text_btn text="Password must be atleast 6 characters" />
                ) : null}

                <Stretched_button
                  title="done!"
                  loading={loading}
                  disabled={!phone || !username || password?.length < 6}
                  action={this.done}
                />
              </Bg_view>
            </Bg_view>
          </ScrollView>
        </KeyboardAvoidingView>
      </Bg_view>
    );
  };
}

export default Congratulation;
