const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
const value = ["Udvikler", "&", "Designer"]; 
let interval = null;

const element = document.querySelector('.heroH1'); 

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

        iteration += 1 / 3; 

    }, 30); 
}

    window.addEventListener('load', startAnimation);
  
  

// Velkomst animation
document.addEventListener("DOMContentLoaded", () => {
    const greetings = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "こんにちは!", "안녕하세요!", "Hej!"];
    let currentIndex = 0;
  
    const greetingText = document.querySelector('.greetingText');
  
    setInterval(() => {
      greetingText.innerText = greetings[currentIndex];
      currentIndex = (currentIndex + 1) % greetings.length; 
    }, 3000); 
});