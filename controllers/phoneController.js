const { Phone } = require('../models')
const phoneSchema = require('../models/phone')


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

module.exports = {
    getPhones,
    getPhonesById
}
