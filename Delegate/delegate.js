/* 
    this can't work on new item, because it only work on list item
 */
// const items = document.getElementsByClassName("item");
// // console.log(items);
// for (const item of items) {
//   item.addEventListener("click", function(event) {
//     // console.log(item);
//     // console.log(event.target);
//     // console.log(event.target.parentNode );
//     event.target.parentNode.removeChild(event.target); //remove item
//   });
// }

/**
 * delegate to parent node, so that parent node can remove item, also it work when new item added
 */
document.getElementById("list-container").addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target);
});

// add item
document.getElementById("addBtn").addEventListener("click", function () {
    const listContainer = document.getElementById("list-ul");

    const li = document.createElement("li");
    li.innerText = "New Item Added";
    li.classList.add('item');
    listContainer.appendChild(li);
  });
