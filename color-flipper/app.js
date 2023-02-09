const colors = ["grey", "darkblue", "blue", "green", "orange", "red", "brown", "purple", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

// get random number between 0 and colors.length
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
