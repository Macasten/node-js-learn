const https = require('https');

const url = `https://api.darksky.net/forecast/62d2d6aab6e627f7bdd219caae88a070/40,-17?units=si&lang=pt`

const request = https.request( url, (response) => {

  let data = ''
  response.on( 'data', (chunk) => {
    data = data + chunk.toString()
  })
  
  response.on( 'end', () => {
    const body = JSON.parse( data )
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error )
})

request.end()