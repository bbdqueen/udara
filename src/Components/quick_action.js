import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {hp, wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';

class Quick_action extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {action: act} = this.props;
    let {title, icon, action} = act;

    return (
      <TouchableWithoutFeedback onPress={action}>
        <View>
          <Bg_view
            style={{
              height: wp(35),
              alignItems: 'center',
              justifyContent: 'center',
              width: wp(35),
              margin: wp(2.8),
              borderRadius: wp(4),
            }}
            shadowed>
            <Icon
              style={{height: wp(7.5), width: wp(7.5)}}
              icon={
                icon ||
                require('../../android/app/src/main/assets/Icons/chat_send_icon.png')
              }
            />
            <Fr_text
              style={{marginTop: hp(1.4)}}
              accent
              size={wp(5)}
              capitalise
              bold>
              {title}
            </Fr_text>
          </Bg_view>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Quick_action;
