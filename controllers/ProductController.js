const {Category, Product} = require('../models')


const ProductController = {

    //all product
    async index(req, res){
        try {
            const products = await Product.findAll({
                include:['category']
            })
            return res.send(products)
        } catch (error) {
            return res.send(error.message)
        }
    },

    //show product detail
    async detail(req, res){
      try {
        const {id} = req.params
        const product = await Product.findOne({
            where: {id:id}
        })
        return res.send(product)
      } catch (error) {
        return res.send(error.message)
      }
    },

    //add product
    async addProduct(req, res){
       try {
        const {category_Id, name, price, model, size, color} = req.body
        const addProduct = Product.create({
            category_Id:category_Id,
            name:name,
            price:price,
            model:model,
            size:size,
            color:color
        })
        return res.send('has created!')
       } catch (error) {
        return res.send(error.message)
       }
    },

    //update product
    async update(req, res){
       try {
        const {category_Id, name, price, model, size, color} = req.body
        const {id} = req.params
        const updated = await Product.update({
            category_Id:category_Id,
            name:name,
            price:price,
            model:model,
            size:size,
            color:color
        }, {
            where :{id:id}
        })
        return res.send('has updated!')
       } catch (error) {
        return res.send(error.message)
       }
    },


    //delete product
    async destroy(req, res){
       try {
        const {id} = req.params
        await Product.destroy({
            where:{id:id}
        })
        return res.send('has deleted!')
       } catch (error) {
        return res.send(error.message)
       }
    },

    
}

module.exports = ProductController