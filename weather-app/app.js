const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Goal: Accept location via command line as argument

// 1. Access the command line argument without use yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

const location = process.argv[2]
if( !location ){
  return console.log("location is need!");
}


geocode(location, ( error , data ) => {
  if( error ){
    return console.log(error)
  }

  forecast( data.longitude, data.latitude, ( error, forecastData ) => {
    if( error ){
      return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
  })
  
})
