import React from 'react';
import {wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';

class Offer_details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {text, style} = this.props;

    return (
      <Bg_view
        shadowed
        style={{
          marginHorizontal: wp(5.6),
          width: '100%',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 15,
          alignItems: 'center',
          ...style,
        }}>
        <Fr_text>{text}</Fr_text>
      </Bg_view>
    );
  }
}

export default Offer_details;
