const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://hitole2003:hitole2003@hito.jzxsgh4.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to database')
    const db = client.db('to-do-app')
    const taskCollection = db.collection('tasks')

    //CRUD request
})
.catch(error=> console.error(error))
