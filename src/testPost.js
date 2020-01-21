const fetch = require("node-fetch");

let deploy='https://app-nekoffee.herokuapp.com/api/products'
let bren = 'http://172.17.33.60:3000/api/orders'
let databody = [	{"name":"tACOS dE PERROs","price":20,"id":"5d994e45fff9eb374d4f68f5","uuid":"e06968d0-694d-48e6-8a0a-34da7bee926e"},
{"name":"Chocolate","price":25,"id":"5d994e87fff9eb374d4f68f6","uuid":"6def4904-abd9-4cd9-bba3-11946ed90675"}]
fetch(bren, {
method: 'POST',
header: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Accept-Charset": "utf-8"
},
body: JSON.stringify({order: 'tacosLocos'})
}).then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err.message));