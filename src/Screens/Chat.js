import React from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Admin_id, emitter, Sock_offer_status, User} from '../../Udara';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Header from '../Components/header';
import Icon from '../Components/Icon';
import List_empty from '../Components/list_empty';
import Loadindicator from '../Components/load_indicator';
import Message from '../Components/message';
import Small_btn from '../Components/small_button';
import Text_btn from '../Components/Text_btn';
import {hp, wp} from '../utils/dimensions';
import {capitalise} from '../utils/functions';
import {post_request} from '../utils/services';
import toast from '../utils/toast';
import DocumentPicker from 'react-native-document-picker';
import Cool_modal from '../Components/cool_modal';
import Deposit_to_escrow from '../Components/deposit_to_escrow';
import Fulfil from '../Components/fulfil';
import Confirm_transaction from '../Components/confirm_transaction';
import Countdown from '../Components/countdown';
import RNFS from 'react-native-fs';
import Verified_token from './verifed_token';
import Bank_transfer from '../Components/bank_transfer';
import Online_registration from '../Components/online_registration';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    let {offer} = this.props.route.params;
    this.state = {
      text: '',
      attachment: new Array(),
      timestamp: offer.timestamp,
      requested_time: offer.requested_time,
    };
  }

  componentDidMount = async () => {
    let {route} = this.props;
    let {onsale, user, offer} = route.params;
    let chat = await post_request('chat', {
        onsale: onsale._id,
        offer: offer._id,
        user: this.loggeduser._id === Admin_id ? user : this.loggeduser._id,
      }),
      messages;

    if (chat) {
      messages = await post_request('messages', {
        chat: chat._id,
        user: this.loggeduser._id,
        reset_pager: true,
      });
      this.other_person =
        chat.from === this.loggeduser._id ? chat.to : chat.from;

      messages = messages.map(msg => {
        if (msg.attachment)
          msg.attachment = msg.attachment.map(att => {
            if (att.startsWith && att.startsWith('offer')) att = offer;
            return att;
          });
        return msg;
      });

      await post_request('clear_new_messages', {
        offer: offer._id,
        user: this.loggeduser._id,
      });

      emitter.emit('clear_new_messages', offer._id);
    }

    this.setState(
      {
        messages:
          messages && messages.sort
            ? messages.sort((m1, m2) => m1.created > m2.created)
            : new Array(),
        chat,
      },
      () => this.flat_list.scrollToOffset({offset: 0, animated: true}),
    );

    this.new_message = message => {
      let {chat, messages} = this.state;
      if (chat._id !== message.chat) return;
      if (message.attachment)
        message.attachment = message.attachment.map(att => {
          if (att.startsWith && att.startsWith('offer'))
            att = this.props.route.params.offer;
          return att;
        });
      messages = new Array(...messages, message);
      this.setState({messages}, () =>
        this.flat_list.scrollToOffset({offset: 0, animated: true}),
      );
    };

    this.is_typing = chat_id => {
      let {chat} = this.state;
      if (!chat) return;

      chat._id === chat_id && this.setState({is_typing: true});
    };

    this.not_typing = chat_id => {
      let {chat} = this.state;
      if (!chat) return;

      chat._id === chat_id && this.setState({is_typing: false});
    };

    this.offer_deposit = ({offer: offer_id, timestamp}) => {
      offer_id === this.props.route.params.offer._id &&
        this.setState({status: 'in-escrow', timestamp});
    };

    this.offer_fulfilled = ({offer: offer_id, timestamp}) => {
      offer_id === this.props.route.params.offer._id &&
        this.setState({status: 'awaiting confirmation', timestamp});
    };

    this.offer_confirmed = offer_id => {
      offer_id === this.props.route.params.offer._id &&
        this.setState({status: 'completed'});
    };

    this.offer_time_extended = ({offer: offer_id, timestamp}) =>
      offer_id === offer._id &&
      this.setState({timestamp, requested_time: null});

    this.offer_in_dispute = ({offer: offer_id}) =>
      offer._id === offer_id && this.setState({status: 'in-dispute'});

    this.offer_status_update = ({offer: offer_id, status}) =>
      offer._id === offer_id && this.setState({status});

    this.offer_accepted = offer_id =>
      offer_id === offer._id && this.setState({status: 'accepted'});

    this.offer_declined = offer_id =>
      offer_id === offer._id && this.setState({status: 'declined'});

    emitter.listen('offer_accepted', this.offer_accepted);
    emitter.listen('offer_declined', this.offer_declined);
    emitter.listen('new_message', this.new_message);
    emitter.listen('offer_time_extended', this.offer_time_extended);
    emitter.listen('offer_deposit', this.offer_deposit);
    emitter.listen('offer_status_update', this.offer_status_update);
    emitter.listen('offer_in_dispute', this.offer_in_dispute);
    emitter.listen('offer_fulfilled', this.offer_fulfilled);
    emitter.listen('offer_confirmed', this.offer_confirmed);
    emitter.listen('is_typing', this.is_typing);
    emitter.listen('not_typing', this.not_typing);
  };

  componentWillUnmount = () => {
    emitter.remove_listener('offer_accepted', this.offer_accepted);
    emitter.remove_listener('offer_declined', this.offer_declined);
    emitter.remove_listener('offer_confirmed', this.offer_confirmed);
    emitter.remove_listener('offer_fulfilled', this.offer_fulfilled);
    emitter.remove_listener('offer_in_dispute', this.offer_in_dispute);
    emitter.remove_listener('offer_status_update', this.offer_status_update);
    emitter.remove_listener('offer_deposit', this.offer_deposit);
    emitter.remove_listener('offer_time_extended', this.offer_time_extended);
    emitter.remove_listener('new_message', this.new_message);
    emitter.remove_listener('is_typing', this.is_typing);
    emitter.remove_listener('not_typing', this.not_typing);
  };

  request_time_extension = async () => {
    let {offer, onsale} = this.props.route.params;

    if (this.state.requested_time) return;

    (await post_request('request_time_extension', {
      offer: offer._id,
      onsale: onsale._id,
      user: this.loggeduser._id,
    })) && this.setState({requested_time: true});
  };

  extend_time = async () => {
    let {offer, onsale} = this.props.route.params,
      timestamp = Date.now();

    (await post_request('extend_time', {
      offer: offer._id,
      onsale: onsale._id,
      user: this.loggeduser._id,
    })) &&
      this.setState({timestamp, requested_time: false}, () =>
        emitter.emit('offer_time_extended', {offer: offer._id, timestamp}),
      );
  };

  offer_details = () => {
    let {navigation, route} = this.props;
    let {onsale} = route.params;

    navigation.navigate('onsale_details', {user: this.loggeduser, onsale});
  };

  toggle_attachments = async () => {
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
        file_base64: await RNFS.readFile(files[0].uri, 'base64'),
      });
  };

  set_message_text = text => this.setState({text});

  send_message = async () => {
    this.setState({sending: true});
    let {route} = this.props;
    let {onsale, offer} = route.params;
    let {chat, text, files, file_base64, attachment} = this.state;
    if (file_base64) attachment = new Array(file_base64);

    if (!chat) {
      this.other_person =
        this.loggeduser._id !== Admin_id ? Admin_id : this.loggeduser._id;

      chat = {
        offer: offer._id,
        from: this.loggeduser._id,
        to: this.other_person,
      };
      let res = await post_request('new_chat', chat);
      if (!res || (res && !res._id)) {
        this.setState({sending: false});
        return toast('Something went wrong');
      }
      chat._id = res._id;
      chat.updated = res.updated;
      chat.created = res.created;

      this.setState({chat});
    }
    let message = {
      text,
      chat: chat._id,
      offer: offer._id,
      onsale: onsale._id,
      currency: onsale.currency,
      from: this.loggeduser._id,
      to: chat.to === this.loggeduser._id ? chat.from : chat.to,
      attachment,
      files: null,
      file_base64: null,
    };

    emitter.emit('send_message', {message, chat}, msg => {
      let {messages} = this.state;
      messages = new Array(...messages, msg);
      this.setState(
        {
          messages,
          sending: false,
          text: '',
          files: null,
          file_base64: null,
          attachment: new Array(),
        },
        this.flat_list.scrollToOffset({offset: 0, animated: true}),
      );
    });
  };

  render_message = message => {
    let {route, navigation} = this.props;
    let {onsale} = route.params;

    return (
      <Message
        loggeduser={this.loggeduser}
        message={message}
        onsale={onsale}
        navigation={navigation}
      />
    );
  };

  fetch_more = async () => {
    let {offer} = this.props.route.params;
    let {has_no_more, loading_more, messages, chat} = this.state;

    if (!chat || has_no_more || loading_more || !messages) return;
    this.setState({loading_more: true});

    let more_messages = await post_request('messages', {
      chat: chat._id,
      user: this.loggeduser._id,
    });

    if (!more_messages?.length) has_no_more = true;

    more_messages = more_messages.map(msg => {
      if (msg.attachment)
        msg.attachment = msg.attachment.map(att => {
          if (att.startsWith && att.startsWith('offer')) att = offer;
          return att;
        });
      return msg;
    });

    messages = new Array(...messages, ...more_messages);
    messages = messages.sort((m1, m2) => m1.created > m2.created);

    this.setState({has_no_more, messages, loading_more: false});
  };

  accept = async () => {
    if (this.state.loading) return;
    let {offer, onsale} = this.props.route.params;
    this.setState({loading: true});

    let res = await post_request('accept_offer', {
      offer: offer._id,
      onsale: onsale._id,
    });
    emitter.emit('offer_accepted', offer._id);
    Sock_offer_status(offer._id, 'accepted', offer.user?._id);
    res && this.setState({status: 'accepted', loading: false});
  };

  decline = async () => {
    if (this.state.loading) return;
    let {offer, onsale} = this.props.route.params;
    this.setState({loading: true});

    let res = await post_request('decline_offer', {
      offer: offer._id,
      onsale: onsale._id,
    });
    emitter.emit('offer_declined', offer._id);
    Sock_offer_status(offer._id, 'declined', offer.user?._id);
    res && this.setState({status: 'declined', loading: false});
  };

  on_blur = () => {
    let {chat} = this.state;
    chat &&
      emitter.emit('blur_message_input', {
        to: this.other_person,
        chat: chat._id,
      });
  };

  on_focus = () => {
    let {chat} = this.state;
    chat &&
      emitter.emit('focus_message_input', {
        to: this.other_person,
        chat: chat._id,
      });
  };

  in_dispute = () => {
    let {navigation, route} = this.props;
    let {offer, onsale} = route.params;

    navigation.navigate('dispute', {
      offer,
      onsale,
      admin_in_dispute: this.loggeduser._id === Admin_id,
      user: this.loggeduser,
    });
  };

  submit_dispute = () => {
    let {navigation, route} = this.props;
    let {offer, onsale} = route.params;

    navigation.navigate('submit_dispute', {
      offer,
      onsale,
      user: this.loggeduser,
    });
  };

  admin_chat_switch = user => {
    let {navigation, route} = this.props;
    let {onsale, offer} = route.params;

    navigation.push('chat', {onsale, offer, user});
  };

  render_chat_offer = () => {
    let {timestamp, chat, requested_time, status: status_} = this.state;
    let {route} = this.props;
    let {onsale, offer} = route.params;
    let {amount, offer_rate, status, offer_need, user} = offer;
    let {seller, alphabetic_name} = onsale;
    if (status_) status = status_;

    let disputable = timestamp + this.aday < Date.now();
    let is_seller = this.loggeduser._id == seller._id;
    let is_seller_chat;

    is_seller_chat =
      this.loggeduser._id !== Admin_id ||
      (chat && chat.to === seller._id) ||
      (chat && chat.from === seller._id);

    let can_switch = this.loggeduser._id === Admin_id;

    return (
      <Bg_view
        shadowed
        style={{
          borderRadius: wp(4),
          margin: wp(2.8),
          padding: wp(4),
          paddingVertical: wp(2),
        }}>
        <Bg_view horizontal style={{justifyContent: 'space-between'}}>
          <Bg_view horizontal>
            <Bg_view
              style={{
                height: wp(7.5),
                width: wp(7.5),
                borderRadius: wp(7.5),
                backgroundColor: '#ddd',
              }}
            />
            <TouchableWithoutFeedback
              onPress={
                !is_seller_chat && can_switch
                  ? () => this.admin_chat_switch(seller._id)
                  : null
              }>
              <View>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{marginLeft: wp(1.4)}}
                    capitalise>
                    {seller.username}
                  </Fr_text>
                  {seller.status === 'verified' ? <Verified_token /> : null}

                  {!is_seller_chat && can_switch ? (
                    <Icon
                      style={{paddingLeft: wp(2)}}
                      icon={require('../../android/app/src/main/assets/Icons/chat_send_icon.png')}
                    />
                  ) : null}
                </Bg_view>
              </View>
            </TouchableWithoutFeedback>
          </Bg_view>
          <TouchableWithoutFeedback
            onPress={
              is_seller_chat && can_switch
                ? () => this.admin_chat_switch(user._id)
                : null
            }>
            <View>
              <Bg_view horizontal>
                {is_seller_chat && can_switch ? (
                  <Icon
                    style={{paddingRight: wp(2)}}
                    icon={require('../../android/app/src/main/assets/Icons/chat_send_icon.png')}
                  />
                ) : null}
                <Bg_view horizontal>
                  {user.status === 'verified' ? <Verified_token /> : null}
                  <Fr_text
                    size={wp(3.8)}
                    style={{marginRight: wp(1.4), marginLeft: wp(1.4)}}
                    capitalise>
                    {user.username}
                  </Fr_text>
                </Bg_view>
                <Bg_view
                  style={{
                    height: wp(7.5),
                    width: wp(7.5),
                    borderRadius: wp(7.5),
                    backgroundColor: '#ddd',
                  }}
                />
              </Bg_view>
            </View>
          </TouchableWithoutFeedback>
        </Bg_view>

        <Bg_view
          horizontal
          style={{
            justifyContent: 'space-between',
            marginVertical: hp(0.7),
          }}>
          <Fr_text
            style={{flex: 1}}
            size={wp(5.2)}
            bold>{`${amount} ${alphabetic_name}`}</Fr_text>
          <Icon
            icon={require('../../android/app/src/main/assets/Icons/exchange_chat_icon.png')}
            style={{
              marginHorizontal: wp(2.8),
              height: wp(7.5),
              width: wp(7.5),
            }}
          />
          <Fr_text
            style={{flex: 1, textAlign: 'right'}}
            size={wp(5.2)}
            bold>{`${offer_rate * amount} NGN`}</Fr_text>
        </Bg_view>

        {status === 'in-dispute' ? (
          <Text_btn
            text="in-dispute"
            capitalise
            accent
            centralise
            action={this.in_dispute}
          />
        ) : this.loggeduser._id === seller._id ? (
          <Bg_view horizontal style={{justifyContent: 'space-between'}}>
            {/* <Bg_view flex /> */}
            <Bg_view horizontal style={{alignItems: 'center'}} flex>
              {status === 'in-escrow' ? (
                disputable ? (
                  <Text_btn
                    text={
                      requested_time
                        ? 'Awaiting time extension'
                        : 'request time extension'
                    }
                    action={this.request_time_extension}
                    capitalise
                    centralise
                    accent
                    disabled={requested_time}
                  />
                ) : (
                  <Small_btn
                    title="fulfilled?"
                    action={
                      this.fulfil_modal && this.fulfil_modal.toggle_show_modal
                    }
                  />
                )
              ) : status === 'awaiting confirmation' ? (
                disputable && !requested_time ? (
                  <Bg_view horizontal>
                    <Text_btn
                      text="extend time"
                      action={this.extend_time}
                      accent
                      capitalise
                      style={{borderRightWidth: 1, borderRightColor: '#ccc'}}
                    />
                    <Text_btn
                      text="dispute"
                      action={this.submit_dispute}
                      accent
                      capitalise
                    />
                  </Bg_view>
                ) : (
                  <Countdown
                    on_touch={() => toast('Awaiting buyer confirmation.')}
                    timestamp={timestamp + this.aday}
                  />
                )
              ) : status === 'pending' ? (
                <Text_btn
                  accent
                  capitalise
                  text="accept"
                  action={this.accept}
                />
              ) : null}
              {status === 'declined' ? (
                <Text_btn accent capitalise text="Declined!" />
              ) : status === 'pending' ? (
                <Text_btn
                  accent
                  capitalise
                  text="decline"
                  action={this.decline}
                />
              ) : null}
            </Bg_view>
            <Bg_view style={{alignItems: 'flex-end'}}>
              <Text_btn
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  marginLeft: wp(4),
                }}
                text={status}
                capitalise
                italic
                accent
              />
            </Bg_view>
          </Bg_view>
        ) : (
          <Bg_view horizontal style={{justifyContent: 'space-between'}}>
            <Text_btn
              style={{flex: 1}}
              text="Offer details"
              action={this.offer_details}
            />
            <Bg_view horizontal style={{justifyContent: 'space-between'}}>
              {status === 'accepted' ? (
                <Text_btn
                  text="deposit"
                  action={
                    this.cool_modal_deposit &&
                    this.cool_modal_deposit.toggle_show_modal
                  }
                  accent
                  capitalise
                />
              ) : status === 'in-escrow' ? (
                disputable && !requested_time ? (
                  <Bg_view horizontal>
                    <Text_btn
                      text="extend time"
                      action={this.extend_time}
                      accent
                      capitalise
                      style={{borderRightWidth: 1, borderRightColor: '#ccc'}}
                    />
                    <Text_btn
                      text="dispute"
                      action={this.submit_dispute}
                      accent
                      capitalise
                    />
                  </Bg_view>
                ) : (
                  <Countdown
                    on_touch={() => toast('Awaiting seller to fulfil.')}
                    timestamp={timestamp + this.aday}
                  />
                )
              ) : status === 'awaiting confirmation' ? (
                disputable ? (
                  <Text_btn
                    text={
                      requested_time
                        ? 'awaiting time extension'
                        : 'request time extension'
                    }
                    action={this.request_time_extension}
                    capitalise
                    accent
                    disabled={requested_time}
                  />
                ) : (
                  <Text_btn
                    text="confirm"
                    action={
                      this.cool_modal_confirm &&
                      this.cool_modal_confirm.toggle_show_modal
                    }
                    accent
                    capitalise
                  />
                )
              ) : null}
            </Bg_view>
            <Text_btn
              style={{flex: 1, alignItems: 'flex-end', marginLeft: wp(4)}}
              text={status}
              capitalise
              italic
              accent
            />
          </Bg_view>
        )}

        {seller._id === this.loggeduser._id &&
        status === 'in-escrow' ? null : seller._id !== this.loggeduser._id &&
          status === 'awaiting confirmation' ? null : requested_time &&
          status !== 'in-dispute' ? (
          <Bg_view style={{alignItems: 'center'}}>
            <Fr_text centralise>
              Party requested a time extension to respond to transaction.
            </Fr_text>
            <Bg_view horizontal>
              <Text_btn
                action={this.extend_time}
                text="extend time"
                accent
                capitalise
                style={{borderRightWidth: 1, borderRightColor: '#ccc'}}
              />
              <Text_btn
                action={this.submit_dispute}
                text="dispute"
                accent
                capitalise
              />
            </Bg_view>
          </Bg_view>
        ) : null}

        <Bg_view>
          {offer_need.need === 'bank transfer' ? (
            <Bank_transfer bank_transfer={offer_need} is_seller={is_seller} />
          ) : (
            <Online_registration reg={offer_need} is_seller={is_seller} />
          )}
        </Bg_view>
      </Bg_view>
    );
  };

  aday = 60 * 60 * 24 * 1000;

  render() {
    let {
      text,
      files,
      attachment,
      file_base64,
      sending,
      loading_more,
      is_typing,
      messages,
    } = this.state;
    let {route, navigation} = this.props;
    let {onsale, offer} = route.params;
    let {amount, user} = offer;
    let {seller, alphabetic_name} = onsale;

    return (
      <User.Consumer>
        {loggeduser => {
          this.loggeduser = loggeduser;

          return (
            <Bg_view flex>
              <KeyboardAvoidingView style={{flex: 1}}>
                <Bg_view flex>
                  <Header
                    no_transform
                    title={`Purchase ${amount} ${alphabetic_name} from ${capitalise(
                      seller.username,
                    )}`}
                    navigation={navigation}
                  />
                  <Bg_view flex style={{paddingHorizontal: wp(2.8)}}>
                    {loading_more ? <Loadindicator /> : null}
                    <FlatList
                      data={
                        messages
                          ? new Array({_id: 'offer'}, ...messages).reverse()
                          : new Array({_id: 'offer'})
                      }
                      keyExtractor={item => item._d}
                      fadingEdgeLength={wp(10)}
                      ref={flat_list => (this.flat_list = flat_list)}
                      showsVerticalScrollIndicator={false}
                      onEndReached={this.fetch_more}
                      onEndReachedThreshold={0.3}
                      inverted={messages && messages.length}
                      renderItem={({item}) =>
                        !item
                          ? null
                          : item._id === 'offer'
                          ? this.render_chat_offer()
                          : this.render_message(item)
                      }
                    />
                    <Bg_view flex>
                      {messages ? (
                        messages.length ? null : (
                          <List_empty text="No messages yet" />
                        )
                      ) : (
                        <Loadindicator />
                      )}
                    </Bg_view>
                  </Bg_view>
                  {is_typing ? (
                    <Fr_text
                      style={{marginHorizontal: wp(2.8), marginTop: hp(1.4)}}
                      accent
                      italic>
                      {`${capitalise(
                        this.other_person === seller._id
                          ? seller.username
                          : user.username,
                      )} is typing`}
                    </Fr_text>
                  ) : null}

                  {files && files.length ? (
                    <Bg_view style={{paddingHorizontal: wp(4)}} horizontal>
                      <Image
                        source={{uri: files[0].uri}}
                        style={{
                          height: 100,
                          width: 100,
                          borderRadius: wp(2),
                          resizeMode: 'contain',
                        }}
                      />
                      <Text_btn
                        text=" X "
                        action={() => this.setState({files: null})}
                      />
                    </Bg_view>
                  ) : null}
                  <Bg_view
                    horizontal
                    style={{
                      margin: wp(2.8),
                      justifyContent: 'space-between',
                      marginTop: wp(1),
                    }}>
                    <Bg_view
                      horizontal
                      style={{
                        backgroundColor: '#eee',
                        borderRadius: wp(5.6),
                        marginRight: wp(1.4),
                        minHeight: hp(6),
                        flex: 1,
                      }}>
                      <TextInput
                        placeholder={
                          this.loggeduser._id === Admin_id
                            ? 'Type your message'
                            : 'Message admin for help.'
                        }
                        multiline
                        onBlur={this.on_blur}
                        onFocus={this.on_focus}
                        onChangeText={this.set_message_text}
                        value={text}
                        placeholderTextColor="#888"
                        style={{
                          fontSize: wp(4),
                          paddingHorizontal: wp(4),
                          flex: 1,
                          color: '#000',
                        }}
                      />
                      <Icon
                        icon={require('../../android/app/src/main/assets/Icons/attachement_icon.png')}
                        action={() => this.toggle_attachments()}
                      />
                    </Bg_view>
                    {sending ? (
                      <Loadindicator />
                    ) : !text && !attachment.length && !file_base64 ? null : (
                      <Icon
                        icon={require('../../android/app/src/main/assets/Icons/chat_send_icon.png')}
                        action={this.send_message}
                        style={{height: wp(9), width: wp(9)}}
                      />
                    )}
                  </Bg_view>
                </Bg_view>

                <Cool_modal
                  ref={cool_modal_deposit =>
                    (this.cool_modal_deposit = cool_modal_deposit)
                  }>
                  <Deposit_to_escrow
                    onsale={onsale}
                    offer={offer}
                    navigation={navigation}
                    wallet={loggeduser.wallet}
                    close_modal={
                      this.cool_modal_deposit &&
                      this.cool_modal_deposit.toggle_show_modal
                    }
                  />
                </Cool_modal>

                <Cool_modal
                  ref={fulfil_modal => (this.fulfil_modal = fulfil_modal)}>
                  <Fulfil
                    offer={offer}
                    onsale={onsale}
                    navigation={navigation}
                    close_modal={
                      this.fulfil_modal && this.fulfil_modal.toggle_show_modal
                    }
                  />
                </Cool_modal>
                <Cool_modal
                  ref={cool_modal_confirm =>
                    (this.cool_modal_confirm = cool_modal_confirm)
                  }>
                  <Confirm_transaction
                    offer={offer}
                    onsale={onsale}
                    navigation={navigation}
                    user={loggeduser}
                    close_modal={
                      this.cool_modal_confirm &&
                      this.cool_modal_confirm.toggle_show_modal
                    }
                  />
                </Cool_modal>
              </KeyboardAvoidingView>
            </Bg_view>
          );
        }}
      </User.Consumer>
    );
  }
}

export default Chat;
