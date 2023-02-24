// step-1: add eventListener to the post button
document.getElementById("postBtn").addEventListener('click', function () {
  // step-2: get the comment inside text box
  const commentBox = document.getElementById("newText");
  const newComment = commentBox.value;
  // console.log(newComment);

  // step-3: set the comment inside the comment-Container
    const commentContainer = document.getElementById("comment-Container");
    const newParagraph = document.createElement('p');
    newParagraph.innerText = newComment;
    commentContainer.appendChild(newParagraph);

    // step-4: Clear the text area
    commentBox.value = '';
});