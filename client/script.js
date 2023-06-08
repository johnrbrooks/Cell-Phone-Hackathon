let url = `https://localhost:3001`

const iosButton = document.querySelector('#iosButton')
const androidButton = document.querySelector('#androidButton')
const appleButton = document.querySelector('#appleButton')
const googleButton = document.querySelector('#googleButton')
const samsungButton = document.querySelector('#samsungButton')

let name = document.querySelector('#phoneName')
let rating = document.querySelector('#custRating')
let generation = document.querySelector('#generation')
let release = document.querySelector('#release')
let price = document.querySelector('#price')
let storage = document.querySelector('#storage')
let screenSize = document.querySelector('#screenSize')
let connector = document.querySelector('#cameraQuality')
let externalStorage = document.querySelector('#externalStorage')

iosButton.addEventListener('click', getIosPhones = async () => {
    console.log('Searching iOS phones...')
    appleButton.addEventListener('click', getApplePhones)
    googleButton.addEventListener('click', getGooglePhones)
    samsungButton.addEventListener('click', getSamsungPhones)

    const pullIosPhones = await axios.get('http://localhost:3001/ios/apple')
    console.log(pullIosPhones)
})

androidButton.addEventListener('click', getAndroidPhones = async () => {
    console.log('Searching Android phones...')
    appleButton.addEventListener('click', getApplePhones)
    googleButton.addEventListener('click', getGooglePhones)
    samsungButton.addEventListener('click', getSamsungPhones)

    const pullSamnsungPhones = await axios.get('http://localhost:3001/android/samsung')
    console.log(pullSamnsungPhones)
    const pullGooglePhones = await axios.get('http://localhost:3001/android/google')
    console.log(pullGooglePhones)
})

const getApplePhones = async () => {
    console.log('Filtering Apple phones..')
    const pullIosPhones = await axios.get('http://localhost:3001/ios/apple')
    console.log(pullIosPhones)
}

const getGooglePhones = async () => {
    console.log('Filtering Google phones..')
    const pullGooglePhones = await axios.get('http://localhost:3001/android/google')
    console.log(pullGooglePhones)
}

const getSamsungPhones = async () => {
    console.log('Filtering Samsung phones..')
    const pullSamnsungPhones = await axios.get('http://localhost:3001/android/samsung')
    console.log(pullSamnsungPhones)
}


// click 'apple' button -> show four apple phones
// click 'google' button -> show four google phones
// click 'samsung' button -> show four samsung phones

// function selectPlatform(phonePlatform, async () => {
//     if (phonePlatform === 'iOS') {
//         let name = document.querySelector('#phoneName')
//         name.innerHTML = ``
//     }

// })

// function to pull makes

// function to pull phones

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

