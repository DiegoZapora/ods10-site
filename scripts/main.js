let sas = document.getElementById("samp")
let im = document.getElementById("img")
let bosta = document.getElementById("fech")

sas.addEventListener("click", () => {
    if (im.style.display === "none") {
        im.style.display = "block"
        bosta.style.display = "block"
    }
})

bosta.addEventListener("click", () => {
    im.style.display = "none"
    bosta.style.display = "none"
})