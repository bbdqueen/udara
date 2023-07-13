import React from 'react';
import {ScrollView} from 'react-native';
import {User, emitter} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import List_empty from '../Components/list_empty';
import Loadindicator from '../Components/load_indicator';
import Onsale_currency from '../Components/onsale_currency';
import {hp, wp} from '../utils/dimensions';
import {post_request} from '../utils/services';
import Text_btn from '../Components/Text_btn';

class Previous_sales extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      page_size: 25,
    };
  }

  fetch_currencies = async refreshing => {
    if (refreshing) {
      this.setState({onsales: null});
    }

    let {page, page_size} = this.state;

    let onsales = await post_request(`previous_sales/${this.loggeduser._id}`, {
      skip: page * page_size,
      limit: page_size,
    });

    this.setState({onsales});
  };

  componentDidMount = async () => {
    await this.fetch_currencies();
  };

  render() {
    let {onsales} = this.state;
    let {navigation} = this.props;

    return (
      <User.Consumer>
        {user => {
          this.loggeduser = user;

          return (
            <Bg_view flex>
              <Header
                title="previous sales"
                navigation={navigation}
                right_btn={
                  <Text_btn
                    style={{paddingRight: wp(4)}}
                    text="New"
                    accent
                    action={() => emitter.emit('new_sale')}
                  />
                }
              />

              <ScrollView showsVerticalScrollIndicator={false}>
                <Bg_view no_bg style={{paddingTop: hp(2.8)}}>
                  {onsales ? (
                    onsales.length ? (
                      onsales.map(onsale => (
                        <Onsale_currency
                          onsale={onsale}
                          user={user}
                          key={onsale._id}
                          navigation={navigation}
                        />
                      ))
                    ) : (
                      <List_empty text={"You don't have any currency sold"} />
                    )
                  ) : (
                    <Loadindicator />
                  )}
                </Bg_view>
              </ScrollView>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  }
}

export default Previous_sales;
