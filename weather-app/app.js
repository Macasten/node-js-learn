const request = require('request')



// Goal: Print a small forecast to the user

// 1. Print: "It is currently 58.55 degrees out. There is a 0% of rain."
// 2. Test your Work!

//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233'
//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?key=value1&key2=value2'
const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?units=si&lang=pt'

request( { url: url, json: true } , ( error, response ) => {
  var currently = response.body.currently
  var daily = response.body.daily
  console.log(`${ daily.data[0].summary} Is is currently ${currently.temperature} degrees\
    outerHeight. There is a ${currently.precipProbability}% of rain.`)
} )