function solucao(letra, palavras) {
    let cont = 0;
    
    for(item of palavras){
        if(item[0] !== letra){
            cont++;
        }
    }
    
    console.log(cont);
}