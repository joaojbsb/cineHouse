function listarFilmesEmCartaz(catalogo) {
    let filmesEmCartaz = [];

    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].emCartaz == true) {
            filmesEmCartaz.push(catalogo[i]);
        }        
    }
}

export {listarFilmesEmCartaz};