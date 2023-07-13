import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {emitter, User} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Stretched_button from '../Components/Stretched_button';
import Text_btn from '../Components/Text_btn';
import Text_input from '../Components/Text_input';
import {hp, wp} from '../utils/dimensions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';

class Relogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  set_password = password => this.setState({password});

  login = async () => {
    if (!this.email) return toast('Err, something went wrong');

    this.setState({loading: true});
    let {password} = this.state;
    let email = this.email;

    let result = await post_request('logging_in', {
      email,
      key: password,
      relogin: true,
    });

    this.setState({loading: false});
    result && result.user
      ? emitter.emit('logged_in', {user: result.user, wallet: result.wallet})
      : toast(result);
  };

  toggle_reveal_password = () =>
    this.setState({reveal_password: !this.state.reveal_password});

  render = () => {
    let {navigation} = this.props;
    let {password, reveal_password, loading} = this.state;

    return (
      <User.Consumer>
        {({username, email, _id}) => {
          this.email = email;

          return (
            <Bg_view flex>
              <KeyboardAvoidingView style={{flex: 1}}>
                <ScrollView
                  showVerticalScrollIndicator={false}
                  style={{flex: 1}}>
                  <Bg_view style={{alignItems: 'center'}} flex no_bg>
                    <Icon
                      icon={require('../../android/app/src/main/assets/Icons/acccount_orange_icon.png')}
                      style={{height: hp(10), width: wp(50), marginTop: hp(10)}}
                    />
                    <Bg_view
                      style={{
                        elevation: 10,
                        shadowColor: '#000',
                        width: wp(88.8),
                        justifyContent: 'center',
                        borderRadius: wp(5.6),
                        padding: wp(5.6),
                        paddingBottom: wp(2.8),
                        marginVertical: hp(5),
                      }}>
                      <Fr_text
                        bold="900"
                        size={wp(5.6)}
                        color="#28100B"
                        centralise
                        style={{marginBottom: hp(2)}}>
                        Welcome Back, {username}
                      </Fr_text>

                      <Fr_text
                        italic
                        centralise
                        size={wp(3.8)}
                        style={{marginBottom: hp(2.8)}}>
                        Provide your password to proceed into the app.
                      </Fr_text>

                      <Text_input
                        value={password}
                        label={'password'}
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
                      <Stretched_button
                        title="login"
                        disabled={!password}
                        loading={loading}
                        style={{marginHorizontal: 0, marginTop: hp(2)}}
                        action={this.login}
                      />

                      <Bg_view
                        flex
                        style={{
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                        }}>
                        <Bg_view flex>
                          <Text_btn
                            text="Switch Accounts"
                            accent
                            action={() => navigation.navigate('login', {email})}
                          />
                        </Bg_view>
                        <Bg_view flex>
                          <Text_btn
                            text="Forgot password?"
                            accent
                            action={() =>
                              navigation.navigate('forgot_password', {email})
                            }
                          />
                        </Bg_view>
                      </Bg_view>
                    </Bg_view>
                  </Bg_view>
                </ScrollView>
              </KeyboardAvoidingView>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  };
}

export default Relogin;
