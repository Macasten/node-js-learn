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

app.get('/weather', (req, res ) => {
  res.send({
    forecast : "10º",
    location: "Porto"})
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

// Goal: Create and render a 404 page with Handlebars

// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for coth 404 routes
//   - Page not found.
//   - Page article not found.
// 4. Test your work. Visit /what and help/units