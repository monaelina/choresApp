import React from 'react';
import {
  SafeAreaView,
  ScrollView, 
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import Header from './components/Header';
import Adult1 from './screens/Adult1';
import Child1 from './screens/Child1';

const App = ()=> {
  return (
    <View style={StyleSheet.container}>
      <Header title={'Chores App'} />
      <Text>Aikuinen</Text>
      <View style={styles.imageContainer}>
      <Image
      fadeDuration={5000}
      source={{uri:'https://static.vecteezy.com/system/resources/previews/004/477/337/non_2x/face-young-man-in-frame-circular-avatar-character-icon-free-vector.jpg'}}
        style={styles.image} resizeMode='cover'/>
      </View>
      <Text>Lapsi</Text>
      <View style={styles.imageContainer}>
      <Image
      fadeDuration={5000}
      source={{uri:'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=2000'}}
        style={styles.image} resizeMode='cover'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    height: 200,
    width: '50%',
    borderRadius:170,
    overflow: 'hidden',
    borderWidth:2,
    borderColor:'black',
  },
  image: {
    height: '100%',
    width:'100%'
  }
});

export default App;