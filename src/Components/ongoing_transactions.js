import React from 'react';
import {FlatList} from 'react-native';
import {post_request} from '../utils/services';
import Loadindicator from './load_indicator';
import Offer from './offer';
import Bg_view from './Bg_view';
import {wp} from '../utils/dimensions';

class Ongoing_transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let {user} = this.props;

    let offers = await post_request(`buyer_offers`, {
      limit: 7,
      ongoing: true,
      buyer: user._id,
    });

    offers = offers.filter(offer => typeof offer.offer === 'object');

    this.setState({offers});
  };

  render() {
    let {user, navigation, header} = this.props;
    let {offers} = this.state;
    if (offers && !offers.length) return null;

    return (
      <>
        {header}
        <Bg_view flex>
          {offers ? (
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={offers}
              renderItem={({item: offer}) => (
                <Bg_view style={{width: wp(), alignItems: 'center'}}>
                  <Offer
                    offer={offer.offer}
                    onsale={offer.onsale}
                    user={user}
                    navigation={navigation}
                    key={offer._id}
                  />
                </Bg_view>
              )}
            />
          ) : (
            <Bg_view style={{alignItems: 'center'}} flex>
              <Loadindicator />
            </Bg_view>
          )}
        </Bg_view>
      </>
    );
  }
}

export default Ongoing_transactions;
