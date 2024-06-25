const asyncHandler = require ("express-async-handler");

// @desc Resigter a User
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler ( async (req, res) => {
    res.json({ message : "Please, Register the User"});
})

// @desc Log-in User
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler ( async (req, res) => {
    res.json({ message : "Log-in User"});
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