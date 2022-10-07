import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import pic from './assets/R.gif'
// import pic1 from './assets/gifb.gif'
import pic1 from './assets/bd1.png'
import bd from './assets/anima.gif'

//width:"100%", height:700, 
// const pic = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={pic1} resizeMode="cover" style={{justifyContent:"center",flex:1}}>
        <View><Image source={bd} style={{width:300, height:100, marginLeft:30}}></Image></View>
     
        <View style={styles.card}> 
        
        <Text style={styles.happytext}>wishing you a magical birthday filled with splendid surprise</Text>
        <Image source={pic} style={{width:170, height:200, marginLeft:30}}></Image>

        </View>
      

      </ImageBackground>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 100
    
  },
  card:{
    width:200,
    height: 400,
    // borderWidth:2,
    marginLeft:170,
    // backgroundColor:'pink',
    opacity:0.7,
    borderRadius:10,
    marginTop:100,
    
  },
  happy:{
    fontFamily:"Lucida Handwriting,Lucida,Cursive",
    fontSize:20,
    fontWeight:'bold',
    color:"red",
    marginLeft:40,
    marginBottom:0,
    


  },
  happytext:{
  
    fontSize:17,
    fontWeight:'bold',
    fontFamily:"Times New Roman, Times, serif",
    // color:'#00008b',
    color:'green',
    marginTop:100,
    marginLeft:33,

   
    
    


  }
});
