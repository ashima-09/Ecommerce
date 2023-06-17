const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err); 
    }
});

module.exports = router;