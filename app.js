require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarlugares } = require('./helpers/inquirer');
const Busquedas = require('./models/Busquedas')
const main = async () => {
  const busquedas = new Busquedas();



  let opt;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:

        const lugar = await leerInput('ciudad: ');
        const lugares = await busquedas.ciudad(lugar);
        const id = await listarlugares(lugares);
        if (id === '0') continue;


        const lug_selec = lugares.find(l => l.id === id);
       //guardar en DB
       busquedas.agregarHistorial(lug_selec.nombre)
            
        const clima = await busquedas.ClimaLugar(lug_selec.lat, lug_selec.lng);
        lug_selec

        console.clear();
        console.log('\nInformacion de la ciudad\n'.green);
        console.log('ciudad:', lug_selec.nombre)
        console.log('lat:', lug_selec.lat)
        console.log('lng:', lug_selec.lng)
        console.log('temperatura', clima.temp)
        console.log('Maxima', clima.max)
        console.log('Minima', clima.min)
        console.log('Como esta el clima:', clima.desc.green)
        console.log(opt);
        break;
      case 2:
        busquedas.historialCapitalizado.forEach ((lugar, i ) => {
       const idx = `${i + 1 }.`.green;
       console.log( `${idx} ${lugar}`);
        })
        
      

      }
    

if (opt !== 0) await pausa();

  } while (opt !== 0)


  

  
}
main();

