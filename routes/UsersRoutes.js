const express = require ("express");
const router = express.Router();
const {registerUser, loginUser, currentUser } = require("../controllers/Userscontroller.js")
const validateToken = require ("../middlewares/validateTokenHandler.js")

router.post("/register", registerUser );

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;