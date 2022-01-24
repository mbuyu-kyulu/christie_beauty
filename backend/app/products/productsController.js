const express = require("express");
const router = express.Router()// express routing module
const product = require("./productsSchema");
const object_id = require("mongodb").ObjectID
const authVerification = require('../../auth');

router.get("/", authVerification,(req, res) => {
    console.log("list user")
    product.find({}, (error, product) => {
        res.send(product)
    })

})


router.get("/:id", (req, res) => {
    console.log("update user")
    const product_id = req.params.id
    product.findOne({ _id: object_id(product_id) }, (error, product) => {
        res.send(product)
    })

})

router.delete("/:id", (req, res) => {
    console.log("delete user")
    const product_id = req.params.id
    product.deleteOne({ _id: object_id(product_id) }, (error, product) => {
        res.send(product)
    })

})


router.put("/:id", (req, res) => {
    console.log("update user")
    const product_id = req.params.id
    const { title, description, price } = req.body
    product.findOneAndUpdate({ _id: object_id(product_id) }, {
        $set: { title:title, description:description, price:price }
    }, (error, product) => {
        res.send(product)
    })

})



router.post('/', function (req, res) {
    console.log("create product")
    product.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price

    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});


router.delete("/:id", (req,res)=>{
    console.log("delete user")
})

router.put("/:id", (req,res)=>{
    console.log("update")
})
module.exports = router