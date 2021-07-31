let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text=`Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = 'Aguardando término de inclusão de números para finalizar...'
} else {
    alert('Valor inválido ou já encontrado na lista!')
}
    num.value = ''
    num.focus()
}
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true

    }else{
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    }else{
        return false
    }
}
function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p> `
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p> `
    }
}
function tabuada(){
    let num1 = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num1.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res1 = document.getElementById('res1')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res1.innerHTML = 'Impossível contar!'
    }else{
        res1.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if( i < f){
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res1.innerHTML +=` \u{1F449} ${c} `
            }
        }else{
            //CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c-=p) {
                res1.innerHTML += `${c}\u{1F449}`
            }
        }
        res1.innerHTML += `\u{1F3C1}`
        
    }
}