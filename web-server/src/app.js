const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()
const port = process.env.PORT || 3000

// Define path for Express config
// Setup handlebars engine and views
app.set('view engine', 'hbs')
// Setup static directory to server
app.set('views', path.join( __dirname, '../views/views'))
console.log(path.join( __dirname, '../views/views'))
app.use( express.static( path.join( __dirname, '../public')))
hbs.registerPartials( path.join( __dirname, '../views/partials'))

app.get('', (req, res ) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Macas'
  })
})

app.get('/about', (req, res) =>{
  res.render('about', {
    title: 'About Me',
    name: 'Macasten'
  })

} )

app.get( '/help', ( req, res)=>{
  res.render('help', {
    title: "Help",
    message: "Help message",
    name: 'Macas'
  })
})

app.get('/weather', (req, res ) => {
  if( !req.query.address ){
    return res.send({ error: 'Location is needed!' })
  }

  geocode(req.query.address, ( error , {longitude, latitude, location} = {} ) => {
    if( error ){
      return res.send({ error: error })
    }
  
    forecast( longitude, latitude, ( error, forecastData ) => {
      if( error ){
        res.send({ error: error })
      }
      res.send( {
        forecast : forecastData,
        location ,
        address : req.query.address
      })
    })
    
  })

})

app.get('/products', (req, res ) => {
  if( !req.query.search) {
    return res.send({ error: 'you must provide a search term'})
  }
  
  res.send({ products: [] })
  
})


app.get('/help/*', (req, res) => {
  res.render('404',{
    title: "404",
    errorMessage : 'Help article ',
    name: 'Macas' })
})
app.get('*', (req, res ) => {
  res.render('404', {
    title: "404",
    errorMessage: 'My 404 page',
    name: 'Macas'} )
})

app.listen(port, () =>{
  console.log(`Server is up on port ${port}.`)
} )
