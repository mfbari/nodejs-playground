const path = require('path')
const rootDir = require('../utils/path')
const express = require('express')
const router = express.Router()

router.get("/", (request, response, next) => {
  console.log("In the / middleware")
  response.sendFile(path.join(rootDir, "views", "shop.html"))
})

module.exports = router