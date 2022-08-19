const router = require("express").Router();
const User = require("../models/User");


//register
router.post("/register", async(req,res)=>{
    try{

        const newUser = new User({
            username: req.body.username,
            email: req.body.eamil,
            password: req.body.passeword,
        })

        const user = await newUser.save();
        res.status(200).json(user);

        
    }catch(err){
        res.status(500).json(err);
    }
});