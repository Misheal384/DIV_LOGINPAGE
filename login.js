document.addEventListener("DOMContentLoaded", function() {
    const sunIcon = document.querySelector(".icon.sun");
    const moonIcon = document.querySelector(".icon.moon");
  
    
    sunIcon.addEventListener("click", toggleLightMode);
    moonIcon.addEventListener("click", toggleDarkMode);
  
    
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      document.body.classList.add("dark-mode");
    }
  });
  
  function toggleLightMode() {
   
    document.body.classList.remove("dark-mode");
  }
  
  function toggleDarkMode() {
   
    document.body.classList.add("dark-mode");
  }
  