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

class Congratulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  done = async () => {
    let {navigation, route} = this.props;
    let {user, country_code} = route.params;
    let {username, phone} = this.state;

    this.setState({loading: true});

    await post_request('update_user_data', {user, username, phone});

    emitter.emit('update_user_data', {username, phone});

    navigation.push('login', {country_code, user, new_user: true});
  };

  render = () => {
    let {username, phone, loading} = this.state;

    return (
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <Bg_view style={{alignItems: 'center', paddingTop: hp(10)}} flex>
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

              <Stretched_button
                title="done!"
                loading={loading}
                disabled={!phone_regex.test(phone) || !username}
                action={this.done}
              />
              {/* </Bg_view> */}
            </Bg_view>
          </Bg_view>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
}

export default Congratulation;
