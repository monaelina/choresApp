import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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