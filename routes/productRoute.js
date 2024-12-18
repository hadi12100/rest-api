const express=require("express")
const router= express.Router()
const {creatproduct}= require("../controllers/productControllers")


 router.get("/getProduct",getProduct)
router.post("/createproduct",creatproduct)
// router.put("/update product/:id",UpdateProduct)
// router.delete("/delete product/:id",DeleteProduct)















module.exports=router;