const colors = [
    "green",
    "red",
    "rgba(133,122,200",
    "#f15025"
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById('btn').style.backgroundColor = colors[randomNumber];
    document.getElementById('hero').style.color = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}