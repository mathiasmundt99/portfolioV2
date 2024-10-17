// //https://www.youtube.com/watch?v=7QGoqt7ZIn4

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
// const value = ["Udvikler", "&", "Designer"]; 
// let interval = null;

// const element = document.querySelector('h1'); 

// function startAnimation() {
//     let iteration = 0;

//     clearInterval(interval); 

//     interval = setInterval(() => {
//         let totalCharacters = 0; 
//         element.innerHTML = value
//         .map((line) => {
//             return line
//             .split("")
//             .map((letter) => {
//                 totalCharacters++; 

       
//                 if (totalCharacters <= Math.floor(iteration)) {
//                     return letter; 
//                 }

                
//                 return letters[Math.floor(Math.random() * letters.length)];
//             }).join("");
//         }).join("<br />"); 

//         if (iteration >= totalCharacters) {
//             clearInterval(interval);
//         }

//         iteration += 1 / 3; 

//     }, 30); 
// }

// window.addEventListener('load', startAnimation);

// //Velkomst animation
// document.addEventListener("DOMContentLoaded", () => {
//     const greetings = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "こんにちは!", "안녕하세요!", "Hej!"];
//     let currentIndex = 0;
  
//     const greetingText = document.querySelector('.greetingText');
  
//     setInterval(() => {
//       // Update the text to the next greeting in the array
//       greetingText.innerText = greetings[currentIndex];
//       // Move to the next greeting in the array
//       currentIndex = (currentIndex + 1) % greetings.length; // Loop back when it reaches the end
//     }, 3000); // Change text every 3 seconds
//   });