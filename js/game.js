const player = document.querySelector('#player')
const board = document.querySelector('#grid')
const time = document.querySelector('#time')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
]

function timer(){

    setTimeout(() => {

    })

}

function createCustomElement(tag, className){
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = '';
let secondCard = '';

function checkEndGame(){
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length == 20){
        // const alert = document.createElement('div')
        // alert.classList.add('alert')
        // alert.innerHTML = 'Parabéns! Você venceu!'

        alert('Parabéns! Você venceu!')
    }
}

function checkCards(){

const firstCharacter = firstCard.getAttribute('data-character')
const secondCharacter = secondCard.getAttribute('data-character')

    if(firstCharacter == secondCharacter){

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()
    }
    else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

function revealCard({target}){

    if(target.parentNode.className.includes('reveal-card')){
        return
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    }
    else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode
        checkCards()
    }

    target.parentNode.classList.add('reveal-card')
}

function createCard(character){
    const card = createCustomElement('div', 'card')
    const front = createCustomElement('div', 'face front')
    const back = createCustomElement('div', 'face back')

    front.style.backgroundImage = `url('../assets/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)
    board.appendChild(card)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)


    return card
}

//Função de carregar o jogo

function loadGame(){

    const duplicateCharacters = [...characters, ...characters]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((character) => {
        const characterCard = createCard(character)
        board.appendChild(characterCard)
    })
}

window.onload = () => {

    player.innerHTML = localStorage.getItem('player')
    time.innerHTML = `Tempo: ${timer()}`

    loadGame()
}

