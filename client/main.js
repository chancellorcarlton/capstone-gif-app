const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#logo');
const gifButton = document.getElementById("gif-button");
const gifSection = document.getElementById("gif-section");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email")
const form = document.getElementById("submit")



// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


gifButton.addEventListener("click", () => {
    console.log("hit");

    while(gifSection.firstChild) {
        gifSection.removeChild(gifSection.firstChild);
    }
    axios.get("http://localhost:4321/api/gif/").then((res) => {
        const gif = document.createElement("img");
        gif.setAttribute("src", res.data);
        gif.setAttribute("alt", "Funny Gif");
        gif.setAttribute("id", "gif");
        gifSection.appendChild(gif);
        });
});

form.addEventListener("click", () => {
    console.log("New user submitted!");
    e.preventDefault();
    axios.post('http://localhost:4321/user', {username: username,password:password,first_name:firstName,last_name:lastName,email:email})
        .then(() => {
            resetFormValues();
            location.reload();
        })
        .catch(err => console.log('ERROR', err));
});

