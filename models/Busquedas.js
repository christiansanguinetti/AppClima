const fs = require('fs')

const axios = require('axios');

class Busquedas {

  Historial = [];
  dbPath='./db/database.json';

  constuctor() {
    //TODO Leer Db si existe
    this.cargarDB();
  }
  get historialCapitalizado(){
    return this.Historial.map( lugar => {
      let palabras = lugar.split(' ');
      palabras = palabras.map (p => p[0].toUpperCase() + p.subtring(1));
      return palabras.join(' ');
    })
  }

  get ParamsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: 'metric',
      lang: 'es'

    }
  }




  async ciudad(lugar = '') {
    try {

      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: {
          'access_token': process.env.MAPBOX_KEY,
          'limit': 5,
          'lenguage': 'es'
        }


      })
      const resp = await intance.get();
      return resp.data.features.map(lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1]
      }));


    } catch (error) {

      return [];

    }

  }

  async ClimaLugar(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
        params: {...this.ParamsWeather, lat, lon }
      })
      const resp = await instance.get();
      const {weather, main} = resp.data
  
     return{
      desc: weather[0].description,
      min: main.temp_min,
      max: main.temp_max,
      temp:main.temp
     
    } 
  } catch (error) {

    }

  }


agregarHistorial(lugar = ""){  
  if (this.Historial.includes(lugar.toLocaleLowerCase())){
    return;
  }
  


  this.Historial.unshift(lugar.toLocaleLowerCase());
  
  //grabar en DB
  this.guardarDB();
}

guardarDB(){
 const payLoad ={
  Historial: this.Historial
  };
  fs.writeFileSync(this.dbPath, JSON.stringify(payLoad));

}
cargarDB(){
 if (!fs.existsSync(this.dbPath)) return;
 const info = fs.readFileSync(this.dbPath, {encoding:'-utf8'});
 const data = JSON.parse(info);
 this.Historial = data.Historial;
}
}


module.exports = Busquedas