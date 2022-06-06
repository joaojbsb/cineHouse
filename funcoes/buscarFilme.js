function buscarFilme(catalogo, codigo){
    return catalogo.find(filme => filme.codigo === codigo
)
}

export { buscarFilme };