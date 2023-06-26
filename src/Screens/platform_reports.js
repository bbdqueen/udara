import React from 'react';
import Header from '../Components/header';
import Bg_view from '../Components/Bg_view';
import {ScrollView, TextInput} from 'react-native';
import {hp, wp} from '../utils/dimensions';
import Loadindicator from '../Components/load_indicator';
import Admin_card from '../Components/admin_card';
import {get_request} from '../utils/services';
import Fr_text from '../Components/Fr_text';
import Stretched_button from '../Components/Stretched_button';
import {email_regex} from '../utils/functions';
import List_empty from '../Components/list_empty';

class Platform_reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  find_user = async () => {
    let {email, fetching} = this.state;
    if (fetching) return;

    this.setState({fetching: true});

    email = email.toLowerCase().trim();
    let user = await get_request(`user_by_email/${email}`);

    this.setState({user: user?._id ? user : 'Not found', fetching: false});
  };

  render() {
    let {navigation} = this.props;
    let {fetching, email, user} = this.state;

    return (
      <Bg_view flex>
        <Header title="Platform Reports" navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Bg_view
            horizontal
            style={{
              height: hp(11),
              elevation: 10,
              marginHorizontal: wp(4),
              shadowColor: '#000',
              borderRadius: wp(2.8),
              alignItems: 'center',
              padding: wp(2.8),
              marginBottom: hp(2.8),
            }}>
            {/* <Icon icon="password_lock.png" /> */}
            <Bg_view flex style={{paddingLeft: wp(2.8)}} no_bg>
              <Fr_text opacity={0.8}>Search User by Email</Fr_text>
              <TextInput
                style={{
                  fontSize: wp(4.5),
                  margin: 0,
                  padding: 0,
                  color: '#000',
                }}
                placeholder={'Enter user email'}
                onChangeText={email => this.setState({email})}
              />
            </Bg_view>
          </Bg_view>

          <Stretched_button
            title="Search"
            loading={fetching}
            disabled={!email_regex.test(email?.trim())}
            action={this.find_user}
          />

          {fetching ? (
            <Loadindicator />
          ) : user ? (
            user._id ? (
              <Admin_card
                user={user}
                action={() => navigation.navigate('user_wallet', {user})}
              />
            ) : (
              <List_empty text="User not found" />
            )
          ) : null}
        </ScrollView>
      </Bg_view>
    );
  }
}

export default Platform_reports;
