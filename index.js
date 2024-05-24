const nagigation = document.getElementById("navbarDropdown");
const navToggle = document.getElementById("navToggle"); 
navToggle.addEventListener("click", () => {
  const visibility = nagigation.getAttribute("data-visible");
  if (visibility === "false") {
    nagigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true)
    
  }else{
    nagigation.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
   
  }
});
