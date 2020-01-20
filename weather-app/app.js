const request = require('request')


//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233'
//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?key=value1&key2=value2'
const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?units=si&lang=pt'


// request( { url: url, json: true } , ( error, response ) => {
//   if( error ){
//     console.log('Unable to connect to weather service!')
//   } else if(response.body.error) {
//     console.log( 'Unable to find location!' )
//   } else{ 
//     var currently = response.body.currently
//     var daily = response.body.daily
//     console.log(`${ daily.data[0].summary} Is is currently ${currently.temperature} degrees\
//     outerHeight. There is a ${currently.precipProbability}% of rain.`)
//   }
// } )


// Goal: Handle errors for geocoding request

// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1' 
//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Senhora%20da%20Hora.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limi=10' 
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/asdasdasds.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1' 
request( { url: url2, json: true } , ( error, response ) => {
  if( error ){
    console.log('Unable to connect to location service!')
  } else if (response.body.features.length === 0 ){
    console.log('Unable to find location. Try another search. ')
  } else {
    console.log( response.body )
    var destination = response.body.features[0]
    var longitude = destination.center[0]
    var latitude = destination.center[1]
    console.log(`Lagitude ${ latitude } Longitude ${longitude}`)
  }
} )