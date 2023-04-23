import React from 'react';
import {ScrollView} from 'react-native';
import {hp, wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';
import Offer_details from './offer_details';
import Stretched_button from './Stretched_button';

class Confirm_offer_details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {currency, proceed, details, toggle} = this.props;
    let {text} = details;

    return (
      <Bg_view>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Bg_view
            style={{
              paddingVertical: hp(2.8),
              elevation: 10,
              shadowColor: '#000',
            }}>
            <Bg_view
              horizontal
              style={{justifyContent: 'space-between', paddingLeft: wp(5.6)}}>
              <Fr_text bold>Confirm Transaction Details</Fr_text>
              <Icon
                icon={require('../assets/Icons/close_icon.png')}
                action={() => toggle && toggle()}
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: wp(5.6),
                }}
              />
            </Bg_view>

            <Offer_details text={text} style={{marginTop: 20}} />

            <Fr_text style={{margin: 20, fontStyle: 'italic'}}>
              Confirm the details provided are correct, as Udaralinks would not
              be liable to any incorrect account info
            </Fr_text>

            <Stretched_button title="proceed" action={proceed} />
          </Bg_view>
        </ScrollView>
      </Bg_view>
    );
  }
}

export default Confirm_offer_details;
