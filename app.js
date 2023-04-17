
const {leerInput, inquirerMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require ('./models/Busquedas')
const main = async() => {
  const busquedas =  new Busquedas();



  let opt;

  do {
   opt = await inquirerMenu();
  switch (opt){
    case 1:
   
    const lugar = await leerInput('ciudad: ');
    console.log(lugar)




        console.log('\nInformacion de la ciudad\n'.green);
        console.log('ciudad')
        console.log('lat')
        console.log('lng')
        console.log('temperatura')
        console.log('Maxima')
        console.log('Minima')
  } 




   console.log(opt);

   if (opt !==0) await pausa();

  } while ( opt !==0 )





}
main();