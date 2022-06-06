function listarFilmesDeLongaDuracao(catalogo){
    let filmesLongaDuracao = [];
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].duracao >= 2) {
            filmesLongaDuracao.push(catalogo[i])
        }        
    }
    return filmesLongaDuracao;
}

export {listarFilmesDeLongaDuracao};