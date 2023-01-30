const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema({

 name: {
        type: String,
        required: true
    },
number: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
    
},{});

const Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;