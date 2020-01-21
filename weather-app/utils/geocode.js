const request = require('request')

//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1' 
//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Senhora%20da%20Hora.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limi=10' 
//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/asdasdasds.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1' 

const geocode = (address, callback ) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent( address )}.json?access_token=pk.eyJ1IjoibWFjYXN0ZW4iLCJhIjoiY2s1bW16aHhnMG8yeTNkcXA4aHlmM2hoNyJ9.zjcRhh8WNOuXIlmAh-_C2A&limit=1`
  request( { url:url, json:true}, (error, response ) =>{
  if( error ){
    callback( 'Unable to connect to location service!' )
  } else if (response.body.features.length === 0 ){
    callback( 'Unable to find location. Try another search.' )
  } else {
    var destination = response.body.features[0]
    var data = {
      location: destination.place_name,
      longitude: destination.center[0],
      latitude: destination.center[1]
    }
    callback(undefined, data )
  }
  })
}

module.exports = geocode