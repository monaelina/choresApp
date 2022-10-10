import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header=(props)=>{
    return(

     <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
     </View>
    );
}

const styles=StyleSheet.create({
    header:{
        backgroundColor: 'lightpink',
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        },

    title:{
        fontSize:25,
        color: 'black',
    }
});

export default Header;