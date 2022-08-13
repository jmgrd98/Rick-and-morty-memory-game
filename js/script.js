const input = document.getElementById('input');
const button = document.getElementById('button')

const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled')
    }
}

input.addEventListener('input', validateInput)