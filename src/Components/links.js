let products = 'https://app-nekoffee.herokuapp.com/api/products',
//productsId= 'https://app-nekoffee.herokuapp.com/api/products/' + _id,
orders ='https://app-nekoffee.herokuapp.com/api/orders' ,
//ordersId= 'https://app-nekoffee.herokuapp.com/api/orders/' + _id ,

localProducts = "http://localhost:3000/api/products",
//localProductsId= "localhost:3000//api/products/" + _id ,
localOrders= "http://localhost:3000/api/orders" ,
//locaOrdersId= "localhost:3000//api/orders/" + _id ,

password = 'https://app-nekoffee.herokuapp.com/api/authenticate',
passwordLocal = 'http://localhost:3000/api/authenticate',

ordersLink= localOrders,
productsLink= localProducts,
passwordLink= passwordLocal;

export default (ordersLink, passwordLink, productsLink)