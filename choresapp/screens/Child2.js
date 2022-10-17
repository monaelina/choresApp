import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import TaskList from '../components/TaskList';

var db = openDatabase({ name: 'UserDatabase.db' });


const Child2 = ({ navigation })=>{
    //const [taskList, addTask]=useState(["Vacuum house", "Clean the bathroom","Take the trash out","Walk the dog","Bake a cake to granny"]);
    // let [taskId, setTaskId] = useState();
    // let [taskName, setTaskName] = useState('');
    // let [taskPrice, setTaskPrice] = useState('');
    // let [taskValue, setTaskValue] = useState('');

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
    // }
         

    

    return (  
        <View style={styles.screen}>
            <Text style={styles.title}>Choose the task you have done</Text>
            {/* <FlatList 
                data={taskList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item)=>
                <View style={styles.listItemStyle}> 
                    <TouchableOpacity>
                        <Icon name="star" size={50} color="gold" />
                    </TouchableOpacity>
                    <Text>{item.item}</Text>
                </View>}
            /> */}
            
            <TaskList/>
           
            <Button 
            title='Back'
            onPress={() => navigation.goBack()}/>
        </View>
       
    );
}
const styles=StyleSheet.create({
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
      },
    screen:{
        alignItems: 'center',
    },
    
    title:{
        fontSize:30,
        justifyContent:'center',
    }
});
export default Child2;