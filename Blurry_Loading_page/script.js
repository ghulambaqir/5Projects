const loadText = document.querySelector(".loading_text")
const bgImage = document.querySelector(".bg-img")

let load = 0

let interval = setInterval(blurring, 1000)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(interval)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}