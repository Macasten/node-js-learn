// object property shorthand

const name = 'file'
const userAge = 33
const user = {
  name ,
  age : userAge,
  location: 'Porto'
}

console.log(user)

// Object destruturing

const product = {
  label: 'Red noteDoock',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating : 4
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5 } = product
// console.log( stock, rating,  productLabel)
// console.log( product )

const transaction = (type, { label , stock } ) => {
  console.log( type, label, stock )
}

transaction( 'order ', product)