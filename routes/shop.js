const express = require('express')
const router = express.Router()

router.get("/", (request, response, next) => {
  console.log("In the / middleware")
  response.send("<h1>The 'Home' Page</h1>")
})

module.exports = router