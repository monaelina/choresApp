import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Adult2 = ({ navigation })=>{
    db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO table_tasks (task_name, task_price, task_value) VALUES (?,?,?)',
          [taskName, taskPrice, taskValue],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Task added succesfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Adult1'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Task failure');
          }
        );
      });
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Aikuisen näkymä 2</Text>
            <Button 
            title='Back'
            onPress={() => navigation.goBack()}/>
        </View>
    );
};
const styles=StyleSheet.create({
    screen:{
        alignItems: 'center',
    },
    
    title:{
        fontSize:30,
        justifyContent:'center',
    }
});
export default Adult2;