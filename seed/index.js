const db = require('../db')
const { Phones, Makes, Platforms } = require('../models')


const main = async () => {
    const phones = [
        {
        name: "iPhone 14 Pro", 
        generation: 14, 
        release_yr: 2023,
        price: 999,
        storage: "128GB",
        screen_size: 6.7,
        cx_rating: 4.6,
        connector_type:
        camera_qual: "48MP",
        ext_storage: False,
        platform_id:
        make_id: 
    }
       
    
]
}
    await Phone.insertMany(phones)
    console.log("Check these phones out!")
    await Platform.insertMany(platforms)
    console.log('platforms created')
    await Make.insertMany(makes)
    console.log('platforms created')


const run = async () => {
    await main()
    db.close()
}