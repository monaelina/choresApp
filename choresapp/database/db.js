import React, {useEffect} from 'react';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'TaskDatabase.db' });
var tableName="table_tasks";
var columnName='task_price';

export const updateBalance=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('SELECT SUM (task_price) from table_tasks where task_value=2',
            //And the values come here
            [],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
                    console.log('tietokanta sum onnistui');
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    console.log('promise on: '+promise);
    return promise;
};

export const updateTaskValue=(task_id, task_name, task_price, task_value)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted   
            tx.executeSql('update '+tableName+' set task_name=?, task_price=?, task_value=? where task_id=?;',
            //And the values come here
            [task_name, task_price, task_value, task_id],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{ 
                reject(err);
            }
            );
        });
    });
    return promise;
};


 export const fetchAllTask=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from '+tableName, [],
                (tx, result)=>{
                    let items=[];//Create a new empty Javascript array
                    //And add all the items of the result (database rows/records) into that table
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));//The form of an item is {"breed": "Pike", "id": 1, "weight": 5000}
                        console.log(result.rows.item(i));//For debugging purposes to see the data in console window
                    }
                    console.log(items);//For debugging purposes to see the data in console window
                    resolve(items);//The data the Promise will have when returned
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const DeleteTask = (task_id) => {
    const promise=new Promise((resolve, reject)=>{
      db.transaction((tx)=>{
      tx.executeSql(
        'DELETE FROM  table_tasks where task_id=?',
      [task_id],
      ()=>{
        resolve();
  },
  (_,err)=>{
    reject(err);
  }
  );
  });
    });
  return promise;
  };

  export const updateTask=(task_id)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('update table_tasks set task_value=2 where task_id=?;',
            [task_id],
            ()=>{
                    resolve();
            },
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};