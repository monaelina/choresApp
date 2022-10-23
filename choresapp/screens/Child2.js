import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView, TextInput} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { updateTaskValue } from '../database/db';
import Bottom from '../components/Bottom';

var db = openDatabase({ name: 'TaskDatabase.db' });

const Child2 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(-1);

    const [taskId, setTaskId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskPrice, setTaskPrice] = useState("");
    const [taskValue, setTaskValue] = useState("");


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
     
      let listItemView = (item) => {
        return (
          <ScrollView style={styles.scrollviewstyle}>
          <View
            key={item.task_id}
            style={styles.listItemStyle}>
          <TouchableOpacity>
               {item.task_value == 0 ? <Icon name="star" size={40} color="silver" />:null}
               {item.task_value == 1 ? <Icon name="star" size={40} color="gold" />:null}
               {item.task_value == 2 ? <Icon name="star" size={40} color="green" />:null}
               <Text style={styles.listTextStyle}>{item.task_id}. {item.task_name}   {item.task_price}€</Text>  
            </TouchableOpacity>
          </View>
          </ScrollView>
        );
      };

      async function updateTaskInDb(){
        console.log("updateTaskInDb");
        try{
          const dbResult = await updateTaskValue(taskId, 1);
          console.log("plääh");
          readAllTask();
        }
        catch(err){
          console.log('täältä tulee error '+err);
        }
        finally{
          setUpdateIndex(-1);
        }
      }

      async function setTaskToUpdate (index) {
        setUpdateIndex(index);
        setTaskId(flatListItems[index].item.task_id);
        setTaskName(flatListItems[index].task_name);
        setTaskPrice(flatListItems[index].task_price);
        setTaskValue(flatListItems[index].task_value);
      }

      const onPress = (item) => {
        setTaskToUpdate(item.index);
        updateTaskInDb(updateIndex);
      }

    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.screen}>  
            <Text style={styles.title}>Write the number of task you have done</Text>
            <TextInput
                  placeholder="Enter task number"
                  onChangeText={
                    (taskId) => setTaskId(taskId)
                  }
                  maxLength={2}
                  keyboardType="numeric"
                  style={{ padding: 10 }}
                />
              <Button title="Done" onPress={updateTaskInDb} />
            <FlatList
              data={flatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)} />
        </View>
        <Bottom/>
        </SafeAreaView>

    );
}


const styles=StyleSheet.create({
    screen:{
        padding: 10,
        marginBottom: '100%',
    },

    listTextStyle: {
      fontSize: 27,
    },

    scrollviewstyle: {
      flex:1,
      paddingVertical: 3,
      width:'100%',
      height: '150%',
    },

    safeAreaStyle: {
      padding: 10,

    },
    
    title:{
        padding: 20,
        fontSize:30,
        justifyContent:'center',
    },
        listItemStyle:{
        padding:5,
        flexDirection:"row",
        position: 'relative',
      }
});

export default Child2;




 

            