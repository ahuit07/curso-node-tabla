const { crearArchivo } =  require('./helpers/multiplicar')
const argv = require('./config/yargs')

//console.log(process.argv)

//console.log(argv)

//console.log("Base yargs: ", argv.base);

crearArchivo( argv.base, argv.limite, argv.imprimir )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));