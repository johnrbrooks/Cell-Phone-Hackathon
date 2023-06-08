const { Make, Phone } = require('../models')

const getMakes = async (req, res)=> {
    const makes = await Make.find({})
    res.json(makes)
}

const createMakes = async (req, res) => {
    try {
        const make = await new Make(req.body)
        await make.save()
        return res.status(201).json({
            make,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateMakes = async (req, res) => {
    try {
        const { id } = req.params;
        await Make.findByIdAndUpdate(id, req.body, { new: true }, (err, make) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!make) {
                res.status(500).send('Make not found!');
            }
            return res.status(200).json(make);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteMake = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Make.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Make deleted");
        }
        throw new Error("Make not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
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
