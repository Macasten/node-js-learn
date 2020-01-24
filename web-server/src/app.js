const path = require('path')
const express = require('express')

const app = express()

// Define path for Express config
// Setup handlebars engine and views
app.set('view engine', 'hbs')
//app.set('views', 'caminho para views')
// Setup static directory to server
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

app.get('/weather', (req, res ) => {
  res.send({ forecast : "10º", location: "Porto"})
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
} )
