/* create new list */
const pyList = document.getElementById('py-list');
// console.log(pyList);
const newEliment = document.createElement('li');
newEliment.innerText = "SciPy";

// append element
pyList.appendChild(newEliment);

/* create new section */
const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);

const newSection = document.createElement('section');

const newH1 = document.createElement('h1');
newH1.innerText = 'Code Editor';
newSection.appendChild(newH1);

const newUL = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Code Blocks';
newUL.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'VS Code';
newUL.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Sublime Text';
newUL.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'PyCharm';
newUL.appendChild(li4);

newSection.appendChild(newUL);

mainContainer.appendChild(newSection);

// new section style
// newSection.style.border = "2px solid black";
// newSection.style.margin = "5px";
// newSection.style.borderRadius = "10px";
// newSection.style.padding = "15px";
// newSection.style.backgroundColor = "lightgray";

