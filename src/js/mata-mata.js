const btnNavegador = document.querySelectorAll("li.navegar");
const jogos = document.querySelectorAll(".jogos");
const fluxograma = document.querySelectorAll(".fluxograma");
const menuPartidas = document.querySelectorAll(".partidas");
const boxFinal = document.getElementsByClassName("boxfinal");

btnNavegador[0].addEventListener("click", () => {
    
    limpar()

    document.querySelector("#cont2-oitavas").style.display = ""
    document.querySelector("#cont2-quartas").style.display = ""
    document.querySelector("#oitavas").style.display = ""
    document.querySelector(".fluxograma1").style.display = ""
    document.querySelector("#quartas").style.display = ""
    btnNavegador[0].classList.add("active")

})

btnNavegador[1].addEventListener("click", () => {

    limpar()

    document.querySelector("#cont2-quartas").style.display = ""
    document.querySelector("#cont2-semi").style.display = ""
    document.querySelector("#quartas").style.display = ""
    document.querySelector(".fluxograma2").style.display = ""
    document.querySelector("#semifinal").style.display = ""
    btnNavegador[1].classList.add("active")
})

btnNavegador[2].addEventListener("click", () => {
    
    limpar()
    ativarmarginfinal()

    document.querySelector("#cont2-semi").style.display = ""
    document.querySelector("#cont2-final").style.display = ""    
    document.querySelector("#semifinal").style.display = ""
    document.querySelector(".fluxograma3").style.display = ""
    document.querySelector("#final").style.display = ""
    btnNavegador[2].classList.add("active")

})

btnNavegador[3].addEventListener("click", () => {
    limpar()
    limparmarginfinal()

    
    
    document.querySelector("#cont2-final").style.display = ""
    document.querySelector("#container4").style.display = ""
    document.querySelector("#final").style.display = ""
    btnNavegador[3].classList.add("active")
  
})



//// função ///

function limpar(){
    for (i of btnNavegador){
        i.classList.remove("active")
    }

    for (let  i of jogos ){
        i.style.display = "none"
    }

    for (let i of fluxograma){
        i.style.display = "none"
    }

    for (let i of menuPartidas){
        i.style.display = "none"
        
    }

}

function limparmarginfinal(){
    for (i of boxFinal){
        i.style.margin = "0"
    }
}
function ativarmarginfinal(){
    for (i of boxFinal){
        i.style.margin = ""
    }
}
