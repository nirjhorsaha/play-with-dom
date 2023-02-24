document.getElementById("inputField").addEventListener('keyup', function (event) {
    const text = event.target.value;
    const disableBtn = document.getElementById('btn');
    if (text === 'delete') {
        disableBtn.removeAttribute('disabled');
    } else {
        disableBtn.setAttribute('disabled', true);
    }
});
