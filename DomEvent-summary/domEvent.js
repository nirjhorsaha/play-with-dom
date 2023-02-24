function handleOnClick() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = 'Handled by function attached on onClick attribute';
}

// another way

document.getElementById("event-listener").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Text updated by addEventListener button";
});