import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

var db = openDatabase({ name: 'UserDatabase.db' });

const Child2 = ({ navigation })=>{
    const [taskList, addTask]=useState(["Vacuum house", "Clean the bathroom","Take the trash out","Walk the dog","Bake a cake to granny"]);
    
    const keyHandler=(item,index)=>{
        console.log(item);
        return index.toString(); 
      }
    
    // const StarColour=(props)=> {
    //     <Icon name="star" size={50} color="gold" />   
    // }

    return (  
        <View style={styles.screen}>
            <Text style={styles.title}>Choose the task you have done</Text>
            <FlatList 
                data={taskList}
                keyExtractor={keyHandler}
                renderItem={(item)=>
                <View style={styles.listItemStyle}> 
                    <TouchableOpacity>
                        <Icon name="star" size={50} color="gold" />
                    </TouchableOpacity>
                    <Text>{item.item}</Text>
                </View>}
            />
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