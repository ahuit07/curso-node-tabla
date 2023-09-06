const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, limite = 10, imprimir ) => {

    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }


        if(imprimir) {
            console.log('======================='.green);
            console.log(`  Tabla del ${base}  `);
            console.log('=======================');
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;    
    } catch (error) {
        throw error;
    }   

}
 

/* const crearArchivo  = (base) => { 
    return promesa = new Promise ((resolve, reject) => {
        console.log('=======================');
        console.log(`  Tabla del ${base}  `);
        console.log('=======================');
        let salida = '';
        for(let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        const archivoCreado = fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
    })
}; */

/* const crearArchivo = ( base = 5 ) => {
    console.log('=======================');
    console.log(`  Tabla del ${base}  `);
    console.log('=======================');
    let salida = '';

    for(let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);*/

    /* fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
        if(err) throw err;
        console.log(`Archivo de tabla del ${base} creado correctamente.`);
    }); */

  /*    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`Archivo de tabla del ${base} creado correctamente.`);

}
 */
module.exports = {
    crearArchivo
}