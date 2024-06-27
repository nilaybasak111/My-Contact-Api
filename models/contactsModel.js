const { Timestamp } = require("mongodb");
const mongoose = require ("mongoose");

// Here we define the Contact Schema
const contactSchema = mongoose.Schema (
    {
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : "User",
        },
        
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