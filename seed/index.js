const db = require('../db')
const { Phone, Make, Platform } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const platforms = await Platform.find({})   
const makes = await Make.find({})
const phones = await Phone.find({})
const Platforms = [
    { platform: 'iOS',
      platform_id: platforms[0]._id
    },
    {
     platform: 'Android',
     platform_id: platforms[0]._id
    }
 ]
const Makes = [
    {
        name:'Apple',
        platform_id: platforms[0]._id
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
const appleOS = await Platform.find({ platform_name:  'iOS'})


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
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
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
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
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
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
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
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-01.jpg",
    },
       
    {
        name: 'Galaxy', 
        generation: 'S23 Ultra', 
        release_yr: '2023',
        price: [1199.99, 1379.99, 1619.99],
        storage: ['256GB', '512GB', '1TB'],
        screen_size: '6.8"',
        cx_rating: '4.8',
        connector_type: 'USB-C',
        camera_qual: '200MP',
        ext_storage: false,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id, 
        image: `https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/gallery/lavender/01-DM3-Lavender-PDP-1600x1200.jpg?$product-details-jpg$`,
    },
    {
        name: 'Galaxy', 
        generation: 'S23+', 
        release_yr: '2023',
        price: [999.99, 1119.99],
        storage: ['256GB', '512GB'],
        screen_size: '6.6"',
        cx_rating: '4.7',
        connector_type: 'USB-C',
        camera_qual: '50MP',
        ext_storage: false,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id, 
        image: `https://image-us.samsung.com/us/smartphones/galaxy-s23/images/gallery/cream/dm2/01-DM2-Cream-PDP-1600x1200.jpg?$product-details-jpg$`,
    },
    {
        name: 'Galaxy', 
        generation: 'Z Fold4', 
        release_yr: '2023',
        price: [1799.99, 1919.99, 2159.99],
        storage: ['256GB', '512GB', '1TB'],
        screen_size: '7.6"',
        cx_rating: '4.7',
        connector_type: 'USB-C',
        camera_qual: '50MP',
        ext_storage: false,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id, 
        image: `https://image-us.samsung.com/us/smartphones/galaxy-z-fold4/gallery-images/08042022/Gallery-Q4-Green-01-1600x1200.jpg?$product-details-jpg$`,
    },
    {
        name: 'Galaxy', 
        generation: 'A54 5G', 
        release_yr: '2023',
        price: [449.99],
        storage: ['128GB', '256GB'],
        screen_size: '6.4"',
        cx_rating: '4.7',
        connector_type: 'USB-C',
        camera_qual: '50MP',
        ext_storage: true,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id, 
        image: `https://image-us.samsung.com/SamsungUS/configurator/A54-01-black-Configurator-DT-800x600.jpg`,
    },
    {
        name: "Pixel 7 Pro", 
        generation: 3, 
        release_yr: 2022,
        price: 878.6,
        storage: ["128GB", "256GB", "512GB"],
        screen_size: `6.3"`,
        cx_rating: "4.3",
        connector_type: "USB-C",
        camera_qual: "50MP",
        ext_storage: False,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
        image: `https://multimedia.bbycastatic.ca/multimedia/products/500x500/166/16609/16609842.jpg`,
    },
    {
        name: "Pixel 6a", 
        generation: `3`, 
        release_yr: `2022`,
        price: `329.5`,
        storage: ["128GB", "256GB"],
        screen_size: `6.1"`,
        cx_rating: "4.4",
        connector_type: "USB-C",
        camera_qual: "12.2MP",
        ext_storage: False,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/162/16299/16299237.jpg"
    },
    {
        name: "Pixel 5", 
        generation: `2`, 
        release_yr: `2022`,
        price: `336.27`,
        storage: ["128GB"],
        screen_size: `6"`,
        cx_rating: `5`,
        connector_type: "USB-C",
        camera_qual: "12.2MP",
        ext_storage: False,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/152/15222/15222471.jpg"
    },
    {
    
        name: "Pixel 3XL", 
        generation: `1`, 
        release_yr: 2022,
        price: `289.83`,
        storage: ["128GB", "256GB"],
        screen_size: `5.5"`,
        cx_rating: `4.4`,
        connector_type: "USB-C",
        camera_qual: "12.2MP",
        ext_storage: False,
        platform_id: platforms[0]._id,
        make_id: makes[0]._id,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/146/14640/14640262.jpg"
 
    },

]

await Phone.deleteMany(phones)
console.log("Check these phones out!")
await Platform.deleteMany(platforms)
console.log('platforms deleted')
await Make.deleteMany(makes)
console.log('platforms deleted')



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
}

run()