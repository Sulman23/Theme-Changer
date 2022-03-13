// Selecting Elements
let themeChanger = document.getElementById("theme-icon");
let body = document.querySelector('body');

// event listner 
themeChanger.addEventListener("click", () =>{
   themeChanger.classList.toggle('fa-sun'); 
  
   // checking the theme selection
    if (themeChanger.classList.contains('fa-sun')) {
        body.classList.add('active');
    } else {
        body.classList.remove('active');
    }
});
