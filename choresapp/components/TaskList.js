import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
 
var db = openDatabase({ name: 'TaskDatabase.db' });
 
const TaskList = () => {
  let [flatListItems, setFlatListItems] = useState([]);
 
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_task',
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
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Name: {item.task_name}</Text>
        <Text>Price: {item.task_price}</Text>
        <Text>Value: {item.task_value}</Text>
      </View>
    );
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default TaskList;