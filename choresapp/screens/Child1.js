import React, { useState, useEffect} from 'react';
import {render} from 'react-dom';
import {Button, StyleSheet, Text, TextInput, View  } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { updateBalance, readPrice } from '../database/db';
import Bottom from '../components/Bottom';

var db = openDatabase({ name: 'TaskDatabase.db' });




const Child1 = ({navigation})=>{
    const [myBalance, setmyBalance]=useState();
    const [balance, setBalance]=useState([]);

    const sum= balance.reduce((a,v)=> a=a+v.task_price,0);
    
    async function readBalance() {
        try{
          const dbResult = await readPrice();
          setBalance(dbResult);
          console.log(balance);
        }
        catch(err){
          console.log(err);
        }
        finally{
          //No need to do anything
        }
      }

    onPress=()=>{
      readBalance();
      console.log("Summa: "+sum);
      setmyBalance(sum);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My Account</Text>
            <Text style={styles.balance}>My Balance</Text>
            {/* {myBalance.map((item,index)=>  */}
            <TextInput editable={false} style={styles.inputStyle}>{myBalance}€</TextInput>
            {/* )} */}
            <Button title='Update Balance'onPress={onPress}/>
            <Text> </Text>
            <Button title= 'Check tasks'
                    onPress={()=>navigation.navigate("Child2")}/>
        <Bottom/>
        </View>
    );  
}

const styles=StyleSheet.create({
    inputStyle:{
      fontSize:20
    },
    balance:{
      fontSize:25,
      justifyContent:'center',
    },
    screen:{
        alignItems: 'center',
    },
    title:{
        fontSize:30,
        justifyContent:'center',
    }
});

export default Child1;