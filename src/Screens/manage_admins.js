import React from 'react';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import {ScrollView} from 'react-native';
import {get_request} from '../utils/services';
import Admin_card from '../Components/admin_card';
import List_empty from '../Components/list_empty';
import Loadindicator from '../Components/load_indicator';
import Text_btn from '../Components/Text_btn';
import {emitter} from '../../Udara';

class Manage_admins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let admins = await get_request('admins');

    this.setState({admins});

    this.new_admin = admin => {
      let {admins} = this.state;
      if (!admins || !Array.isArray(admins)) admins = new Array();
      admins = new Array(admin, ...admins);
      this.setState({admins});
    };
    emitter.listen('new_admin', this.new_admin);
  };

  componentWillUnmount = () => {
    emitter.remove_listener('new_admin', this.new_admin);
  };

  on_remove = admin_id => {
    let {admins} = this.state;
    admins = admins.filter(admin => admin._id !== admin_id);
    this.setState({admins});
  };

  render() {
    let {navigation} = this.props;
    let {admins} = this.state;

    return (
      <Bg_view flex>
        <Header title="Manage Admins" navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {admins ? (
            admins.length ? (
              admins.map(admin => <Admin_card admin={admin} key={admin._id} />)
            ) : (
              <Bg_view style={{alignItems: 'center'}}>
                <List_empty text="No admins at the moment" />
                <Text_btn
                  text="Create"
                  accent
                  action={() => navigation.navigate('create_admin')}
                />
              </Bg_view>
            )
          ) : (
            <Loadindicator />
          )}
        </ScrollView>
      </Bg_view>
    );
  }
}

export default Manage_admins;
