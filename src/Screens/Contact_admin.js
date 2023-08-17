import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Header from '../Components/header';
import Stretched_button from '../Components/Stretched_button';
import Text_btn from '../Components/Text_btn';
import {hp, wp} from '../utils/dimensions';
import {domain, post_request} from '../utils/services';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {User} from '../../Udara';
import Cool_modal from '../Components/cool_modal';
import Image_preview from '../Components/image_preview';

class Change_password extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_reveal_passwords = () =>
    this.setState({reveal_passwords: !this.state.reveal_passwords});

  is_set = () => {
    let {title, description, loading} = this.state;

    return !(title?.trim() && description?.trim() && !loading);
  };

  toggle_proof_picker = async () => {
    let files = await DocumentPicker.pick({
      mode: 'open',
      type: DocumentPicker.types.images,
      allowMultiSelection: true,
      readContent: true,
    });
    console.log(files?.length);

    if (files && files[0]) {
      let images = new Array();
      for (let f = 0; f < files.length; f++)
        images.push(await RNFS.readFile(files[f].uri, 'base64'));

      this.setState({
        files,
        images,
      });
    }
  };

  toggle_image_preview = img => {
    this.setState({img}, this.image_preview.toggle_show_modal);
  };

  send = async () => {
    let {navigation, route} = this.props;
    let {offer, onsale, currency} = route.params;
    let {title, images, description, loading} = this.state;

    if (loading) return;

    this.setState({loading: true});
    let query = {
      title,
      description,
      user: this.user._id,
      offer,
      images,
      onsale,
      currency,
    };

    let res = await post_request('contact_admin', query);
    if (res?._id) {
      navigation.pop();
      navigation.navigate('admin_message_sent');
    } else
      this.setState({
        loading: false,
        message: "Couldn't forward message to admin",
      });
  };

  render() {
    let {navigation} = this.props;
    let {message, images, img} = this.state;

    return (
      <User.Consumer>
        {user => {
          this.user = user;

          return (
            <Bg_view flex>
              <Header title="Contact Admin" navigation={navigation} />

              <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView style={{flex: 1, paddingBottom: hp(5)}}>
                  <Bg_view flex>
                    <Fr_text
                      color="#888"
                      size={wp(3.5)}
                      centralise
                      style={{marginHorizontal: wp(10)}}>
                      Fill out the form to send a message to our admin, and we
                      will get in touch with you shortly.
                    </Fr_text>

                    <Bg_view style={{margin: wp(5.6), marginBottom: 0}}>
                      <Bg_view
                        horizontal
                        style={{
                          height: hp(11),
                          elevation: 10,
                          shadowColor: '#000',
                          borderRadius: wp(2.8),
                          alignItems: 'center',
                          padding: wp(2.8),
                          marginBottom: hp(2.8),
                        }}>
                        <Bg_view flex style={{paddingLeft: wp(2.8)}} no_bg>
                          <Fr_text opacity={0.8}>Title</Fr_text>
                          <TextInput
                            style={{
                              fontSize: wp(4.5),
                              margin: 0,
                              padding: 0,
                              color: '#000',
                            }}
                            placeholder="Query Title"
                            onChangeText={title =>
                              this.setState({title, message: ''})
                            }
                          />
                        </Bg_view>
                      </Bg_view>
                      <Bg_view
                        horizontal
                        style={{
                          height: hp(22),
                          elevation: 10,
                          shadowColor: '#000',
                          borderRadius: wp(2.8),
                          alignItems: 'center',
                          padding: wp(2.8),
                          marginBottom: hp(2.8),
                        }}>
                        <Bg_view flex style={{paddingLeft: wp(2.8)}} no_bg>
                          <Fr_text opacity={0.8}>Description</Fr_text>
                          <TextInput
                            multiline
                            style={{
                              fontSize: wp(4.5),
                              margin: 0,
                              padding: 0,
                              flex: 1,
                              color: '#000',
                            }}
                            placeholder="Description..."
                            onChangeText={description =>
                              this.setState({description, message: ''})
                            }
                          />
                        </Bg_view>
                      </Bg_view>

                      <Text_btn
                        accent
                        bold
                        centralise
                        text={
                          images?.length ? 'Update Images' : 'Upload Images'
                        }
                        action={this.toggle_proof_picker}
                      />

                      {images?.length ? (
                        <Bg_view
                          horizontal
                          style={{alignItems: 'center', marginBottom: hp(2.4)}}>
                          <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            {images.map((img, i) => (
                              <TouchableWithoutFeedback
                                key={i}
                                onPress={() => this.toggle_image_preview(img)}>
                                <Image
                                  source={
                                    img.endsWith('.jpg')
                                      ? {uri: `${domain}/Images/${img}`}
                                      : {uri: `data:image/jpeg;base64,${img}`}
                                  }
                                  style={{
                                    height: hp(20),
                                    width: wp(40),
                                    borderRadius: wp(2),
                                    padding: wp(2.8),
                                    marginRight: wp(2.8),
                                  }}
                                />
                              </TouchableWithoutFeedback>
                            ))}
                          </ScrollView>
                        </Bg_view>
                      ) : null}

                      {message ? <Text_btn text={message} /> : null}
                    </Bg_view>

                    <Stretched_button
                      title="Send"
                      action={this.send}
                      border_radius={wp(2.8)}
                      style={{marginTop: wp(1.4)}}
                      disabled={this.is_set()}
                    />
                  </Bg_view>
                </KeyboardAvoidingView>
              </ScrollView>

              <Cool_modal
                flex
                height={hp()}
                ref={image_preview => (this.image_preview = image_preview)}>
                <Image_preview
                  image={img}
                  title="Transaction Proof"
                  toggle={() => this.toggle_image_preview()}
                />
              </Cool_modal>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  }
}

export default Change_password;
