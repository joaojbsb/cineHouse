const catalogo = require('./database/catalogo.json');

function listarTodosOsFilmesForEach(catalogo){
    catalogo.forEach(element => {
        console.log(element);
    });
}

export {listarTodosOsFilmesForEach};