const Product=require('../model/ProductModel')
const Category=require('../model/Categorymodel')

exports.addproduct=async (req,res)=>{
    try{
        // product=await Product.findOne({product_name:req.body.product_name});
        // if(!product){
            let productadd=new Product({
                product_name:req.body.product_name,
                price:req.body.price,
                description:req.body.description,
                quantity:req.body.quantity,
                images:req.body.images,
                category:req.body.category,
            });
            productadd=await productadd.save();
           
            // res.send(we are in ${process.env.port});
            if(!productadd){
                res.status(400).json({message:"invalid product data"});
            }
            res.send(productadd);
        // }
        // else{
            res.status(201).json({error:"product already exists","name":"hello bro"});
        }
    
    catch(err){
       return res.status(400).json({error:err.message,detail:"product not addeded"}) 
    }
     
};
exports.getProduct=async(req,res)=>{
    try{let product=await Product.find().populate("category","category_name");
        if(!product){
            return res.status(404).json({message:"no product found"});
        }
        return res.status(200).json({product});
    }
    catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid request"}) 

    }

}
exports.getProductbyid=async(req,res)=>{
    try{let product=await Product.findById(req.params.id)
        .populate("category","category_name");
        if(!product){
            return res.status(404).json({message:"no product found"});
        }
        return res.status(200).json({product});
    }
    catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid request"}) 

    }

}
exports.getProductBycategoryId=async(req,res)=>{
    try{
        let category=await Category.findById(req.params.id)
        if(!category){
            return res.status(404).json({message:"no product not found"})
        }
        let product=await Product.find({category:req.params.id}).populate("category","category_name");
        if(!product){
            return res.status(404).json({message:"product not found in category"})
        }
        res.send(product)
    }catch(err){
        return re.status(400).json({err:err.message,detail:"category Not found"})
    }
}