import React from 'react';
import {Text, View} from 'react-native';
import Box from './test/box';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => {
    let languages = ['spanish', 'french'];
    return (
      <View
        style={{
          backgroundColor: '#fc3',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Hello</Text>

        <Box box_text="Box 1" age={39} languages={languages} />
        <Box box_text="Box 2" bg_color="brown" />
        <Box box_text="Box 3" />

        <Text>{languages}</Text>
      </View>
    );
  };
}

export default Test;
