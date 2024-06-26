const { Timestamp } = require("mongodb");
const mongoose = require ("mongoose");
const UsersSchema = mongoose.Schema (
    {
        username : {
            type: String,
            require : [true, "Please Add the Username"],
            
        },
        email : {
            type : String,
            require : [true, "Please Add the Username"],
            unique : [ true, "Email Id Already Taken"]
        },
        password : {
            type : String,
            require : [true, "Please Add the User Password"],
        }
    }, {
        Timestamp : true,
    }
);

module.exports = mongoose.model("User", UsersSchema);