function actualizarVisibilidad() {
    const text = document.getElementById('textarea-text').value;
    const clearIcon = document.getElementById('clear-icon');

    if (text.trim() === "") {
        document.querySelector('.box__message-initial').style.display = 'block';
        document.querySelector('.box__message-transform').style.display = 'none';
        clearIcon.style.display = 'none';
    } else {
        clearIcon.style.display = 'block';
    }
}

function encriptarTexto() {
    const text = document.getElementById('textarea-text').value;

    if(text.trim() != "") {
        let encripText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById('result').textContent = encripText;

        document.querySelector('.box__message-initial').style.display = 'none';
        document.querySelector('.box__message-transform').style.display = 'block';
    } else {
        document.querySelector('.box__message-initial').style.display = 'block';
        document.querySelector('.box__message-transform').style.display = 'none';
    }
}

function desencriptarTexto() {
    const text = document.getElementById('textarea-text').value;

    if (text.trim() != "") {
        let desencriptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById('result').textContent = desencriptedText;
    } else {
        document.querySelector('.box__message-initial').style.display = 'block';
        document.querySelector('.box__message-transform').style.display = 'none';
    }

}

function copiarTexto() {
    const resultText = document.getElementById('result').textContent;
    navigator.clipboard.writeText(resultText);
}

function limpiarTextarea() {
    document.getElementById('textarea-text').value = "";
    document.getElementById('clear-icon').style.display = 'none';
    actualizarEstadoBotones();
}

document.getElementById('textarea-text').addEventListener('input', actualizarVisibilidad);
document.getElementById('textarea-text').addEventListener('input', actualizarEstadoBotones);