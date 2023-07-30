import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Admin_id, emitter, User} from '../../Udara';
import Amount_to_sell from '../Components/amount_to_sell';
import Bg_view from '../Components/Bg_view';
import Buy from '../Components/buy';
import Cool_modal from '../Components/cool_modal';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Listfooter from '../Components/listfooter';
import Loadindicator from '../Components/load_indicator';
import Notification from '../Components/notification';
import Quick_action from '../Components/quick_action';
import {hp, wp} from '../utils/dimensions';
import {post_request} from '../utils/services';
import Ongoing_transactions from '../Components/ongoing_transactions';
import Text_btn from '../Components/Text_btn';
import Line from '../Components/line';
import Wallet from '../Components/wallet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_txs: new Array(),
      currency_full: {
        alphabetic_name: 'USD',
        icon: 'dollar_icon.png',
        flag: 'usa_flag_rectangle.png',
      },
    };
  }

  componentDidMount = async () => {
    this.new_transaction = tx => {
      let {new_txs} = this.state;
      new_txs.push(tx._id);
      this.setState({new_txs});
    };

    this.transaction_mounted = tx_id => {
      let {new_txs} = this.state;
      if (!new_txs.length) return;

      new_txs = new_txs.filter(tx => tx !== tx_id);
      this.setState({new_txs: new Array(...new_txs)});
    };

    emitter.listen('new_transaction', this.new_transaction);
    emitter.listen('transaction_mounted', this.transaction_mounted);

    let notifications =
      (await post_request(
        `notifications/${this.user.is_admin ? Admin_id : this.user._id}`,
        {
          unseen: true,
          limit: 5,
        },
      )) || [];

    this.new_sale = () => this.toggle_sell();

    emitter.listen('new_sale', this.new_sale);

    this.setState({notifications});
  };

  componentWillUnmount = () => {
    emitter.remove_listener('transaction_mounted', this.transaction_mounted);
    emitter.remove_listener('new_transaction', this.new_transaction);
    emitter.remove_listener('new_sale', this.new_sale);
  };

  toggle_buy = () => this.buy_modal?.toggle_show_modal();

  quick_actions = new Array(
    {
      title: 'sell',
      icon: require('../../android/app/src/main/assets/Icons/buy_wine_colour_icon.png'),
      action: () => this.toggle_sell(),
    },
    {
      title: 'buy',
      icon: require('../../android/app/src/main/assets/Icons/forward_arrow_icon.png'),
      action: () => this.toggle_buy(),
    },
    {
      title: 'visit market',
      icon: require('../../android/app/src/main/assets/Icons/market_icon.png'),
      action: () => this.props.navigation.navigate('market'),
    },
  );

  toggle_sell = () => this.sell_modal?.toggle_show_modal();

  set_value = value => this.setState({value});

  set_rate = rate => this.setState({rate});

  set_currency = (currency, currency_full) =>
    this.setState({currency, currency_full});

  payments = new Array(
    {
      title: 'Pay a Bill',
      icon: 'paybill_icon.png',
      text: 'Look after your necessities',
    },
    {
      title: 'Buy Airtime',
      text: 'Easy phone recharge',
      icon: 'paybill_icon.png',
    },
  );

  render() {
    let {navigation} = this.props;
    let {new_txs, notifications, currency_full, value, rate} = this.state;

    return (
      <User.Consumer>
        {user => {
          this.user = user;

          let {wallet, username} = user;

          return (
            <Bg_view flex>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              <Bg_view
                no_bg
                horizontal
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: wp(2.8),
                }}>
                <Icon
                  icon={require('../../android/app/src/main/assets/Icons/acccount_orange_icon.png')}
                  action={() => navigation.navigate('account')}
                />
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Fr_text capitalise size={wp(4.5)}>
                    {username}
                  </Fr_text>
                </View>
                {new_txs.length ? (
                  <Icon
                    icon={require('../../android/app/src/main/assets/Icons/notification_icon.png')}
                    action={() => {
                      navigation.navigate('wallet'),
                        this.setState({new_txs: new Array()});
                    }}
                  />
                ) : (
                  <View style={{width: wp(5)}} />
                )}

                {user.is_admin ? (
                  <Icon
                    icon={require('../../android/app/src/main/assets/Icons/chat_send_icon.png')}
                    action={() => navigation.navigate('admin_messages')}
                  />
                ) : null}

                <Icon
                  icon="refresh.png"
                  action={() => emitter.emit('refresh_wallet')}
                />
              </Bg_view>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Bg_view flex>
                  <Wallet wallet={wallet} user={user} navigation={navigation} />

                  <Bg_view>
                    <Fr_text
                      accent
                      style={{marginTop: hp(4), marginLeft: wp(5.6)}}>
                      Quick Actions
                    </Fr_text>

                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <Bg_view
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: wp(2.8),
                        }}>
                        {this.quick_actions.map(action => (
                          <Quick_action action={action} key={action.title} />
                        ))}
                      </Bg_view>
                    </ScrollView>
                  </Bg_view>

                  <Bg_view>
                    {notifications?.length ? (
                      <Fr_text
                        accent
                        style={{marginTop: hp(4), marginLeft: wp(5.6)}}>
                        Recent Notifications
                      </Fr_text>
                    ) : null}
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <Bg_view
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        {notifications ? (
                          notifications.length ? (
                            notifications.map(notification => (
                              <Bg_view key={notification._id}>
                                <Notification
                                  notification={notification}
                                  navigation={navigation}
                                  user={user}
                                />
                              </Bg_view>
                            ))
                          ) : null
                        ) : (
                          <Bg_view style={{alignItems: 'center'}} flex>
                            <Loadindicator />
                          </Bg_view>
                        )}
                      </Bg_view>
                    </ScrollView>
                  </Bg_view>

                  <Bg_view style={{}}>
                    <Line />
                    <Bg_view no_bg style={{marginTop: hp(2)}}>
                      <Ongoing_transactions
                        header={
                          <Bg_view
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Fr_text size={wp(4)} style={{marginLeft: wp(4)}}>
                              Ongoing Transactions
                            </Fr_text>
                            <Text_btn
                              text="See all"
                              accent
                              style={{paddingRight: wp(4)}}
                              action={() => navigation.navigate('buyer_offers')}
                            />
                          </Bg_view>
                        }
                        user={user}
                        navigation={navigation}
                      />
                    </Bg_view>
                  </Bg_view>

                  <Listfooter />
                </Bg_view>
              </ScrollView>

              <Cool_modal ref={sell_modal => (this.sell_modal = sell_modal)}>
                <Amount_to_sell
                  ref={amount_to_sell => (this.amount_to_sell = amount_to_sell)}
                  user={user}
                  default_value={{currency: currency_full, value, rate}}
                  set_rate_wallet={this.set_rate}
                  set_value_wallet={this.set_value}
                  set_currency_wallet={this.set_currency}
                  close_modal={this.toggle_sell}
                  navigation={navigation}
                />
              </Cool_modal>

              <Cool_modal ref={buy_modal => (this.buy_modal = buy_modal)}>
                <Buy
                  user={user}
                  default_value={{currency: currency_full, value, rate}}
                  close_modal={this.toggle_buy}
                  navigation={navigation}
                />
              </Cool_modal>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  }
}

export default Home;
