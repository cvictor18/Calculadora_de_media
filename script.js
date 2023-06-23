const form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', e => {
    e.preventDefault()
})

let txtativ = document.getElementById('txta')
let txtnota = document.getElementById('txtn')
let vetor = []

function adicionar() {
    if (txtativ.value.length == 0 || txtnota.value.length == 0) {
        console.log('Campo Inválido')
    } else {
        if (txtnota.value < 0 || txtnota.value > 10) {
            console.log('Intervalo Invalido')
        } else {
            vetor.push(Number(txtnota.value))
            let tbody = document.getElementsByTagName('tbody')[0]
            let tr = document.createElement('tr')
            let tda = document.createElement('td')
            let tdn = document.createElement('td')
            let tde = document.createElement('td')
            let img = document.createElement('img')
            tda.innerHTML = `${txtativ.value}`
            tdn.innerHTML = `${txtnota.value}`
            tde.appendChild(img)
            if (txtnota.value >= 7) {
                img.setAttribute('src', '/images/aprovado.png')
            } else {
                img.setAttribute('src', '/images/reprovado.png')
            }
            tr.appendChild(tda)
            tr.appendChild(tdn)
            tr.appendChild(tde)
            tbody.appendChild(tr)
            let soma = 0
            for (let pos in vetor) {
                soma += vetor[pos]
            }
            média = soma / vetor.length
            let mediaFinal = document.getElementById('mf')
            mediaFinal.innerHTML = `${média.toFixed(2)}`
            let span = document.getElementsByTagName('span')[0]
            if (média >= 7) {
                span.innerHTML = `Aprovado`
                span.setAttribute('class', 'aprovado')
            } else {
                span.innerHTML = `Reprovado`
                span.setAttribute('class', 'reprovado')
            }
        }
    }
}