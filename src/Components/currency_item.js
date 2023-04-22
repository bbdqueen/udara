import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {wp} from '../utils/dimensions';
import {domain} from '../utils/services';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';

const Currency_item = ({currency, select}) => {
  let {name, flag, icon} = currency;

  return (
    <TouchableNativeFeedback onPress={() => select && select(name, currency)}>
      <View>
        <Bg_view
          no_bg
          horizontal
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: wp(5.6),
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
          <Icon
            icon={{uri: `${domain}/Icons/${flag}`}}
            style={{height: wp(7.5), width: wp(7.5), marginRight: wp(4)}}
          />
          <Bg_view no_bg flex>
            <Fr_text capitalise size={wp(5)} opacity={0.8}>
              {name}
            </Fr_text>
          </Bg_view>
          <Icon icon={icon} style={{height: wp(7.5), width: wp(7.5)}} />
        </Bg_view>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Currency_item;
