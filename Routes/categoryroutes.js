 const express=require('express');
 const { addcategory, getcategory,getcategorybyid,updatecategory, deletecategory } = require('../controller/categoryController');
 const router=express.Router();
 router.post("/categoryadd",addcategory)
 router.get("/",getcategory)
 router.get("/:id",getcategorybyid)
 router.put("/updatecategory/:id",updatecategory)
 router.delete("/deletecategory/:id",deletecategory)
 module.exports=router;