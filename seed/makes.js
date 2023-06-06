const db = require('../db')
const { Make } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const makes = [

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