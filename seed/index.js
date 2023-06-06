
const db = require('../db')
const { Phones } = require('../models')

// Connect to the database


    const phones = [
        { model_id: '', 
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

    await Phones.insertMany(movies)
    console.log("Check these phones out!")
}
const run = async () => {
    await main()
    db.close()