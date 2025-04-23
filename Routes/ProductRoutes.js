const express=require("express");
const { addproduct, getProduct, getProductbyid,getProductBycategoryId } = require("../controller/ProductController");
const router=express.Router();

router.post("/addproduct",addproduct);
router.get("/",getProduct);
router.get("/:id",getProductbyid);
router.get("/category/:id",getProductBycategoryId);


module.exports=router;