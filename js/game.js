const root = document.querySelector('#rootplayer')
const board = document.querySelector('#grid')
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
root.innerHTML = localStorage.getItem('player')

function createCustomElement(tag, className){
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = '';
let secondCard = '';

function checkCards(){
    
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

loadGame()

