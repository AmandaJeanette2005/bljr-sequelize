const {Orders, sequelize} = require('../models')


const ReportController = {

    async bestSeller(req, res){
    try {
       const query = await sequelize.query(`
      SELECT od.*, SUM(od.quantity) AS totalQty, SUM(od.price_total) AS totalPrc FROM orders AS od
      LEFT JOIN products AS p ON p.id = od.product_id
      WHERE od.invoice_id IS NOT NULL 
      GROUP BY od.quantity
      `, {type: sequelize.QueryTypes.SELECT})
      return res.send(query)
    } catch (error) {
      return res.send(error.message)
    }
    },

    async blmCO(req, res){
        try {
        const blmCheckout = await Orders.findAll({
          where: {invoice_id:null}
        })
        return res.send(blmCheckout)
        } catch (error) {
        return res.send(error.message)
        }
    }
}

module.exports = ReportController