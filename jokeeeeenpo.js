function solucao(joao, andre) {
    if(joao === "PEDRA"){
        if(andre === "PEDRA"){
            console.log("EMPATE");
        }
        if(andre === "PAPEL"){
            console.log("ANDRE");
        }
        if(andre === "TESOURA"){
            console.log("JOAO");
        }
    }
    if(joao === "PAPEL"){
        if(andre === "PEDRA"){
            console.log("JOAO");
        }
        if(andre === "PAPEL"){
            console.log("EMPATE");
        }
        if(andre === "TESOURA"){
            console.log("ANDRE");
        }
    }
    if(joao === "TESOURA"){
        if(andre === "PEDRA"){
            console.log("ANDRE");
        }
        if(andre === "PAPEL"){
            console.log("JOAO");
        }
        if(andre === "TESOURA"){
            console.log("EMPATE");
        }
    }
}