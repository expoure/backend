/* global fetch */

const btn = document.querySelector('#login')

btn.addEventListener('click', async () => {
  const login = getDadosForm()
  await sendDataToApi(login)
})

function getDadosForm () {
  const inputEmail = document.querySelector('#email')
  const inputPassword = document.querySelector('#password')
  if (inputEmail.value === null || inputPassword.value === null) {
    return
  }

  const login = {
    email: inputEmail.value,
    password: inputPassword.value
  }
  return login
}

async function sendDataToApi (login) {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })

    const data = await response.json();
    localStorage.setItem('currentUser', JSON.stringify({ token: data.token }));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token;

    if (response.status === 201) {
    //   limparCampos()
      window.location.href = 'lead.html'
    } else {
      console.log('Erro ao logar')
    }
  } catch (erro) {
    console.error(erro)
  }
}

function limparCampos () {
  document.querySelector('#email').value = ''
  document.querySelector('#password').value = ''
}