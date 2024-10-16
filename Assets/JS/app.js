//https://www.youtube.com/watch?v=7QGoqt7ZIn4

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
const value = ["Udvikler", "&", "Designer"]; 
let interval = null;

const element = document.querySelector('h1'); 

function startAnimation() {
    let iteration = 0;

    clearInterval(interval); 

    interval = setInterval(() => {
        let totalCharacters = 0; 
        element.innerHTML = value
        .map((line) => {
            return line
            .split("")
            .map((letter) => {
                totalCharacters++; 

       
                if (totalCharacters <= Math.floor(iteration)) {
                    return letter; 
                }

                
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
        }).join("<br />"); 

        if (iteration >= totalCharacters) {
            clearInterval(interval);
        }

        iteration += 1 / 5; 

    }, 30); 
}

window.addEventListener('load', startAnimation);

