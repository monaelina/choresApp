import React, {useState, useEffect} from 'react';
import {
  FlatList, 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  Button, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import TaskList from '../components/TaskList/';

var db = openDatabase({ name: 'TaskDatabase.db' });

const Adult1 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);
    let [inputTaskId, setInputTaskId] = useState('');

    let DeleteTask = () => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM  table_tasks where task_id=?',
          [inputTaskId],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Task deleted successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Adult1'),
                  },
                ],
                { cancelable: false }
              );
            } else {
              alert('Please insert a valid Task Id');
            }
          }
        );
      });
    };

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_tasks',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                    setFlatListItems(temp);
                }
            );
        });
    }, []);

    let listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '100%',
              backgroundColor: '#808080'
            }}
          />
        );
      };

   //   const updateBalance = () => {
   //       updatedBalance(taskPrice + myBalance);
   //       console.log('balancen päivitys')
   //   };

      const changeValue = () => {

      }
     
      let listItemView = (item) => {
        return (
        <ScrollView style={styles.scrollviewstyle}>
          <View
            key={item.user_id}
            style={{ backgroundColor: 'white', padding: 30 }}>
          <TouchableOpacity>
              {item.task_value == 0 ? <Icon name="star" size={50} color="silver" />:null}
              {item.task_value == 1 ? <Icon name="star" size={50} color="gold" />:null}
              {item.task_value == 2 ? <Icon name="star" size={50} color="green" />:null}
          </TouchableOpacity>
            <Text>{item.task_name}   {item.task_price}€</Text>
          <TouchableOpacity>
            {item.task_value == 0 ? <Button title='undone' style={styles.undoneButton}/>:null}
            {item.task_value == 1 ? <Button title='Accept' style={styles.acceptButton}/>:null}
            {item.task_value == 2 ? <Button title='Accepted' style={styles.acceptedButton}/>:null}
          </TouchableOpacity>
          </View>
         </ScrollView>
        );
      };

    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.screen}>  
            <Button 
            title='Add task'
            onPress={() => navigation.navigate('Adult2')}/>
            <TextInput
            placeholder="Enter Task Id"
            onChangeText={
              (inputTaskId) => setInputTaskId(inputTaskId)
            }
            style={{ padding: 10 }}
          />
          <Button title="Delete Task" onPress={DeleteTask} />
            <Text style={styles.title}>Tasklist</Text>
            <FlatList
              data={flatListItems}
              ItemSeparatorComponent={listViewItemSeparator}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)} />
          <TaskList/>
        </View>
      </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    screen:{
        padding: 20,
        alignItems: 'center',
    },

    scrollviewstyle: {
      padding: 5,
    },
    
    title:{
        padding: 20,
        fontSize:30,
        justifyContent:'center',
    },

    undoneButton: {
      backgroundColor: 'grey',
    },

    acceptButton: {
      backgroundColor: 'purple',
    },

    acceptedButton: {
      backgroundColor: 'green',
    },
});

export default Adult1;