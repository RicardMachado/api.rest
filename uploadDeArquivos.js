const fs = require('fs')

fs.createReadStream('./assets/cachorrinho.jpg')
    .pipe(fs.createWriteStream('./assets/cachorrinho-strem.jpg'))
    .on('finish', () => console.log('Imagem inscrita com succeso!'))
