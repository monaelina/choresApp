import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

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
     
      let listItemView = (item) => {
        return (
          <View
            key={item.user_id}
            style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Name: {item.user_name}</Text>
            <Text>Contact: {item.user_contact}</Text>
            <Text>Address: {item.user_address}</Text>
          </View>
        );
      };
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Aikuisen näkymä 1</Text>
            <Button 
            title='Back'
            onPress={() => navigation.goBack()}/>
            <Button
            title='Add task'
            onPress={() => navigation.navigate('Adult2')}/>
        </View>
    );
}

const styles=StyleSheet.create({
    screen:{
        alignItems: 'center',
    },
    
    title:{
        fontSize:30,
        justifyContent:'center',
    }
});

export default Adult1;