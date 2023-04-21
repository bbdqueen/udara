import React from 'react';
import {hp, wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';
import Small_btn from './small_button';

class Confirm_remove_offer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {toggle, proceed} = this.props;

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
              Remove Offer
            </Fr_text>
            <Icon icon="close_icon.png" action={toggle} />
          </Bg_view>

          <Fr_text style={{marginTop: hp(4), marginBottom: hp(2.8)}} centralise>
            Are you sure you want to remove offer?
          </Fr_text>

          <Bg_view horizontal style={{justifyContent: 'center'}}>
            <Small_btn title="Proceed" action={proceed} />
            <Small_btn title="Cancel" inverted action={toggle} />
          </Bg_view>
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Confirm_remove_offer;
