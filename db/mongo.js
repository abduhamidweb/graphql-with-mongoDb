import mongodb from "mongodb";

const { MongoClient } = mongodb;
async function connect() {
  const connect = new MongoClient("mongodb://127.0.0.1:27017");
  const client = await connect.connect();
  console.log("connect db");
  return  client.db("chat");
  //   const users = await db.collection("users");
  //   console.log(await users.find().toArray());
  //   console.log(await users.insertOne({ age: 25, price: 16000 }));
}
export default connect;
