import React from 'react';
import Bg_view from '../Components/Bg_view';
import Header from '../Components/header';
import {ScrollView} from 'react-native';
import {User} from '../../Udara';
import Loadindicator from '../Components/load_indicator';
import Wallet from '../Components/wallet';
import Transactions from '../Components/transactions';
import {get_request} from '../utils/services';

class User_wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let {route} = this.props;
    let {user} = route.params;

    let wallet = await get_request(`wallet/${user.wallet}`);
    this.setState({wallet});
  };

  refresh_txs = () => {
    this.setState({refreshing_txs: true}, () =>
      this.setState({refreshing_txs: false}),
    );
  };

  render() {
    let {wallet, refreshing_txs} = this.state;
    let {navigation, route} = this.props;
    let {user} = route.params;

    return (
      <User.Consumer>
        {loggeduser => {
          this.loggeduser = loggeduser;

          return (
            <Bg_view flex>
              <Header title="User Wallet" navigation={navigation} />

              <ScrollView showsVerticalScrollIndicator={false}>
                {wallet ? (
                  <Wallet
                    wallet={wallet}
                    loggeduser={loggeduser}
                    user={user}
                    navigation={navigation}
                  />
                ) : (
                  <Loadindicator />
                )}

                {refreshing_txs || !wallet ? null : (
                  <Transactions
                    user={{...user, wallet}}
                    user_wallet={loggeduser}
                    ref={transactions => (this.transactions = transactions)}
                    refresh={this.refresh_txs}
                    navigation={navigation}
                  />
                )}
              </ScrollView>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  }
}

export default User_wallet;
