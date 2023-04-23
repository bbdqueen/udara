import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import Payment from '../Components/payment';
import Quick_action from '../Components/quick_action';
import {hp, wp} from '../utils/dimensions';
import {commalise_figures} from '../utils/functions';
import {post_request} from '../utils/services';

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

    let notifications = await post_request(`notifications/${this.user._id}`, {
      unseen: true,
      limit: 5,
    });
    this.setState({notifications});
  };

  componentWillUnmount = () => {
    emitter.remove_listener('transaction_mounted', this.transaction_mounted);
    emitter.remove_listener('new_transaction', this.new_transaction);
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
          let {wallet, username, _id} = user;
          let {fav_currency, profits} = wallet;

          return (
            <Bg_view flex>
              <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <Bg_view flex>
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

                    {user._id === Admin_id ? (
                      <Icon
                        icon={require('../../android/app/src/main/assets/Icons/chat_send_icon.png')}
                        action={() => navigation.navigate('admin_messages')}
                      />
                    ) : null}
                  </Bg_view>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('wallet', {currency: 'naira'})
                    }>
                    <View>
                      <Bg_view
                        style={{
                          height: wp(52.5),
                          backgroundColor: '#28100B',
                          marginHorizontal: wp(5.6),
                          borderRadius: wp(5.6),
                        }}>
                        <Bg_view
                          style={{
                            justifyContent: 'space-between',
                            padding: wp(4),
                          }}
                          horizontal
                          no_bg>
                          <Bg_view no_bg>
                            <Fr_text color="#fff">Udara Wallet</Fr_text>
                            <Fr_text
                              color="#fff"
                              style={{marginTop: hp(2.8)}}
                              size={wp(4)}
                              bold="600">
                              Total balance
                            </Fr_text>
                            <Fr_text color="#fff" bold="900" size={wp(6.5)}>
                              {`${commalise_figures(
                                wallet.naira.toFixed(2),
                              )} NGN`}
                            </Fr_text>
                            <Bg_view no_bg>
                              <Fr_text
                                bold={_id === Admin_id && profits && '600'}
                                color="#fff"
                                capitalise>
                                {_id === Admin_id && profits
                                  ? 'admin balance'
                                  : username}
                              </Fr_text>
                              {_id === Admin_id && profits ? (
                                <Fr_text bold size={wp(5)} color="#fff">
                                  {`${profits} NGN`}
                                </Fr_text>
                              ) : null}
                            </Bg_view>
                          </Bg_view>
                          <Icon
                            style={{
                              marginTop: hp(5.6),
                              height: wp(20),
                              width: wp(15),
                              borderRadius: wp(2.8),
                            }}
                            icon={
                              fav_currency === 'naira'
                                ? 'naira_home_page.png'
                                : `${fav_currency}_icon.png`
                            }
                          />
                        </Bg_view>
                        <Bg_view no_bg style={{alignSelf: 'flex-end'}}>
                          <Icon
                            style={{
                              marginRight: wp(5),
                              marginTop: hp(0.2),
                              height: hp(7),
                              width: wp(50),
                            }}
                            icon={require('../../android/app/src/main/assets/Icons/master_card_circles.png')}
                          />
                        </Bg_view>
                      </Bg_view>
                    </View>
                  </TouchableWithoutFeedback>

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

                  <Bg_view style={{paddingHorizontal: wp(5.6)}}>
                    <Bg_view no_bg style={{marginTop: hp(1)}}>
                      <Fr_text accent bold size={wp(5.6)}>
                        Payments
                      </Fr_text>
                      <Bg_view no_bg style={{padding: wp(2.8)}}>
                        {this.payments.map(payment => (
                          <Payment payment={payment} key={payment.title} />
                        ))}
                      </Bg_view>
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
