const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Goal: Use both destructuring and property shorthand in weather app

// 1. Use destructuring in app-js, forecast.js and geocode.js
// 2. Use preperty shorthand in forecast.js and geocode.js
// 3. Tess your work ensure app still works

const location = process.argv[2]
if( !location ){
  return console.log("location is need!");
}


geocode(location, ( error , {longitude, latitude, location} ) => {
  if( error ){
    return console.log(error)
  }

  forecast( longitude, latitude, ( error, forecastData ) => {
    if( error ){
      return console.log(error)
    }
    console.log(location)
    console.log(forecastData)
  })
  
})
