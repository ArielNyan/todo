import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import Product from "./models/product.model.js";
import { connectDb } from "./config/db.js";
const app = express()
import productRouter from './routes/products.js'
import cors from 'cors'


app.use(cors())
app.use(express.json())
app.use('/api/products', productRouter)
app.get('/', (req, res) => {
  
})

 

app.listen(4000, () => {
  connectDb() 
  console.log("server started at port 5000")
})
