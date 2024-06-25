const express = require ("express");
const router = express.Router();

router.post("/resigter", (req, res) => {
    res.json({ message : "Please, Register the User"});
});

router.post("/login", (req, res) => {
    res.json({ message : "Log-in User"});
});

router.post("/current", (req, res) => {
    res.json({ message : "Current User Info Page"});
});

module.exports = router;

//56:32