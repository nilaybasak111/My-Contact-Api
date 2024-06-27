const asyncHandler = require ("express-async-handler");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
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
    const userAvailable = await User.findOne({ email });
        if (userAvailable){
            res.status(400);
            throw new Error ("User Already Registered")
        }

        // Creating Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password : ", hashedPassword);
        
        // Creating a new User
        const user = await User.create ({
            username,
            email,
            password : hashedPassword,
        });
        
        console.log(`User Created : ${user}`);
        if (user) {
            res.status(200).json({_id: user.id, email: user.email});
        } else {
            res.status(400);
            throw new Error ("User data is not Valid / Invalid Request");
        }

        res.json({ message : "Please, Register the User"});
})

// @desc Log-in User
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler ( async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status (400);
        throw new Error ("All Fields are Mandatory");
    }
    const user = await User.findOne({ email });
    
    // Here We Compare Password using hashedPassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            "email" : 
        })
        res.status(200).json({ accessToken });
    }
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