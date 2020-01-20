const request = require("request")

const geocode = require('./utils/geocode')

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

geocode('Porto Portugal', ( error , data ) => {
  console.log( error )
  console.log( data )

})