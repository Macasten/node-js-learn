const path = require('path')
const express = require('express')
const hbs = require('hbs')


// Goal: Create a partial for the footer

// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

const app = express()

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

// Goal: Update weather endpoint to accept address

// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
//     - Add address property onto JSON witch returns the provided address
// 3. Test /weather and /Weather?adress=philadelphia

app.get('/weather', (req, res ) => {
  if( !req.query.address ){
    return res.send({ error: 'Location is needed!' })
  }

  res.send( {
    forecast : 'pois',
    location : req.query.address
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

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
} )
