// Hamburger menu 


let hamburger = document.getElementById("hamburger-menu")

hamburger.addEventListener("click", () => {
    let menu = document.getElementById("menu")
    menu.classList.toggle("hidden")
})


