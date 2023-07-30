import React from 'react';
import {ScrollView} from 'react-native';
import {Admin_id, emitter, User} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import Icon from '../Components/Icon';
import List_empty from '../Components/list_empty';
import Loadindicator from '../Components/load_indicator';
import Notification from '../Components/notification';
import {post_request} from '../utils/services';
import toast from '../utils/toast';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    this.refresh_notifications();
  };

  refresh_notifications = async () => {
    let user = this.user.is_admin ? Admin_id : this.user._id;
    toast('Refreshing...');
    let notifications = await post_request(`notifications/${user}`);

    this.setState({notifications});

    await post_request(`notifications_seen/${user}`);
    emitter.emit('seen_notification');
  };

  render = () => {
    let {navigation} = this.props;
    let {notifications} = this.state;

    return (
      <User.Consumer>
        {user => {
          this.user = user;

          return (
            <Bg_view flex>
              <Header
                title="notifications"
                navigation={navigation}
                right_btn={
                  <Icon
                    icon="refresh.png"
                    action={() => this.refresh_notifications(true)}
                  />
                }
              />

              <ScrollView showsVerticalScrollIndicator={false}>
                {notifications ? (
                  notifications.length ? (
                    notifications.map(notification => (
                      <Notification
                        notification={notification}
                        navigation={navigation}
                        user={user}
                        key={notification._id}
                      />
                    ))
                  ) : (
                    <List_empty text="No notifications yet." />
                  )
                ) : (
                  <Loadindicator />
                )}
              </ScrollView>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  };
}

export default Notifications;
