const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.disable('x-powered-by')

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use("/add-product", (request, response, next) => {
  console.log("In the /add-product middleware")
  response.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})

app.use("/product", (request, response, next) => {
  console.log("In the /product middleware")
  console.log("request body:", request.body)
  console.log("request body title:", request.body.title)
  response.send("<h1>The 'Product' Page</h1>")
})

app.use("/", (request, response, next) => {
  console.log("In the / middleware")
  response.send("<h1>The 'Home' Page</h1>")
})

// app.use((request, response, next) => {
//   console.log("In first middleware")
//   next()
// })

// app.use((request, response, next) => {
//   console.log("In second middleware")
//   response.send("<h1>Hello from Express!</h1>")
// })

app.listen(7999, () => {
  console.log('Server is running on port 7999')
})