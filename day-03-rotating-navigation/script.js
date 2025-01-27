const circle = document.querySelector(".circle");
const nav = document.getElementsByTagName("nav")[0];
const icons = document.getElementsByTagName("i");
const mainContent = document.getElementsByTagName('main')[0]
let isOpen = false;

circle.addEventListener("click", () => {
  toggleState();

  if (isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

const toggleState = () => {
  isOpen = !isOpen;
};

const openMenu = () => {
  icons[0].classList.add("active");
  icons[1].classList.remove("active");

  nav.classList.remove("closed");
  mainContent.classList.remove("closed");
};
const closeMenu = () => {
  icons[1].classList.add("active");
  icons[0].classList.remove("active");
  
  nav.classList.add("closed");
  mainContent.classList.add("closed");
};
