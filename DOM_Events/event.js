// console.log('Dom Events');

const purpleBtn = document.getElementById('btn-purple');
purpleBtn.addEventListener('click',makePurple);

function makePurple() {
    document.body.style.backgroundColor='purple'
}

// another way
const greenBtn = document.getElementById("btn-green");
greenBtn.addEventListener('click', function makegreen() {
    document.body.style.backgroundColor = 'green';
})

// another way
document.getElementById('btn-red').addEventListener("click", function () {
    document.body.style.backgroundColor = 'red';
});