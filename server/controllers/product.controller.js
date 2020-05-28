const Product = require("../models/product.model")

module.exports = {
    showAll: (req,res)=>{
        Product.find()
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    showOne: (req,res)=>{
        Product.findOne({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    create: (req,res)=>{
        Product.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    updateOne: (req,res)=>{
        Product.findOneAndUpdate({_id:req.params.id},req.body,{runValidators: true})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    deleteOne: (req,res)=>{
        Product.deleteOne({_id:req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }
}
