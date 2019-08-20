import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import { 
  moderateScale,
  scale,
 } from 'react-native-size-matters';

import FruitsScreen from './Fruits';
import VegesScreen from './Veges'
import SetumeiScreen from './Setsumei'
import ToolsScreen from './Tools';
import CarsScreen from './Cars'

const SCREEN_WIDTH = Dimensions.get('window').width

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HOME',
    headerStyle: {backgroundColor: 'skyblue'},
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '絵CARD'
    }
  }

  render() {
    return(
      <View style={styles.base}>
      <View style={styles.message}>
        <Text style={styles.textStyle1}>{this.state.message}</Text>
      </View>
        <View style={styles.contents}>
     
        <View style={styles.allButtonContainer}>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction0}>
            <Text style={styles.buttonText} >果物</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction1}>
          <Text style={styles.buttonText} >野菜</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction4}>
          <Text style={styles.buttonText} >乗り物</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction3}>
          <Text style={styles.buttonText} >日用品</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction2}>
          <Text style={styles.buttonText} >CREDIT</Text>
          </TouchableOpacity>

        </View>
        </View>
          <View style={styles.footer}>
            <Text style={styles.textStyle2}  >© 2019 ST Curly</Text>
          </View>
      </View>
    );
  }
  doPageAction0 = () => {
    this.props.navigation.navigate('Fruits')
  }
  doPageAction1 = () => {
    this.props.navigation.navigate('Veges')
  }
  doPageAction2 = () => {
    this.props.navigation.navigate('Setumei')
  }
  doPageAction3 = () => {
    this.props.navigation.navigate('Tools')
  }
  doPageAction4 = () => {
    this.props.navigation.navigate('Cars')
  }
}

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Fruits: { screen: FruitsScreen },
    Veges: { screen: VegesScreen },
    Setumei: { screen: SetumeiScreen },
    Tools: { screen: ToolsScreen},
    Cars: {screen: CarsScreen},
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
  },
  message: {
    flex: 2,
    width: SCREEN_WIDTH - 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
  },
  contents: {
    flex: 14,
    width: SCREEN_WIDTH - 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: scale(10),
    height: scale(55),
    width: scale(300),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderColor: 'lightskyblue',
    borderWidth: 5,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: scale(27),
    color: 'white',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    width: SCREEN_WIDTH - 20,
  },
  textStyle1: {
    fontSize: scale(30),
    color: 'white',
  },
  textStyle2: {
    fontSize: moderateScale(10),
    color: 'black',
  }
});