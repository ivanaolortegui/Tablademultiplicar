const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { saveFile, listar } = require('./multiplicar/multiplicar.js')
let comand = argv._[0]

switch (comand) {
    case ('listar'):
        listar(argv.base, argv.limited);
        break;
    case ('crear'):
        saveFile(argv.base, argv.limited).then(archivo => console.log(`${colors.green(archivo.green)}`))
            .catch(err => console.log(err));

        break;
    default:
        console.log('comando no reconocido');

}