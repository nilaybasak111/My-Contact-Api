const express = require ("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/Userscontroller.js")

router.post("/resigter", registerUser );

router.post("/login", loginUser);

router.get("/current", (req, res) => {
    res.json({ message : "Current User Info Page"});
});

module.exports = router;

//58:32