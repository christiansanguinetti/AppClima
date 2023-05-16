require('dotenv').config()
const {leerInput, inquirerMenu, pausa, listarlugares} = require('./helpers/inquirer');
const Busquedas = require ('./models/Busquedas')
const main = async() => {
  const busquedas =  new Busquedas();



  let opt;

  do {
   opt = await inquirerMenu();
  switch (opt){
    case 1:
   
    const lugar = await leerInput('ciudad: ');
    const lugares =  await busquedas.ciudad(lugar);
    const id = await listarlugares(lugares);
    const lug_selec= lugares.find(l=> l.id === id);
    lug_selec
  

    console.log({id})


        console.log('\nInformacion de la ciudad\n'.green);
        console.log('ciudad:', lug_selec.nombre)
        console.log('lat:', lug_selec.lat)
        console.log('lng:',lug_selec.lng)
        console.log('temperatura')
        console.log('Maxima')
        console.log('Minima')
  } 




   console.log(opt);

   if (opt !==0) await pausa();

  } while ( opt !==0 )





}
main();