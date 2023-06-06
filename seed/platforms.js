const Platform = require('..models/platform')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const appleOS = await Platform.find({ platform_name:  'iOS'})

    const platforms = [
       { platform: 'iOS',
         platform_id: appleOS[0]._id
       },
    ]

    await Platform.insertMany(platforms)
    console.log('platforms created')
}
const run = async () => {
    await main()
    db.close
}

run()