import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Child2 = ({ navigation })=>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Lapsen näkymä 2</Text>
            <Button 
            title='Back'
            onPress={() => navigation.goBack()}/>
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
export default Child2;