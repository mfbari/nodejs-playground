const path = require('path')
const rootDir = require('../utils/path')
const express = require('express')
const router = express.Router()

router.get("/add-product", (request, response, next) => {
  console.log("In the /add-product middleware")
  response.sendFile(path.join(rootDir, "views", "add-product.html"))
})

router.post("/add-product", (request, response, next) => {
  console.log("In the /product middleware")
  console.log("request body:", request.body)
  console.log("request body title:", request.body.title)
  response.sendFile(path.join(rootDir, "views", "add-product.html"))
  // response.send("<h1>The 'Product' Page</h1>")
})

module.exports = router