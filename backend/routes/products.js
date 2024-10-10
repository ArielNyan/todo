import express from "express"
import Product from "../models/product.model.js"
import mongoose from "mongoose"
const productRouter = express.Router()

productRouter.put('/:id', async (req, res) => {
  const {id} = req.params
  const product = req.body

  try {
    const updated = await Product.findByIdAndUpdate(id, product, {new: true})
    res.status(200).json({sucess: true, data: updated})
  } catch (error) {
    res.status(404).json({sucess: false, message: "Product not Found"})
  }
  
})

productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({sucess: true, data: products})
  } catch (error) {
    res.status(500).json({sucess: false, message: "Something went wrong"})
  }
})

productRouter.post('/', async (req, res) => {
  const product = req.body //user send data
  if(!product.name || !product.price || !product.image){
    return res.status(400).json({sucess: false, message: "Please provide all fields"})
  }
  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({sucess: true, data: newProduct})
  }catch(e){
    console.log("Error ",e.message)
    res.status(500).json({sucess: false, message: 'Server error'})
  }
})
productRouter.delete('/:id', async (req, res) => {
  const id = req.params
    try {
      await Product.findByIdAndDelete(id)
      await res.status(200).json({sucess: true, message: "Product Deleted"})
    } catch (error) {
      res.status(404).json({sucess: false, message: "Product not Found"})
    }
})



export default productRouter
