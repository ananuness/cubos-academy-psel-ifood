function solucao(precos) {
    let menor = precos[0], soma = 0;
    
    if(precos.length >= 5){
        for(let i = 0; i < precos.length; i++){
            if(precos[i] < menor){
                menor = precos[i];
            }
            soma += precos[i];
        }
        console.log(soma - menor);
    }
    else{
        for(let i = 0; i < precos.length; i++){
            soma += precos[i];
        }
        console.log(soma);
    }
}