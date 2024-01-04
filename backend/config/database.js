const mongoose = require('mongoose');

const db = "mongodb+srv://nicolasmanjarres:QMdLvVuSXV14Y6wp@cluster0.lbjxjeu.mongodb.net/";

exports.mongoConnect = () => {
    const mongoStringConnection = db

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind
    (console, "Mongodb connection error"));
    
}