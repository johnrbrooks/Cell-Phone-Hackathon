const { Platform, Phone,  } = require('../models')


const getPlatforms = async (req, res)=> {
    const platforms = await Platform.find({})
    res.json(platforms)
}

const createPlatforms = async (req, res) => {
    try {
        const Platform = await new Platform(req.body)
        await platform.save()
        return res.status(201).json({
            platform,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updatePlatform = async (req, res) => {
    try {
        const { id } = req.params;
        await Platform.findByIdAndUpdate(id, req.body, { new: true }, (err, platform) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!make) {
                res.status(500).send('Platform not found!');
            }
            return res.status(200).json(make);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePlatform = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Platform.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Platform deleted");
        }
        throw new Error("Platform not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const getPlatformsById = async (req,res) => {
    try{
    const { id } = req.params
    const platforms = await Platform.findById(id)
    if(!platforms) throw Error('platforms not found')
    res.json(platforms)
    }catch (e){
        console.log(e)
        res.send('platforms not found')
    }
}

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
    getAndroidPhones,
    getPlatforms,
    getPlatformsById
}
