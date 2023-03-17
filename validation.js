const names = document.getElementById('name')
const password = document.getElementById('password')
const confirm = doucement.getElementById('confirm-password');
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []

    if(names.value === '' || names.value == null){
        messages.push('Name is required')
    }

    if(password.value.length <= 5){
        messages.push('Password must be longer than 6 characters')
    }

    if(password.value.length >= 20){
        messages.push('Password must be less than 20 characters')
    }

    if(confirm-password.value != password.value){
        messages.push('Password doesnt match')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})