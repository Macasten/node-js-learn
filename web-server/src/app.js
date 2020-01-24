const path = require('path')

const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use( express.static( path.join( __dirname, '../public')))

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
    message: "Help message"
  })
})


// Goal: Create a template for help page

// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get('/weather', (req, res ) => {
  res.send({ forecast : "10º", location: "Porto"})
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
} )
