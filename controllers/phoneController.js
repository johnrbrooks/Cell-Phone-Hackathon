const { Phone } = require('../models')
const phoneSchema = require('../models/phone')


const getPhones = async (req, res)=> {
    const cellphones = await Phone.find()
    res.json(cellphones)
}

const getPhonesById = async (req,res) => {
    try{
    const { id } = req.params
    const phoneById = await Phone.findById(id)
    if(!phoneById) throw Error('phones not found')
    res.json(phoneById)
    }catch (e){
        console.log(e)
        res.send('phones not found')
    }
}

module.exports = {
    getPhones,
    getPhonesById
}
