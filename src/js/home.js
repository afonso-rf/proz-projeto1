const gallery = [
    {
        page: 'fase-de-grupos.html',
        image: 'src/img/home/fasedegrupos_med.jpg',
        title: 'FASE DE GRUPOS',
        text: 'Acompanhe a fase de grupos para ficar por dentro dos resuntados'
    },
    {
        page: 'mata-mata.html',
        image: 'src/img/home/matamata_med.jpg',
        title: 'MATA MATA',
        text: 'Agora é tudo ou nada! Acompanhe o Mata Mata da Copa'
    },
    {
        page: 'simulador.html',
        image: 'src/img/home/simulador_med.jpg',
        title: 'SIMULADOR',
        text: 'Mostre que você está por dentro dessa copa e dê o seu palpite no Simulador'
    },
    {
        page: 'sede-da-copa.html',
        image: 'src/img/home/sede-da-copa_med.jpg',
        title: 'SEDE DA COPA',
        text: 'Conheça um pouco sobre o Qatar. O pais sede da copa de 2022'
    },
    {
        page: 'voce-sabia.html',
        image: 'src/img/home/voce-sabia_med.jpg',
        title: 'VOCÊ SABIA?',
        text: 'Curiosidades da Histora da Copa e das seleções participantes'
    }
]

////----Carregar Slides
const galleryWrapper = document.querySelector('.gallery-wrapper')
galleryWrapper.innerHTML = loadSlides(gallery)

////----Captura de Elementos
const inputSlides = document.querySelectorAll('input[name="radio-btn"]')
const bannerSlides = document.querySelectorAll('.banner')
const autoBTNs = document.querySelectorAll('.auto-btn')

////----Ativa o primerio slide
inputSlides[0].checked = true
bannerSlides[0].classList.add('slide')
autoBTNs[0].classList.add('active')

////----Troca de slides
setInterval(() => nextSlide(inputSlides, bannerSlides, autoBTNs), 6000)

////----Eventos
for (i of inputSlides) {
    i.addEventListener('click', (e) => {
        let tag = e.target
        let quant = inputSlides.length
        for (let i = 0; i < quant; i++) {
            bannerSlides[i].classList.remove('slide')
            autoBTNs[i].classList.remove('active')
        }
        tag.checked = true
        for (let i = 0; i < quant; i++) {
            if (inputSlides[i].checked) {
                bannerSlides[i].classList.add('slide')
                autoBTNs[i].classList.add('active')
            }
        }
    })
}

////----Funções
function nextSlide(INPUTALL, BANNERS, BUTTONS) {
    let quant = INPUTALL.length
    let count = 0
    for (let i = 0; i < quant; i++) {
        if (INPUTALL[i].checked) {
            count = i + 1
            BANNERS[i].classList.remove('slide')
            BUTTONS[i].classList.remove('active')
        }
    }

    if (count >= quant) {
        count = 0
    }

    INPUTALL[count].checked = true
    BANNERS[count].classList.add('slide')
    BUTTONS[count].classList.add('active')
}


function loadSlides(ARRAY) {
    let inputs = ''
    let slides = ''
    let autoNav = ''
    let manualNav = ''
    
    for (i in ARRAY) {
        inputs += `<input type="radio" name="radio-btn" id="radio${i}">
       `
        autoNav += `<div class="auto-btn"></div>
       `
        manualNav += `<label for="radio${i}" class="manual-btn"></label>
       `
        slides += `
       <a href="${ARRAY[i].page}" class="banner">
        <img src="${ARRAY[i].image}" alt="Imagem ${ARRAY[i].title}" class="images">
        <div class="conteudo">
            <h3>${ARRAY[i].title}</h3>
            <p>${ARRAY[i].text}</p>
        </div>
        </a>
       `
    }

    return  `
            <div class="gallery">
            <!-- Radio Buttons -->
            ${inputs}

            <!-- Slides Images -->
            ${slides}

            <!-- Auto Navigation -->
            <div class="auto-navigation">
            ${autoNav} 
            </div>
            </div>

            <!-- Manual Navigation -->
            <div class="manual-navigation">
            ${manualNav}
            </div>
            `

}
