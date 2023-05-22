const axios = require('axios');
class Busquedas {

  Historial = [];

  constuctor() {
    //TODO Leer Db si existe

  }

  get ParamsWeather() {
    return {
      appid: process.env.openweater_KEY,
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
      console.log(resp);
  
     return{
      desc:'',
      min:'',
      max:'',
      temp:''
     
    } 
  } catch (error) {

    }

  }



}


module.exports = Busquedas