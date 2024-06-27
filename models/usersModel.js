const { Timestamp } = require("mongodb");
const mongoose = require ("mongoose");

// Here we define the Users Schema
const UsersSchema = mongoose.Schema (
    {
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : "User",
        },
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