const db = require('../db')
const { Make, Platform } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const platforms = await Platform.find({})
    const makes = [
        {
            name:'Apple',
            platforms_id: platforms[0]._id
        },
        {
            name:'Google',
            platform_id: platforms[0]._id
        },
        {
            name:'Samsung',
            platform_id: platforms[0]._id
        },
    ]
    await Make.deleteMany()
    await Make.insertMany(makes)
    console.log('created phone makes')
}

const run = async () => {
    await main()
    db.close()
}

run()