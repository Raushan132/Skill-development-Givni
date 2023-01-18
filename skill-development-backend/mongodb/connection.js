const {MongoClient}= require('mongodb');
const url='mongodb://localhost:27017';
const database="givini-skilldev";
const client =new MongoClient(url);

const getConnect=async (collection)=>{
    let result= await client.connect();
    let db=result.db(database);
    return db.collection(collection);
  
}

module.exports = getConnect;