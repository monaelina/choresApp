import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Adult1 = (props)=>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Aikuisen näkymä 1</Text>
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