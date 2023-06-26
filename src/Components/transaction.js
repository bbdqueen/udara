import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {emitter} from '../../Udara';
import {hp, wp} from '../utils/dimensions';
import {
  commalise_figures,
  date_string,
  format_quick_time,
  time_string,
} from '../utils/functions';
import {post_request} from '../utils/services';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Line from './line';
import Loadindicator from './load_indicator';
import Offer from './offer';

class Transaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let {_id} = this.props.transaction;
    this.close_data = tx =>
      tx !== _id &&
      this.state.show_data &&
      this.setState({show_data: false, fetching: false});

    emitter.listen('close_data', this.close_data);
    emitter.emit('transaction_mounted', _id);
  };

  componentWillUnmount = () => {
    emitter.remove_listener('close_data', this.close_data);
  };

  toggle_data = async () => {
    let {fetched_data, show_data} = this.state;
    if (show_data) return this.setState({show_data: false});

    let {data, _id} = this.props.transaction;

    if (!fetched_data) {
      this.setState({fetching: true});

      fetched_data = await post_request('transaction_offer', data);
    }

    fetched_data &&
      fetched_data.offer &&
      this.setState({fetched_data, fetching: false, show_data: true}, () =>
        emitter.emit('close_data', _id),
      );
  };

  render = () => {
    let {fetched_data, show_data, fetching} = this.state;
    let {transaction, navigation, user} = this.props;
    let {
      from_currency,
      to_currency,
      created,
      title,
      from_value,
      debit,
      to_value,
      data,
    } = transaction;
    if (!from_currency && !to_currency) return null;

    if (title === 'currency purchase') {
      let temp_to_val = to_value,
        temp_to_curr = to_currency;
      to_currency = from_currency;
      to_value = from_value;
      from_value = temp_to_val;
      from_currency = temp_to_curr;
      debit = true;
    }
    if (title === 'currency sold') debit = true;

    return (
      <Bg_view style={{padding: wp(2.8)}}>
        <TouchableNativeFeedback onPress={this.toggle_data} disabled={!data}>
          <View>
            <Bg_view
              style={{justifyContent: 'space-between', alignItems: 'center'}}
              horizontal>
              <Bg_view style={{flex: 6}}>
                <Fr_text
                  elipseSizeMode="tail"
                  numberOfLines={1}
                  capitalise
                  bold>
                  {title}
                </Fr_text>
                <Fr_text size={wp(3)}>
                  {Date.now() - created > 432000000
                    ? `${date_string(created)}, ${time_string(created)}`
                    : format_quick_time(created)}
                </Fr_text>
              </Bg_view>
              <Bg_view
                style={{marginLeft: wp(2.8), flex: 4, alignItems: 'flex-end'}}>
                <Bg_view
                  horizontal
                  style={{alignItems: 'center', justifyContent: 'flex-end'}}>
                  <Fr_text size={wp(to_currency ? 3.5 : 4)} bold>{` ${
                    to_currency || debit ? '' : '+'
                  }${commalise_figures(
                    Number(debit ? from_value * -1 : from_value).toFixed(2),
                  )} ${'NGN'}`}</Fr_text>
                </Bg_view>
              </Bg_view>
            </Bg_view>
          </View>
        </TouchableNativeFeedback>
        {fetching ? (
          <Loadindicator />
        ) : data && show_data ? (
          <Bg_view>
            <Line />
            {fetched_data ? (
              <Offer
                transactions
                user={user}
                offer={fetched_data.offer}
                onsale={fetched_data.onsale}
                navigation={navigation}
              />
            ) : (
              <Loadindicator />
            )}
          </Bg_view>
        ) : null}
        <Line />
      </Bg_view>
    );
  };
}

export default Transaction;
