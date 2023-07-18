const express = require('express')
const app = express()
const port = 2206
const router = require('./router/router')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})