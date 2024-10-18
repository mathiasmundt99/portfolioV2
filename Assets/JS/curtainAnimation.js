// Denne JavaScript er med til at skabe en animation af en curtain effekt

document.addEventListener("DOMContentLoaded", function () {
    const unlockBtn = document.querySelector(".unlock-btn");
    const closedLock = document.querySelector(".closed-lock");
    const openLock = document.querySelector(".open-lock");
    const heroContainer = document.querySelector(".heroContainer");
    const aboutContent = document.querySelector(".introContent");
   
  
    unlockBtn.addEventListener("click", function () {
      
      closedLock.style.display = "none";  
      openLock.style.display = "inline";  
     
      heroContainer.classList.add("fade-out");
     
      setTimeout(function () {
        aboutContent.classList.add("show-content");
        document.body.style.overflow = "auto";
      }, 600);  
    });
  });
  