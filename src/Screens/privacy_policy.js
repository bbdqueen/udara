import React from 'react';
import {Linking, ScrollView} from 'react-native';
import Bg_view from '../Components/Bg_view';
import Fr_text from '../Components/Fr_text';
import Header from '../Components/header';
import Line from '../Components/line';
import Text_btn from '../Components/Text_btn';
import {hp, wp} from '../utils/dimensions';
import Feather from 'react-native-vector-icons/Feather';

class Privacy_policy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  more_info = async () => await Linking.openURL('https://udaralinks.com');

  render = () => {
    let {navigation} = this.props;

    return (
      <Bg_view flex>
        <Header title="privacy policy" navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Bg_view style={{marginHorizontal: wp(5.6)}}>
            <Fr_text bold>TERMS AND CONDITION</Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>1.0 Definitions</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In this document, "User Agreement", "Agreement", "Terms and
              Conditions of Service" are synonymous and used interchangeably.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In this Agreement, "you" or "your" or "User" refers to any person
              or entity using the service. Unless otherwise stated,
              "UDARALINKS," "we" or "our" or "us" will refer collectively to
              Udaralinks Limited, affiliates, directors, officers, employees,
              agents and partners.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You and UDARALINKS are jointly referred to as 'the Parties' in
              this document, "Udaralinks", "our Services", "the Services", "the
              System", 'Udaralinks app' "the platform" are synonymous and used
              interchangeably unless otherwise specified.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              "Udaralinks" means the range of products and services with the
              "Powered by Udaralinks" notice offered by UDARALINKS and its
              partners as an online platform for the Management of:
            </Fr_text>
            <Fr_text style={{marginVertical: hp(1.4)}} bold>
              INDIVIDUAL AND OTHER USERS
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Buying and selling of foreign currencies
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Buying of Recharge Card of all mobile networks.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>1.0 Eligibility</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In order to use the Service, you must download and register on our
              Udaralinks app.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Without limiting the foregoing, we reserve the right to deny,
              suspend or terminate delivery of our Service to persons who
              present an unacceptable level of risk as determined by regulatory,
              industry and our standards.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.0 Contract Between You and UDARALINKS
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Your acceptance of these Terms and Conditions of Service is
              established either:
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                by using your personal details to log-in to Udaralinks or any of
                the related solutions "Powered by Udaralinks", or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                by installing or using any Udaralinks service or solution
                "Powered by Udaralinks", or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                by integrating Udaralinks with your third-party application for
                the purpose of our services.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.1 Relationship
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks facilitates your buying and selling of foreign
              currencies with third parties. Based on your instructions, you
              acknowledge that:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                1.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Payment instructions on the platform are driven strictly by
                account numbers or any other payment links and not by the
                beneficiary names supplied.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                2.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Payments will be applied by Udaralinks Partner Banks into the
                beneficiary account numbers supplied by you at the time of
                upload of transaction instructions.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                3.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Any payment instruction, including but not limited to standing
                instruction related debits, processed through Udaralinks that
                failed processing for any reason whatsoever will be
                automatically retried towards ensuring its successful
                processing.
              </Fr_text>
            </Bg_view>
            <Bg_view>
              <Bg_view horizontal>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  4.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  You are fully responsible for the completeness, correctness
                  and validity of data supplied on the platform, including but
                  not limited to:
                </Fr_text>
              </Bg_view>

              <Bg_view style={{marginLeft: wp(6.5)}}>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    1.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Beneficiary account number
                  </Fr_text>
                </Bg_view>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    2.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Beneficiary account name
                  </Fr_text>
                </Bg_view>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    3.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Amount
                  </Fr_text>
                </Bg_view>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    4.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Beneficiary phone number
                  </Fr_text>
                </Bg_view>
                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    5.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Beneficiary e-mail address
                  </Fr_text>
                </Bg_view>

                <Bg_view horizontal>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginHorizontal: wp(2),
                    }}>
                    6.
                  </Fr_text>
                  <Fr_text
                    size={wp(3.8)}
                    style={{
                      lineHeight: hp(4),
                      marginLeft: wp(2),
                    }}>
                    Beneficiary payment links
                  </Fr_text>
                </Bg_view>
              </Bg_view>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                5.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Neither UDARALINKS nor any of the Partner Banks can be held
                liable for any incorrect beneficiary name, account number,
                amount, phone number, e-mail address or other data that a
                registered user uploads on the platform.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                6.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Udaralinks is not a bank or a financial institution.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                7.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We shall act as temporary escrow to the buyers and sellers of
                foreign currencies on the Udaralinks app.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                8.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Udaralinks is an e-commerce and social media platform.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                9.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                When you send a payment instruction, until that payment is
                accepted by the recipient, you remain the owner of those funds,
                but you will not be able to withdraw those funds or send the
                funds to any other recipient unless the initial transaction is
                cancelled.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                10.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We act as service providers by creating, hosting, maintaining
                and providing our Service to you through the Internet. We do not
                have any control over the services that are paid for through our
                Service.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                11.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                When you request Udaralinks to compute your taxes based on the
                Nigerian tax laws, Udaralinks shall use best efforts to process
                information provided by you to ensure that the computed figures
                are accurate and represent the expectations of the tax
                authorities. It however remains your responsibility to confirm
                your satisfaction with computed figures before you approve same
                for payment.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                12.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                When you use Udaralinks for collection of funds by way of an
                automated direct debit from the accounts of third parties, such
                parties will be entitled to a prompt refund of such payments
                simply by submitting appropriate claims to us in accordance with
                the relevant direct debit guidelines from the Central Bank of
                Nigeria or other regulatory requirements.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                13.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Udaralinks would normally settle collected amounts into merchant
                accounts on the same day, except for funds collection via
                debit/credit cards, digital wallets, POS and mPOS terminals and
                other card related transactions, settlement for which is
                normally done to merchants accounts on a T+1 basis (the day
                after the transaction), in line with industry standards.
                International payments will be subject to international best
                practices.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                14.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                When you use Udaralinks as a registered Biller for collection of
                funds paid by service beneficiaries into your designated
                collection account(s) through any of the Udaralinks payment
                channels, You hereby grant us the unconditional right (without
                any liability whatsoever) to publish your name as a Biller on
                any other platform owned by UDARALINKS and/or any other
                aggregator’s platform with whom we have a business relationship,
                for the purpose of facilitating the collection of payments due
                to you, and expanding your access to payers.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                15.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                In addition to being able to access your Udaralinks profile
                through Udaralinks mobile application, by becoming a registered
                user on the platform, you may be able to make payments directly
                from the portal/platform of a Biller/Merchant registered on
                Udaralinks. In such an instance, you shall be required to
                authenticate your status as a registered Udaralinks user, select
                any of your bank accounts that are profiled on the platform from
                which the payment is to be made and authorize your payment
                accordingly”
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                16.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You will inform us of any alliance, joint venture, partnership
                or any other business combination arrangement You may go into
                with any foreign entity.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                17.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You shall not accept payment for or on behalf of any third Party
                through Udaralinks.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                18.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You shall fully comply with all applicable Payment Schemes rules
                and regulations, Card usage and acceptance requirements and
                merchant monitoring standards.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                19.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We reserve the right to terminate this Agreement in the event
                any of Your contracts with a payment scheme provider or Bank
                partner is terminated for any reason whatsoever.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                20.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We shall not oblige Your request to switch off any authenticated
                procedures insofar as it pertains to the processing of a card
                payment transaction.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                21.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You must not submit, and we shall not accept, any transaction
                that you know is, or should have known was, illegal or
                fraudulent.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                22.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You shall at all times, prevent fraud through your action or
                inaction on Udaralinks, and shall provide us with reasonable
                assistance upon request, for the prevention and detection of
                fraud or other criminal activity in respect of transaction.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                23.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You shall be responsible for the conduct of your employees,
                agents and representatives as it pertains to the use of
                Udaralinks as contemplated in this Agreement, and you shall
                indemnify us for any loss we may suffer as a result of any
                action or inaction of your employees, agents and/or
                representatives.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                24.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We shall not accept transactions made using a payment card for
                any Debt repayment (unless authorized by us in writing).
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.2 Identity Authentication
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We use many techniques to identify users when they register on the
              platform. Verification of Users is only an indication of increased
              likelihood that a User's identity is correct. You authorize us to,
              directly or through third parties, make any inquiries we consider
              necessary to validate your registration. This may include
              verifying the information you provide against third party
              databases. In addition, we reserve the right to employ other means
              of verification of authenticity for transactions we deem
              suspicious or for accounts conducting high value or high volume
              transactions to ensure integrity of the transactions and we may
              thus delay execution of such instructions.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>2.3 No Warranty</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We provide our services "as is" and without any warranty or
              condition, express, implied or statutory. We, specifically
              disclaim any implied warranties of title, merchantability, fitness
              for a particular purpose and non-infringement to the full extent
              permissible by the law.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We shall provide the Services with due care and skill, in
              consideration for your payment of the applicable fee or charge.
              Please be informed that our Services may suffer from delays,
              errors or other unintended outcomes.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We shall make reasonable efforts to ensure that requests for
              electronic debits and credits and other transactional operations
              are processed in a timely manner but we make no representations or
              warranties regarding the amount of time needed to complete
              processing because our Service is also dependent upon other
              factors outside of our control, one of which is the operational
              efficiency of all stakeholders.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.4 Limitation of Liability
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We shall only be liable for your direct loss or damage, proven to
              be a foreseeable result of our breach of this agreement. We will
              also be liable for any obligation that cannot be limited or
              excluded as a matter of law.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We will not be liable for any loss or damage arising as a result
              of unauthorised access to the service if (a) You intentionally or
              negligently failed to take reasonable precautions to protect your
              security, access codes, login details or any device used to access
              the service, (b) You failed to promptly notify us that the service
              was being accessed in an unauthorised way after becoming aware of
              it, or (c) You acted fraudulently.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In no event shall UDARALINKS be liable for loss of income,
              profits, business, opportunity, contracts or any indirect,
              special, incidental or consequential damages arising out of or in
              connection with our platform, our service, or this Agreement.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Our liability to you or any third party in any circumstance of
              proven liability by us, shall not exceed the fees paid to us in
              respect of the specific transaction that gave rise to the claim or
              liability.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.5 Indemnification
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You agree that if you are in breach of this Agreement or the
              documents it incorporates by reference, or if you violate any law
              or the rights of a third party in connection with your use of the
              service, we shall not be responsible for any damage, loss,
              liability or third party claim you incur wholly or partly by your
              breach or violation.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You agree to indemnify and hold UDARALINKS, harmless from any
              claim or demand (including attorneys' fees) made by you or any
              third party arising wholly or partly from your breach of this
              Agreement or the documents it incorporates by reference, or your
              violation of any law or the rights of a third party relating to
              your use of the Service.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.6 Authorised Signatories
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              You undertake that:
            </Fr_text>
            <Bg_view style={{marginLeft: wp(4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                2.6.1 Only the profile registered on our platform shall be the
                authorised of our services on the mobile application. Any person
                having access to the mobile app and your profile would be doing
                so under your express approval whether to your knowledge or
                otherwise.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                2.6.2 You will keep confidential all Udaralinks security related
                information such as passwords, Access Codes and Personal
                Identification Numbers (PIN). You understand that UDARALINKS,
                banks, their affiliates and service providers will never request
                you to divulge any of this information by phone, mail or any
                other means. You are obliged to report any representation to the
                contrary to UDARALINKS and your bank promptly.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                2.6.3 When you make a payment through Udaralinks, you are
                requesting an electronic transfer from your account. Upon such
                request, Udaralinks will transmit your instructions to your bank
                to transfer from your account the amount you specify. You agree
                that such requests constitute your authorisation for such
                transfers.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                2.6.4 Except when caused by UDARALINKS' or the banks' misconduct
                or negligence, you will protect UDARALINKS, the banks, their
                affiliates and service providers from any/and all claims,
                liability, damages, expenses and costs caused by or arising from
                your use of the service.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.0 Support Services
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              UDARALINKS has a dedicated support unit manned by highly
              experienced and professional personnel. Customer support issues
              are managed through a Customer Relationship Management (CRM)
              system. Customer complaints made through our dedicated email and
              telephone lines are logged and monitored until a resolution is
              achieved. Our support team is always available to receive
              enquiries on weekdays, weekends and public holidays. All support
              related enquiries should be routed via the email
              admin@udaralinks.com or telephone ______________. Contact details
              are also displayed on the 'Contact' section of our website at
              www.udaralinks.com, which may be updated from time to time.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              4.1 Standard Support Services
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Standard Support Services provided by us are as listed below and
              are covered by your transaction fees and do not attract any
              further charges.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1.1 Processing of your application to use the system including
              the creation of your login details and activation of your
              Udaralinks profile.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1.2 Initial Setup of your profile on the system.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1.3 Required support to ensure successful execution of your
              payment instructions.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1.4 Deployment of application updates and patches.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1.5 Telephone and e-mail support services in response to your
              queries.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              4.2 Extended Support Services for Corporate Users
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Upon your request, we are also able to provide additional services
              which are charged separately. Our extended support services
              include:
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.2.1 Audit and Investigative support services: Where our services
              are required to support your internal or external auditors,
              regulatory or law enforcement agencies, we shall work with you to
              determine the level of work required, agree on the scope, work
              plan and applicable charges for the assignment.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.2.2 Bespoke Development and Interfaces as may be requested by
              you: We shall work with you to determine the level of work
              required, agree on the scope, work plan and applicable charges for
              the assignment.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>5.0 Fees</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The processing fees payable for our services are as displayed on
              your Udaralinks profile screen during transaction processing or as
              stated below. The fees are computed per record and charged
              alongside each batch of transactions that you process.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Convenience Fees: Where applicable and subject to our discretion,
              we may charge a convenience fee in addition to the applicable fee
              listed above. In such an instance, the Payer shall be notified of
              the amount payable at the point of consummating the transaction,
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              5.1 Fees Exclusive of Taxes
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              All fees and charges quoted in this Agreement exclude any
              applicable taxes, which will be chargeable at the prevailing rate.
              You will be responsible for the payment of any taxes imposed by
              any governmental taxing authority on the amounts you are liable to
              pay to us under this Agreement, including, but not limited to,
              withholding taxes of whatever nature. If any deductions or
              withholdings are required by law to be made from the fees payable
              to us, you agree to promptly pay such Withholding Taxes and obtain
              and deliver to us proof of payment of such Withholding Taxes
              together with official evidence thereof issued by the governmental
              authority concerned, sufficient to enable us support a claim for a
              tax credit in respect of any sum so withheld. If we are unable to
              obtain such tax credit due to your failure to comply with the
              above provision, then you agree to pay to us a sum equal to the
              amount of the tax credit we are not able to claim as a result of
              your failure.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              5.2 Change of Fees
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              UDARALINKS reserves the right to change the processing fees as
              well as the fees for extended support services. Notices of such
              changes shall be communicated in line with the provisions of this
              Agreement.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              5.3 Chargebacks, Refunds and Reversals
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.1 As a registered biller on Udaralinks, we may apply
              chargebacks against your collection accounts for:
            </Fr_text>
            <Bg_view style={{marginLeft: wp(2.8)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                5.4.1.1 disputed payments reported by a Payer to which
                satisfactory evidence of services delivery could not be provided
                by you,
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                5.4.1.2 transactions that we suspect to be unlawful;
              </Fr_text>

              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                5.4.1.3 transactions that are prohibited under this Agreement;
              </Fr_text>

              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                5.4.1.4 transactions that do not comply with card network/scheme
                rules or the terms of this Agreement or
              </Fr_text>

              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  textAlign: 'justify',
                }}>
                5.4.1.5 any reversals for any reason by the card network/scheme,
                our processor, or the participating banks.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.2 Where a chargeback occurs, you shall become immediately
              liable for all claims, fines, liabilities and expenses we incur
              arising out of that chargeback.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.3 As a beneficiary of any form of payment on Udaralinks, if it
              is established that your account was erroneously credited with a
              value (“Wrongful Payment”), appropriate reversals will be
              triggered against such account into which the Wrongful Payment was
              credited, till the entire amount is fully reversed. Wrongful
              Payments include but are not limited to (a) unfunded payments, (b)
              multiple payments for the same set of transactions and (c)
              fraudulently processed payments.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.4 We do not guarantee or assume any liability for transactions
              authorised and completed that are later reversed or charged back.
              You are solely responsible for all reversed or charged back
              transactions, regardless of the reason, basis, or duration of the
              reversal or chargeback.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.5 You hereby grant us the unconditional right to deduct any
              amount, fee, fine or penalty due to be paid by you as a result of
              any reversals, chargebacks, or violation of card scheme rules. You
              agree that we shall debit your collection account or any account
              linked to your BVN to enable us recover any fee, fine or penalty,
              and/or set-off the applicable amounts against future settlements
              due to you.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.4.6 We shall not be involved in any repayment claim from you,
              after a chargeback claim has been successfully settled in favour
              of a customer.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>6.0 Use Policy</Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.1 Acceptable Use Policy
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The following activities constitute a violation of the Acceptable
              use of Udaralinks
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                1.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Using the Udaralinks service to make or receive payments for any
                illegal, fraudulent, immoral or otherwise socially reprehensible
                purposes including but not limited to materials that infringe
                the intellectual property rights of third parties.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                2.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Using the Udaralinks service to make or receive payments for any
                narcotics, other controlled substances, steroids or illicit
                drugs.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                3.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Using Udaralinks to make or accept payments for services where
                payment is not yet due and for which no invoice exists which can
                be presented to UDARALINKS upon request.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                4.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Using Udaralinks to make or accept payment or conduct activities
                in a manner that UDARALINKS or any of its partners reasonably
                believe to be an abuse or violation of existing rules by
                regulators, Card scheme providers or the CBN.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                5.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Using Udaralinks to make or accept payments for the following
                high risk activities without UDARALINKS’ prior written approval;
              </Fr_text>
            </Bg_view>
            <Bg_view style={{marginLeft: wp(6.5)}}>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  1.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Sell securities, business opportunities, franchise,
                  multi-level marketing, or for the pre-order of goods;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  2.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  payment for any sexually oriented or obscene materials or
                  services;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  3.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Buy or sell cryptographic currencies;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  4.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Inbound and outbound international money transfer services;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  5.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  payments for wagers, gambling debts or gambling winnings,
                  regardless of the location or type of gambling activity;
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  6.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Offer, or conduct any form of direct marketing activities
                  (such as, but not limited to inbound and/or outbound
                  telemarketing activities) and travel related services;
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  7.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  payments for any prescription and proprietary drugs and
                  non-prescription (over the counter) medicines;
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  8.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  payments for the wholesale distribution of prescription drugs,
                  proprietary drugs, vitamins, druggists’ sundries and
                  toiletries, antiseptics, bandages, pharmaceuticals, and
                  biological or related products;
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  9.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Receive payments in exchange for personal property left with
                  you , as a merchant, as security (in other words, any service
                  associated with a pawn shop);
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  10.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Receive payments for high-value jewelry, precious stones,
                  gems, gold, platinum, silver or minerals; and/or
                </Fr_text>
              </Bg_view>

              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  11.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Receive payment for tobacco or liquor.
                </Fr_text>
              </Bg_view>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.2 Restricted Activities
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You agree that your information and your activities (including
              your payments and receipt of payments) through our Service shall
              not:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                1.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Be false, inaccurate or misleading;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                2.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Be fraudulent or involve the sale of counterfeit or stolen
                items;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                3.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Be related in any way to terrorism and/or criminal activities,
                including but not limited to payment or the acceptance of
                payments for unauthorised firearms or weapons;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                4.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Infringe on any third party's copyright, patent, trademark,
                trade secret or other property rights or rights of publicity or
                privacy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                5.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Violate any law, statute, ordinance, contract or regulation
                (including, but not limited to, those governing financial
                services, consumer protection, unfair competition,
                antidiscrimination, or false advertising);
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                6.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Be defamatory, libelous, unlawfully threatening or unlawfully
                harassing;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                7.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Be obscene or contain child pornography;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                8.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Contain any viruses, Trojan horses, worms, time bombs, cancel
                bots, easter eggs or other computer programming routines that
                may damage, detrimentally interfere with, surreptitiously
                intercept or expropriate any system, data or other personal
                information; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                9.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Create liability for us or cause us to lose (in whole or in
                part) the services of our ISP's or other suppliers. If you use,
                or attempt to use the Service for purposes other than sending
                and receiving payments, managing your account and the services
                listed in clause 1.0 above, including but not limited to
                tampering with, hacking, modifying or otherwise corrupting the
                security or functionality of the Service, your account will be
                terminated and you will be subject to claims for damages and
                other lawful penalties, including criminal prosecution where
                applicable.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.3 Access and Interference
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You agree that you will not use any robot, spider, other automatic
              device, or manual process to monitor or copy our mobile app or the
              content contained herein without our prior express written
              permission. You agree that you will not use any device, software
              or routine to attempt to interfere with the proper working of the
              Udaralinks site or any activities conducted on our site. You agree
              that you will not take any action that imposes an unreasonable or
              disproportionately large load on our infrastructure. Most of the
              information on our site is proprietary or is licensed to us. You
              agree that you will not copy, reproduce, alter, modify, create
              derivative works, publicly display or frame any content from our
              website without our prior express written permission.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.4 Our Remedies and Right to terminate or restrict your
              activities.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Without limiting other remedies available to us, we may verify
              inaccurate or incorrect information you provide to us, contact you
              by means other than by electronic means, immediately warn our
              community of your actions, limit access to an account and any or
              all of the account's functions (including but not limited to the
              ability to send money or make payments), limit activities,
              indefinitely suspend or close your account, terminate this
              Agreement and refuse to provide our Services to you if:
            </Fr_text>
            <Bg_view style={{marginLeft: wp(6.5)}}>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  1.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  You breach this Agreement or the documents it incorporates by
                  reference;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  2.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  We are unable to verify or authenticate any information you
                  provide to us;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  3.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  We believe that your account or activities pose a significant
                  fraud risk to us;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  4.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  We believe that your actions may cause financial loss or legal
                  liability for you, our users or us;
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  5.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  We believe that any applicable rule stipulated by the Payment
                  schemes may affect your use of the platform.
                </Fr_text>
              </Bg_view>
              <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginHorizontal: wp(2),
                  }}>
                  6.
                </Fr_text>
                <Fr_text
                  size={wp(3.8)}
                  style={{
                    lineHeight: hp(4),
                    marginLeft: wp(2),
                  }}>
                  Your use of Udaralinks is deemed by us to constitute abuse of
                  the electronic payment system or electronic payment rules,
                  including (without limitation), using the Udaralinks system to
                  test Udaralinks card behaviours.
                </Fr_text>
              </Bg_view>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              For the avoidance of doubt, if a fraudulent activity is associated
              with the operation of your Udaralinks profile, you agree that we
              have the right to apply restrictions to the profile and report to
              appropriate law enforcement agencies.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.5 Suspension of Activated Mandates.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              6.5.1 Without recourse to you, we may suspend any activated
              mandate, debit or credit instruction initiated by you if;
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                6.5.1.1 We consider such suspension would be in the interest of
                any of the stakeholders on the platform; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                6.5.1.2 There are reasonable grounds to suspect a compromise of
                security or any unauthorized activity on your registered bank
                account or profile on the Platform.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              6.5.2 Further to clause 6.5.1, you understand that such a
              suspension may impact your ability to initiate any transaction,
              activate another debit against a suspended mandate or complete any
              duly authorized transaction for the duration of such suspension.
              In such an instance, we shall not be liable to you for any reason
              whatsoever.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6.6 Privacy and Security
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              1. We view the protection of users' privacy as a very important
              principle. We understand clearly that you and your Information are
              one of our most important assets. We store and process your
              Information on computers that are protected by physical as well as
              technological security devices. We do not give your personal
              information to third parties for marketing purposes without your
              consent. You may object to your information being used in this way
              and thereby opt out from using our Services. Please ensure that
              you read our privacy policy available on  www.Udaralinks.net. By
              consenting to this Agreement, you also consent to our privacy
              policy.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              2. You hereby grant us the right to conduct any investigation in
              any manner we deem fit, on your background and operations,
              including but not limited to credit background checks, banking
              relationships and financial history. In addition, you hereby give
              us your consent to disclose the details of any investigation
              conducted pursuant to this clause, to Payment scheme, processors,
              Bank partners and/or regulators, without recourse to you.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              7.0 Warranty and Service Disruption
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                We warrant that the service will in all material respects,
                deliver on the agreed terms herein. Should the service be
                disrupted to such an extent that there is likely to be an
                adverse effect to the service provided, we will endeavor to
                notify you of such within a reasonable time. In the event of any
                service delay or failure, we shall take necessary steps to
                ensure speedy service restoration and reduce to the barest
                minimum the extent of such service failures. However we shall
                not be liable to you for any loss or damage.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                As a Biller, You warrant that you are not a payment service
                provider and you do not intend to provide any form of
                aggregation services.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You warrant that you have never had an agreement with a Payment
                scheme which was terminated upon request and/or demand by the
                Payment scheme or any regulatory authority.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You shall, upon written request by us, provide us with any
                information we request of you, including your company
                registration documents, and you hereby give us your consent to
                disclose any information obtained pursuant to this clause, to
                any government regulator or payment scheme provider.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              8.0 Confidentiality
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              By the nature of this Agreement, the parties may have access to
              information that is confidential to one another, such confidential
              information shall include the parties' business methods, salary
              structure, marketing strategies, pricing, competitor information,
              and all other information designated as confidential by either
              party. Each party agrees to maintain the confidentiality of such
              information and to protect the other party's confidential
              information by using all reasonable efforts to prevent any
              unauthorized copying, use, distribution, installation or transfer
              of possession of such information.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              9.0 Trademarks and other Intellectual Proprietary rights
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks, Udaralinks.net and all logos, products, services or
              other content on www.Udaralinks.net or other mobile download
              platforms are the intellectual property of Udaralinks Payment
              Services Limited, or its licensors, and may not be copied,
              imitated or used, in whole or in part, without the prior written
              permission of UDARALINKS. In addition, all page headers, custom
              graphics, button icons, and scripts are service marks, trademarks,
              and/or trade dress of Udaralinks and may not be copied, imitated,
              or used, in whole or in part, without the prior written permission
              of UDARALINKS.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Neither this Agreement, nor your use of Udaralinks will convey
              title or any interest or rights in UDARALINKS' intellectual
              property rights.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              10.0 Assignability
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You may not transfer any rights or obligations you may have under
              this Agreement without our prior written consent. We reserve the
              right to transfer this Agreement or any of our rights and/or
              obligations under this Agreement. You may be able to continue to
              use the platform after such an assignment, if you consent to it.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              11.0 Legal Compliance
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You shall comply with all applicable Nigerian laws, and
              regulations, regarding your use of our Services.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              If any specific term or condition violates the law, that term
              alone shall stand severed or amended as far as is necessary to
              comply with the law.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              12.0 Notices and Amendment
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>12.1 Notices</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You agree that these Terms and Conditions constitute "an Agreement
              duly signed or executed by "you" under any applicable law or
              regulation. To the fullest extent permitted by applicable law,
              this Agreement and any other agreements, notices or other
              documents regarding your account and/or your use of the Service,
              may be provided to you electronically and you agree to receive all
              Notices from UDARALINKS in electronic form.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              You may print a copy of any Notice and retain it for your records.
              All Notices in either electronic or paper format will be
              considered to be in "writing and to have been received and shall
              become effective thirty (30) days after being posted or placed on
              our website.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              12.2 Notice Procedure
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Notices from you to UDARALINKS shall be by email from you to
                admin@udaralinks.com.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Notices by us to you may be placed on our website,
                Udaralinks.net or sent to your email address registered with us.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                A notice by email shall be deemed received by the other party,
                once the email is sent, unless the sending party is aware that
                the email was not received.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Notice posted to our website shall be deemed received upon your
                visit to our site or your first log-in subsequent to the
                posting.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>12.3 Amendment</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              We may amend this Agreement at any time by notice to you or
              posting the amended terms on Udaralinks.net. All amended terms
              shall be effective thirty (30) days (or any other date as we may
              determine) after publishing it on www.Udaralinks.net.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              13.0 Dispute Resolution
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              13.1 Negotiated Settlement or Mediation
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In the event of a dispute arising between you and UDARALINKS, our
              goal is to provide you with a neutral and cost effective means of
              resolving the dispute quickly. In the event of any dispute, the
              Parties shall seek to resolve any such dispute amicably between
              themselves or through a negotiated settlement and in the event of
              their inability to resolve the dispute as aforesaid, the parties
              shall explore a mediated settlement with both Parties appointing
              one(1) Mediator who shall act as a catalyst for resolution.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              13.2 Arbitration
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              If at any time the Parties are unable to amicably resolve any
              dispute(s) through negotiated settlement or mediation, either
              party shall refer the matter to be finally settled by arbitration
              in accordance with the Arbitration & Conciliation Act, Cap A18,
              Laws of the Federation of Nigeria (LFN) 2004. The arbitration
              shall take place in Lagos, Nigeria and be conducted in English
              Language. . If the parties fail to agree on the Arbitrator, the
              Arbitrator shall be appointed by the President of the Chartered
              Institute of Arbitrators UK (Nigeria Branch). Each Party will bear
              its costs save for joint costs which will be borne jointly.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              14.0 Extended Non-use
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Your non-use of our platform for an extended period does not
              terminate this contract. Any monies due and payable by you to us
              before, during or after the period of your passivity shall remain
              payable and become due immediately upon your reactivation.
              Termination or non-use shall not relieve the continuing
              obligations under this Agreement, including but not limited to the
              requirements in Clauses (3.5) Indemnification, (6.3) Access and
              Interference, and (9) Trademarks and other intellectual
              Proprietary Rights of this Agreement.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>15.0 General</Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                1.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You represent that you have the capacity to enter into this
                Agreement.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                2.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                That you are an adult, eligible to operate banking services and
                that you are not under any contractual inhibition known to your
                national or international law.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                3.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                If any provision of this Agreement is held to be invalid or
                unenforceable, such provision shall be struck out and the
                remaining provisions shall be enforceable.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                4.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                You agree that this Agreement and all incorporated agreements
                may be automatically assigned by Udaralinks to a third party in
                the event of a merger or acquisition.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                5.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Headings are for reference purposes only and in no way define,
                limit, construe or describe the scope or extent of such
                section(s).
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                6.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Our failure to act with respect to a breach by you or others
                does not amount to a waiver of our right to act with respect to
                subsequent or similar breaches.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                7.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The non-specification of a particular legal or equitable remedy
                shall not be construed as a waiver, prohibition or limitation of
                any legal or equitable remedies in the event of a breach of any
                of the clauses.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                8.
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Each of the Parties acknowledge that it is acting as an
                independent contractor, and each Party has the sole right and
                obligation to supervise, manage, direct, procure, perform, or
                cause to be performed, all work or other obligations to be
                performed by such Party under this agreement.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              16.0 Entire Agreement
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              This agreement and any documents referred to herein constitute the
              entire agreement between the parties and supersede any and all
              prior agreements between the parties, whether oral or written,
              with respect to the subject matter thereof.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              17.0 Applicable Law
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              This Agreement shall be governed by and interpreted according to
              the laws of the Federal Republic of Nigeria and shall be subject
              to the exclusive jurisdiction of Nigerian courts.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              18.0 Improvement and Changes
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              These Udaralinks functions are subject to continuous technological
              improvement and consequently may change. All changes to Udaralinks
              functions and services shall be published by UDARALINKS from time
              to time on the website www.Udaralinks.net All such published
              changes shall form part of this Agreement.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              19.0 Force Majeure
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              UDARALINKS shall not be in breach of its obligations under this
              Agreement or be responsible for any delay in carrying out its
              obligations if performance is prevented or delayed wholly or in
              part as a consequence of force majeure. Force majeure means any
              circumstance beyond the reasonable control of UDARALINKS including
              but not limited to acts of war, state or national emergency,
              strike, rebellion, insurrection, government sanctions, actions of
              regulatory or supervisory authorities, accident, power failure,
              internet and communication link failure, fire, earthquake, flood,
              storm, tornadoes, hurricane, epidemic or pandemic, collapse of
              buildings, fire, explosion, events of force majeure declared by
              UDARALINKS' partners or service providers involved in the
              performance of UDARALINKS' obligations in this Agreement or any
              other act of God or any technical failure caused by devices,
              matters or materials.
            </Fr_text>
            {/* Anti-Money Laundering Policy */}
            <Fr_text bold style={{marginTop: hp(2.8)}}>
              ANTI-MONEY LAUNDERING POLICY
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>Introduction</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks Limited recognizes the importance of preventing money
              laundering and terrorism financing and is committed to the highest
              standards of Anti-Money Laundering and Combating Terrorist
              Financing in Nigeria. Udaralinks Limited, as a designated
              non-financial institution (DNFI), is subject to applicable
              legislation designed to prevent Money Laundering. This legislation
              includes legislation such as: Terrorism Prevention Act 2103, Money
              Laundering Prohibition Act, 2011 (as amended) and others. To
              fulfil this commitment, Udaralinks Limited has established
              internal policies and procedures. This Policy establishes
              standards which every employee, vendors, and business partner of
              Udaralinks Limited should observe.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>1. Scope</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Money Laundering is the process of any activity by which
              criminally obtained money or other assets (criminal property) are
              exchanged for “clean” money or other assets with no obvious link
              to their criminal origins. Criminal proceeds may take any form,
              including money or money’s worth, securities, tangible property
              and intangible property. Terrorism Financing is defined as
              providing, depositing, distributing or collection funds, directly
              or indirectly, intended to be used, or knowing that these funds
              are to be wholly or partially use, for the committing of terrorist
              acts. This Policy is aimed to prevent any company or individual
              from using Udaralinks Limited for money laundering or terrorist
              financing activities.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>2. Our Policy</Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.1. Customer Due Diligence
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              To prevent Money Laundering, Udaralinks Limited will implement
              processes and procedures in its Line of Businesses (LOBs) to
              conduct appropriate customer due diligence through the Udaralinks
              Limited’s Business Partner Screening forms, identifying the
              customer and verifying the customer’s identity on the basis of the
              following “Know Your Customer” principles: Unusual activity during
              the customer due diligence process or customer engagement should
              be reported immediately to the designated Udaralinks Limited Chief
              Compliance department or commercial department.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.2. Risk-Based Approach
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              For Udaralinks Limited, the threat of being involved in money
              laundering and terrorist financing activities depends directly on
              the type of business that Udaralinks Limited’s customers carry out
              or on the country where Udaralinks Limited’s customers are
              located. Udaralinks Limited will classify its customers based on a
              risk level in its applicable line of business processes and
              procedures. Identifying the potential risk will help to
              effectively manage these risks, implementing controls to mitigate
              the identified risk, if any.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.3. High Risk Customers
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks Limited will not do business with the following
              segments of customers:
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Persons included in any official lists of sanctions, in line
                with the Udaralinks Limited Sanctions Policy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Persons indicating possible involvement in criminal activities,
                based on available information about them;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Persons with businesses in which the legitimacy of activity or
                source of funds can’t be reasonably verified;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Persons refusing to provide the required information or
                documentation; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Entities whose shareholder/control structure cannot be
                determined.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.4. Record Keeping
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Customer documentation can either be submitted in physical or
              electronic form. An appropriate record of the received
              documentation, steps taken and copies of, or reference to, the
              documentation of the customer must be kept. Records should be kept
              for as long as the relationship endures with the customer and for
              at least five (5) years after the relationship ends. In countries
              where this period exceeds the established period of time, the
              legally established time period will be considered to comply with
              local law.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              2.5. Designation of Anti- Money Laundering Reporting Officer
              (AMLO){' '}
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks Limited will designate an Anti-Money Laundering
              Officer. The Anti-Money Laundering officer will be responsible
              for:
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Considering internal reports of money laundering;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Reporting suspicions of money laundering to the responsible
                authorities; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Acting as key liaison with the money laundering authorities.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Training the business and its employees on money laundering;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Submitting reports to the Special Control Unit Against Money
                Laundering (SCUML)
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Advising on proceed after a report of suspicion on money
                laundering has been raised; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Designing and implementing Anti-Money Laundering processes and
                procedures.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3. Reporting Suspicious Activity
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks Limited expects that, if any employee, contractor, or
              business partner becomes aware of any suspicion or knowledge of
              possible Money Laundering activity, this is reported without undue
              delay to the AMLO. This can either be done contacting directly the
              AMLO or his deputy. A report on suspicious activity should
              contain, at least, the following information, which will be
              confirmed by the AMLO:
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Identity of the person raising the suspicion;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Date of the report;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Other individuals involved otherwise;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Deliverance of facts;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                What is suspected and why; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Any possible involvement of Udaralinks Limited.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The AMLO may make reasonable enquiries within Udaralinks Limited
              to confirm these suspicions or obtain additional information to
              confirm these suspicions. After this assessment, the AMLO will
              determine whether or not it is necessary to file an official
              report to the responsible money laundering authority. Details of
              internal reports will be held by the AMLO separately, excluded
              from customer files, to avoid inadvertent or inappropriate
              disclosure.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>4. Training</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks Limited has a high commitment to compliance and all
              employees and contractors are required to complete mandatory
              compliance training, including provisions on anti-money
              laundering, on an annual basis. Job-specific and comprehensive
              anti-money laundering training should be provided to the relevant
              employees to help recognize and deal with transactions which may
              lead to money laundering or terrorist financing.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              5. Policy Review and Audits
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Regular reviews of the effectiveness of this Policy are carried
              out in addition to audits periodically undertaken by the
              Udaralinks Limited Internal Audit function. This provides
              Executive Management and the Board Audit Committee with the
              necessary assurance and information regarding the operating
              effectiveness of Udaralinks Limited’s controls and processes
              relating to this Policy.
            </Fr_text>
            <Fr_text bold style={{marginTop: hp(2.8)}}>
              DATA PRIVACY AND PROTECTION POLICY
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>1. INTRODUCTION</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              As part of our operations, Udaralinks Limited (“Udaralinks” or
              “the Company”) collects and processes certain types of information
              (such as name, telephone numbers, address etc.) of individuals
              that makes them easily identifiable. These individuals include
              current, past and prospective employees, vendors,
              customers/clients and their representatives, next-of-kin and other
              individuals whom Udaralinks communicate or deals with, jointly
              and/or severally (“Data Subjects”).
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Maintaining the Data Subject’s trust and confidence requires that
              Data Subjects do not suffer negative consequences/effects as a
              result of providing Udaralinks with their Personal Data. To this
              end, Udaralinks is firmly committed to complying with applicable
              data protection laws, regulations, rules and principles to ensure
              security of Personal Data handled by the Company. This Data
              Privacy & Protection Policy (“Policy”) describes the minimum
              standards that must be strictly adhered to regarding the
              collection, storage, use and disclosure of Personal Data and
              indicates that Udaralinks is dedicated to processing the Personal
              Data it receives or processes with absolute confidentiality and
              security.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              This Policy applies to all forms of systems, operations and
              processes within the Udaralinks environment that involve the
              collection, storage, use, transmission and disposal of Personal
              Data.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Failure to comply with the data protection rules and guiding
              principles set out in the Nigeria Data Protection Regulations 2019
              (NDPR) as well as those set out in this Policy is a material
              violation of Udaralinks’s policies and may result in disciplinary
              action as required, including suspension or termination of
              employment or business relationship.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>2. SCOPE</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              This Policy applies to all forms of systems, operations and
              processes within the Udaralinks environment that involve the
              collection, storage, use, transmission and disposal of Personal
              Data.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3. GENERAL PRINCIPLES FOR PROCESSING OF PERSONAL DATA
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks is committed to maintaining the principles in the NDPR
              regarding the processing of Personal Data.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              To demonstrate this commitment as well as our aim of creating a
              positive privacy culture within Udaralinks, Udaralinks adheres to
              the following basic principles relating to the processing of
              Personal Data:
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.1 Lawfulness, Fairness and Transparency
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Personal Data must be processed lawfully, fairly and in a
              transparent manner at all times. This implies that Personal Data
              collected and processed by or on behalf of Udaralinks must be in
              accordance with the specific, legitimate and lawful purpose
              consented to by the Data Subject, save where the processing is
              otherwise allowed by law or within other legal grounds recognized
              in the NDPR.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.2 Data Accuracy
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Personal Data must be accurate and kept up-to-date. In this
              regard, Udaralinks:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                shall ensure that any data it collects and/or processes is
                accurate and not misleading in a way that could be harmful to
                the Data Subject;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                will make efforts to keep Personal Data updated where reasonable
                and applicable; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                will make timely efforts to correct or erase Personal Data when
                inaccuracies are discovered.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.3 Purpose Limitation
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks collects Personal Data only for the purposes identified
              in the appropriate Udaralinks Privacy Notice or any other relevant
              document or based on any other non – written communication (where
              applicable), provided to the Data Subject and for which Consent
              has been obtained. Such Personal Data cannot be reused for another
              purpose that is incompatible with the original purpose, except a
              new Consent is obtained.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.4 Data Minimization
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.4.1 Udaralinks limits Personal Data collection and usage to data
              that is relevant, adequate, and absolutely necessary for carrying
              out the purpose for which the data is processed.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.4.2 Udaralinks will evaluate whether and to what extent the
              processing of personal data is necessary and where the purpose
              allows, anonymized data must be used.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.5 Integrity and Confidentiality
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.5.1 Udaralinks shall establish adequate controls in order to
              protect the integrity and confidentiality of Personal Data, both
              in digital and physical format and to prevent personal data from
              being accidentally or deliberately compromised.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.5.2 Personal data of Data Subjects must be protected from
              unauthorized viewing or access and from unauthorized changes to
              ensure that it is reliable and correct.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.5.3 Any personal data processing undertaken by an employee who
              has not been authorized to carry such out as part of their
              legitimate duties is un-authorized.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.5.4 Employees may have access to Personal Data only as is
              appropriate for the type and scope of the task in question and are
              forbidden to use Personal Data for their own private or commercial
              purposes or to disclose them to unauthorized persons, or to make
              them available in any other way.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.5.5 Human Resources Department must inform employees at the
              start of the employment relationship about the obligation to
              maintain personal data privacy. This obligation shall remain in
              force even after employment has ended.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.6 Personal Data Retention
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.6.1 All personal information shall be retained, stored and
              destroyed by Udaralinks in line with relevant Legislative and
              Regulatory Guidelines. For all Personal Data and records obtained,
              used and stored within the Company, Udaralinks shall perform
              periodical reviews of the data retained to confirm the accuracy,
              purpose, validity and requirement to retain.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.6.2 To the extent permitted by applicable laws and without
              prejudice to Udaralinks’s Retention Policy, the length of storage
              of Personal Data shall, amongst other things, be determined by:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                the contract terms agreed between Udaralinks and the Data
                Subject or as long as it is needed for the purpose for which it
                was obtained; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                whether the transaction or relationship has statutory
                implication or a required retention period; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                an express request for deletion by the Data Subject; except
                where such Data Subject is under an investigation or under a
                subsisting contract which may require further processing or
                where the data relates to criminal records; or
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                whether Udaralinks has another lawful basis for retaining that
                information beyond the period for which it is necessary to serve
                the original purpose.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Notwithstanding the foregoing and pursuant to the NDPR, Udaralinks
              shall be entitled to retain and process Personal Data for
              archiving, scientific research, historical research or statistical
              purposes for public interest.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.6.3 Udaralinks would forthwith delete Personal Data in
              Udaralinks’s possession where such Personal Data is no longer
              required by Udaralinks or in line with Udaralinks’s Retention
              Policy, provided no law or regulation being in force requires
              Udaralinks to retain such Personal Data.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              3.7 Accountability
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.7.1 Udaralinks demonstrates accountability in line with the NDPR
              obligations by monitoring and continuously improving data privacy
              practices within Udaralinks.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              3.7.2 Any individual or employee who breaches this Policy may be
              subject to internal disciplinary action (up to and including
              termination of their employment); and may also face civil or
              criminal liability if their action violates the law.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              4. DATA PRIVACY NOTICE
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.1 Udaralinks considers Personal Data as confidential and as such
              must be adequately protected from unauthorized use and/or
              disclosure. Udaralinks will ensure that the Data Subjects are
              provided with adequate information regarding the use of their
              Personal Data as well as acquire their respective Consent, where
              necessary.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              4.2 Udaralinks shall display a simple and conspicuous notice
              (Privacy Notice) on any medium through which Personal Data is
              being collected or processed. The following information must be
              considered for inclusion in the Privacy Notice, as appropriate in
              distinct circumstances in order to ensure fair and transparent
              processing:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Description of collectible Personal Data
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Purposes for which Personal Data is collected, used and
                disclosed
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                What constitutes Data Subject’s Consent
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Purpose for the collection of Personal Data
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The technical methods used to collect and store the information
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Available remedies in the event of violation of the Policy and
                the timeframe for remedy.
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Adequate information in order to initiate the process of
                exercising their privacy rights, such as access to,
                rectification and deletion of Personal Data,
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              5. PURPOSE AND CATEGORY OF DATA COLLECTED AND PROCESSED
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.1. We will only collect and use your Personal data if we have
              obtained your prior consent or have a lawful and legitimate
              interest to do so. You are at liberty to withdraw your consent at
              any time by contacting the Data Protection Officer at
              admin@udaralinks.com. The following are data collected and
              processed by Udaralinks:
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Communication data (e.g. name, telephone, e-mail, address, IP
              address);
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Key contract data (contractual relationship, product or
              contractual interest);
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Customer history;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Contract billing and payments data;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Planning and control data;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Movement data;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Disclosed information (from third parties);
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Employee and prospective employee data collected for recruitment
              and onboarding purpose;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              5.2. The following are methods adopted by Udaralinks in the
              collection and storage of personal data –
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                marginTop: hp(1, 4),
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Cookies;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              CCTV recordings;
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Biometric Tools
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              6. LEGAL GROUNDS FOR PROCESSING OF PERSONAL DATA
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              In line with the provisions of the NDPR, processing of Personal
              Data by Udaralinks shall be lawful if at least one of the
              following applies:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                the Data Subject has given Consent to the processing of his/her
                Personal Data for one or more specific purposes;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                the processing is necessary for the performance of a contract to
                which the Data Subject is party or in order to take steps at the
                request of the Data Subject prior to entering into a contract;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                processing is necessary for compliance with a legal obligation
                to which Udaralinks is subject;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                processing is necessary in order to protect the vital interests
                of the Data Subject or of another natural person, and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                processing is necessary for the performance of a task carried
                out in the public interest or in exercise of official public
                mandate vested in Udaralinks.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>7. CONSENT</Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Where processing of Personal Data is based on consent, Udaralinks
              shall obtain the requisite consent of Data Subjects at the time of
              collection of Personal Data. In this regard, Udaralinks will
              ensure:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that the specific purpose of collection is made known to the
                Data Subject and the Consent is requested in a clear and plain
                language;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that the Consent is freely given by the Data Subject and
                obtained without fraud, coercion or undue influence;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that the Consent is sufficiently distinct from other matters to
                which the Data Subject has agreed;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that the Consent is explicitly provided in an affirmative
                manner;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that Consent is obtained for each purpose of Personal Data
                collection and processing; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                that it is clearly communicated to and understood by Data
                Subjects that they can update, manage or withdraw their Consent
                at any time.
              </Fr_text>
            </Bg_view>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              7.1 Valid Consent
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              7.1.1 For Consent to be valid, it must be given voluntarily by an
              appropriately informed Data Subject. In line with regulatory
              requirements, Consent cannot be implied. Silence, pre-ticked boxes
              or inactivity does not constitute Consent under the NDPR.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              7.1.2 Consent in respect of Sensitive Personal Data must be
              explicit. A tick of the box would not suffice.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              7.2 Consent of Minors
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The Consents of minors (under the age of 18) will always be
              protected and obtained from minor’s representatives in accordance
              with applicable regulatory requirements.
            </Fr_text>
            <Fr_text style={{marginVertical: hp(2.8)}}>
              8. DATA SUBJECT RIGHTS
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              8.1 All individuals who are the subject of Personal Data held by
              Udaralinks are entitled to the following rights:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to request for and access their Personal Data collected
                and stored. Where data is held electronically in a structured
                form, such as in a Database, the Data Subject has a right to
                receive that data in a common electronic format;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to information on their personal data collected and
                stored;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to objection or request for restriction;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to object to automated decision making;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to request rectification and modification of their data
                which Udaralinks keeps;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to request for deletion of their data, except as
                restricted by law or Udaralinks’s statutory obligations;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (g)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to request the movement of data from Udaralinks to a Third
                Party; this is the right to the portability of data; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (h)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Right to object to, and to request that Udaralinks restricts the
                processing of their information except as required by law or
                Udaralinks’s statutory obligations
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              8.2 Udaralinks’s well-defined procedure regarding how to handle
              and answer Data Subject’s requests are contained in Udaralinks’s
              Data Subject Access Request Policy.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              8.3 Data Subjects can exercise any of their rights by completing
              the Udaralinks’s Subject Access Request (SAR) Form and submitting
              to the Company via udaralinks@udaralinks.com.
            </Fr_text>{' '}
            <Fr_text style={{marginVertical: hp(2.8)}}>
              9. TRANSFER OF PERSONAL DATA
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              9.1 Third Party Processor within Nigeria
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks may engage the services of third parties in order to
              process the Personal Data of Data Subjects collected by the
              Company. The processing by such third parties shall be governed by
              a written contract with Udaralinks to ensure adequate protection
              and security measures are put in place by the third party for the
              protection of Personal Data in accordance with the terms of this
              Policy and the NDPR.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              8.2 Transfer of Personal Data to Foreign Country
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              8.2.1 Where Personal Data is to be transferred to a country
              outside Nigeria, Udaralinks shall put adequate measures in place
              to ensure the security of such Personal Data. In particular,
              Udaralinks shall, among other things, conduct a detailed
              assessment of whether the said country is on the National
              Information Technology Development Agency (NITDA) White List of
              Countries with adequate data protection laws.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              9.2.2 Transfer of Personal Data out of Nigeria would be in
              accordance with the provisions of the NDPR. Udaralinks will
              therefore only transfer Personal Data out of Nigeria on one of the
              following conditions:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The consent of the Data Subject has been obtained;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The transfer is necessary for the performance of a contract
                between Udaralinks and the Data Subject or implementation of
                pre-contractual measures taken at the Data Subject’s request;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The transfer is necessary to conclude a contract between
                Udaralinks and a third party in the interest of the Data Subject
                Udaralinks;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The transfer is necessary for reason of public interest
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The transfer is for the establishment, exercise or defence of
                legal claims
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                The transfer is necessary in order to protect the vital
                interests of the Data Subjects or other persons, where the Data
                Subject is physically or legally incapable of giving consent.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Provided, in all circumstances, that the Data Subject has been
              manifestly made to understand through clear warnings of the
              specific principle(s) of data protection that are likely to be
              violated in the event of transfer to a third country, this proviso
              shall not apply to any instance where the Data Subject is
              answerable in duly established legal action for any civil or
              criminal claim in a third country.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks will take all necessary steps to ensure that the
              Personal Data is transmitted in a safe and secure manner. Details
              of the protection given to your information when it is transferred
              outside Nigeria shall be provided to you upon request.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              9.2.3 Where the recipient country is not on the White List and
              none of the conditions stipulated in Section 8.2.2 of this Policy
              is met, Udaralinks will engage with NITDA and the Office of the
              Honourable Attorney General of the Federation (HAGF) for approval
              with respect to such transfer.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10. DATA BREACH MANAGEMENT PROCEDURE
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10.1 A data breach procedure is established and maintained in
              order to deal with incidents concerning Personal Data or privacy
              practices leading to the accidental or unlawful destruction, loss,
              alteration, unauthorized disclosure of, or access to, Personal
              Data transmitted, stored or otherwise processed.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10.2 All employees must inform their designated line manager or
              the DPO of Udaralinks immediately about cases of violations of
              this Policy or other regulations on the protection of Personal
              Data, in accordance with Udaralinks’s Personal Data Breach
              Management Procedure in respect of any:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                improper transmission of Personal Data across borders;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                loss or theft of data or equipment on which data is stored;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                accidental sharing of data with someone who does not have a
                right to know this information;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                inappropriate access controls allowing unauthorized use;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                equipment failure;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                human error resulting in data being shared with someone who does
                not have a right to know; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (g)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                hacking attack.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10.3 A data protection breach notification must be made
              immediately after any data breach to ensure that:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                immediate remedial steps can be taken in respect of the breach;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                any reporting duties to NITDA or any other regulatory authority
                can be complied with;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                any affected Data Subject can be informed; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                any stakeholder communication can be managed.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10.4 When a potential breach has occurred, Udaralinks will
              investigate to determine if an actual breach has occurred and the
              actions required to manage and investigate the breach as follows:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Validate the Personal Data breach;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Ensure proper and impartial investigation (including digital
                forensics if necessary) is initiated, conducted, documented, and
                concluded;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Identify remediation requirements and track resolution;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Report findings to the top management;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Coordinate with appropriate authorities as needed;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Coordinate internal and external communications; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (g)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Ensure that impacted Data Subjects are properly notified, if
                necessary.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              10.5 You can read more about Udaralinks’s Personal Data Breach
              Management Procedure.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              11. DATA PROTECTION IMPACT ASSESSMENT
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks shall carry out a Data Protection Impact Assessment
              (DPIA) in respect of any new project or IT system involving the
              processing of Personal Data to determine whenever a type of
              processing is likely to result in any risk to the rights and
              freedoms of the Data Subject.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks shall carry out the DPIA in line with the procedures
              laid down in the Udaralinks Data Protection Impact Assessment
              Policy.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              12. DATA SECURITY
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              12.1 All Personal Data must be kept securely and should not be
              stored any longer than necessary. Udaralinks will ensure that
              appropriate measures are employed against unauthorized access,
              accidental loss, damage and destruction to data. This includes the
              use of password-encrypted databases for digital storage and locked
              cabinets for those using paper form.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              12.2 To ensure security of Personal Data, Udaralinks will, among
              other things, implement the following appropriate technical
              controls:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Industry-accepted hardening standards, for workstations,
                servers, and databases;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Full disk software encryption on all corporate
                workstation/laptops operating systems drives storing Personal
                and Personal/Sensitive Data;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Encryption at rest including key management of key databases;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Enable Security Audit Logging across all systems managing
                Personal Data;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Restrict the use of removable media such as USB flash, disk
                drives;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Anonymization techniques on testing environments; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (g)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Physical access control where Personal Data are stored in
                hardcopy.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              13. DATA PROTECTION OFFICER
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks has appointed a Data Protection Officer(s) (DPO)
              responsible for overseeing the Company’s data protection strategy
              and its implementation to ensure compliance with the NDPR
              requirements. The DPO is knowledgeable in data privacy and
              protection principles and is familiar with the provisions of the
              NDPR.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The contact details of the Data Protection officer are as follows
              –
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The Data Protection Officer
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Plot 1 Providence Street,
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Lekki Phase 1,
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Lagos, Nigeria
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              admin@udaralinks.com
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                marginTop: hp(1, 4),
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The main tasks of the DPO include:
            </Fr_text>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (a)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                administering data protection policies and practices of
                Udaralinks;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (b)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                monitoring compliance with the NDPR and other data protection
                laws, data protection policies, awareness-raising, training, and
                audits;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (c)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                advice the business, management, employees and third parties who
                carry on processing activities of their obligations under the
                NDPR;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (d)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                acts as a contact point for Udaralinks;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (e)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                monitor and update the implementation of the data protection
                policies and practices of Udaralinks and ensure compliance
                amongst all employees of Udaralinks;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (f)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                ensure that Udaralinks undertakes a Data Impact Assessment and
                curb potential risk in Udaralinks data processing operations;
                and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal style={{marginBottom: hp(1.4)}}>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginHorizontal: wp(2),
                }}>
                (g)
              </Fr_text>
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                maintain a Data Base of all Udaralinks data collection and
                processing operations of Udaralinks.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              14. TRAINING
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks shall ensure that employees who collect, access and
              process Personal Data receive adequate data privacy and protection
              training in order to develop the necessary knowledge, skills and
              competence required to effectively manage the compliance framework
              under this Policy and the NDPR with regard to the protection of
              Personal Data. On an annual basis, Udaralinks shall develop a
              capacity building plan for its employees on data privacy and
              protection in line with the NDPR.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              15. DATA PROTECTION AUDIT
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks shall conduct an annual data protection audit through a
              licensed Data Protection Compliance Organization (DPCOs) to verify
              Udaralinks’s compliance with the provisions of the NDPR and other
              applicable data protection laws.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              The audit report will be certified and filed by the DPCO to NITDA
              as required under the NDPR.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              16. RELATED POLICIES AND PROCEDURES
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              This Policy shall be read in conjunction with the following
              policies and procedures of Udaralinks:
            </Fr_text>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Personal Data Breach Management Policy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                IT Security Policy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Document Retention Policy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Cookies Policy;
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Privacy Notices; and
              </Fr_text>
            </Bg_view>
            <Bg_view horizontal>
              <Feather name="circle" size={wp(2.5)} />
              <Fr_text
                size={wp(3.8)}
                style={{
                  lineHeight: hp(4),
                  marginLeft: wp(2),
                }}>
                Data Protection Impact Assessment Procedure.
              </Fr_text>
            </Bg_view>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              17. CHANGES TO THE POLICY
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              Udaralinks reserves the right to change, amend or alter this
              Policy at any point in time. If we amend this Policy, we will
              provide you with the updated version.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              18. GLOSSARY
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              ‘‘Consent’’ means any freely given, specific, informed and
              unambiguous indication of the Data Subject’s wishes by which he or
              she, through a statement or a clear affirmative action, signifies
              agreement to the processing of Personal Data relating to him or
              her.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “Database” means a collection of data organized in a manner that
              allows access, retrieval, deletion and processing of that data; it
              includes but not limited to structured, unstructured, cached and
              file system type Databases.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “Data Processor means a person or organization that processes
              Personal Data on behalf and on instructions of Udaralinks.of
              Personal Data relating to him or her.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “DPCO” means an organization registered by NITDA to provide data
              protection audit, compliance and training services to public and
              private organizations who process Personal Data in Nigeria.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “Data Subject” means any person, who can be identified, directly
              or indirectly, by reference to an identification number or to one
              or more factors specific to his physical, physiological, mental,
              economic, cultural or social identity.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “NDPR” means the Nigerian Data Protection Regulation, 2019.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “Personal Data” means any information relating to an identified or
              identifiable natural person (‘Data Subject’); an identifiable
              natural person is one who can be identified, directly or
              indirectly, in particular by reference to an identifier such as a
              name, an identification number, location data, an online
              identifier or to one or more factors specific to the physical,
              physiological, genetic, mental, economic, cultural or social
              identity of that natural person; It can be anything from a name,
              address, a photo, an email address, bank details, posts on social
              networking websites, medical information, and other unique
              identifier such as but not limited to MAC address, IP address,
              IMEI number, IMSI number, SIM, Personal Identifiable Information
              (PII) and others.
            </Fr_text>
            <Fr_text
              size={wp(3.8)}
              style={{
                lineHeight: hp(4),
                textAlign: 'justify',
              }}>
              “Sensitive Personal Data” means data relating to religious or
              other beliefs, sexual orientation, health, race, ethnicity,
              political views, trades union membership, criminal records or any
              other sensitive personal information.
            </Fr_text>
          </Bg_view>

          <Line />
          <Bg_view style={{margin: wp(4), alignItems: 'center'}}>
            <Fr_text centralise size={wp(4.5)}>
              For more information visit -
            </Fr_text>
            <Text_btn
              centralise
              accent
              italic
              text="udaralinks.com"
              size={wp(5)}
              action={this.more_info}
            />
          </Bg_view>
        </ScrollView>
      </Bg_view>
    );
  };
}

export default Privacy_policy;
