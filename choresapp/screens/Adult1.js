import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const Adult1 = ({navigation})=>{
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