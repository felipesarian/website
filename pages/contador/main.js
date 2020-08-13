let contador=0
let elemento_contador=document.getElementById("contador_na_tela")    
elemento_contador.innerText=contador  
function clickbutton(){
    contador+=1
    elemento_contador.innerText=contador
    if(contador===10){
        elemento_contador.innerText=contador
        alert('voce atingiu o numero 10')
    }
}