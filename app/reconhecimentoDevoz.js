window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    console.log(e.results [0] [0].transcript)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(){
    elementoChuter.innerHTML = `
    <div>Você disse</div>
    <span class=bos"box">${chute}</span>
    `
}

