function register(ev) {
const sectionElement = ev.currentTarget.parentNode
const username = sectionElement.children.username.value
const password = sectionElement.children.password.value
const passwordConfirmation = sectionElement.children.passwordConfirmation.value

if (password === passwordConfirmation) {
    console.log(`Usuário ${username} registrado!`)
} else {
    console.log('As senhas não conferem!')
}
}

const button = document.getElementById('register-button')
button.addEventListener('click' , register)

