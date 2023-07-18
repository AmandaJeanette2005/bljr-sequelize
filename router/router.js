const express = require('express')
const HomeController = require('../controllers/HomeController')
const ProductController = require('../controllers/ProductController')
const OrderController = require('../controllers/OrderController')
const ReportController = require('../controllers/ReportController')
const UserContoller = require('../controllers/UserController')
const InvoiceController = require('../controllers/InvoiceController')
const router = express.Router()

router.get('/', HomeController.index)

//user
router.get('/user', UserContoller.index)
router.post('/user-add', UserContoller.addUser)
router.post('/user/:id', UserContoller.UpdateUser)
router.post('/user/:id', UserContoller.destroy)


//product
router.get('/product', ProductController.index)
router.get('/product/:id', ProductController.detail)
router.post('/product', ProductController.addProduct)
router.put('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.destroy)

//order
router.post('/add-to-cart', OrderController.addToCart)
router.get('/cart', OrderController.cart)
router.put('/cart/:id', OrderController.updateCart)
router.delete('/cart/:id', OrderController.destroyCart)
router.post('/checkout', OrderController.checkout)

//invoice
router.get('/invoice', InvoiceController.index)

//report
router.get('/report-bestSeller', ReportController.bestSeller)
router.get('/report-blm-CO', ReportController.blmCO)


module.exports = router