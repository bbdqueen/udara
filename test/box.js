import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Box extends React.Component {
  constructor(props) {
    super(props);

    let {bg_color} = this.props;
    this.state = {
      bg_color: bg_color || 'purple',
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      console.log(this.state.bg_color);
      this.setState({bg_color: 'green'}, () => {
        console.log(this.state.bg_color);
      });
    }, 2000);
  };

  render() {
    let {bg_color} = this.state;
    let {box_text, languages, age} = this.props;

    languages = '121';

    return (
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: bg_color,
          margin: 5,
          borderRadius: 10,
        }}>
        <Text style={styles.text}>{box_text}</Text>
        <Text style={styles.text}>{languages}</Text>
        <Text style={styles.text}> {age}</Text>
        <Text style={styles.text}>box</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Box;
