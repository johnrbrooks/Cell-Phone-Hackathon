const { Platform } = require('../models')


const getPlatforms = async (req, res)=> {
    const platforms = await Reviews.find({})
    res.json(platforms)
}

const getPlatformsById = async (req,res) => {
    try{
    const { id } = req.params
    const platforms = await Platforms.findById(id)
    if(!platforms) throw Error('platforms not found')
    res.json(platforms)
    }catch (e){
        console.log(e)
        res.send('platforms not found')
    }
}

module.exports = {
    getPlatforms,
    getPlatformsById
}
