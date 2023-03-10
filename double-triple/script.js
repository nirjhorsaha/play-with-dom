function result(isDouble) {
  const inputField = document.getElementById("input-field");
    const getValue = inputField.value;

  if (isNaN(getValue)) {
    alert("Please enter a number");
  }

  const outPut = document.getElementById("floatingTextarea");
  let calculate;
  if (isDouble === true) {
    calculate = parseFloat(getValue) * 2;
    outPut.value = calculate;
    inputField.value = "";
  } else {
    calculate = parseFloat(getValue) * 3;
    outPut.value = calculate;
    inputField.value = "";
  }
}

document.getElementById("double").addEventListener("click", function () {
  result(true);
});
document.getElementById("triple").addEventListener("click", function () {
  result(false);
});
