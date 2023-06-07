const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const phoneController = require('./controllers/phoneController')
const platformController = require('./controllers/platformController')
const makeController = require('./controllers/makeController')
//const AppRouter = require('./Routes/AppRouter')

const { Phone } = require('./models')
const { Make } = require('./models')
const { Platform } = require('./models')

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('This is our landing page!')
})



app.get('/ios', platformController.getIosPhones)
app.get('/phones', phoneController.getPhones)
app.get('/android', platformController.getAndroidPhones)
app.get('/apple', makeController.getApplePhones)
app.get('/google', makeController.getGooglePhones)
app.get('/samsung', makeController.getSamsungPhones)

//app.use('/', AppRouter)