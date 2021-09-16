const searchCep = document.querySelector('#searchCep')

searchCep.addEventListener('click', async () => {
  const cep = await getCep()
})

async function getCep() {
  const inputCep = document.querySelector('#cep')
  if (inputCep.value === null) {
    return
  }

  const url = `http://viacep.com.br/ws/${inputCep.value}/json/`
  const response = await fetchLocal(url)
  const info = await response.json()
  if (info.logradouro) {
    const logradouro = document.getElementById("street");
    logradouro.setAttribute('value', info.logradouro);
  }
}

async function getInternetPlans() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const retorno = await fetch('http://localhost:3000/internet-plans', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': currentUser.token
    }
  })
  const internetPlans = await retorno.json()
  this.setInternetPlansSelect(internetPlans)
}

function setInternetPlansSelect(internetPlans) {
  internetPlans.forEach(internetPlan => {
    const selectPlans = `
    <option value="${
      internetPlan.id}">${internetPlan.description+ ' ' 
      + internetPlan.download_speed + ' MB download' 
      + ' ' + internetPlan.upload_speed + ' MB upload'
      + ' R$ ' + internetPlan.value}
      </option>
    `
    divPlans.innerHTML = divPlans.innerHTML + selectPlans
  })
}
const divPlans = document.querySelector('#internetPlans')

async function consultaCursos () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const retorno = await fetch('http://localhost:3000/leads', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': currentUser.token
    }
  })
  const cursos = await retorno.json()
  // preencheTela(cursos)
}

function preencheTela (cursos) {
  cursos.forEach(curso => {
    const novoCursoHTML = `
    <div class="curso">
    <h3>${curso.nome}</h3>
    <p>Carga horária: ${curso.ch} horas</p>
  </div>
    `
    divCursos.innerHTML = divCursos.innerHTML + novoCursoHTML
  })
}

function fetchLocal(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest
    xhr.onload = function() {
      resolve(new Response(xhr.responseText, {status: xhr.status}))
    }
    xhr.onerror = function() {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}

// consultaCursos()
getInternetPlans()
