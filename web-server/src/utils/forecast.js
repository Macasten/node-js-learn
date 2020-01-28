const request = require("request")

//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233'
//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?key=value1&key2=value2'
//const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233?units=si&lang=pt'


const geocode = (longitude, latitude, callback ) => {
  const url = `https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/${ latitude },${ longitude  }?units=si&lang=pt`
  request( { url, json:true}, (error, {body} ) =>{
  if( error ){
    callback('Unable to connect to weather service!', undefined)
  } else if(body.error) {
    callback( 'Unable to find location!', undefined)
  } else {
    var{ currently, daily } = body
    var data = `${ daily.data[0].summary} Is is currently \
${currently.temperature} degrees out. There is a \
${currently.precipProbability}% of rain.`

    callback(undefined, data )
  }
  })
}

module.exports = geocode