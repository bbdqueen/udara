import React from 'react';
import {hp, wp} from '../utils/dimensions';
import Icon from './Icon';
import Fr_text from './Fr_text';
import Bg_view from './Bg_view';
import DatePicker from 'react-native-date-picker';
import Text_btn from './Text_btn';
import Stretched_button from './Stretched_button';
import {post_request} from '../utils/services';
import toast from '../utils/toast';

class Print_transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {start_date: new Date(), end_date: new Date()};
  }

  proceed = async () => {
    let {user, toggle} = this.props;
    let {loading, start_date, end_date} = this.state;

    if (loading) return;
    this.setState({loading: true});

    await post_request('print_transactions', {
      start_date: start_date.getTime(),
      end_date: end_date.getTime(),
      user: user._id,
      wallet: user.wallet._id,
    });

    toggle();
    toast('Transactions sent to email');
  };

  render() {
    let {toggle} = this.props;
    let {start_date, loading, open_start_date, end_date, open_end_date} =
      this.state;

    return (
      <Bg_view>
        <Bg_view
          style={{
            elevation: 5,
            shadowColor: '#000',
            padding: wp(4),
            borderRadius: wp(2.8),
            marginBottom: hp(1.4),
            marginHorizontal: wp(2.8),
          }}>
          <Bg_view horizontal style={{justifyContent: 'space-between'}}>
            <Fr_text bold size={wp(5)} style={{margin: wp(2.8)}}>
              Print Transactions
            </Fr_text>
            <Icon icon="close_icon.png" action={toggle} />
          </Bg_view>

          <Bg_view style={{}}>
            <Text_btn
              text="Select Start Date"
              action={() => this.setState({open_start_date: true})}
            />
            {start_date ? (
              <Text_btn
                accent
                text={start_date.toISOString()}
                action={() => this.setState({open_start_date: true})}
              />
            ) : null}
          </Bg_view>

          <Bg_view style={{}}>
            <Text_btn
              text="Select End Date"
              action={() => this.setState({open_end_date: true})}
            />
            {end_date ? (
              <Text_btn
                accent
                text={end_date.toISOString()}
                action={() => this.setState({open_end_date: true})}
              />
            ) : null}
          </Bg_view>

          <Stretched_button
            title="Proceed"
            loading={loading}
            action={this.proceed}
          />

          <DatePicker
            modal
            mode="date"
            open={open_start_date}
            date={start_date}
            onConfirm={start_date => {
              console.log(start_date);
              this.setState({open_start_date: false, start_date});
            }}
            onCancel={() => {
              this.setState({open_start_date: false});
            }}
          />

          <DatePicker
            modal
            mode="date"
            open={open_end_date}
            date={end_date}
            onConfirm={end_date => {
              console.log(end_date);
              this.setState({open_end_date: false, end_date});
            }}
            onCancel={() => {
              this.setState({open_end_date: false});
            }}
          />
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Print_transactions;
