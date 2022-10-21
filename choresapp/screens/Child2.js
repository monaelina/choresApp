import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import TaskList from '../components/TaskList/';
import { updateTaskValue, fetchAllTask } from '../database/db';

var db = openDatabase({ name: 'TaskDatabase.db' });

const Child2 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);
    let [idToUpdate, setIdToUpdate] = useState('');

    // let [taskId, setTaskId] = useState('');
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
            key={item.task_id}
            style={styles.listItemStyle}>
            <TouchableOpacity onPress={()=>{}}>
               {item.task_value == 0 ? <Icon name="star" size={50} color="silver" />:null}
               {item.task_value == 1 ? <Icon name="star" size={50} color="gold" />:null}
               {item.task_value == 2 ? <Icon name="star" size={50} color="green" />:null}
              <Text> {item.task_id}: {item.task_name}   {item.task_price}€ {item.task_value}</Text> 
            </TouchableOpacity> 
            
           
          </View>
        );
      };

      async function updateTaskInDb(){
        console.log("updateTaskInDb");
        try{
          const dbResult = await updateTaskValue(3, "hoida naapurin lapset", 20, 2);
          console.log("plääh");
          //readAllTask();
        }
        catch(err){
          console.log(err);
        }
        finally{
          //No need to do anything
        }
      }

      // async function readAllTask(){
      //   try{
      //     const dbResult = fetchAllTask();
      //     console.log("dbResult readAllTask in child2");
      //     console.log(dbResult);
      //     setFlatListItems(dbResult);
      //   }
      //   catch(err){
      //     console.log("Error: "+err);
      //   }
      //   finally{
      //     console.log("All fish are red - really?");
      //   }
      // }

      const selectItemToUpdate = () =>{
        setIdToUpdate();
      }

      const onPress = (item) => {
        selectItemToUpdate(item);
        console.log("ID: "+ idToUpdate);
        updateTaskInDb(idToUpdate);
      }

    // let updateValue = (taskId) => {
    //   setTaskValue(taskValue);
    //   setTaskId(taskId);
    //   setTaskName(taskName);
    //   setTaskPrice(taskPrice);
    // }

    // let searchTask = () => {
    //     console.log(taskId);
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             'SELECT * FROM table_tasks where task_id = ?',
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
    //   console.log(taskId, taskName, taskPrice, taskValue);
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //           'UPDATE table_tasks set task_value=? where task_id=?',
    //           [taskValue],
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


    // const searchAndUpdate=()=>{
    //   selectItemToUpdate();
    //   searchTask();
    //   //updateTask();
    //   }
        
    return (
        <View style={styles.screen}>  
            <Text style={styles.title}>Choose task you have done</Text>
            <FlatList
              data={flatListItems}
              ItemSeparatorComponent={listViewItemSeparator}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)} />
              <Button title="UPDATE" onPress={updateTaskInDb}>UPDATE</Button>
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




 

            