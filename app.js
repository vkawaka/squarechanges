'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

const text = document.getElementById('text')
const item = document.getElementById('item')


function mudarCor(){
    forma1.classList.toggle('color')
}
function mudarForma(){
    forma2.classList.toggle('circulo')
}
function mudarLugar(){
    forma3.classList.toggle('lugar')
}
function girar(){
    forma4.classList.toggle('girar')
}
function mudarFoto(){
    forma5.classList.toggle('pic')
}
function mudarOpacity(){
    forma6.classList.toggle('fade')
}
function mudarTamanho(){
    forma7.classList.toggle('size')
}
function mudarCores(){
    text.classList.toggle('inversot')
    item.classList.toggle('inversoi')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarLugar)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', mudarFoto)
forma6.addEventListener('click', mudarOpacity)
forma7.addEventListener('click', mudarTamanho)
forma8.addEventListener('click', mudarCores)