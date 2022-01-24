const express=require("express")
const app=express()
const db=require("./db")
const user=require(__dirname+"/app/users/UsersController.js")// directry path
const products=require(__dirname+"/app/products/productsController.js")
app.use(express.json())
const cors=require("cors")
app.use(cors()) // its will allow all the servers access
const authVerification = require('./auth');

// app.use(authVerification);

app.get("/", (req,res)=>{
    console.log(user)
    res.send("API is working")
})

app.use('/api/users', user)

app.use('/api/products', products)

app.listen(4000)
