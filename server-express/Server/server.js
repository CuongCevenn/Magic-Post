const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://hitole2003:hitole2003@hito.jzxsgh4.mongodb.net/MagicPostCollection', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

app.listen (8080, () => {
    console.log("Server is running")
})
