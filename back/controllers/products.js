const productschema = require("../models/products")
const productValidation = require("../validation/products")  



const createproduct = async (req,res)=>{
    // verify that data passes through
    // validation

    let {error,value } = productValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    try{
        let newproduct = await productschema.create(req.body)
        res.status(201).json(newproduct)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"error while creating product"})
    }
    
}


const getAllproducts = async (req,res)=>{
    try{
        let products = await productschema.find()
        res.status(200).json(products);
    }catch(e){
        res.status(500).json({message:"error retrieving products"})
    }

}


const getproductById = async (req,res)=>{
    let productId = req.params.id
    
    try  {
        let product = await productschema.findById(productId)
        res.json(product)
    }catch(e){
        return res.status(400).json({message:"No product with id "+productId})
    }

}

const updateproductById = async (req,res)=>{
    // verification de l'existence de l'element 
    const productId = req.params.id;

    // validate data
    let {error,value } = productValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    // find and update
    try  {
        console.log(value);
        const product = await  productschema.findByIdAndUpdate(productId,value,{new:true})
        res.json(product)
    }catch(e){
        return res.status(404).json({message: "product not found wrong id"});
    }
}

const deleteproductById = async (req,res)=>{
    let productId = req.params.id;
    try{
        let product = await productschema.findByIdAndDelete(productId)
        res.json({message:"deleted element with id " + productId})
    }catch(e){
        res.status(404).json({message:"no  product with id "+productId})
    }

}



module.exports = {
    getAllproducts,
    getproductById,
    createproduct,
    deleteproductById,
    updateproductById
}