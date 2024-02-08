const mongoose = require('mongoose');

const URI = process.env.mongodb_URI 
    ? process.env.mongodb_URI  
    : 'mongodb://127.0.0.1/testmern';

mongoose.connect(URI, //{
 //   useNewUrlParser: true,
 //   useCreateIndex: true
//}
);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});