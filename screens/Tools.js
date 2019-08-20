/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
  Button,
  AsyncStorage,
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import { scale, verticalScale, } from 'react-native-size-matters';


export default class ToolsScreen extends Component {
  static navigationOptions = {
      title: '日用品',
      headerStyle: {backgroundColor: 'skyblue',},
      headerTintColor: 'white',
    };
  
    constructor(props) {
      super(props);
      this.state = {
        reads0: '',
        reads1: '',
        reads2: '',
        reads3: '',
        reads4: '',
        reads5: '',
        reads6: '',
        reads7: '',
        reads8: '',
        reads9: '',
      }
    }

    doAction0 = () => {
      this.setState({reads0: 'いす'})
    }
    doDelete0 = () => {
      this.setState({reads0: ''})
    }

    doAction1 = () => {
      this.setState({reads1: 'とけい'})
    }
    doDelete1 = () => {
      this.setState({reads1: ''})
    }

    doAction2 = () => {
      this.setState({reads2: 'はし'})
    }
    doDelete2 = () => {
      this.setState({reads2: ''})
    }

    doAction3 = () => {
      this.setState({reads3: '電話'})
    }
    doDelete3 = () => {
      this.setState({reads3: ''})
    }

    doAction4 = () => {
      this.setState({reads4: 'こっぷ'})
    }
    doDelete4 = () => {
      this.setState({reads4: ''})
    }

    doAction5 = () => {
      this.setState({reads5: 'さら'})
    }
    doDelete5 = () => {
      this.setState({reads5: ''})
    }

    doAction6 = () => {
      this.setState({reads6: 'はぶらし'})
    }
    doDelete6 = () => {
      this.setState({reads6: ''})
    }

    doAction7 = () => {
      this.setState({reads7: 'てーぶる'})
    }
    doDelete7 = () => {
      this.setState({reads7: ''})
    }

    doAction8 = () => {
      this.setState({reads8: 'ほん'})
    }
    doDelete8 = () => {
      this.setState({reads8: ''})
    }

    doAction9 = () => {
      this.setState({reads9: 'てぃっしゅ'})
    }
    doDelete9 = () => {
      this.setState({reads9: ''})
    }
 


  render() {
    return (
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
          loop={true}
        >

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads0}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Isu.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction0} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete0} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads1}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Tokei.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction1} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete1} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads2}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Hasi.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction2} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete2} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads3}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Denwa.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction3} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete3} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads4}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Cap.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction4} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete4} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads5}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Sara.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction5} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete5} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads6}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Haburasi.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction6} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete6} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads7}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Table.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction7} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete7} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads8}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/Hon.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction8} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete8} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads9}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image source={require("../assets/images/Tools/thissyu.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction9} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete9} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>


          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.photoFlame}>
                <Text style={styles.lastCard}>絵CARD</Text>
              </View>
              <View style={[styles.cardButtonBase]}>
                <Text>2019</Text>
              </View>
            </View>
          </Card>
         
          
         
        </CardStack>


        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              {/* <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              {/* <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              {/* <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  base: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  content: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center',
  },
  cardBase: {
      width: scale(320),
      height: verticalScale(520),
      padding: scale(5),
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: 'lightskyblue',
    },
    read: {
      flexDirection: 'row',
      flex: 1,
      margin: 7,
      width: scale(270),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    readText: {
      fontSize: scale(30),
    },
    photoFlame: {
      flex: 6,
      backgroundColor: 'white',
      width: scale(280),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: 'white',
      marginTop: 15,
    },
    cardButtonBase: {
      flexDirection: 'row',
      flex: 1,
      width: scale(280),
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 10,
      backgroundColor: 'skyblue'
    },
    cbbc0: {
      backgroundColor: 'skyblue',
    },
    cbbc1: {
      backgroundColor: 'skyblue',
    },
    cardButton: {
      height: scale(35),
      width: scale(90),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 'white',
      flexDirection: 'row',
      
    },
    cardText: {
      fontSize: scale(20),
      color: 'white',
    },

   footer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: null,
  },
  buttonContainer: {
      width: 220,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  button: {
      shadowColor: 'rgba(0,0,0,0.20)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      backgroundColor: 'skyblue',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 0,
  },
  orange:{
      width:55,
      height:55,
      borderWidth:6,
      borderColor:'lightskyblue',
      borderWidth:4,
      borderRadius: 30,
      marginTop: 0,
    },
    green:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'lightskyblue',
    },
    red:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'lightskyblue',
    },
    footerText: {
      fontSize: scale(14),
      color: 'black',
    },
    lastCard: {
      fontSize: scale(50),
      color: 'skyblue',
    }
});
