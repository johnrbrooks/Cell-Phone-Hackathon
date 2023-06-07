const { Make } = require('../models')

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

module.exports = {
    getMakes,
    getMakesById
}
