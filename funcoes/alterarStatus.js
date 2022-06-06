function alterarStatus(catalogo, codigo){
    const filmeAlterado = buscarFilme(catalogo, codigo);
 
           filmeAlterado.emCartaz ? filmeAlterado.emCartaz = false : filmeAlterado.emCartaz = true; 
    return filmeAlterado;
 }

 export  {alterarStatus};