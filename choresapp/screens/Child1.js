import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Child1 = ({navigation})=>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Lapsen näkymä 1</Text>
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