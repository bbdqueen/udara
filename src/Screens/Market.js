import React from 'react';
import {ScrollView} from 'react-native';
import {User} from '../../Udara';
import Amount_to_sell from '../Components/amount_to_sell';
import Bg_view from '../Components/Bg_view';
import Buy from '../Components/buy';
import Buy_filter from '../Components/buy_filter';
import Cool_modal from '../Components/cool_modal';
import Fr_text from '../Components/Fr_text';
import Icon from '../Components/Icon';
import Line from '../Components/line';
import List_empty from '../Components/list_empty';
import Loadindicator from '../Components/load_indicator';
import Onsale_currency from '../Components/onsale_currency';
import Search_input from '../Components/search_input';
import Text_btn from '../Components/Text_btn';
import {filter} from '../Components/transactions';
import {hp, wp} from '../utils/dimensions';
import {capitalise} from '../utils/functions';
import {domain, post_request} from '../utils/services';

class Market extends React.Component {
  constructor(props) {
    super(props);

    let {route} = this.props;
    let {currency} = route?.params || {};
    this.state = {
      currency: (currency && currency.name) || 'dollar',
      page: 0,
      page_size: 25,
    };
  }

  fetch_currencies = async (refreshing, mount) => {
    if (refreshing) {
      this.setState({onsales: null});
    }
    let {currency, currencies, my_sales, page, page_size} = this.state;
    let onsales = await post_request(
      my_sales ? `my_sales/${this.loggeduser._id}` : 'onsale',
      my_sales
        ? {
            skip: page * page_size,
            limit: page_size,
          }
        : {
            currency,
            fetch_currencies: !!mount,
            skip: page * page_size,
            limit: page_size,
            user: this.loggeduser._id,
          },
    );

    if (!!mount) {
      let {onsales: onsales_, currencies: currencies_} = onsales;
      onsales = onsales_;
      currencies = currencies_?.sort((a, b) => a.name > b.name);

      currencies = currencies?.sort((c1, c2) => {
        let a_name = c1.name.toLowerCase(),
          b_name = c2.name.toLowerCase();

        if (a_name === 'dollar' && b_name !== 'dollar') return -1;
        else if (a_name !== 'dollar' && b_name === 'dollar') return 1;
        else return 0;
      });
    }

    this.setState(mount ? {onsales, currencies} : {onsales});
  };

  componentDidMount = async () => {
    await this.fetch_currencies(undefined, true);
  };

  toggle_search = () =>
    this.setState({show_search: !this.state.show_search, search_value: ''});

  set_search_value = search_value => this.setState({search_value});

  clear_search = () => this.setState({search_value: ''});

  my_sales = () => {
    let {my_sales} = this.state;
    this.setState({my_sales: !my_sales, onsales: null}, this.fetch_currencies);
  };

  buy = () => this.buy_modal?.toggle_show_modal();

  sell = () => this.cool_modal_sell_value?.toggle_show_modal();

  set_currency = currency => {
    this.setState({currency}, () => this.fetch_currencies(true));
  };

  set_screen_state = screen_state => {
    this.setState({screen_state});
  };

  render = () => {
    let {navigation} = this.props;
    let {
      onsales,
      currency,
      currencies,
      buy_filter,
      search_value,
      my_sales,
      show_search,
    } = this.state;
    if (search_value)
      onsales = onsales?.filter(curr => filter(curr, search_value));

    return (
      <User.Consumer>
        {user => {
          this.loggeduser = user;

          return (
            <Bg_view flex style={{paddingTop: wp(5.6)}}>
              <Fr_text style={{marginHorizontal: wp(5.6)}} accent capitalise>
                udara
              </Fr_text>
              <Bg_view
                horizontal
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: wp(5.6),
                }}>
                <Bg_view flex>
                  <Fr_text capitalise bold="900" size={wp(7.5)}>
                    market place
                  </Fr_text>
                  {/* <Fr_text capitalise size={wp(4.5)}>
                    offer list
                  </Fr_text> */}
                </Bg_view>
                <Icon
                  icon={require('../../android/app/src/main/assets/Icons/refresh.png')}
                  action={() => this.fetch_currencies(true)}
                />
                <Icon
                  icon={
                    show_search
                      ? require('../../android/app/src/main/assets/Icons/close_icon.png')
                      : require('../../android/app/src/main/assets/Icons/search_icon.png')
                  }
                  action={this.toggle_search}
                />
              </Bg_view>
              {show_search ? (
                <Search_input
                  style={{paddingHorizontal: wp(5.6)}}
                  search_value={search_value}
                  set_search_value={this.set_search_value}
                  clear_search={this.clear_search}
                />
              ) : null}

              <Line />

              {currencies && !my_sales ? (
                <Bg_view style={{height: hp(12)}}>
                  <Fr_text centralise style={{marginVertical: 10}}>
                    Select your currencies to transact
                  </Fr_text>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Bg_view style={{width: wp(3)}} />
                    {currencies.map(currency_ =>
                      currency_.name === 'naira' ? null : (
                        <Bg_view
                          style={{
                            borderRightWidth: 1,
                            borderRightColor: '#ccc',
                            paddingHorizontal: 5,
                          }}>
                          <Text_btn
                            icon={{
                              uri: `${domain}/Icons/${
                                currency_?.flag || 'flag_icon.png'
                              }`,
                            }}
                            key={currency_._id}
                            text={currency_.name}
                            accent={currency_.name === currency}
                            capitalise
                            action={() => this.set_currency(currency_.name)}
                          />
                        </Bg_view>
                      ),
                    )}
                  </ScrollView>
                </Bg_view>
              ) : null}

              <ScrollView showsVerticalScrollIndicator={false}>
                <Bg_view no_bg style={{paddingTop: hp(2.8)}}>
                  {onsales ? (
                    onsales.length ? (
                      onsales.map(onsale => (
                        <Onsale_currency
                          onsale={onsale}
                          user={user}
                          key={onsale._id}
                          navigation={navigation}
                        />
                      ))
                    ) : (
                      <List_empty
                        data={
                          my_sales ? null : (
                            <Buy_filter
                              filter={buy_filter}
                              set_buy_filter={this.set_buy_filter}
                            />
                          )
                        }
                        text={
                          my_sales
                            ? "You don't have any currency onsale"
                            : `No ${capitalise(currency)} on the market yet.`
                        }
                      />
                    )
                  ) : (
                    <Loadindicator />
                  )}
                </Bg_view>
              </ScrollView>

              <Cool_modal ref={buy_modal => (this.buy_modal = buy_modal)}>
                <Buy
                  default_value={
                    buy_filter
                      ? {
                          currency: buy_filter.currency_full,
                          value: String(buy_filter.value),
                          purpose: buy_filter.purpose_full,
                        }
                      : null
                  }
                  close_modal={this.buy_modal?.toggle_show_modal}
                  set_filter={this.set_buy_filter}
                />
              </Cool_modal>

              <Cool_modal
                ref={cool_modal_sell_value =>
                  (this.cool_modal_sell_value = cool_modal_sell_value)
                }>
                <Amount_to_sell
                  user={user}
                  close_modal={this.sell}
                  navigation={navigation}
                />
              </Cool_modal>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  };
}

export default Market;
