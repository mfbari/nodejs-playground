const path = require('path')
const rootDir = require('./utils/path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()
app.disable('x-powered-by')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static(path.join(rootDir, "public")))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((request, response, next) => {
  response.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(7999, () => {
  console.log('Server is running on port 7999')
})