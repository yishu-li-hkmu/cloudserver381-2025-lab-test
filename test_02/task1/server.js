const { MongoClient, ServerApiVersion } = require('mongodb');
const url = '';  
const client = new MongoClient(url);
const dbName = '';
const collectionName = '';

// complete this function
const findRestaurants = async (db) => { 
  var collection = db.collection(collectionName);
  // let results = await collection.find()
  console.log(results);
  return results;
}

async function main() {
    await client.connect();	
    console.log("You successfully connected to MongoDB in Task 1!");
    const db = client.db(dbName);
    await findRestaurants(db);
}

main()
  .then(console.log("Task 1 marking"))
  .catch(console.error)
  .finally(() => client.close());