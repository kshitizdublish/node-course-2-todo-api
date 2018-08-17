// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b753775e4a01f39002fcbe0')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4))
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: 'Smith'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    });

});