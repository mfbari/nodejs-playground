const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log("In first middleware")
  next()
})

app.use((request, response, next) => {
  console.log("In second middleware")
  response.send("<h1>Hello World!</h1>")
})

app.listen(7999, () => {
  console.log('Server is running on port 7999')
})