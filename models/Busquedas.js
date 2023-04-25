const axios = require('axios'); 
class Busquedas {

Historial =  [];

constuctor() {
    //TODO Leer Db si existe

}

async ciudad (lugar = ''){
try{

 const intance = axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
  params: {
    'access_token': pk.eyJ1IjoiY2hyaXN0aWFuc2FuZ3VpbmV0dGkiLCJhIjoiY2xnbGN5bnR4MW8zbTNnbzIwcm92NWhxNiJ9.x6usOAwWWhT9-M85uoIsow,
    'limit':5,
    'lenguage': 'es'
  }


 }) 
const resp =  await intance.get();
console.log (resp.data);
 
 return [];
}

catch {

return [];


}
 
return []
}
}


module.exports = Busquedas