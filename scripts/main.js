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