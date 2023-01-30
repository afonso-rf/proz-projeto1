let users = [
    {
        email: 'afonso@exemplo.com',
        name: ['AFONSO','FILHO'],
        password: '2023@2023'
    }
]
const cModalItem = document.createElement('div')
cModalItem.classList.add('c-modal-item')

const cModalInitial = `
<button data-target="#form-login" class="btn-active-modal" onclick="switchForms('form-login')">Entrar</button>
<button data-target="#form-sign-up" class="btn-active-modal" onclick="switchForms('form-sign-up')">Criar conta</button>
`


cModalItem.innerHTML = cModalInitial

const modalBackdrop = document.createElement('div')
modalBackdrop.classList.add('modal-backdrop', 'show')

const wpSection = document.createElement('div')
wpSection.classList.add('wp-section')

wpSection.innerHTML = `
    <div class="modal" id="form-login">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="login" class="login">
                        <h3>
                            Entrar
                        </h3>
                        <span class="message login"></span>
                        <form name="loginform" id="loginform" method="">
                            <div>
                                <label>Endereço de email * </label>
                                <input type="email" name="log" class="input user_login" required size="30">
                            </div>
                            <div>
                                <label>Senha *</label>
                                <input type="password" autocomplete="" name="pwd" class="input user_pass" required size="20">
                            </div>
                            <div class="submit">
                                <input type="submit" name="wp-submit" class="button wp-submit" value="Log In">
                            </div>
                        </form>
                        <nav class="nav">
                            <a href="javascript:void(0)" class="to-sign-up">Criar conta</a>
                            |
                            <a href="javascript:void(0)" class="to-reset">Esqueceu sua senha</a>
                        </nav>

                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
    <div class="modal" id="form-sign-up">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="sign-up" class="login">
                        <h3>Criar conta</h3>
                        <span class="message register">Se cadastrar no site</span>
                            <form name="registerform" id="registerform" >
                                <div>
                                    <label>Nome</label>
                                    <input type="text" name="user_sign-up" class="input user_name" size="30">
                                </div>
                                <div>
                                    <label>Endereço de email *</label>
                                    <input type="email" name="email_sign-up" class="input user_email" required size="30">
                                </div>
                                <div>
                                    <label>Senha *</label>
                                    <input type="password" name="pass_sign-up" class="input user_pass" required size="25">
                                </div>
                                <div>
                                    <label>Confirmar a senha *</label>
                                    <input type="password" name="pass_sign-up" class="input user_pass" required size="25">
                                </div>
                                <div class="submit">
                                    <input type="submit" name="wp-submit" class="button wp-submit" value="Cadastrar">
                                </div>
                            </form>
                            <div class="nav">
                                <a href="javascript:void(0)" class="to-login">Log in</a>
                                |
                                <a href="javascript:void(0)" class="to-reset">Esqueceu sua senha</a>
                            </div>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
    <div class="modal" id="form-reset">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <div id="reset" class="login">
                        <h3>Esqueceu sua senha</h3>
                        <span class="message reset">
                        Por favor insira seu endereço de email. Você ira receber um link
                            parar criar uma nova senha pelo seu email.
                        </span>
                        <form name="resetform" id="resetform" method="">
                            <div>
                                <label>Endereço de email *</label>
                                    <input type="email" name="user_reset" id="user_reset" class="input" size="30">
                            </div>
                            <div class="submit">
                                <input type="submit" name="wp-submit" class="button wp-submit" value="Solicitar nova senha">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
</div>
`
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passRegex = /^(?=.*[$*&@#!.])[0-9a-zA-Z$*&@#!.]{6,}$/
////----Load
const header = document.querySelector('header.header')
const body = document.querySelector('body')

header.appendChild(cModalItem)
body.appendChild(wpSection)

////----Dinâmina dos popup 
const classModal = document.querySelectorAll('.modal')
const toLogin = document.querySelectorAll('.to-login')
const toSignUp = document.querySelectorAll('.to-sign-up')
const toReset = document.querySelectorAll('.to-reset')
const toClose = document.querySelectorAll('.close')
const inputInput = document.querySelectorAll('input.input')


for (item of toLogin) {
    item.addEventListener('click', () => {
        switchForms('form-login')
    })
}

for (item of toSignUp) {
    item.addEventListener('click', () => {
        switchForms('form-sign-up')
    })
}

for (item of toReset) {
    item.addEventListener('click', () => {
        switchForms('form-reset')
    })
}

for (item of toClose) {
    item.addEventListener('click', closed)
}

////----Popup Login
const formLogin = document.querySelector('form#loginform')
const inputUserLogin = document.querySelector('form#loginform .input.user_login')
const inputUserPass = document.querySelector('form#loginform .input.user_pass')



inputUserLogin.addEventListener('blur', (event) => {
    let item = event.target
    let spanMessage = ''
    if (emailRegex.test(item.value)) {

    } else if (item.value.trim() == '') {
        spanMessage = 'Campo email obrigatório!'
    } else {
        spanMessage = 'Email invalido!'
    }
    item.setCustomValidity(spanMessage)
    document.querySelector('span.message.login').innerHTML = spanMessage
})

inputUserPass.addEventListener('blur', (event) => {
    let user = event.target
    let spanMessage = ''
    if (user.value.trim() == '') {
        spanMessage = 'Campo Senha obrigatório!'
    }

    user.setCustomValidity(spanMessage)
    document.querySelector('span.message.login').innerHTML = spanMessage
})


formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    let spanMessage = ''
    let validated = false
    let user = ''
    for (i in users) {
        if (users[i].email === inputUserLogin.value.trim()) {
            if (users[i].password === inputUserPass.value.trim()) {
                validated = true
                user = users[i]
            }
        }
    }
    if (!validated) {
        spanMessage = 'Email ou senha errado!'
    } else {
        cModalItem.innerHTML = userValidated(user)
        closed()
    }

    document.querySelector('span.message.login').innerHTML = spanMessage

})

////----Popup Criar conta
const formRegister = document.querySelector('form#registerform')
const inputRegisterName = document.querySelector('form#registerform .input.user_name')
const inputRegisterEmail = document.querySelector('form#registerform .input.user_email')
const inputRegisterPass = document.querySelectorAll('form#registerform .input.user_pass')

inputRegisterEmail.addEventListener('blur', (event) => {
    let item = event.target
    let spanMessage = ''
    if (emailRegex.test(item.value)) {

    } else if (item.value.trim() == '') {
        spanMessage = 'Campo email obrigatório!'
    } else {
        spanMessage = 'Email invalido!'
    }
    item.setCustomValidity(spanMessage)
    document.querySelector('span.message.register').innerHTML = spanMessage
})

for (i of inputRegisterPass) {
    i.addEventListener('blur', (event) => {
        let item = event.target
        let spanMessage = ''
        if (item.value.trim() == '') {
            spanMessage = 'Campo Senha obrigatório!'
        } else if (item.value.trim().length < 6) {
            spanMessage = 'A senha deve conter pelo menos 6 digítos'
        } else if (!passRegex.test(item.value.trim())) {
            spanMessage = 'A senha deve conter pelo menos um caractere especial'
        }
        item.setCustomValidity(spanMessage)
        document.querySelector('span.message.register').innerHTML = spanMessage
    })

}

formRegister.addEventListener('submit', (event) => {
    event.preventDefault()
    let spanMessage = ''
    let emailExisting = false
    let user = {}
    user.name = inputRegisterName.value.trim().toUpperCase().split(" ")
    user.email = inputRegisterEmail.value.trim()

    for ( i in users) {
        if (users[i].email == user.email){
            emailExisting = true
        }
    }

    if (emailExisting) {
        spanMessage = 'Email já cadastrado'
    } else if (inputRegisterPass[0].value === inputRegisterPass[1].value) {
        user.password = inputRegisterPass[0].value
        users.push(user)
    } else {
        spanMessage = 'Erro! Verifique se a senha corfirmada está correta'
    }

    item.setCustomValidity(spanMessage)
    spanMessage = spanMessage == "" ? '<i style="color: #00FF00;">Cadastro realizado com Sucesso</i>' : spanMessage;
    document.querySelector('span.message.register').innerHTML = spanMessage

})

////----Modal Reset de senha
const formReset = document.querySelector('form#resetform')
const inputReset = document.querySelector('form#resetform .input#user_reset')

inputReset.addEventListener('blur', (event) => {
    let item = event.target
    let spanMessage = ''
    if (emailRegex.test(item.value)) {

    } else if (item.value.trim() == '') {
        spanMessage = 'Campo email obrigatório!'
    } else {
        spanMessage = 'Email invalido!'
    }
    item.setCustomValidity(spanMessage)
    document.querySelector('span.message.reset').innerHTML = spanMessage
})

formReset.addEventListener('submit', (event) => {
    event.preventDefault()
    let spanMessage = ''
    let emailExisting = false
    
})

////----Funções
function switchForms(IDFORM) {
    for (i of classModal) {
        i.style.display = 'none'
    }
    document.querySelector(`#${IDFORM}`).style.display = 'block'
    body.appendChild(modalBackdrop)
}

function closed() {
    for (i of classModal) {
        i.style.display = 'none'
    }
    body.removeChild(modalBackdrop)
    for (i of inputInput) {
        i.value = ''
    }
}

function userValidated(USER) {
    return textHTML = `   
<div class="c-user_item">
<span>Oi, ${USER.name[0]} ${USER.name.length > 1 ? USER.name.at(-1) : ''}</span>
<div class="c-user_avatar">
    <div class="c-user_avatar-image">
        <img alt="" src=""
            srcset="https://secure.gravatar.com/avatar/2cdc5f72684f364ae9d8e15882c44fed?s=100&amp;d=mm&amp;r=g 2x"
            class="avatar avatar-50 photo" height="50" width="50" loading="lazy" decoding="async">
    </div>
    <ul class="c-user_menu">
        <li>
            <a href="javascript:void(0)">Configurações de Usuário</a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="disconneted()">Deslogar</a>
        </li>
    </ul>
</div>
</div>
</div>`
}

function disconneted() {
    if (confirm('Dejesa realmente deslogar?')) {
        cModalItem.innerHTML = cModalInitial
    }
}


// <i style="color: #00FF00;"></i>
