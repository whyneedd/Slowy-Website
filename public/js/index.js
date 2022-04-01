const menu_open = document.querySelector(".humbger");
const menu_toggle = document.querySelector(".Menu");

menu_open.addEventListener("click", function() {
    menu_open.classList.toggle("is_open");
    menu_toggle.classList.toggle("is_open");
})