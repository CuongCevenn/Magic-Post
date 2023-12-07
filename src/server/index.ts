import { MongoClient } from 'mongodb';

const express = require('express');
const body = require('body-parser');

async function start() {
  try {

    const app = express();

    const mongo = await MongoClient.connect('mongodb+srv://hitole2003:hitole2003@hito.jzxsgh4.mongodb.net/?retryWrites=true&w=majority');

    await mongo.connect();

    app.db = mongo.db();

    // body parser

    app.use(body.json({
      limit: '500kb'
    }));

    // Routes


    // Start server

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }
  catch(error) {
    console.log(error);
  }
}

start();