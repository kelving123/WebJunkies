const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

//This is the connection to a Mongo data base insert connection between the quotes.
mongoose.connect("", {
    useNewUrlParser: true,
});

app.listen(3001, () => {
    console.log('Server running on port 3001')
})

//......