const request = require('request')



// Goal: Print the lat/lg of the Los Angles

// 1. Fire of a new request to the URL explered in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233'
//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?key=value1&key2=value2'
const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?units=si&lang=pt'
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1' 


// request( { url: url, json: true } , ( error, response ) => {
//   var currently = response.body.currently
//   var daily = response.body.daily
//   console.log(`${ daily.data[0].summary} Is is currently ${currently.temperature} degrees\
//     outerHeight. There is a ${currently.precipProbability}% of rain.`)
// } )

request( { url: url2, json: true } , ( error, response ) => {
  var destination = response.body.features[0]
  var longitude = destination.center[0]
  var latitude = destination.center[1]
  console.log(`Lagitude ${ latitude } Longitude ${longitude}`)
} )