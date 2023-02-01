let box = document.getElementById('box-comments')
let name = document.getElementById('name')
let email = document.getElementById('email')
let comment = document.getElementById('box-text')

box.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
  let nameValue = name.value
  let emailValue = email.value
  let commentValue = comment.value

  if(nameValue === '') {
      setErrorFor(name, 'Preencha esse campo')
  } else {
      setSuccessFor(name)
  }

  if(emailValue === '') {
      setErrorFor(email, 'Preencha esse campo')
  } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email inválido')
  } else {
      setSuccessFor(email)
  }

  if(commentValue === '') {
      setErrorFor(comment, 'Preencha esse campo')
  } else {
      setSuccessFor(comment)
  }


function setErrorFor(input, message) {
  let campo = input.parentElement;
  let span = campo.querySelector('span')

  span.innerText = message

  campo.className = 'campo error'
}}

function setErrorFor(input, message) {
    let campo = input.parentElement;
    let span = campo.querySelector('span')

    span.innerText = message

    campo.className = 'campo error'
}

function setSuccessFor(input) {
    let campo = input.parentElement;

    campo.className = 'campo success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

// ----------Requer otimização-----------//

// let send = document.getElementById('send');

// send.addEventListener('click', function(){
	// let boxValue = document.getElementById('box-text').value;
	// let li = document.createElement('li');
	// let text = document.createTextNode(boxValue);
	// li.appendChild(text);
	// document.getElementById('comments-send').appendChild(li);
// })