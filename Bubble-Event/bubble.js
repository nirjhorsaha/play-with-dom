document.getElementById("item-3").addEventListener('click', function (event) {
    console.log('item-3 clicked');
    event.stopPropagation();
    // event.stopImmediatePropagation();
});
document.getElementById("item-3").addEventListener('click', function (event) {
    console.log('item-3 again clicked');
});
document.getElementById("item-3").addEventListener('click', function (event) {
    console.log('item-3 again clicked-2');
});
document.getElementById("item-3").addEventListener('click', function (event) {
    console.log('item-3 again clicked-3');
});


document.getElementById("list-ul").addEventListener("click", function () {
    console.log("list item clicked");
});
document.getElementById("list-container").addEventListener("click", function () {
    console.log("section item clicked");
});