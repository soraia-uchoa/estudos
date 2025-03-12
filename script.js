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

//////////////////////////////////////////////////////////////////

//variavel
const whiteGray = '#f1f5f9'
const blackGray = '#212529'

//função de manipulação de estilos
function useLighTheme() {
    document.body.style.backgroundColor = whiteGray
    document.body.style.color = blackGray 

}

function userDarkTheme() {
    document.body.style.backgroundColor = blackGray
    document.body.style.color = whiteGray
}

//adicionar os eventos
document.getElementById('lightBtn').addEventListener('click', useLighTheme)
document.getElementById('darkBtn').addEventListener('click', userDarkTheme)




