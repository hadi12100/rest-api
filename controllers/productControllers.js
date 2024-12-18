
const Product = require("../models/productSchema")


const creatproduct= async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body);
        await newProduct.save();
        res.status(201).json({msg:"product created!",product: newProduct})
    }
    catch(err){
        res.status(500).json({msg:error.message})
    }
}



module.exports={creatproduct}