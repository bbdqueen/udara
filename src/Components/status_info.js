import React from 'react';
import {hp, wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';
import Offer_details from './offer_details';

const statuses = new Object({
  pending:
    'Offer is awaiting acceptance from seller before transfering funds to escrow',
  completed: 'Offer is done and everybody is happy, hurray!',
  accepted:
    'Offer accepted by seller, awaiting buyer to transfer funds to escrow account',
  'awaiting confirmation':
    'Seller has claimed to fulfil transaction outside the app, and is now awaiting buyer to confirm the transaction',
  'in-dispute':
    'A disagreement was reached on the app based on the transactions.',
  closed:
    'Transaction offer has been closed, respective parties have been settled.',
  declined: 'Offer placed by buyer was rejected by seller',
  'in-escrow':
    'Buyer already sent his funds to escrow wallet, awaiting seller to fulfil the transaction stated by the offer',
});

class Status_info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {status, toggle} = this.props;

    if (typeof status !== 'string') return null;

    return (
      <Bg_view>
        <Bg_view
          style={{
            paddingVertical: hp(2.8),
          }}>
          <Bg_view
            horizontal
            style={{justifyContent: 'space-between', paddingLeft: wp(5.6)}}>
            <Fr_text capitalise bold>
              {status}
            </Fr_text>
            <Icon
              icon={require('../assets/Icons/close_icon.png')}
              action={() => toggle && toggle()}
              style={{
                alignSelf: 'flex-end',
                marginHorizontal: wp(5.6),
              }}
            />
          </Bg_view>
        </Bg_view>
        <Bg_view style={{margin: wp(5.6)}}>
          <Offer_details
            style={{marginBottom: hp(10), marginHorizontal: wp(5.6)}}
            text={statuses[status?.toLowerCase()]}
          />
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Status_info;
