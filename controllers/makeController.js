const { Make, Phone } = require('../models')

const getMakes = async (req, res)=> {
    const makes = await Make.find({})
    res.json(makes)
}

const getMakesById = async (req,res) => {
    try{
    const { id } = req.params
    const makes = await Make.findById(id)
    if(!makes) throw Error('makes not found')
    res.json(makes)
    }catch (e){
        console.log(e)
        res.send('makes not found')
    }
}

const getApplePhones = async (req, res) => {
    try {
        const applePhones = await Phone.find({ make_id: "Apple" })
        res.json(applePhones)
    } catch (e) {
        console.log(e)
        res.send('phones not found')
    }
}

const getSamsungPhones = async (req, res) => {
    try {
        const samsungPhones = await Phone.find({ make_id: "Samsung" })
        res.json(samsungPhones)
    } catch (e) {
        console.log(e)
        res.send('phones not found')
    }
}
const getGooglePhones = async (req, res) => {
    try {
        const googlePhones = await Phone.find({ make_id: "Google" })
        res.json(googlePhones)
    } catch (e) {
        console.log(e)
        res.send('phones not found')
    }
}


module.exports = {
    getMakes,
    getMakesById,
    getApplePhones,
    getSamsungPhones,
    getGooglePhones
}
