document.getElementById("btn-update").addEventListener('click', function () {
  // console.log('check update btn');
    const inputField = document.getElementById("inputText");
    // console.log(inputField.innerText);
    // console.log(inputField.value);
    const inputDisplay = inputField.value;

    const setOutput = document.getElementById("text");
    setOutput.innerText = inputDisplay;

    // clear input field
    inputField.value = ''; 
});
