const input = document.getElementById('input');
const button = document.getElementById('button')
const form = document.getElementById('form')


const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value)
    window.location = 'game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)