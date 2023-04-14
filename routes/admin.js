const express = require('express')
const router = express.Router()

router.get("/add-product", (request, response, next) => {
  console.log("In the /add-product middleware")
  response.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})

router.post("/add-product", (request, response, next) => {
  console.log("In the /product middleware")
  console.log("request body:", request.body)
  console.log("request body title:", request.body.title)
  response.send("<h1>The 'Product' Page</h1>")
})

module.exports = router