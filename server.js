const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const controllers = require('./controllers/phoneController')
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


app.get('/phones', controllers.getPhones)
app.get('/phones/:id', controllers.getPhonesById)


//app.use('/', AppRouter)