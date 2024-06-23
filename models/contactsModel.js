const { Timestamp } = require("mongodb");
const mongoose = require ("mongoose");
const { string, array } = require("zod");

// Here we define the Schema
const contactSchema = mongoose.Schema (
    {
        name : {
            type: String,
            required : [true, "Please Add the Contact Name"],
        }, 
        age : {
            type: Number,
            required : [true, "Enter Your Age"],
        }, 
        email : {
            type : String,
            required : [true, "Enter Your Email Id"],
        }, 
        phNo : {
            type : Number,
            required : [true, "Enter Your Phone Number"],
        }
    }, {
        timestamps : true
    }
);

module.exports = mongoose.model ("Contact", contactSchema);