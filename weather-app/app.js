const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
  if( error ){
    console.log(error)
  } else {
    forecast( data.longitude, data.latitude, ( error, data ) => {
      console.log( data )
      console.log( error )
    } )
  }
  console.log( data )
})

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})