import React from 'react';
import {emitter, Sock_offer_status} from '../../Udara';
import {hp, wp} from '../utils/dimensions';
import {domain, post_request} from '../utils/services';
import toast from '../utils/toast';
import Bg_view from './Bg_view';
import Fr_text from './Fr_text';
import Icon from './Icon';
import Line from './line';
import Loadindicator from './load_indicator';
import Offer from './offer';
import Small_btn from './small_button';
import Text_btn from './Text_btn';
import Image_preview from './image_preview';
import {TouchableWithoutFeedback, Image} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Cool_modal from './cool_modal';
import RNFS from 'react-native-fs';

class Fulfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_proof_picker = async () => {
    let files = await DocumentPicker.pick({
      mode: 'open',
      type: DocumentPicker.types.images,
      allowMultiSelection: false,
      readContent: true,
    });

    files &&
      files[0] &&
      this.setState({
        files,
        proof: await RNFS.readFile(files[0].uri, 'base64'),
      });
  };

  true = async () => {
    if (this.state.loading) return;

    this.setState({loading: true}, async () => {
      let {offer, onsale, close_modal} = this.props;
      let {proof} = this.state;

      let res = await post_request('fulfil_offer', {
        offer: offer._id,
        onsale: onsale._id,
        buyer: offer.user?._id,
        seller: onsale.seller?._id,
        proof,
      });
      Sock_offer_status(offer._id, 'awaiting confirmation', offer.user?._id);
      res
        ? emitter.emit('offer_fulfilled', {
            offer: offer._id,
            timestamp: res.timestamp,
          })
        : toast('Err, something went wrong.');

      close_modal();
    });
  };

  toggle_image_preview = () => this.image_preview.toggle_show_modal();

  nah = () => this.props.close_modal();

  render = () => {
    let {proof} = this.state;
    let {close_modal, navigation, onsale, loading, offer} = this.props;
    let {user} = offer || {};

    return (
      <Bg_view>
        <Bg_view
          style={{
            elevation: 5,
            shadowColor: '#000',
            padding: wp(4),
            borderRadius: wp(2.8),
            marginBottom: hp(1.4),
            marginHorizontal: wp(2.8),
          }}>
          <Bg_view horizontal style={{justifyContent: 'space-between'}}>
            <Fr_text bold size={wp(5)} style={{margin: wp(2.8)}}>
              Fulfill
            </Fr_text>
            <Icon icon="close_icon.png" action={close_modal} />
          </Bg_view>
          <Line />
          <Fr_text
            style={{marginHorizontal: wp(5), marginBottom: hp(1)}}
            centralise
            size={wp(5)}>
            {`You are informing Udara that you have successfully fulfilled the transaction of said offer`}
          </Fr_text>
          <Offer
            offer={offer}
            user={user}
            onsale={onsale}
            navigation={navigation}
            no_foot
          />

          <Bg_view
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text_btn
              accent
              bold
              text={proof ? 'Update Proof' : 'Upload Proof'}
              action={this.toggle_proof_picker}
            />

            {proof ? (
              <Bg_view style={{alignItems: 'center'}}>
                {proof ? (
                  <TouchableWithoutFeedback
                    onPress={() => this.toggle_image_preview()}>
                    <Image
                      source={
                        proof.endsWith('.jpg')
                          ? {uri: `${domain}/Images/${proof}`}
                          : {uri: `data:image/jpeg;base64,${proof}`}
                      }
                      style={{
                        height: hp(20),
                        width: wp(40),
                        borderRadius: wp(2),
                        padding: wp(2.8),
                      }}
                    />
                  </TouchableWithoutFeedback>
                ) : null}
              </Bg_view>
            ) : null}
          </Bg_view>

          {loading ? (
            <Loadindicator />
          ) : (
            <Bg_view horizontal style={{justifyContent: 'center'}}>
              <Small_btn disabled={!proof} title="true" action={this.true} />
              <Small_btn inverted title="false" action={this.nah} />
            </Bg_view>
          )}
        </Bg_view>

        <Cool_modal
          flex
          height={hp()}
          ref={image_preview => (this.image_preview = image_preview)}>
          <Image_preview
            image={proof}
            title="Transaction Proof"
            toggle={this.toggle_image_preview}
          />
        </Cool_modal>
      </Bg_view>
    );
  };
}

export default Fulfil;
