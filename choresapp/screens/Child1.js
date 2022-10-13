import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Child1 = ({ navigation })=>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Lapsen näkymä 1</Text>

            <Button
            title='Check tasks'
            onPress={() => navigation.navigate('Child2')}/>

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