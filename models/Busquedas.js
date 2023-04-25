const axios = require('axios'); 
class Busquedas {

Historial =  [];

constuctor() {
    //TODO Leer Db si existe

}

async ciudad (lugar = ''){
try{

  const resp = await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/-74.05941436907364,40.740037128383136.json?limit=1&access_token=pk.eyJ1IjoiY2hyaXN0aWFuc2FuZ3VpbmV0dGkiLCJhIjoiY2xnbGN5bnR4MW8zbTNnbzIwcm92NWhxNiJ9.x6usOAwWWhT9-M85uoIsow");
  console.log(resp);
 return [];
}

catch {

return [];


}
 
return []
}
}


module.exports = Busquedas