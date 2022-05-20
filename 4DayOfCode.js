const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
let numeroPensado = random(1, 11);


for (tentativas = 1; tentativas < 4; tentativas ++){
    let numeroEnviado = prompt("Em que número você acha que eu estou pensando? Você tem 3 chances")

     if(numeroPensado == numeroEnviado && tentativas > 1){
        document.write("<p>Parabéns! Você acertou em " + tentativas + " tentativas!</p>")
        break
    }
    else if(numeroPensado == numeroEnviado && tentativas == 1){
        document.write("<p>Parabéns! Você acertou em 1 tentativa!</p>")
        break
    }
    else if(numeroPensado != numeroEnviado){
        alert("Não, você errou. Tentativas restantes: " + (3 - tentativas))
    }
}
document.write("<p>Fim de jogo.</p>")