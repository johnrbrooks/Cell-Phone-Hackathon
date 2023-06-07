const { Phone } = require('../models')


const getPhones = async (req, res)=> {
    const phones = await Phones.find({})
    res.json(phones)
}

const getPhonesById = async (req,res) => {
    try{
    const { id } = req.params
    const phones = await Phones.findById(id)
    if(!phones) throw Error('phones not found')
    res.json(phones)
    }catch (e){
        console.log(e)
        res.send('phones not found')
    }
}

module.exports = {
    getPhones,
    getPhonesById
}
