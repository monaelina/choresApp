import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ScrollView, Alert, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Bottom from '../components/Bottom';

var db = openDatabase({ name: 'TaskDatabase.db' });


const Adult2 = ({ navigation })=>{
    let [taskName, setTaskName] = useState('');
    let [taskPrice, setTaskPrice] = useState('');
    let [taskValue, setTaskValue] = useState('0');
   
    let register_task = () => {
      console.log(taskName, taskPrice, taskValue);
   
      if (!taskName) {
        alert('Please fill task name');
        return;
      }
      if (!taskPrice) {
        alert('Please fill Task Price');
        return;
      }
      if (!taskValue) {
        alert('Please fill task value');
        return;
      }
   
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO table_tasks (task_name, task_price, task_value) VALUES (?,?,?)',
          [taskName, taskPrice, taskValue],
          (tx, results) => {
            console.log('Results adult2', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Task registered Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => {navigation.navigate('Adult1')},
                  },
                ],
                { cancelable: false }
              );
            } else alert('Task Registration Failed');
          }
        );
      });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1, justifyContent: 'space-between' }}>
                <TextInput
                  placeholder="Enter task name"
                  onChangeText={
                    (taskName) => setTaskName(taskName)
                  }
                  style={{ padding: 10, }}
                />
                <TextInput
                  placeholder="Enter Price"
                  onChangeText={
                    (taskPrice) => setTaskPrice(taskPrice)
                  }
                  maxLength={3}
                  keyboardType="numeric"
                  style={{ padding: 10 }}
                />
                <Button title="Submit" onPress={register_task} />
                
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
          <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
      </View>
      <Bottom/>
    </SafeAreaView>
  );
};
export default Adult2;