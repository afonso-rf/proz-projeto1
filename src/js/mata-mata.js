const btnNavegador = document.querySelectorAll("li.navegar");
const jogos = document.querySelectorAll(".jogos");
const fluxograma = document.querySelectorAll(".fluxograma");
const menuPartidas = document.querySelectorAll(".partidas");
const boxFinal = document.getElementsByClassName("boxfinal");




btnNavegador[0].addEventListener("click", () => {
    
    limpar()
    limpaconfquartas()
    

    document.querySelector("#cont2-oitavas").style.display = ""
    document.querySelector("#cont2-quartas").style.display = ""
    document.querySelector("#oitavas").style.display = ""
    document.querySelector(".fluxograma1").style.display = ""
    document.querySelector("#quartas").style.display = ""
    btnNavegador[0].classList.add("active")

});

btnNavegador[1].addEventListener("click", () => {

    limpar()   
    activaconfquartas()
    limpaconfsemifinal()
    

    document.querySelector("#cont2-quartas").style.display = ""
    document.querySelector("#cont2-semi").style.display = ""
    document.querySelector("#quartas").style.display = ""
    document.querySelector(".fluxograma2").style.display = ""    
    document.querySelector("#semifinal").style.display = ""    
    btnNavegador[1].classList.add("active")    
    
        
});


btnNavegador[2].addEventListener("click", () => {
    
    limpar()
    ativarmarginfinal()
    activeconfsemifinal()

    document.querySelector("#cont2-semi").style.display = ""
    document.querySelector("#cont2-final").style.display = ""    
    document.querySelector("#semifinal").style.display = ""
    document.querySelector(".fluxograma3").style.display = ""
    document.querySelector("#final").style.display = ""
    btnNavegador[2].classList.add("active")

    

});

btnNavegador[3].addEventListener("click", () => {
    limpar()
    limparmarginfinal()    
    
    document.querySelector("#cont2-final").style.display = ""
    document.querySelector("#container4").style.display = ""
    document.querySelector("#final").style.display = ""
    btnNavegador[3].classList.add("active");
      
});



//// FUNÇÕES ///

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



function activaconfquartas(){
    for (i of jogos){
        document.querySelector("#semifinal").style.marginTop = ("170px")
        document.querySelector(".fluxograma2").style.gap = ("234px")
        document.querySelector(".fluxoquarta2").style.height = ("160px")
        document.querySelector(".fluxograma-quartas").style.paddingTop = ("79px")
        jogos[1].style.marginTop = ("10px")
        jogos[1].style.marginBottom = ("10px")
 
               
    }
}

function limpaconfquartas(){
    for (i of jogos){
        document.querySelector("#semifinal").style.marginTop = ""
        document.querySelector(".fluxograma2").style.gap = ""
        document.querySelector(".fluxoquarta2").style.height = ""
        document.querySelector(".fluxograma-quartas").style.paddingTop = ""
        jogos[1].style.marginTop = ""
        jogos[1].style.marginBottom = ""
      
    }

}

function activeconfsemifinal(){
    for (i of jogos){
        document.querySelector(".boxfinal").style.marginTop = ("150px")
        jogos[2].style.marginTop = ("10px")
        jogos[2].style.marginBottom = ("10px")    
        jogos[2].style.gap= ("172px")
        document.querySelector(".fluxosemi1").style.height = ("295px")
        document.querySelector(".fluxograma-semi").style.paddingTop = ("76px") 
        document.querySelector(".fluxosemi2").style.height = ("141px")
    
    }
}

function limpaconfsemifinal(){
    for (i of jogos){
        document.querySelector(".boxfinal").style.marginTop = ""
        jogos[2].style.marginBottom = ""   
        jogos[2].style.gap= ""
        document.querySelector(".fluxosemi1").style.height = ""
        document.querySelector(".fluxograma-semi").style.paddingTop = ""
        document.querySelector(".fluxosemi2").style.height = ""
    
    }
}
function limparmarginfinal(){
    for (i of boxFinal){
        i.style.margin = "0"
        jogos[3].classList.add("activemarginfinal")
    }
}
function ativarmarginfinal(){
    for (i of boxFinal){
        i.style.margin = ""
        jogos[3].classList.remove("activemarginfinal")
        
    }
}
