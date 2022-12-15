let count = 1
document.querySelector("#radio1").checked = true
let quantSlides = document.querySelectorAll('.banner').length


setInterval(function () {
    nextSlide()
}, 5000)

const nextSlide = () => {
    count++
    if (count > quantSlides) {
        count = 1
    }
    document.querySelector("#radio" + count).checked = true

}
