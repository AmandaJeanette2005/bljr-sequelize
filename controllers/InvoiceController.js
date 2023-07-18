const {Invoice} = require("../models")

const InvoiceController = {

    async index(req, res){
        try {
            const dataInvoice = await Invoice.findAll()
            return res.send(dataInvoice)
        } catch (error) {
            return res.send(error.message)
        }
    }

    
}
module.exports=InvoiceController