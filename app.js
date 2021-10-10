const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


placeholders.forEach((el) => {
    el.addEventListener('dragover', dragOver)
    el.addEventListener('dragenter', dragEnter)
    el.addEventListener('dragleave', dragLeave)
    el.addEventListener('drop', drop)
})

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart  (e)  {
    e.target.classList.add('hold')
    e.target.textContent = 'Брось меня'
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragEnd (e) {
    e.target.classList.remove('hold', 'hide')
    e.target.textContent = 'Перетащи меня'
}

function dragOver (e) {
    e.preventDefault()
}

function dragEnter (e) {
    e.target.classList.add('hovered')
}

function dragLeave (e) {
    e.target.classList.remove('hovered')
}

function drop (e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}