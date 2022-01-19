const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#logo');
const gifButton = document.getElementById("gif-button");
const gifSection = document.getElementById("gif-section");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
const submit = document.getElementById("submit")



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

const users = [
    { username: 'chance', password: 'password' },
    { username: 'izzy', password: 'password123' }
]

const saveData = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (!foundUser) {
        console.log("Invalid User")
    } else {
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', saveData());
});

