const db = require('../db')
const { Phones } = require('../models')



    const Phones = [
        {  
        name: "iPhone 14 Pro", 
        generation: "16", 
        release_yr: "2023",
        price: 999,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: "6.7",
        cx_rating: "4.6",
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg",
    },

    
        {  
        name: "iPhone 14", 
        generation: "16", 
        release_yr: "2023",
        price: 799,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: "6.1",
        cx_rating: "4.5",
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg",
    },

    {  
        name: "iPhone 13", 
        generation: "15", 
        release_yr: "2022",
        price: 699,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: "6.1",
        cx_rating: "4.8",
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    },

    {  
        name: "iPhone 13 Mini", 
        generation: 15, 
        release_yr: "2022",
        price: 599,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: "5.4",
        cx_rating: "5.0",
        connector_type: "USB-C",
        camera_qual: "12MP",
        ext_storage: False,
        platform_id:
        make_id: 
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-01.jpg",
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