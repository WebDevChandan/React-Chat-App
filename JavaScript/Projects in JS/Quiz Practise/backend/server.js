const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Connecting this Application with MongoDB via mongoose library
mongoose.connect("mongodb://localhost:27017/Sample", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Successfully connected with MongoDB.");
}).catch(err => {
    console.log(err);
})

const app = express();
const PORT = 4000;

//Using bodyParser to successfully request data from front-end 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Schema or Document
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

//Model or collection
const Product = mongoose.model("Product", productSchema);


//REST API CREATION
//Create Product
app.post("/api/v1/product/new", async (req, res) => {

    //Since, we're reqesting data from Front-End, we've to use req.body. But in order to execute its successfylly in express, we've to use body-parser module (3rd party module) as well.

    //await: Stop execution of its below codes, till it execute successfully.
    const productData = await Product.create(req.body);

    res.status(201).json({
        success: true,
        productData
    })
})

//Read Product
app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
})

//Update Product
//:id --> means id is dynamic and can be anything 
app.put("/api/v1/product/:id", async (req, res) => {

    //Fetch Product id from the URL
    let product = await Product.findById(req.params.id);
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true,
    });

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
})

//Delete product
app.delete("/api/v1/product/:id", async (req, res) => {
    try {

        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product Not Found"
            });
        }
        await product.deleteOne({ _id: product._id });

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });
    } catch (error) {

    }
});


app.listen(PORT, () => {
    console.log(`Server is Working at http://localhost:${PORT}`);
})
