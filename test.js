const mongoose = require("mongoose");
const schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const photoSchema = new schema({
    title: String,
    descrition: String
});


//create a photo

//


dasfdasdf