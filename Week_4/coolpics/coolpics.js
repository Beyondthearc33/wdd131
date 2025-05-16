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


const images = document.querySelectorAll("figure img");
const dialog = document.querySelector("#dialog");

images.forEach(image => {
    image.addEventListener("click", showDialog);
})

function showDialog(event) {
    const image = event.currentTarget;
    const imgSrc = image.getAttribute("src");
    const dialogImg = document.querySelector("#dialog-img");
    dialogImg.setAttribute("src", imgSrc);
    dialog.showModal();   
}

document.querySelector("#dialog-close-btn").addEventListener("click", closeDialog);

function closeDialog() {
    dialog.close();
}

