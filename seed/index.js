const db = require('../db')
const { Phones } = require('../models')



    const Phones = [
        { model_id: '', 
        name: "iPhone 14 Pro", 
        generation: 16, 
        release_yr: 2023,
        price: 999,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: 6.7,
        cx_rating: 4.6,
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
    },

    
        { model_id: '', 
        name: "iPhone 14", 
        generation: 16, 
        release_yr: 2023,
        price: 799,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: 6.1,
        cx_rating: 4.5,
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
    },

    { model_id: '', 
        name: "iPhone 13", 
        generation: 15, 
        release_yr: 2022,
        price: 699,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: 6.1,
        cx_rating: 4.8,
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
    },

    { model_id: '', 
        name: "iPhone 13 Mini", 
        generation: 15, 
        release_yr: 2022,
        price: 599,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: 5.4,
        cx_rating: 5.0,
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
    },
       
        

]


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