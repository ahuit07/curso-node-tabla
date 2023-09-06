const argv = require('yargs').option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'Base numérica para obtener tabla de multiplicar.',
    type: 'number'
}).option('l', {
    alias: 'limite',
    demandOption: true,
    describe: 'Hasta que número debe crearse la tabla.',
    type: 'number'
}).option('i', {
    alias: 'imprimir',
    demandOption: false,
    describe: 'Indica si se debe imprimir la tabla obtenida en consola.',
    type: 'boolean',
    default:false
}).check((argv, options) => {
    if (isNaN(argv.base)) {
      throw new Error("La base debe ser un número.")
    } 
    return true;
  }).argv

  module.exports = argv;