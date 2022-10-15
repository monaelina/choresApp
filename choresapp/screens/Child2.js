import React, {useState} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Child2 = ({ navigation })=>{
    const [taskList, addTask]=useState(["Vacuum house", "Clean the bathroom","Take the trash out","Walk the dog","Bake a cake to granny"]);
    
    const keyHandler=(item,index)=>{
        console.log(item);
        return index.toString(); 
      }

    return (
        <View>   
        <View style={styles.screen}>
            <Text style={styles.title}>Choose the task you have done</Text>
            <FlatList style={styles.listStyle}
          data={taskList}
          keyExtractor={keyHandler}
          renderItem={(item)=>
            
            <View style={styles.listItemStyle}> 
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/myimages/A_star.png')}
                     style={styles.image} resizeMode='cover'/>
                </View> 
                <Text>{item.item}</Text></View>}
        />
            <Button 
            title='Back'
            onPress={() => navigation.goBack()}/>
        </View>
        </View> 
    );
}
const styles=StyleSheet.create({
    image:{
        height:'30%',
        width:'30%'
      },
    imageContainer:{
        height:50,
        width:'30%',
        overflow:'hidden',
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