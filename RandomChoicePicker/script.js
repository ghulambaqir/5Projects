const tagElements = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()

    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagElements.innerHTML = ''

    tags.forEach(tag => {
        const tagsElement = document.createElement('span')
        tagsElement.classList.add('tag')
        tagsElement.innerText = tag
        tagElements.appendChild(tagsElement)
    });
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickrandomTag()

        highLight(randomTag);

        setTimeout(() => {
            unHighLight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickrandomTag()
            highLight(randomTag)
        }, 100);

    }, times * 100);


}
function pickrandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLight(tag) {
    tag.classList.add('highlight')
}
function unHighLight(tag) {
    tag.classList.remove('highlight')
}