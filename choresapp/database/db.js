import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'TaskDatabase.db' });
var tableName="table_tasks";

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

export const updateTaskValue=(task_id, task_value)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('update '+tableName+' set task_value=? where task_id=?;',
            [task_value, task_id],
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


 export const fetchAllTask=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('select * from '+tableName, [],
                (tx, result)=>{
                    let items=[];
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));
                        console.log(result.rows.item(i));
                    }
                    console.log(items);
                    resolve(items);
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