import React from 'react';
import Icon from './Icon';
import Bg_view from './Bg_view';
import {hp, wp} from '../utils/dimensions';
import Fr_text from './Fr_text';
import {TouchableWithoutFeedback, View} from 'react-native';
import {commalise_figures} from '../utils/functions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {navigation, wallet, user} = this.props;
    let {_id, username} = user;
    let {fav_currency, profits, available_balance} = wallet;

    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('wallet', {currency: 'naira'})}>
        <View>
          <Bg_view
            style={{
              height: wp(54),
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
                  style={{marginTop: hp(2)}}
                  size={wp(4)}
                  bold="600">
                  {user.is_admin ? 'Escrow balance' : 'Total balance'}
                </Fr_text>
                <Fr_text color="#fff" bold="900" size={wp(6.5)}>
                  {`${
                    wallet.naira
                      ? commalise_figures(Number(wallet.naira).toFixed(2))
                      : '0.00'
                  } NGN`}
                </Fr_text>
                <Bg_view no_bg style={{marginTop: 5}}>
                  <Fr_text
                    bold={user.is_admin && profits && '600'}
                    color="#fff"
                    size={wp(3.5)}
                    capitalise>
                    {user.is_admin && profits
                      ? 'admin balance'
                      : 'Available Balance'}
                  </Fr_text>
                  {user.is_admin && profits ? (
                    <Fr_text bold size={wp(5)} color="#fff">
                      {`${profits} NGN`}
                    </Fr_text>
                  ) : (
                    <Fr_text bold size={wp(4)} color="#fff">
                      {`${
                        available_balance
                          ? commalise_figures(
                              Number(available_balance).toFixed(2),
                            )
                          : '-'
                      } NGN`}
                    </Fr_text>
                  )}
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
    );
  }
}

export default Wallet;
