const fs = require('fs');
const colors = require('colors');
let listar = (base, limite = 10) => {
    console.log('===='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('===='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}
let saveFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No ES UN NUMERO');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += '' + base * i + '\n';
        }
        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve('El archivo ha sido creado')

        })
    })
}
module.exports = {
    saveFile,
    listar,
}