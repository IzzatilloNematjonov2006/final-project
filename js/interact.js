window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    mainContent.style.display = "block";
    
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      mainContent.style.display = "block";
      
      requestAnimationFrame(() => {
        mainContent.classList.add("visible");
      });
      
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }, 2700);
  });