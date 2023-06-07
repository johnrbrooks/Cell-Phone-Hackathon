const { Platform, Phone } = require('../models')


// const getPlatforms = async (req, res)=> {
//     const platforms = await Reviews.find({})
//     res.json(platforms)
// }

// const getPlatformsById = async (req,res) => {
//     try{
//     const { id } = req.params
//     const platforms = await Platforms.findById(id)
//     if(!platforms) throw Error('platforms not found')
//     res.json(platforms)
//     }catch (e){
//         console.log(e)
//         res.send('platforms not found')
//     }
// }

const getIosPhones = async (req, res) => {
    try {
        const iosPhones = await Phone.find({ platform_id: "iOS" })
        res.json(iosPhones)
    } catch (e) {
        console.log(e)
        res.send('phones not found')
    }
}
const getAndroidPhones = async (req, res) => {
    try {
        const androidPhones = await Phone.find({ platform_id: "Android" })
        res.json(androidPhones)
    } catch (e) {
        console.log(e)
        res.send('phones not found')
    }
}

module.exports = {
    getIosPhones,
    getAndroidPhones
}
