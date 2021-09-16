const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const searchCep = document.querySelector('#searchCep')
const save = document.querySelector('#save')

save.addEventListener('click', async () => {
    const { lead, address } = getDadosForm()
    await sendDataToApi(lead, address)
})

searchCep.addEventListener('click', async () => {
    const cep = await getCep()
})

function getDadosForm () {
    const inputName = document.querySelector('#name')
    const inputEmail = document.querySelector('#email')
    const inputCpf = document.querySelector('#cpf')
    const inputPlan = document.querySelector('#internetPlans')

    const inputCep = document.querySelector('#cep')
    const inputStreet = document.querySelector('#street')
    const inputNumber = document.querySelector('#number')
    if (
        inputEmail.value === null
        || inputName.value === null
        || inputCpf.value === null
        || inputPlan.value === null
        || inputStreet.value === null
        || inputNumber.value === null
        || inputCep.value === null
        ) {
            return
        }

        const lead = {
            name: inputName.value,
            email: inputEmail.value,
            cpf: inputCpf.value,
            internet_plan_id: inputPlan.value
        }

        const address = {
            zipcode: inputCep.value,
            street: inputStreet.value,
            number: inputNumber.value
        }

        return { lead, address }
    }

    async function sendDataToApi(lead, address) {
        const leadSaved = await sendLead(lead)
        const addressSaved = await sendAddress(address, leadSaved.id)
}

    async function sendLead(lead) {
        try {
            const response = await fetch('http://localhost:3000/leads', {
                method: 'POST',
                headers: {
                    Accept:
                    'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': currentUser.token
                },
                body: JSON.stringify(lead)
            })

            if (response.status === 201) {
                const data = await response.json();
                return data;
            } else {
            console.log('Erro ao logar')
            }
        } catch (erro) {
            console.error(erro)
        }
    } 

    async function sendAddress(address, leadId) {
        try {
            const response = await fetch(`http://localhost:3000/addresses/add/${leadId}`, {
                method: 'POST',
                headers: {
                    Accept:
                    'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': currentUser.token
                },
                body: JSON.stringify(address)
            })

            if (response.status === 201) {
                const data = await response.json();
                return data;
            } else {
            console.log('Erro ao logar')
            }
        } catch (erro) {
            console.error(erro)
        }
    } 

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
    const retorno = await fetch('http://localhost:3000/internet-plans', {
    method: 'GET',
    headers: {
        Accept:
        'application/json',
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
