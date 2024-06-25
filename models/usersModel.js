const { Timestamp } = require("mongodb");
const mongoose = require ("mongoose");
const { string } = require("zod");
const UsersSchema = mongoose.Schema (
    {
        username : {
            type: string,
            require : [true, "Please Add the Username"],
            unique : [ true, "UserName Already Taken"]
        // add unique logic for user name
        },
        email : {
            type : string,
            require : [true, "Please Add the Username"],
            unique : [ true, "Email Id Already Taken"]
        },
        password : {
            type : string,
            require : [true, "Please Add the User Password"],
        }
    }, {
        Timestamp : true,
    }
)

module.exports = mongoose.model("User", UsersSchema);