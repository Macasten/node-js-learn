console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

message1.textContent = ''
message2.textContent = ''

weatherForm.addEventListener( 'submit' , (e) => {
  e.preventDefault()
  const location = search.value
  message1.textContent = 'Loading'
  message2.textContent = ''
  fetch( `/weather?address=${location}` ).then( (response) => {
    response.json().then( (data) => {
      console.log( data )
      if( data.error ){
        console.log(data.error)
        message1.textContent = data.error
        message2.textContent = ''
      } else {
        message1.textContent = data.location 
        message2.textContent = data.forecast 
      }
    })
  } )
})

// Goal: Render content to paragraphs

// 1. Select the second message p from Javascript
// 2. Just before fetch, render loanding message and empty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors and for valid locations