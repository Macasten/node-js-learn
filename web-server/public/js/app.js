console.log('Client side javascript file is loaded!')

fetch( 'http://puzzle.mead.io/puzzle').then( (response) => {
  
  response.json().then( (data) => {
    console.log( data )
  })

})

fetch( 'http://172.21.31.98:3000/weather?address=Porto' ).then( (response) => {
  console.log(response)
  response.json().then( (data) => {
    console.log( data )
    if( data.error ){
      console.log(data.error)
    } else {
      console.log( data.location )
      console.log( data.forecast )
    }
  })
} ) 