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
})

androidButton.addEventListener('click', getAndroidPhones = async () => {
    console.log('Searching Android phones...')
    appleButton.addEventListener('click', getApplePhones)
    googleButton.addEventListener('click', getGooglePhones)
    samsungButton.addEventListener('click', getSamsungPhones)
})

const getApplePhones = async () => {
    console.log('Filtering Apple phones..')
}

const getGooglePhones = async () => {
    console.log('Filtering Google phones..')
}

const getSamsungPhones = async () => {
    console.log('Filtering Samsung phones..')
}