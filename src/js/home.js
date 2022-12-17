let count = 1
document.querySelector("#radio1").checked = true
let quantSlides = document.querySelectorAll('.banner').length


setInterval(() => nextImage(quantSlides), 6000)

const nextImage = (quant) => {
    count++
    if (count > quant) {
        count = 1
    }
    document.querySelector("#radio" + count).checked = true

}
