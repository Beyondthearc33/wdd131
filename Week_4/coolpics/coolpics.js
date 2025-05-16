const menuButton = document.querySelector("#menu-button");
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth >= 700) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");    
    }
}

window.addEventListener("resize", handleResize);