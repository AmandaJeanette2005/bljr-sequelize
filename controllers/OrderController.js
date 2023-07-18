const {Orders, Product, sequelize, Invoice} = require('../models')
const { QueryTypes, where } = require('sequelize');


const OrderController = {


    async addToCart(req, res){
        try {
           const {product_id, user_id, quantity} = req.body
           const product = await Product.findOne({
            where: {id:product_id}
           })
           const price = product.price
           const total = quantity * price

           const addOrd = await Orders.create(
            {
              user_id:user_id,
              product_id:product_id,
              invoice_id:null,
              quantity:quantity,
              price_product:price,
              price_total:total
            }
           )
           return res.send(addOrd);
          } catch (error) {
            return res.send(error.message)
          }
    },

    async cart(req, res){
      try {
        const cart = await Orders.findAll()
        return res.send(cart)
      } catch (error) {
        return res.send(error.message)
      }
    },

    async updateCart(req, res){
      try {
        const {quantity} = req.body
        const {id} = req.params
        const editCart = await Orders.update({
          quantity:quantity
        },{
          where:{id:id}
        })
        return res.send(editCart)
      } catch (error) {
        return res.send(error.message)
      }
    },

    
    async destroyCart(req, res){
      try {
        const {id} = req.params
        await Orders.destroy({
          where:{id:id}
        })
        return res.send('has deleted!')
      } catch (error) {
        return res.send(error.message)
      }
    },

    async checkout(req, res){
      try {
        const {user_id} = req.body
        const order = await Orders.findAll({
        where:{
          user_id:user_id,
          invoice_id:null
        }
         })

         const totalPrice = order.map(x => x.price_total).reduce((a,b) => a + b, 0)

         const addInvoice = {
            user_id: user_id,
            invoice_no: `INV${user_id}`,
            total_price: totalPrice
          }
          console.log(addInvoice) 
         const newInvoice = await Invoice.create(addInvoice)
         console.log(newInvoice)

          const updateInv = await Orders.update({
            invoice_id:newInvoice.id
          }, {
            where: {
              invoice_id:null,
              user_id:user_id
            }
        })

        
      } catch (error) {
        return res.send(error.message)
      }
    }


}

module.exports = OrderController