const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)||!Number(limite)){
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(colors.red(`tabla ${base}.txt`));

        });

    });
}

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)||!Number(limite)){
            reject('base o limite no es un numero');
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        
        resolve (`${data}`);

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}
