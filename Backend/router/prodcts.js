const express = require("express");
const Product = require("../model/product");
const router = express.Router();


router.get("/", async (req, res) => {
  
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/product", async (req, res) => {
  const {id} = req.query
  try {
    const products = await Product.findById({_id:id});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


router.post("/product", async (req, res) => {
  const { name, image, price } = req.body;
  console.log(name, image, price);
  try {
    const product = new Product({ name, image, price });
    await product.save();
    res.status(201).json({ message: "Product saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save product" });
  }
});

router.delete("/product", async (req, res) => {
  const { id } = req.body;

  try {
    await Product.deleteOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
});

router.patch("/product", async(req, res) =>{
  const { id, name, image, price } = req.body;

  try{
    const data = await Product.findByIdAndUpdate({_id: id}, {name: name, image: image, price: price});
    console.log(data);
    res.json("Updata Successfully");
  }catch (err) {
    console.log(err);
  }

})

module.exports = router;
