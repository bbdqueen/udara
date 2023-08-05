import React from 'react';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import Fr_text from '../Components/Fr_text';
import {hp, wp} from '../utils/dimensions';
import Icon from '../Components/Icon';
import Text_btn from '../Components/Text_btn';

class Contact_message_sent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {navigation} = this.props;

    return (
      <Bg_view flex>
        <Header title="Message Sent" navigation={navigation} />

        <Bg_view style={{alignItems: 'center', paddingTop: hp(10)}}>
          <Icon
            icon="Verification_2.png"
            style={{height: wp(30), width: wp(100)}}
          />

          <Fr_text bold="900" size={wp(7)} color="maroon">
            Message Sent!
          </Fr_text>
          <Fr_text
            centralise
            style={{marginHorizontal: wp(10), marginTop: hp(2)}}>
            An admin would be in touch with you shortly. Thanks.
          </Fr_text>

          <Text_btn
            text="Go Home"
            accent
            bold
            action={() => navigation.navigate('index')}
          />
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Contact_message_sent;
