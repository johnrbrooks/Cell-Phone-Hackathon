const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
//const AppRouter = require('./Routes/AppRouter')

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('This is our landing page!')
})



const getPhones = async (req, res)=> {
  const cellphones = await phones.find()
  res.json(cellphones)
}

const getPhonesById = async (req,res) => {
  try{
  const { id } = req.params
  const Phone = await phones.findById(id)
  if(!Phone) throw Error('phones not found')
  res.json(Phone)
  }catch (e){
      console.log(e)
      res.send('phones not found')
  }
}

//app.use('/', AppRouter)