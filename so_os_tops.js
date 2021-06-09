function solucao(produtos) {
    let somaTop = 0, somaTotal = 0;
    
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].preco > 10000){
            somaTop += produtos[i].preco;
        }
        somaTotal += produtos[i].preco;
    }
    
    let resposta = { totalTop: somaTop, percentual: somaTop / somaTotal};
    
    console.log(resposta);
}