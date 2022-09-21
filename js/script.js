const input = document.getElementById('input');
const button = document.getElementById('button')
const form = document.getElementById('form')


//Função para validar o Input e remover o
//atributo disabled

const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

// Função que guarda o valor do input
// no localStorage e direciona o usuário
// para a página do jogo.

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value)
    window.location = 'game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)