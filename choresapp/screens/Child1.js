import React, { useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View  } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'TaskDatabase.db' });


const Child1 = ({navigation})=>{
    const [myBalance, setmyBalance]=useState(50);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My Account</Text>
            <Text>My Balance</Text>
            <TextInput editable={false} style={styles.inputStyle}>{myBalance}€</TextInput>
            <Button title= 'Check tasks'
                    onPress={()=>navigation.navigate("Child2")}/>
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

export default Child1;