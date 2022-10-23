import React, {useState} from 'react';
import {
  FlatList, 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DeleteTask, fetchAllTask, updateTaskValue } from '../database/db';
import Bottom from '../components/Bottom';

const Adult1 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);

    
    const [updateIndex, setUpdateIndex] = useState(-1);
    const [taskId, setTaskId] = useState("");

       async function readAllTask(){
        try{
          const dbResult = await fetchAllTask();
          console.log(dbResult);
          setFlatListItems(dbResult);
        }
        catch(err){
          console.log("Error: "+err);
        }
        finally{
        }
      }

      async function deleteTaskFromDb(task_id){
        try{
        const dbResult = DeleteTask(task_id);
        }
        catch(err){
          console.log(err);
        }
        finally{
          //No need to do anything
        }
      }

      async function updateTaskInDb(){
        console.log("updateTaskInDb");
        try{
          const dbResult = await updateTaskValue(taskId, 2);
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
     
      let listItemView = (item) => {
        return (
        <SafeAreaView>
        <ScrollView style={styles.scrollviewstyle}>
          <View
            key={item.task_id}
            style={styles.listItemStyle}>
            <TouchableOpacity onLongPress={()=>{ deleteTaskFromDb(item.task_id)}} >
          <TouchableOpacity>
              {item.task_value == 0 ? <Icon name="star" size={50} color="silver" />:null}
              {item.task_value == 1 ? <Icon name="star" size={50} color="gold" />:null}
              {item.task_value == 2 ? <Icon name="star" size={50} color="green" />:null}
          </TouchableOpacity>
            <Text style={styles.listTextStyle}>{item.task_id}. {item.task_name}   {item.task_price}€</Text>
          {/* <TouchableOpacity>
            {item.task_value == 0 ? <Button title='undone' color='grey'/>:null}
            {item.task_value == 1 ? <Button title='Accept' color='purple'/>:null}
            {item.task_value == 2 ? <Button title='Accepted' color='green'/>:null}
          </TouchableOpacity> */}
          </TouchableOpacity>
          </View>
         </ScrollView>
         </SafeAreaView>
        );
      };



    return (
      <SafeAreaView style={styles.safeAreaStyle} >
        <View style={styles.screen}>  
        <View>
        <Button 
        title = 'Show tasklist'
        onPress={() => readAllTask()}
        />
        </View>
        <Text> </Text>
        <View>
            <Button 
            title='Add task'
            onPress={() => navigation.navigate('Adult2')}/>
            </View>
            <TextInput
                  placeholder="Enter task you want to pay"
                  onChangeText={
                    (taskId) => setTaskId(taskId)
                  }
                  maxLength={1}
                  keyboardType="numeric"
                  style={{ padding: 10 }}
                />
              <Button title="Confirm" onPress={updateTaskInDb} />
              <Text style={styles.title}>Tasklist</Text>
            <FlatList 
              data={flatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => 
              listItemView(item)} 
              /> 
              
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
        marginLeft:100,
    },

    listItemStyle:{
      padding:5,
      width:"100%",
      flexDirection:"row",
      position: 'relative',
    }
});

export default Adult1;