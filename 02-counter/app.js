// set initial count
let count = 0;


// select value and buttons
const buttons = document.querySelectorAll('.btn');
const counter = document.querySelector("#value");

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    } 

    if (count > 0) {
      counter.style.color = "green";
    }
    if (count < 0 ) {
      counter.style.color = "red";
    }
    if (count === 0) {
      counter.style.color = "#222";
    }

    counter.textContent = count;
    
    });
 });


