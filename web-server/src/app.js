const express = require('express')

const app = express()

// Goal: Update routes

// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//   - Object with forecast and location strings
// 3. Test your work by visiting both in the browser


app.get('', ( req, res ) =>{
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res ) => {
  res.send([{
    name : "Macas",
    age : 33
  },
  {
    name : "Mais cenas",
    age : 0
  }])
})
app.get('/about', (req, res ) => {
  res.send('<h1>About page</h1>')
})
app.get('/weather', (req, res ) => {
  res.send({ forecast : "10º", location: "Porto"})
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
} )
