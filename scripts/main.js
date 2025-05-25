let sas = document.getElementById("samp")
let im = document.getElementById("img")
let carrinho = document.getElementById("fech")

sas.addEventListener("click", () => {
    if (im.style.display === "none") {
        im.style.display = "block"
        carrinho.style.display = "block"
    }
})

carrinho.addEventListener("click", () => {
    im.style.display = "none"
    carrinho.style.display = "none"
})

let btn = document.getElementById("mostra")
let nav = document.getElementById("bar")

btn.addEventListener("click", () => {
    if (nav.style.display === "block") {
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1025) {
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
})