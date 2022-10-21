import React, { useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View  } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { updateBalance } from '../database/db';

var db = openDatabase({ name: 'TaskDatabase.db' });


const Child1 = ({navigation})=>{
    const [myBalance, setmyBalance]=useState('');

    // useEffect(() => {
    //     db.transaction((tx) => {
    //         console.log("ollaan summan luvussa");
    //         tx.executeSql(
    //             'SELECT SUM(task_price) FROM table_tasks WHERE task_value=2',
    //             [],
    //             (tx, results) => {
    //                 var temp = [];
    //                 for (let i = 0; i < results.rows.length; ++i)
    //                 temp.push(results.rows.item(i));
    //                 setmyBalance(temp);
    //                 console.log("summa luettu"+{temp});
    //             }
    //         );
    //     });
    // }, []);

    async function readBalance(){
        console.log("updateBalance");
        try{
          const dbResult = await updateBalance();
          console.log("balance luettu"+ dbResult);
          setmyBalance(JSON.stringify(dbResult));
          console.log(myBalance);
        }
        catch(err){
          console.log(err);
        }
        finally{
          //No need to do anything
        }
      }
    
    const printBalance= () =>{
        readBalance();
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My Account</Text>
            <Text>My Balance</Text>
            {/* {myBalance.map((item,index)=>  */}
        
            <TextInput editable={false} style={styles.inputStyle}>{myBalance}€</TextInput>
            {/* )} */}
            <Button title='jotain' onPress={readBalance}/>
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