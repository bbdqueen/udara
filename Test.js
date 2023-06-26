import React from 'react';
import {View, Dimensions, FlatList, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

let {width, height} = Dimensions.get('screen');

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  images = new Array(
    require('../assets/elw.jpg'),
    require('../assets/elw.jpg'),
    require('../assets/elw.jpg'),
    require('../assets/elw.jpg'),
  );

  signup = async () => {
    let {navigation} = this.props;
    let {fullname, email, loading, phone_number, gender} = this.state;

    if (!fullname || !email || !phone_number || !gender || loading)
      return alert('Missing form field.');

    this.setState({loading: true});

    let user = {fullname, email, phone_number, gender};

    let ftch = await fetch('http://192.168.96.4:2500/add_user', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    ftch = await ftch.json();

    console.log(ftch);
    user._id = ftch.user_id;

    this.setState({
      email: '',
      fullname: '',
      gender: '',
      phone_number: '',
      loading: false,
    });
    // navigation.navigate('home', {user});
  };

  render = () => {
    let {email, loading} = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <TextInput
          placeholderTextColor="#333"
          onChangeText={email => this.setState({email})}
          value={email}
        />
        <View>
          <Text style={{fontWeight: '900', fontSize: 18}}>Tabita</Text>
          <Text>All muscle workout</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Feather name="share" color="purple" size={24} style={{margin: 10}} />
          <Feather
            name="download"
            color="purple"
            size={24}
            style={{margin: 10}}
          />
          <Feather name="heart" color="purple" size={24} style={{margin: 10}} />
        </View>

        {loading ? 'Submitting' : 'Submit'}

        <FlatList
          data={this.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Image
              source={item}
              style={{
                width: 150,
                height: 180,
                borderRadius: 20,
                marginLeft: 15,
              }}
            />
          )}
        />
      </View>
    );
  };
}
