function validarTexto(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function actualizarEstadoBotones() {
    const text = document.getElementById('textarea-text').value;
    const btnEncrypt = document.querySelector('.btn__primary');
    const btnDecrypt = document.querySelector('.btn__secondary');
    const alertBox = document.querySelector('.box__alert p');

    if (text.trim() !== "") {
        if (validarTexto(text)) {
            btnEncrypt.disabled = false;
            btnDecrypt.disabled = false;
            alertBox.style.color = 'var(--info-color)';
        } else {
            btnEncrypt.disabled = true;
            btnDecrypt.disabled = true;
            alertBox.style.color = 'red';
        }
    } else {
        btnEncrypt.disabled = false;
        btnDecrypt.disabled = false;
        alertBox.style.color = 'var(--info-color)';
    }
}

document.getElementById('textarea-text').addEventListener('input', actualizarEstadoBotones);
