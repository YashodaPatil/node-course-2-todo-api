//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb1ecd2f533e3e669c886e9')
  // }, {
  //   $set: {
  //     completed:false
  //         }
  //   }, {
  //     returnOriginal:false
  //   }).then((result) => {
  //     console.log(result);
  //
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb1e0136eacd1042438ac7e')
  }, {
    $set: {
      name:'Yashoda'
    }, $inc: {
      age: 1
    }
    }, {
      returnOriginal:false
    }).then((result) => {
      console.log(result);

  });

  //client.close();
});
