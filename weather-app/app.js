const request = require('request')

const url = 'https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/37.8267,-122.4233'

request( { url: url} , ( error, response ) => {
  const data = JSON.parse( response.body )
  console.log( data.currently )
} )