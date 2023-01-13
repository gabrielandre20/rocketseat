//Criar elemento creatElement append prepend

const div = document.createElement('div');
div.innerText = 'Olá devs!'

const body = document.querySelector('body')

//body.prepend(div)

//INSERT BEFORE
const header = document.querySelector('header')
body.insertBefore(div, header.nextElementSibling)