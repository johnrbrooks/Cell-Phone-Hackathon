const { Phone } = require('../models')
const phoneSchema = require('../models/phone')


const getPhones = async (req, res)=> {
    const cellphones = await Phone.find()
    res.json(cellphones)
}

const createPhone = async (req, res) => {
    try {
        const phone = await new Phone(req.body)
        await phone.save()
        return res.status(201).json({
            phone,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updatePhone = async (req, res) => {
    try {
        const { id } = req.params;
        await Phone.findOneAndUpdate(id, req.body, { new: true }, (err, phone) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!phone) {
                res.status(500).send('Phone not found!');
            }
            return res.status(200).json(phone);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePhone = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Phone deleted");
        }
        throw new Error("Phone not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPhonesById = async (req,res) => {
    try{
    const { id } = req.params
    const phoneById = await Phone.findById(id)
    if(phoneById) {
       return res.json(phoneById)
    }
    return res.status(404).send('Phone with the specified ID does not exists');

    }catch (e){
        console.log(e)
        res.send('phones not found')
    }
}

module.exports = {
    getPhones,
    getPhonesById,
    updatePhone

}
