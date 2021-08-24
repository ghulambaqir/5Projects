const container = document.querySelector(".container")
const leftSide = document.querySelector(".text-side")
const rightSide = document.querySelector(".image-side")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = rightSide.querySelectorAll("div").length

let activeSlideIndex = 0

leftSide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = container.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }
    else if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    rightSide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    leftSide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`


}