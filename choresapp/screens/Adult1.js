import React, {useState, useEffect} from 'react';
import {
  FlatList, 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TouchableOpacity,
  SafeAreaView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import TaskList from '../components/TaskList/';

var db = openDatabase({ name: 'UserDatabase.db' });

const Adult1 = ({navigation})=>{
    let [flatListItems, setFlatListItems] = useState([]);

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

      let change_value = () => {
        if ({task_value} = 0) {
          <Button
          title='Undone'
          style={styles.undoneButton}
          />
          }

        if ({task_value} = 1) {
          <Button
          title = 'Done'
          style={styles.acceptButton}
          />
        }

        if ({task_value} = 2) {
          <Button
            title='Accepted'
          style={styles.acceptedButton}
          />
        }
      }
     
      let listItemView = (item) => {
        return (
          <View
            key={item.user_id}
            style={{ backgroundColor: 'white', padding: 20 }}>
          <TouchableOpacity>
               <Icon name="star" size={50} color="gold" />
        </TouchableOpacity>
            <Text>{item.task_name}   {item.task_price}€</Text>
            {/* <Button
            title=''
            onPress={change_value}/> */}
            <Text>Value: {item.task_value}</Text>
          </View>
        );
      };
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.screen}>  
          {/*  <Button 
            title='Back'
    onPress={() => navigation.goBack()}/> */}
            <Button 
            title='Add task'
            onPress={() => navigation.navigate('Adult2')}/>
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
    
    title:{
        padding: 20,
        fontSize:30,
        justifyContent:'center',
    },

    undoneButton: {
      color: 'grey',
    },

    acceptButton: {
      color: 'purple',
    },

    acceptedButton: {
      color: 'green'
    }
});

export default Adult1;