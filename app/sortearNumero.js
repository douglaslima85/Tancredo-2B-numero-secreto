const menorValor=1
const maiorValor=1000

const numeroSecreto = gerarNumeroAleatoril()

function  gerarNumeroAleatoril(){
   return parseInt(Math.random()*maiorValor + 1)
}

console.log('Numero Secreto:',numeroSecreto)

const elementoMemorValor = document.getElementById('menor-valor')
elementoMemorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor 