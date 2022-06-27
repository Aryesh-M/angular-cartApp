const mongoose = require('mongoose');
require('./products');
const dbURI = 'mongodb+srv://yash:Yash12345@cluster0.uwpqj.mongodb.net/AssignmentDB?retryWrites=true&w=majority'; 
mongoose.connect(dbURI, { dbName: 'cartApp' }); 
mongoose.connection.on('connected', () => { 
 console.log(`Mongoose connected to ${dbURI}`);
}); 
mongoose.connection.on('error', err => { 
 console.log('Mongoose connection error:', err); 
}); 
mongoose.connection.on('disconnected', () => { 
 console.log('Mongoose disconnected'); 
}); 