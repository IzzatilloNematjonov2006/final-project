/*Used AI for JavaScript*/

const dropdownNavbar = document.getElementById("dropdown-navbar");
const navbar = document.getElementById("navbar");
const dropdownOptions = document.getElementById("dropdown-options");

window.onscroll = function() {
  if (window.scrollY > 50) {
    dropdownNavbar.classList.remove("hidden");
    navbar.classList.add("hidden"); 
  } else {
    dropdownNavbar.classList.add("hidden"); 
    navbar.classList.remove("hidden"); 
  }
};

function toggleDropdown() {
  dropdownOptions.classList.toggle("show");
}

document.querySelectorAll("#dropdown-options a").forEach(link => {
  link.addEventListener('click', () => {
    dropdownOptions.classList.remove("show");
  });
});
function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
window.addEventListener('scroll', function() {
    const homeSection = document.querySelector('.home-section');
    const dropdownNavbar = document.getElementById('dropdown-navbar');
    
    if (window.scrollY > homeSection.offsetHeight) {
        dropdownNavbar.classList.add('show');
    } else {
        dropdownNavbar.classList.remove('show'); 
    }
});