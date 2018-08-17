// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log('All Collections deleted!', result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log('First Collection deleted!', result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log('Find and First Collection deleted!', result);
    // });

    // db.collection('Users').deleteMany({name: 'Smith'});

    db.collection('Users').findOneAndDelete({_id: 120}).then((result) => {
        console.log(JSON.stringify(result, undefined, 4))
    });

});