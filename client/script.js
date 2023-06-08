let url = `https://localhost:3001`

const iosButton = document.querySelector('#iosButton')
const androidButton = document.querySelector('#androidButton')
const appleButton = document.querySelector('#appleButton')
const googleButton = document.querySelector('#googleButton')
const samsungButton = document.querySelector('#samsungButton')
const resultsSection = document.querySelector('.results-section')

iosButton.addEventListener('click', getIosPhones = async () => {
    let image1 = document.querySelector('#phoneImage1')
    let name1 = document.querySelector('#phoneName1')
    let rating1 = document.querySelector('#custRating1')
    let generation1 = document.querySelector('#generation1')
    let release1 = document.querySelector('#release1')
    let price1 = document.querySelector('#price1')
    let storage1 = document.querySelector('#storage1')
    let screenSize1 = document.querySelector('#screenSize1')
    let connector1 = document.querySelector('#cameraQuality1')
    let externalStorage1 = document.querySelector('#externalStorage1')
    let image2 = document.querySelector('#phoneImage2')
    let name2 = document.querySelector('#phoneName2')
    let rating2 = document.querySelector('#custRating2')
    let generation2 = document.querySelector('#generation2')
    let release2 = document.querySelector('#release2')
    let price2 = document.querySelector('#price2')
    let storage2 = document.querySelector('#storage2')
    let screenSize2 = document.querySelector('#screenSize2')
    let connector2 = document.querySelector('#cameraQuality2')
    let externalStorage2 = document.querySelector('#externalStorage2')
    let image3 = document.querySelector('#phoneImage3')
    let name3 = document.querySelector('#phoneName3')
    let rating3 = document.querySelector('#custRating3')
    let generation3 = document.querySelector('#generation3')
    let release3 = document.querySelector('#release3')
    let price3 = document.querySelector('#price3')
    let storage3 = document.querySelector('#storage3')
    let screenSize3 = document.querySelector('#screenSize3')
    let connector3 = document.querySelector('#cameraQuality3')
    let externalStorage3 = document.querySelector('#externalStorage3')
    let image4 = document.querySelector('#phoneImage4')
    let name4 = document.querySelector('#phoneName4')
    let rating4 = document.querySelector('#custRating4')
    let generation4 = document.querySelector('#generation4')
    let release4 = document.querySelector('#release4')
    let price4 = document.querySelector('#price4')
    let storage4 = document.querySelector('#storage4')
    let screenSize4 = document.querySelector('#screenSize4')
    let connector4 = document.querySelector('#cameraQuality4')
    let externalStorage4 = document.querySelector('#externalStorage4')
    console.log('Searching iOS phones...')
    appleButton.addEventListener('click', getApplePhones)
    googleButton.addEventListener('click', getGooglePhones)
    samsungButton.addEventListener('click', getSamsungPhones)

    const pullIosPhones = await axios.get('http://localhost:3001/ios/apple')
    console.log(pullIosPhones)
    resultsSection.style.display = 'flex'

    image1.src = `${pullIosPhones.data[0].image}`
    name1.innerText = `${pullIosPhones.data[0].name}`
    rating1.innerText = `Customer Rating: ${pullIosPhones.data[0].cx_rating}`
    generation1.innerText =`Generation: ${pullIosPhones.data[0].generation}`
    release1.innerText = `Release Year: ${pullIosPhones.data[0].release_yr}`
    price1.innerText = `Price: $${pullIosPhones.data[0].price}`
    storage1.innerText = `Storage: ${pullIosPhones.data[0].storage}`
    screenSize1.innerText = `Screen Size: ${pullIosPhones.data[0].screen_size}`
    connector1.innerText = `Connector Type: ${pullIosPhones.data[0].connector_type}`
    externalStorage1.innerText = `External Storage: ${pullIosPhones.data[0].ext_storage}`

    image2.src = `${pullIosPhones.data[1].image}`
    name2.innerText = `${pullIosPhones.data[1].name}`
    rating2.innerText = `Customer Rating: ${pullIosPhones.data[1].cx_rating}`
    generation2.innerText =`Generation: ${pullIosPhones.data[1].generation}`
    release2.innerText = `Release Year: ${pullIosPhones.data[1].release_yr}`
    price2.innerText = `Price: $${pullIosPhones.data[1].price}`
    storage2.innerText = `Storage: ${pullIosPhones.data[1].storage}`
    screenSize2.innerText = `Screen Size: ${pullIosPhones.data[1].screen_size}`
    connector2.innerText = `Connector Type: ${pullIosPhones.data[1].connector_type}`
    externalStorage2.innerText = `External Storage: ${pullIosPhones.data[1].ext_storage}`

    image3.src = `${pullIosPhones.data[2].image}`
    name3.innerText = `${pullIosPhones.data[2].name}`
    rating3.innerText = `Customer Rating: ${pullIosPhones.data[2].cx_rating}`
    generation3.innerText =`Generation: ${pullIosPhones.data[2].generation}`
    release3.innerText = `Release Year: ${pullIosPhones.data[2].release_yr}`
    price3.innerText = `Price: $${pullIosPhones.data[2].price}`
    storage3.innerText = `Storage: ${pullIosPhones.data[2].storage}`
    screenSize3.innerText = `Screen Size: ${pullIosPhones.data[2].screen_size}`
    connector3.innerText = `Connector Type: ${pullIosPhones.data[2].connector_type}`
    externalStorage3.innerText = `External Storage: ${pullIosPhones.data[2].ext_storage}`

    image4.src = `${pullIosPhones.data[3].image}`
    name4.innerText = `${pullIosPhones.data[3].name}`
    rating4.innerText = `Customer Rating: ${pullIosPhones.data[3].cx_rating}`
    generation4.innerText =`Generation: ${pullIosPhones.data[3].generation}`
    release4.innerText = `Release Year: ${pullIosPhones.data[3].release_yr}`
    price4.innerText = `Price: $${pullIosPhones.data[3].price}`
    storage4.innerText = `Storage: ${pullIosPhones.data[3].storage}`
    screenSize4.innerText = `Screen Size: ${pullIosPhones.data[3].screen_size}`
    connector4.innerText = `Connector Type: ${pullIosPhones.data[3].connector_type}`
    externalStorage4.innerText = `External Storage: ${pullIosPhones.data[3].ext_storage}`
})

androidButton.addEventListener('click', getAndroidPhones = async () => {
    let image1 = document.querySelector('#phoneImage1')
    let name1 = document.querySelector('#phoneName1')
    let rating1 = document.querySelector('#custRating1')
    let generation1 = document.querySelector('#generation1')
    let release1 = document.querySelector('#release1')
    let price1 = document.querySelector('#price1')
    let storage1 = document.querySelector('#storage1')
    let screenSize1 = document.querySelector('#screenSize1')
    let connector1 = document.querySelector('#cameraQuality1')
    let externalStorage1 = document.querySelector('#externalStorage1')
    let image2 = document.querySelector('#phoneImage2')
    let name2 = document.querySelector('#phoneName2')
    let rating2 = document.querySelector('#custRating2')
    let generation2 = document.querySelector('#generation2')
    let release2 = document.querySelector('#release2')
    let price2 = document.querySelector('#price2')
    let storage2 = document.querySelector('#storage2')
    let screenSize2 = document.querySelector('#screenSize2')
    let connector2 = document.querySelector('#cameraQuality2')
    let externalStorage2 = document.querySelector('#externalStorage2')
    let image3 = document.querySelector('#phoneImage3')
    let name3 = document.querySelector('#phoneName3')
    let rating3 = document.querySelector('#custRating3')
    let generation3 = document.querySelector('#generation3')
    let release3 = document.querySelector('#release3')
    let price3 = document.querySelector('#price3')
    let storage3 = document.querySelector('#storage3')
    let screenSize3 = document.querySelector('#screenSize3')
    let connector3 = document.querySelector('#cameraQuality3')
    let externalStorage3 = document.querySelector('#externalStorage3')
    let image4 = document.querySelector('#phoneImage4')
    let name4 = document.querySelector('#phoneName4')
    let rating4 = document.querySelector('#custRating4')
    let generation4 = document.querySelector('#generation4')
    let release4 = document.querySelector('#release4')
    let price4 = document.querySelector('#price4')
    let storage4 = document.querySelector('#storage4')
    let screenSize4 = document.querySelector('#screenSize4')
    let connector4 = document.querySelector('#cameraQuality4')
    let externalStorage4 = document.querySelector('#externalStorage4')

    console.log('Searching Android phones...')
    appleButton.addEventListener('click', getApplePhones)
    googleButton.addEventListener('click', getGooglePhones)
    samsungButton.addEventListener('click', getSamsungPhones)

    const pullSamsungPhones = await axios.get('http://localhost:3001/android/samsung')
    console.log(pullSamsungPhones)
    resultsSection.style.display = 'flex'

    image1.src = `${pullSamsungPhones.data[0].image}`
    name1.innerText = `${pullSamsungPhones.data[0].name}`
    rating1.innerText = `Customer Rating: ${pullSamsungPhones.data[0].cx_rating}`
    generation1.innerText =`Generation: ${pullSamsungPhones.data[0].generation}`
    release1.innerText = `Release Year: ${pullSamsungPhones.data[0].release_yr}`
    price1.innerText = `Price: $${pullSamsungPhones.data[0].price}`
    storage1.innerText = `Storage: ${pullSamsungPhones.data[0].storage}`
    screenSize1.innerText = `Screen Size: ${pullSamsungPhones.data[0].screen_size}`
    connector1.innerText = `Connector Type: ${pullSamsungPhones.data[0].connector_type}`
    externalStorage1.innerText = `External Storage: ${pullSamsungPhones.data[0].ext_storage}`

    image2.src = `${pullSamsungPhones.data[1].image}`
    name2.innerText = `${pullSamsungPhones.data[1].name}`
    rating2.innerText = `Customer Rating: ${pullSamsungPhones.data[1].cx_rating}`
    generation2.innerText =`Generation: ${pullSamsungPhones.data[1].generation}`
    release2.innerText = `Release Year: ${pullSamsungPhones.data[1].release_yr}`
    price2.innerText = `Price: $${pullSamsungPhones.data[1].price}`
    storage2.innerText = `Storage: ${pullSamsungPhones.data[1].storage}`
    screenSize2.innerText = `Screen Size: ${pullSamsungPhones.data[1].screen_size}`
    connector2.innerText = `Connector Type: ${pullSamsungPhones.data[1].connector_type}`
    externalStorage2.innerText = `External Storage: ${pullSamsungPhones.data[1].ext_storage}`

    const pullGooglePhones = await axios.get('http://localhost:3001/android/google')
    console.log(pullGooglePhones)

    image3.src = `${pullGooglePhones.data[0].image}`
    name3.innerText = `${pullGooglePhones.data[0].name}`
    rating3.innerText = `Customer Rating: ${pullGooglePhones.data[0].cx_rating}`
    generation3.innerText =`Generation: ${pullGooglePhones.data[0].generation}`
    release3.innerText = `Release Year: ${pullGooglePhones.data[0].release_yr}`
    price3.innerText = `Price: $${pullGooglePhones.data[0].price}`
    storage3.innerText = `Storage: ${pullGooglePhones.data[0].storage}`
    screenSize3.innerText = `Screen Size: ${pullGooglePhones.data[0].screen_size}`
    connector3.innerText = `Connector Type: ${pullGooglePhones.data[0].connector_type}`
    externalStorage3.innerText = `External Storage: ${pullGooglePhones.data[0].ext_storage}`

    image4.src = `${pullGooglePhones.data[1].image}`
    name4.innerText = `${pullGooglePhones.data[1].name}`
    rating4.innerText = `Customer Rating: ${pullGooglePhones.data[1].cx_rating}`
    generation4.innerText =`Generation: ${pullGooglePhones.data[1].generation}`
    release4.innerText = `Release Year: ${pullGooglePhones.data[1].release_yr}`
    price4.innerText = `Price: $${pullGooglePhones.data[1].price}`
    storage4.innerText = `Storage: ${pullGooglePhones.data[1].storage}`
    screenSize4.innerText = `Screen Size: ${pullGooglePhones.data[1].screen_size}`
    connector4.innerText = `Connector Type: ${pullGooglePhones.data[1].connector_type}`
    externalStorage4.innerText = `External Storage: ${pullGooglePhones.data[1].ext_storage}`
})

const getApplePhones = async () => {
    console.log('Filtering Apple phones..')
    getIosPhones()
}

const getGooglePhones = async () => {
    let image1 = document.querySelector('#phoneImage1')
    let name1 = document.querySelector('#phoneName1')
    let rating1 = document.querySelector('#custRating1')
    let generation1 = document.querySelector('#generation1')
    let release1 = document.querySelector('#release1')
    let price1 = document.querySelector('#price1')
    let storage1 = document.querySelector('#storage1')
    let screenSize1 = document.querySelector('#screenSize1')
    let connector1 = document.querySelector('#cameraQuality1')
    let externalStorage1 = document.querySelector('#externalStorage1')
    let image2 = document.querySelector('#phoneImage2')
    let name2 = document.querySelector('#phoneName2')
    let rating2 = document.querySelector('#custRating2')
    let generation2 = document.querySelector('#generation2')
    let release2 = document.querySelector('#release2')
    let price2 = document.querySelector('#price2')
    let storage2 = document.querySelector('#storage2')
    let screenSize2 = document.querySelector('#screenSize2')
    let connector2 = document.querySelector('#cameraQuality2')
    let externalStorage2 = document.querySelector('#externalStorage2')
    let image3 = document.querySelector('#phoneImage3')
    let name3 = document.querySelector('#phoneName3')
    let rating3 = document.querySelector('#custRating3')
    let generation3 = document.querySelector('#generation3')
    let release3 = document.querySelector('#release3')
    let price3 = document.querySelector('#price3')
    let storage3 = document.querySelector('#storage3')
    let screenSize3 = document.querySelector('#screenSize3')
    let connector3 = document.querySelector('#cameraQuality3')
    let externalStorage3 = document.querySelector('#externalStorage3')
    let image4 = document.querySelector('#phoneImage4')
    let name4 = document.querySelector('#phoneName4')
    let rating4 = document.querySelector('#custRating4')
    let generation4 = document.querySelector('#generation4')
    let release4 = document.querySelector('#release4')
    let price4 = document.querySelector('#price4')
    let storage4 = document.querySelector('#storage4')
    let screenSize4 = document.querySelector('#screenSize4')
    let connector4 = document.querySelector('#cameraQuality4')
    let externalStorage4 = document.querySelector('#externalStorage4')

    console.log('Filtering Google phones..')
    const pullGooglePhones = await axios.get('http://localhost:3001/android/google')
    console.log(pullGooglePhones)
    resultsSection.style.display = 'flex'

    image1.src = `${pullGooglePhones.data[0].image}`
    name1.innerText = `${pullGooglePhones.data[0].name}`
    rating1.innerText = `Customer Rating: ${pullGooglePhones.data[0].cx_rating}`
    generation1.innerText =`Generation: ${pullGooglePhones.data[0].generation}`
    release1.innerText = `Release Year: ${pullGooglePhones.data[0].release_yr}`
    price1.innerText = `Price: $${pullGooglePhones.data[0].price}`
    storage1.innerText = `Storage: ${pullGooglePhones.data[0].storage}`
    screenSize1.innerText = `Screen Size: ${pullGooglePhones.data[0].screen_size}`
    connector1.innerText = `Connector Type: ${pullGooglePhones.data[0].connector_type}`
    externalStorage1.innerText = `External Storage: ${pullGooglePhones.data[0].ext_storage}`

    image2.src = `${pullGooglePhones.data[1].image}`
    name2.innerText = `${pullGooglePhones.data[1].name}`
    rating2.innerText = `Customer Rating: ${pullGooglePhones.data[1].cx_rating}`
    generation2.innerText =`Generation: ${pullGooglePhones.data[1].generation}`
    release2.innerText = `Release Year: ${pullGooglePhones.data[1].release_yr}`
    price2.innerText = `Price: $${pullGooglePhones.data[1].price}`
    storage2.innerText = `Storage: ${pullGooglePhones.data[1].storage}`
    screenSize2.innerText = `Screen Size: ${pullGooglePhones.data[1].screen_size}`
    connector2.innerText = `Connector Type: ${pullGooglePhones.data[1].connector_type}`
    externalStorage2.innerText = `External Storage: ${pullGooglePhones.data[1].ext_storage}`

    image3.src = `${pullGooglePhones.data[2].image}`
    name3.innerText = `${pullGooglePhones.data[2].name}`
    rating3.innerText = `Customer Rating: ${pullGooglePhones.data[2].cx_rating}`
    generation3.innerText =`Generation: ${pullGooglePhones.data[2].generation}`
    release3.innerText = `Release Year: ${pullGooglePhones.data[2].release_yr}`
    price3.innerText = `Price: $${pullGooglePhones.data[2].price}`
    storage3.innerText = `Storage: ${pullGooglePhones.data[2].storage}`
    screenSize3.innerText = `Screen Size: ${pullGooglePhones.data[2].screen_size}`
    connector3.innerText = `Connector Type: ${pullGooglePhones.data[2].connector_type}`
    externalStorage3.innerText = `External Storage: ${pullGooglePhones.data[2].ext_storage}`

    image4.src = `${pullGooglePhones.data[3].image}`
    name4.innerText = `${pullGooglePhones.data[3].name}`
    rating4.innerText = `Customer Rating: ${pullGooglePhones.data[3].cx_rating}`
    generation4.innerText =`Generation: ${pullGooglePhones.data[3].generation}`
    release4.innerText = `Release Year: ${pullGooglePhones.data[3].release_yr}`
    price4.innerText = `Price: $${pullGooglePhones.data[3].price}`
    storage4.innerText = `Storage: ${pullGooglePhones.data[3].storage}`
    screenSize4.innerText = `Screen Size: ${pullGooglePhones.data[3].screen_size}`
    connector4.innerText = `Connector Type: ${pullGooglePhones.data[3].connector_type}`
    externalStorage4.innerText = `External Storage: ${pullGooglePhones.data[3].ext_storage}`
}

const getSamsungPhones = async () => {
    let image1 = document.querySelector('#phoneImage1')
    let name1 = document.querySelector('#phoneName1')
    let rating1 = document.querySelector('#custRating1')
    let generation1 = document.querySelector('#generation1')
    let release1 = document.querySelector('#release1')
    let price1 = document.querySelector('#price1')
    let storage1 = document.querySelector('#storage1')
    let screenSize1 = document.querySelector('#screenSize1')
    let connector1 = document.querySelector('#cameraQuality1')
    let externalStorage1 = document.querySelector('#externalStorage1')
    let image2 = document.querySelector('#phoneImage2')
    let name2 = document.querySelector('#phoneName2')
    let rating2 = document.querySelector('#custRating2')
    let generation2 = document.querySelector('#generation2')
    let release2 = document.querySelector('#release2')
    let price2 = document.querySelector('#price2')
    let storage2 = document.querySelector('#storage2')
    let screenSize2 = document.querySelector('#screenSize2')
    let connector2 = document.querySelector('#cameraQuality2')
    let externalStorage2 = document.querySelector('#externalStorage2')
    let image3 = document.querySelector('#phoneImage3')
    let name3 = document.querySelector('#phoneName3')
    let rating3 = document.querySelector('#custRating3')
    let generation3 = document.querySelector('#generation3')
    let release3 = document.querySelector('#release3')
    let price3 = document.querySelector('#price3')
    let storage3 = document.querySelector('#storage3')
    let screenSize3 = document.querySelector('#screenSize3')
    let connector3 = document.querySelector('#cameraQuality3')
    let externalStorage3 = document.querySelector('#externalStorage3')
    let image4 = document.querySelector('#phoneImage4')
    let name4 = document.querySelector('#phoneName4')
    let rating4 = document.querySelector('#custRating4')
    let generation4 = document.querySelector('#generation4')
    let release4 = document.querySelector('#release4')
    let price4 = document.querySelector('#price4')
    let storage4 = document.querySelector('#storage4')
    let screenSize4 = document.querySelector('#screenSize4')
    let connector4 = document.querySelector('#cameraQuality4')
    let externalStorage4 = document.querySelector('#externalStorage4')

    console.log('Filtering Samsung phones..')
    const pullSamsungPhones = await axios.get('http://localhost:3001/android/samsung')
    console.log(pullSamsungPhones)
    resultsSection.style.display = 'flex'

    image1.src = `${pullSamsungPhones.data[0].image}`
    name1.innerText = `${pullSamsungPhones.data[0].name}`
    rating1.innerText = `Customer Rating: ${pullSamsungPhones.data[0].cx_rating}`
    generation1.innerText =`Generation: ${pullSamsungPhones.data[0].generation}`
    release1.innerText = `Release Year: ${pullSamsungPhones.data[0].release_yr}`
    price1.innerText = `Price: $${pullSamsungPhones.data[0].price}`
    storage1.innerText = `Storage: ${pullSamsungPhones.data[0].storage}`
    screenSize1.innerText = `Screen Size: ${pullSamsungPhones.data[0].screen_size}`
    connector1.innerText = `Connector Type: ${pullSamsungPhones.data[0].connector_type}`
    externalStorage1.innerText = `External Storage: ${pullSamsungPhones.data[0].ext_storage}`

    image2.src = `${pullSamsungPhones.data[1].image}`
    name2.innerText = `${pullSamsungPhones.data[1].name}`
    rating2.innerText = `Customer Rating: ${pullSamsungPhones.data[1].cx_rating}`
    generation2.innerText =`Generation: ${pullSamsungPhones.data[1].generation}`
    release2.innerText = `Release Year: ${pullSamsungPhones.data[1].release_yr}`
    price2.innerText = `Price: $${pullSamsungPhones.data[1].price}`
    storage2.innerText = `Storage: ${pullSamsungPhones.data[1].storage}`
    screenSize2.innerText = `Screen Size: ${pullSamsungPhones.data[1].screen_size}`
    connector2.innerText = `Connector Type: ${pullSamsungPhones.data[1].connector_type}`
    externalStorage2.innerText = `External Storage: ${pullSamsungPhones.data[1].ext_storage}`

    image3.src = `${pullSamsungPhones.data[2].image}`
    name3.innerText = `${pullSamsungPhones.data[2].name}`
    rating3.innerText = `Customer Rating: ${pullSamsungPhones.data[2].cx_rating}`
    generation3.innerText =`Generation: ${pullSamsungPhones.data[2].generation}`
    release3.innerText = `Release Year: ${pullSamsungPhones.data[2].release_yr}`
    price3.innerText = `Price: $${pullSamsungPhones.data[2].price}`
    storage3.innerText = `Storage: ${pullSamsungPhones.data[2].storage}`
    screenSize3.innerText = `Screen Size: ${pullSamsungPhones.data[2].screen_size}`
    connector3.innerText = `Connector Type: ${pullSamsungPhones.data[2].connector_type}`
    externalStorage3.innerText = `External Storage: ${pullSamsungPhones.data[2].ext_storage}`

    image4.src = `${pullSamsungPhones.data[3].image}`
    name4.innerText = `${pullSamsungPhones.data[3].name}`
    rating4.innerText = `Customer Rating: ${pullSamsungPhones.data[3].cx_rating}`
    generation4.innerText =`Generation: ${pullSamsungPhones.data[3].generation}`
    release4.innerText = `Release Year: ${pullSamsungPhones.data[3].release_yr}`
    price4.innerText = `Price: $${pullSamsungPhones.data[3].price}`
    storage4.innerText = `Storage: ${pullSamsungPhones.data[3].storage}`
    screenSize4.innerText = `Screen Size: ${pullSamsungPhones.data[3].screen_size}`
    connector4.innerText = `Connector Type: ${pullSamsungPhones.data[3].connector_type}`
    externalStorage4.innerText = `External Storage: ${pullSamsungPhones.data[3].ext_storage}`
}

// function to add and close phone form

const addPhoneForm = document.querySelector('#addPhoneButton')
const addPhoneButtonContainer = document.querySelector('#addPhoneButtonContainer')
const addPhoneContainer = document.querySelector('.add-phone-container')
const closePhoneButtonContainer = document.querySelector('#closePhoneButtonContainer')
const closePhoneButton = document.querySelector('#closePhoneButton')


addPhoneForm.addEventListener('click', showForm)

function showForm() {
    addPhoneButtonContainer.style.display = 'none'
    addPhoneContainer.style.display = 'flex'
    closePhoneButton.addEventListener('click', closeForm)
}

function closeForm() {
    addPhoneContainer.style.display = 'none'
    addPhoneButtonContainer.style.display = 'flex'
}

//submit button does nothing right now.. will need routes to add functionality

