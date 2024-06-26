const asyncHandler = require ("express-async-handler");
const User = require ("../models/usersModel")

// @desc Resigter a User
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler ( async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password ) {
        res.status(400);
        throw new Error ("All Fields are Mandatory")
    }
    const userAvailable = await User.findone({ email });
        if (!email){
            klkkk
        }
    res.json({ message : "Please, Register the User"});
})

// @desc Log-in User
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler ( async (req, res) => {
    
    
    res.status(200).json({ message : "Log-in User"});
})

// @desc Current User Info
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler ( async (req, res) => {
    res.json({ message : "Current User Info Page"});
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}