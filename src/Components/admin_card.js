import React from 'react';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import {wp} from '../utils/dimensions';
import Text_btn from './Text_btn';
import Remove_admin from './remove_admin';
import Cool_modal from './cool_modal';
import {post_request} from '../utils/services';
import toast from '../utils/toast';

class Admin_card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  toggle_remove_admin = () => this.remove?.toggle_show_modal();

  remove = async () => {
    let {admin, on_remove} = this.props;

    if (this.state.loading) return;
    toast('Removing admin...');

    this.setState({loading: true});

    await post_request(`remove_admin/${admin._id}`);

    on_remove && on_remove(admin._id);
    toast('Admin removed');
  };

  render() {
    let {admin, user, action} = this.props;

    if (!user) user = admin.user;

    return (
      <Bg_view
        style={{
          margin: wp(2.8),
          marginHorizontal: wp(4),
          padding: wp(4),
          borderRadius: wp(2.8),
        }}
        shadowed>
        <Fr_text>
          Username:
          <Fr_text accent bold>
            {' '}
            {user.username}
          </Fr_text>
        </Fr_text>
        <Fr_text>
          Email:{' '}
          <Fr_text accent bold>
            {user.email}
          </Fr_text>
        </Fr_text>
        <Bg_view style={{alignItems: 'center'}}>
          {admin ? (
            <Text_btn
              accent
              centralise
              text="Remove admin"
              action={this.toggle_remove_admin}
            />
          ) : (
            <Text_btn accent text="Transaction Details" action={action} />
          )}
        </Bg_view>

        <Cool_modal ref={remove => (this.remove = remove)}>
          <Remove_admin
            admin={admin}
            toggle={this.toggle_remove_admin}
            proceed={this.remove}
          />
        </Cool_modal>
      </Bg_view>
    );
  }
}

export default Admin_card;
