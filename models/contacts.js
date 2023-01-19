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
        required: false,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Please enter correct email");
            }
        }
    }
    
},{});

const Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;