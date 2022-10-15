import React, {useEffect} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

var db = openDatabase({ name: 'UserDatabase.db' });

//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
//import Adult1 from './screens/Adult1';
//import Child1 from './screens/Child1';
//const Stack = createNativeStackNavigator();
const ImageText=(props)=><Text style={styles.imageTextStyle}></Text>
const FirstPage = ({ navigation })=> {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_tasks'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_tasks', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_tasks(task_id INTEGER PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(20), task_price INT(10), task_value INT(1))',
              []
            );
          }
        }
      );
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={StyleSheet.container}>
        <Header title={'Chores App'} />
        <TouchableOpacity
        onPress={() => navigation.navigate('Adult1')}
          style={styles.buttonAdultStyle}
          activeOpacity={0.5}>   
        <Image
       //fadeDuration={5000}
           source={{uri:'https://static.vecteezy.com/system/resources/previews/004/477/337/non_2x/face-young-man-in-frame-circular-avatar-character-icon-free-vector.jpg'}}
            style={styles.image} resizeMode='cover'/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Child1')}
        style={styles.buttonChildStyle} 
          activeOpacity={0.5}>
        <Image
       //fadeDuration={5000}
           source={{uri:'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=2000'}}
            style={styles.image} resizeMode='cover'/>
        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdultStyle: {
    height: 200,
    width: '50%',
    borderRadius:170,
    overflow: 'hidden',
    borderWidth:2,
    borderColor:'black',
    marginLeft: '25%',
    marginTop: 10,
  },
  buttonChildStyle: {
    height: 200,
    width: '50%',
    borderRadius:170,
    overflow: 'hidden',
    borderWidth:2,
    borderColor:'black',
    marginLeft: '25%',
    marginTop: 10,
  },
  imageContainer: {
    height: 200,
    width: '50%',
    borderRadius:170,
    overflow: 'hidden',
    borderWidth:2,
    borderColor:'black',
    marginLeft: '25%',
    marginTop: 10,
  },
  image: {
    height: '100%',
    width:'100%'
  },
  imageTextStyle: {
    color: 'black',
  }
});
export default FirstPage;