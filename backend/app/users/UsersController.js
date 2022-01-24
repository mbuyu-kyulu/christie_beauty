const express=require("express");
const jwt = require('jsonwebtoken');
const router=express.Router()// express routing module
const user=require("./UsersSchema");

router.get("/", (req,res)=>{
    console.log("list user")
})

router.post('/register', function (req, res) {
    console.log("register call")
    user.create({
            name : req.body.name,
            email : req.body.email,
            // role : req.body.role,
            password : req.body.password,
            phone : req.body.phone
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.post("/login", (req,res)=>{
    console.log("user login")
    const {email,password} =req.body
    user.findOne({email,password},(error,result)=>{
        console.log(result)
        if(error){
            return error
        }
        if(!result) res.send("no user existed")
     // creatingVariabilityToken//
      const token= jwt.sign({ id:result._id}, 'node-app', {
            expiresIn: 335600 // expires in 24 hours
            // 345600
        });
        res.send({token,result})
    }) 
})

router.delete("/:id", (req,res)=>{
    console.log("delete user")
})

router.put("/:id", (req,res)=>{
    console.log("update")
})
module.exports=router