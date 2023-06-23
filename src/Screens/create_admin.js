import React from 'react';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import {ScrollView, TextInput} from 'react-native';
import Icon from '../Components/Icon';
import {hp, wp} from '../utils/dimensions';
import Fr_text from '../Components/Fr_text';
import Stretched_button from '../Components/Stretched_button';
import {email_regex} from '../utils/functions';
import Text_btn from '../Components/Text_btn';
import {post_request} from '../utils/services';
import toast from '../utils/toast';
import {emitter} from '../../Udara';

class Create_admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  input_component = ({label, text_entry, placeholder, secure}) => (
    <Bg_view
      key={label}
      horizontal
      style={{
        height: hp(11),
        elevation: 10,
        shadowColor: '#000',
        borderRadius: wp(2.8),
        alignItems: 'center',
        padding: wp(2.8),
        marginBottom: hp(2.8),
      }}>
      {/* <Icon icon="password_lock.png" /> */}
      <Bg_view flex style={{paddingLeft: wp(2.8)}} no_bg>
        <Fr_text opacity={0.8}>{label}</Fr_text>
        <TextInput
          style={{fontSize: wp(4.5), margin: 0, padding: 0, color: '#000'}}
          placeholder={placeholder}
          onChangeText={text_entry}
          secureTextEntry={secure && !this.state.reveal_passwords}
        />
      </Bg_view>
    </Bg_view>
  );

  create = async () => {
    let {navigation} = this.props;
    let {email, password, username, phone, loading} = this.state;

    if (loading) return;
    this.setState({loading: true});

    let res = await post_request('create_admin', {
      email: email.toLowerCase().trim(),
      password,
      username,
      phone,
    });

    res?.admin && emitter.emit('new_admin', res.admin);

    toast('Admin Created');
    navigation.goBack();
  };

  render() {
    let {navigation} = this.props;
    let {email, password, username, reveal_passwords, phone} = this.state;

    return (
      <Bg_view flex>
        <Header title="Create Admin" navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Bg_view style={{marginHorizontal: wp(2.8)}}>
            {this.input_component({
              label: 'Username',
              text_entry: username => this.setState({username}),
              placeholder: 'Enter username',
            })}
            {this.input_component({
              label: 'Email',
              text_entry: email => this.setState({email}),
              placeholder: 'Enter email',
            })}
            {this.input_component({
              label: 'Phone',
              text_entry: phone => this.setState({phone}),
              placeholder: 'Enter phone',
            })}

            {this.input_component({
              label: 'Password',
              text_entry: password => this.setState({password}),
              placeholder: 'Enter password',
              secure: true,
            })}

            <Text_btn
              style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}
              accent
              text={reveal_passwords ? 'Hide Password' : 'Reveal Password'}
              action={() =>
                this.setState({reveal_passwords: !this.state.reveal_passwords})
              }
            />

            <Stretched_button
              title="Add Admin"
              disabled={
                !username || !email_regex.test(email) || !password || !phone
              }
              action={this.create}
            />
          </Bg_view>
        </ScrollView>
      </Bg_view>
    );
  }
}

export default Create_admin;
