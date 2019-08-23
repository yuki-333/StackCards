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


export default class FruitsScreen extends Component {
  static navigationOptions = {
      title: '果物',
      headerStyle: {backgroundColor: 'skyblue',},
      headerTintColor: 'white',
    };
  
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
  


  render() {
    return (
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
          loop={true}
        >

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.photoFlame}>
                <Text style={styles.lastCard}>Auther:</Text>
                <Text style={styles.lastCard}>ST Curly</Text>
              </View>
              <View style={[styles.cardButtonBase]}>
                <Text>ありがとうございます。</Text>
              </View>
            </View>
          </Card>
         
          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.photoFlame}>
              <Text style={styles.lastCard}>HOMEPAGE:</Text>
              <Text>http://natullary-curly-project.com</Text>
              </View>
              <View style={[styles.cardButtonBase]}>
                <Text>これからもよろしくお願いします</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.photoFlame}>
                <Text style={styles.lastCard}>ありがとうございます</Text>
              </View>
              <View style={[styles.cardButtonBase]}>
                <Text>言語臨床などにお使いください</Text>
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
      justifyContent: 'center',
      //justifyContent: 'space-between'から'center'に変更している
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
      height: scale(45),
      width: scale(150),
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
      fontSize: scale(35),
      color: 'black',
    }
});
