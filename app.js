const express = require('express')
const bodyParser = require('body-parser')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()
app.disable('x-powered-by')

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((request, response, next) => {
  response.status(404).send("<h1>Page not found</h1>")
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