import React from 'react';
import {TextInput} from 'react-native';
import {hp, wp} from '../utils/dimensions';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Text_input from './Text_input';

class Bank_transfer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {
      amount,
      currency,
      account_number,
      bank_name,
      set_account_number,
      set_bank_name,
      email_address,
      set_email_address,
      body_text,
      set_body_text,
    } = this.props;

    return (
      <Bg_view style={{padding: wp(4)}}>
        {/* <Fr_text bold>Bank Transfer</Fr_text> */}

        <Fr_text style={{marginVertical: hp(1.4)}} italic>
          {`Enter the transfer details in the message box below`}
        </Fr_text>
        {/* 
        <Text_input
          placeholder="Bank Name"
          on_change_text={set_bank_name}
          label="Bank Name"
          value={bank_name}
        />
        <Text_input
          placeholder="Account Number"
          type="decimal-pad"
          on_change_text={set_account_number}
          label="Account Number"
          value={account_number}
        />

        <Text_input
          placeholder="Email Address"
          type="email"
          on_change_text={set_email_address}
          label="Email Address"
          value={email_address}
        /> */}

        <Fr_text
          size={wp(4.5)}
          style={{textDecorationLine: 'underline'}}
          capitalise>
          Message
        </Fr_text>
        <Bg_view
          style={{
            height: hp(15),
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: wp(4),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: wp(4),
            paddingRight: wp(2.8),
          }}>
          <TextInput
            placeholder="Message..."
            multiline
            placeholderTextColor="#ccc"
            onChangeText={set_body_text}
            value={body_text}
            style={{
              flex: 1,
              fontSize: wp(4.5),
              color: '#28100B',
              marginRight: wp(1.4),
              fontWeight: 'bold',
            }}
          />
        </Bg_view>
      </Bg_view>
    );
  }
}

export default Bank_transfer;
