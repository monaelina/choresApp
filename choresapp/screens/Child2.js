import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView,  StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import TaskList from '../components/TaskList/';
import { updateTaskValue } from '../database/db';

var db = openDatabase({ name: 'UserDatabase.db' });

const Child2 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);

    // let [taskId, setTaskId] = useState();
    // let [taskName, setTaskName] = useState('');
    // let [taskPrice, setTaskPrice] = useState('');
    // let [taskValue, setTaskValue] = useState('');
    
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
     
      let listItemView = (item) => {
        return (
          <View
            key={item.user_id}
            style={styles.listItemStyle}>
          <TouchableOpacity onPress={updateTaskInDb}>
               {item.task_value == 0 ? <Icon name="star" size={50} color="silver" />:null}
               {item.task_value == 1 ? <Icon name="star" size={50} color="gold" />:null}
               {item.task_value == 2 ? <Icon name="star" size={50} color="green" />:null}
          </TouchableOpacity>
            <Text>{item.task_name}   {item.task_price}€  {item.task_value}</Text>
            
          </View>
        );
      };

      async function updateTaskInDb(){
        try{
          const dbResult = await updateTaskValue(1);
          console.log(task_id+ ": " +task_value)
        }
        catch(err){
          console.log(err);
        }
        finally{
          //No need to do anything
        }
      }


    // let updateValue = (value) => {
    //     setTaskValue(1);
    // }

    // let searchTask = () => {
    //     console.log(taskId);
    //     db.transaction((tx) => {
    //         Text.executeSql(
    //             'SELECT * FROM table_tasks where taskId = ?',
    //             [taskId],
    //             (tx, results) => {
    //                 var len = results.rows.length;
    //                 if (len > 0) {
    //                   let res = results.rows.item(0);
    //                   updateValue(
    //                     res.task_value
    //                   );
    //                 } else {
    //                   alert('No task found');
    //                   updateValue('');
    //                 }
    //               }      
    //             );       
    //           });
    //         };

    // let updateTask =()=> {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //           'UPDATE table_tasks set task_name=?, task_price=? , task_value=? where task_id=?',
    //           [taskName, taskPrice, taskValue],
    //           (tx, results) => {
    //             console.log('Results', results.rowsAffected);
    //             if (results.rowsAffected > 0) {
    //               Alert.alert(
    //                 'Success',
    //                 'Task updated successfully',
    //                 [],
    //                 { cancelable: false }
    //               );
    //             } else alert('Updation Failed');
    //           }
    //         );
    //       });
    //     };
  

    return (
        <View style={styles.screen}>  
            <Text style={styles.title}>Choose task you have done</Text>
            <FlatList
              data={flatListItems}
              ItemSeparatorComponent={listViewItemSeparator}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)} />
        </View>
    );
}


const styles=StyleSheet.create({
    screen:{
        padding: 20,
        alignItems: 'center',
    },
    
    title:{
        padding: 20,
        fontSize:30,
        justifyContent:'center',
    },
        listItemStyle:{
        //borderWidth:1,
        padding:5,
       //backgroundColor:"#abc",
        width:"100%",
        flexDirection:"row",
        flex:5,
        alignItems:"center",
        //marginLeft:20,
        fontSize:25,
      }
});

export default Child2;




 

            