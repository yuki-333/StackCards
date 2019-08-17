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
import CardSrack, { Card } from 'react-native-card-stack-swiper';
import { ImagePicker, Permissions } from 'expo';
import { scale, verticalScale, } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import ChangeText from './Input'

import Storage from 'react-native-storage';

//ストレージの設定
var storage = new Storage({
  // 最大容量, 1000がデフォルト 
  size: 1000,

  // AsyncStorageを使う（WEBでもRNでも）。
  // セットしないとリロードでデータが消えるよ。
  storageBackend: AsyncStorage,
   
  // （たぶん）キャッシュの期限。デフォルトは一日(1000 * 3600 * 24 milliseconds).
  // nullにも設定できて、期限なしの意味になるよ。
  defaultExpires: 1000 * 3600 * 24,
   
  // メモリにキャッシュするかどうか。デフォルトは true。
  enableCache: true,
   
  // リモートシンクの設定（だと思う。）
  sync : {
      // これについては後述
  }
})

storage.save({
  key: 'sample',
  id: '1234',
  data: {
      'name' : 'mimi',
      'status' : 'nemui'
  },
});

storage.load({
  key: 'sample',
  id: '1234'
}).then(ret => {
  // ロードに成功したら
  console.log(ret.name + ' is ' + ret.status);
}).catch(err => {
  // ロードに失敗したら
  console.warn(err.message);
  switch (err.name) {
    case 'NotFoundError':
      // 見つかんなかった場合の処理を書こう
      break;
    case 'ExpiredError':
      // キャッシュ切れの場合の処理を書こう
      break;
  }
});







export default class App extends Component {
  static navigationOptions = {
    title: 'PHOTO',
    headerStyle: {backgroundColor: 'purple',},
    headerTintColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      appText: '',//テキストインプットの初期状態
      appText1: '',//2枚目テキストインプットの初期状態
      appText2: '',//3枚目テキストインプットの初期状態
      appText3: '',//4枚目テキストインプットの初期状態
      appText4: '',//5枚目テキストインプットの初期状態
      appText5: '',//6枚目テキストインプットの初期状態
    }
  }
  state = {
    hasCameraRollPermission: null,
    photo0: null,
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null,
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: status === 'granted'});
  }
  writeText = text => {
    this.setState({
      appText: text,
    })
  }
  writeText1 = text => {
    this.setState({
      appText1: text,
    })
  }
  writeText2 = text => {
    this.setState({
      appText2: text,
    })
  }
  writeText3 = text => {
    this.setState({
      appText3: text,
    })
  }
  writeText4 = text => {
    this.setState({
      appText4: text,
    })
  }
  writeText5 = text => {
    this.setState({
      appText5: text,
    })
  }
  doReadAction = () => {
    this.setState({read: this.state.appText});
    }
  doOffAction = () => {
    this.setState({
      read: false,
    })
  }
  doReadAction1 = () => {
    this.setState({read1: this.state.appText1});
    }
  doOffAction1 = () => {
    this.setState({
      read1: false,
    })
  }
  doReadAction2 = () => {
    this.setState({read2: this.state.appText2});
    }
  doOffAction2 = () => {
    this.setState({
      read2: false,
    })
  }
  doReadAction3 = () => {
    this.setState({read3: this.state.appText3});
    }
  doOffAction3 = () => {
    this.setState({
      read3: false,
    })
  }
  doReadAction4 = () => {
    this.setState({read4: this.state.appText4});
    }
  doOffAction4 = () => {
    this.setState({
      read4: false,
    })
  }
  doReadAction5 = () => {
    this.setState({read5: this.state.appText5});
    }
  doOffAction5 = () => {
    this.setState({
      read5: false,
    })
  }
  render(){
    let { hasCameraRollPermission, photo0, photo1, photo2, photo3, photo4, photo5, } = this.state;
    console.log(this.state);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.base}>
       <CardSrack
         style={styles.content}//全体的なカード位置の調整
         renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>カードがありません</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}
         ref={swiper => {this.swiper = swiper}}
         onSwiped={() => console.log('onSwiped')}
         onSwipedLeft={() => console.log('onSwipedLeft')}
         loop={true}
       >
        {/*カード1 */}
        <Card>
         <View style={[styles.cardBase, styles.cbbc0]}>
          <View style={styles.read}>
           <Text style={styles.readText}>{this.state.read}</Text>
          </View>
          <View style={styles.photoFlame}>
          {hasCameraRollPermission && photo0 && <Image style={styles.thumbnail} source={{uri: photo0.uri}}/>}
          </View>
          <View style={[styles.cardButtonBase]}>
            {/*テキストインプット */}
            <View style={styles.textBase}>
             <ChangeText writeText={this.writeText} />
            </View>
           <View>
            <TouchableOpacity style={styles.cardPhotoButton} onPress={async () => {
               let result = await ImagePicker.launchImageLibraryAsync();
               console.log(result);
               this.setState({ photo0: result})
             }} >
             <Text style={styles.cardText} >写真</Text>
            </TouchableOpacity>
           </View>
            <TouchableOpacity style={styles.cardButton} onPress={this.doReadAction} >
             <Text style={styles.cardText} >読み</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton} onPress={this.doOffAction} >
             <Text style={styles.cardText} >隠す</Text>
            </TouchableOpacity>
          </View>
         </View>
        </Card>
        {/*カード2 */}
        <Card>
         <View style={[styles.cardBase, styles.cbbc1]}>
          <View style={styles.read}>
           <Text style={styles.readText}>{this.state.read1}</Text>
          </View>
          <View style={styles.photoFlame}>
          {hasCameraRollPermission && photo1 && <Image style={styles.thumbnail} source={{uri: photo1.uri}}/>}
          </View>
          <View style={[styles.cardButtonBase]}>
            {/*テキストインプット */}
            <View style={styles.textBase}>
             <ChangeText writeText={this.writeText1} />
            </View>
           <View>
            <TouchableOpacity style={styles.cardPhotoButton} onPress={async () => {
               let result = await ImagePicker.launchImageLibraryAsync();
               console.log(result);
               this.setState({ photo1: result})
             }} >
             <Text style={styles.cardText} >写真</Text>
            </TouchableOpacity>
           </View>
            <TouchableOpacity style={styles.cardButton} onPress={this.doReadAction1} >
             <Text style={styles.cardText} >読み</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton} onPress={this.doOffAction1} >
             <Text style={styles.cardText} >隠す</Text>
            </TouchableOpacity>
          </View>
         </View>
        </Card>

        {/*カードLast */}
        <Card>
         <View style={[styles.cardBase, styles.cbbc3]}>
          <Text style={{color: 'white'}}>Last Card</Text>
         </View>
        </Card> 
       </CardSrack>
       <View style={styles.footer}>
        <View style={styles.buttonContainer}>
         <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
           this.swiper.swipeLeft();
          }}>
          <Icon name="left" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
            this.swiper.goBackFromLeft();
          }}>
          <Text style={styles.footerText}>戻る</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
           this.swiper.swipeRight();
           }}>
           <Icon name="right" size={30}/>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
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
    thumbnail: {
      flex: 6,
      width: scale(280),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 4,
      borderRadius: 10,
      borderColor: 'white',
    },
    cardButtonBase: {
      flexDirection: 'row',
      flex: 1,
      width: scale(280),
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      backgroundColor: 'skyblue'
    },
    cbbc0: {
      backgroundColor: 'skyblue',
    },
    cbbc1: {
      backgroundColor: 'skyblue',
    },
    cbbc2: {
      backgroundColor: 'skyblue',
    },
    cbbc3: {
      backgroundColor: 'black',
    },
    textBase: {
      width: scale(128),
      height: scale(40),
      flexDirection: 'row',
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    cardButton: {
      height: scale(35),
      width: scale(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 'white',
      flexDirection: 'row',
      
    },
    cardPhotoButton: {
      height: scale(35),
      width: scale(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 'white',
    },
    cardText: {
      fontSize: scale(13),
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
      width:75,
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
});

