const express = require ("express");
const router = express.Router();
const {registerUser, loginUser, currentUser } = require("../controllers/Userscontroller.js")

router.post("/resigter", registerUser );

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;