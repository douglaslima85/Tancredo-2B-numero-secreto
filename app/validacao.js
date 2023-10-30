function verificaSeOChutePossuiUmValorValido(chute){
    const numero= +chute


if (chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor inválido</div>'
    return
}

if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `
    <div> Valor inválido:Fale um numero entre ${menorValor} e ${maiorValor}</div>`
    return
}

if (numero === numeroSecreto){
    document.body.innerHTML = `
     <h2>Você acertou!</h2>
     <h3>O numero secreto era ${numeroSecreto}</h3>
     `
}
  
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}