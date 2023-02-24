// set innerHTML directly

const newSection2 = document.createElement('section');
newSection2.innerHTML = `
<h1> Python Framework </h1>
<ul>
    <li>Django</li>
    <li>Flask</li>
    <li>web2py</li>
    <li>CherryPy</li>
`
// mainContainer from append.js
mainContainer.appendChild(newSection2)

// newSection2 style
// newSection2.style.border = "2px solid black";
// newSection2.style.margin = "5px";
// newSection2.style.borderRadius = "10px";
// newSection2.style.padding = "15px";
// newSection2.style.backgroundColor = "lightgray";