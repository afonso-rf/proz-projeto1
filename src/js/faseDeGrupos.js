////---Dados
const selecoesFaseDeGrupos = [
    {
        id: 1,
        grupo: "a",
        selecao: "HOLANDA",
        bandeira: "src/img/seleções/holanda.png",
        pontos: [3, 2, 1, 0, 5, 1]
    },
    {
        id: 2,
        grupo: "a",
        selecao: "SENEGAL",
        bandeira: "src/img/seleções/senegal.png",
        pontos: [3, 2, 0, 1, 5, 4]
    },
    {
        id: 3,
        grupo: "a",
        selecao: "EQUADOR",
        bandeira: "src/img/seleções/equador.png",
        pontos: [3, 1, 1, 1, 4, 3]
    },
    {
        id: 4,
        grupo: "a",
        selecao: "CATAR",
        bandeira: "src/img/seleções/catar.png",
        pontos: [3, 0, 0, 3, 1, 7]
    },
    {
        id: 5,
        grupo: "b",
        selecao: "INGLATERRA",
        bandeira: "src/img/seleções/inglaterra.png",
        pontos: [3, 2, 1, 0, 9, 2]
    },
    {
        id: 6,
        grupo: "b",
        selecao: "ESTADOS UNIDOS",
        bandeira: "src/img/seleções/eua.png",
        pontos: [3, 1, 2, 0, 2, 1]
    },
    {
        id: 7,
        grupo: "b",
        selecao: "IRÃ",
        bandeira: "src/img/seleções/ira.png",
        pontos: [3, 1, 0, 2, 4, 7]
    },
    {
        id: 8,
        grupo: "b",
        selecao: "PAÍS DE GALES",
        bandeira: "src/img/seleções/pais-de-gales.png",
        pontos: [3, 0, 1, 2, 1, 6]
    },
    {
        id: 9,
        grupo: "c",
        selecao: "ARGENTINA",
        bandeira: "src/img/seleções/argentina.png",
        pontos: [3, 2, 0, 1, 5, 2]
    },
    {
        id: 10,
        grupo: "c",
        selecao: "POLÔNIA",
        bandeira: "src/img/seleções/polonia.png",
        pontos: [3, 1, 1, 1, 2, 2]
    },
    {
        id: 11,
        grupo: "c",
        selecao: "MÉXICO",
        bandeira: "src/img/seleções/mexico.png",
        pontos: [3, 1, 1, 1, 2, 3]
    },
    {
        id: 12,
        grupo: "c",
        selecao: "ARÁBIA SAUDITA",
        bandeira: "src/img/seleções/arabia-saudita.png",
        pontos: [3, 1, 0, 2, 3, 5]
    },
    {
        id: 13,
        grupo: "d",
        selecao: "FRANÇA",
        bandeira: "src/img/seleções/franca.png",
        pontos: [3, 2, 0, 1, 6, 3]
    },
    {
        id: 14,
        grupo: "d",
        selecao: "AUSTRÁLIA",
        bandeira: "src/img/seleções/australia.png",
        pontos: [3, 2, 0, 1, 3, 4]
    },
    {
        id: 15,
        grupo: "d",
        selecao: "TUNÍSIA",
        bandeira: "src/img/seleções/tunisia.png",
        pontos: [3, 1, 1, 1, 1, 1]
    },
    {
        id: 16,
        grupo: "d",
        selecao: "DINAMARCA",
        bandeira: "src/img/seleções/dinamarca.png",
        pontos: [3, 0, 1, 2, 1, 3]
    },
    {
        id: 17,
        grupo: "e",
        selecao: "JAPÃO",
        bandeira: "src/img/seleções/japao.png",
        pontos: [3, 2, 0, 1, 4, 3]
    },
    {
        id: 18,
        grupo: "e",
        selecao: "ESPANHA",
        bandeira: "src/img/seleções/espanha.png",
        pontos: [3, 1, 1, 1, 9, 3]
    },
    {
        id: 19,
        grupo: "e",
        selecao: "ALEMANHA",
        bandeira: "src/img/seleções/alemanha.png",
        pontos: [3, 1, 1, 1, 6, 5]
    },
    {
        id: 20,
        grupo: "e",
        selecao: "COSTA RICA",
        bandeira: "src/img/seleções/costa-rica.png",
        pontos: [3, 1, 0, 2, 3, 11]
    },
    {
        id: 21,
        grupo: "f",
        selecao: "MARROCOS",
        bandeira: "src/img/seleções/marrocos.png",
        pontos: [3, 2, 1, 0, 4, 1]
    },
    {
        id: 22,
        grupo: "f",
        selecao: "CROÁCIA",
        bandeira: "src/img/seleções/croacia.png",
        pontos: [3, 1, 2, 0, 4, 1]
    },
    {
        id: 23,
        grupo: "f",
        selecao: "BÉLGICA",
        bandeira: "src/img/seleções/belgica.png",
        pontos: [3, 1, 1, 1, 1, 2]
    },
    {
        id: 24,
        grupo: "f",
        selecao: "CANADÁ",
        bandeira: "src/img/seleções/canada.png",
        pontos: [3, 0, 0, 3, 2, 7]
    },
    {
        id: 25,
        grupo: "g",
        selecao: "BRASIL",
        bandeira: "src/img/seleções/brasil.png",
        pontos: [3, 2, 0, 1, 3, 1]
    },
    {
        id: 26,
        grupo: "g",
        selecao: "SUÍÇA",
        bandeira: "src/img/seleções/suica.png",
        pontos: [3, 2, 0, 1, 4, 3]
    },
    {
        id: 27,
        grupo: "g",
        selecao: "CAMARÕES",
        bandeira: "src/img/seleções/camaroes.png",
        pontos: [3, 1, 1, 1, 4, 4]
    },
    {
        id: 28,
        grupo: "g",
        selecao: "SÉRVIA",
        bandeira: "src/img/seleções/servia.png",
        pontos: [3, 0, 1, 2, 5, 8]
    },
    {
        id: 29,
        grupo: "h",
        selecao: "PORTUGAL",
        bandeira: "src/img/seleções/portugal.png",
        pontos: [3, 2, 0, 1, 6, 4]
    },
    {
        id: 30,
        grupo: "h",
        selecao: "COREIA DO SUL",
        bandeira: "src/img/seleções/coreiadosul.png",
        pontos: [3, 1, 1, 1, 4, 4]
    },
    {
        id: 31,
        grupo: "h",
        selecao: "URUGUAI",
        bandeira: "src/img/seleções/uruguai.png",
        pontos: [3, 1, 1, 1, 2, 2]
    },
    {
        id: 32,
        grupo: "h",
        selecao: "GANA",
        bandeira: "src/img/seleções/gana.png",
        pontos: [3, 1, 0, 2, 5, 7]
    }
]

const rodadas = [
    {
        grupo: "a",
        rodadas: [{
            dia: ["DOM 20/11", "SEG 21/11"],
            hora: ["13h00"],
            partidas: [
                { id_time1: ["4", 0], id_time2: ["3", 2] },
                { id_time1: ["2", 0], id_time2: ["1", 2] }
            ]
        },
        {
            dia: ["SEX 25/11"],
            hora: ["10h00", "13h00"],
            partidas: [
                { id_time1: ["4", 1], id_time2: ["2", 3] },
                { id_time1: ["1", 1], id_time2: ["3", 1] }
            ]
        },
        {
            dia: ["TER 29/11"],
            hora: ["12h00"],
            partidas: [
                { id_time1: ["3", 1], id_time2: ["2", 2] },
                { id_time1: ["1", 2], id_time2: ["4", 0] }
            ]
        }]
    },
    {
        grupo: "b",
        rodadas: [{
            dia: ["SEG 21/11"],
            hora: ["10h00", "16h00"],
            partidas: [
                { id_time1: ["5", 6], id_time2: ["7", 2] },
                { id_time1: ["6", 1], id_time2: ["8", 1] }
            ]
        },
        {
            dia: ["SEX 25/11"],
            hora: ["07h00", "16h00"],
            partidas: [
                { id_time1: ["8", 0], id_time2: ["7", 2] },
                { id_time1: ["5", 0], id_time2: ["6", 0] }
            ]
        },
        {
            dia: ["TER 29/11"],
            hora: ["16h00"],
            partidas: [
                { id_time1: ["7", 0], id_time2: ["6", 1] },
                { id_time1: ["8", 0], id_time2: ["5", 3] }
            ]
        }]
    },
    {
        grupo: "c",
        rodadas: [{
            dia: ["TER 22/11"],
            hora: ["07h00", "13h00"],
            partidas: [
                { id_time1: ["9", 1], id_time2: ["12", 2] },
                { id_time1: ["11", 0], id_time2: ["10", 0] }
            ]
        },
        {
            dia: ["SAB 26/11"],
            hora: ["10h00", "16h00"],
            partidas: [
                { id_time1: ["10", 2], id_time2: ["12", 0] },
                { id_time1: ["9", 2], id_time2: ["11", 0] }
            ]
        },
        {
            dia: ["QUA 30/11"],
            hora: ["16h00"],
            partidas: [
                { id_time1: ["10", 0], id_time2: ["9", 2] },
                { id_time1: ["12", 1], id_time2: ["11", 2] }
            ]
        }]
    },
    {
        grupo: "d",
        rodadas: [{
            dia: ["TER 22/11"],
            hora: ["10h00", "16h00"],
            partidas: [
                { id_time1: ["16", 0], id_time2: ["15", 0] },
                { id_time1: ["13", 4], id_time2: ["14", 1] }
            ]
        },
        {
            dia: ["SAB 26/11"],
            hora: ["07h00", "13h00"],
            partidas: [
                { id_time1: ["15", 0], id_time2: ["14", 1] },
                { id_time1: ["13", 2], id_time2: ["16", 1] }
            ]
        },
        {
            dia: ["QUA 30/11"],
            hora: ["12h00"],
            partidas: [
                { id_time1: ["15", 1], id_time2: ["13", 0] },
                { id_time1: ["14", 1], id_time2: ["16", 0] }
            ]
        }]
    },
    {
        grupo: "e",
        rodadas: [{
            dia: ["QUA 23/11"],
            hora: ["10h00", "13h00"],
            partidas: [
                { id_time1: ["19", 1], id_time2: ["17", 2] },
                { id_time1: ["18", 7], id_time2: ["20", 0] }
            ]
        },
        {
            dia: ["DOM 27/11"],
            hora: ["07h00", "16h00"],
            partidas: [
                { id_time1: ["17", 0], id_time2: ["20", 1] },
                { id_time1: ["18", 1], id_time2: ["19", 1] }
            ]
        },
        {
            dia: ["QUI 01/12"],
            hora: ["16h00"],
            partidas: [
                { id_time1: ["17", 2], id_time2: ["18", 1] },
                { id_time1: ["20", 2], id_time2: ["19", 4] }
            ]
        }]
    },
    {
        grupo: "f",
        rodadas: [{
            dia: ["QUA 23/11"],
            hora: ["07h00", "16h00"],
            partidas: [
                { id_time1: ["21", 0], id_time2: ["22", 0] },
                { id_time1: ["23", 1], id_time2: ["24", 0] }
            ]
        },
        {
            dia: ["DOM 27/11"],
            hora: ["10h00", "13h00"],
            partidas: [
                { id_time1: ["23", 0], id_time2: ["21", 2] },
                { id_time1: ["22", 4], id_time2: ["24", 1] }
            ]
        },
        {
            dia: ["QUI 01/12"],
            hora: ["12h00"],
            partidas: [
                { id_time1: ["22", 0], id_time2: ["23", 0] },
                { id_time1: ["24", 1], id_time2: ["21", 2] }
            ]
        }]
    },
    {
        grupo: "g",
        rodadas: [{
            dia: ["QUI 24/11"],
            hora: ["07h00", "16h00"],
            partidas: [
                { id_time1: ["26", 1], id_time2: ["27", 0] },
                { id_time1: ["25", 2], id_time2: ["28", 0] }
            ]
        },
        {
            dia: ["SEG 28/11"],
            hora: ["07h00", "13h00"],
            partidas: [
                { id_time1: ["27", 3], id_time2: ["28", 3] },
                { id_time1: ["25", 1], id_time2: ["26", 0] }
            ]
        },
        {
            dia: ["SEX 02/12"],
            hora: ["16h00"],
            partidas: [
                { id_time1: ["28", 2], id_time2: ["26", 3] },
                { id_time1: ["27", 1], id_time2: ["25", 0] }
            ]
        }]
    },
    {
        grupo: "h",
        rodadas: [{
            dia: ["QUI 24/11"],
            hora: ["10h00", "13h00"],
            partidas: [
                { id_time1: ["31", 0], id_time2: ["30", 0] },
                { id_time1: ["29", 3], id_time2: ["32", 2] }
            ]
        },
        {
            dia: ["SEG 28/11"],
            hora: ["10h00", "16h00"],
            partidas: [
                { id_time1: ["30", 2], id_time2: ["32", 3] },
                { id_time1: ["29", 2], id_time2: ["31", 0] }
            ]
        },
        {
            dia: ["SEX 02/12"],
            hora: ["12h00"],
            partidas: [
                { id_time1: ["30", 2], id_time2: ["29", 1] },
                { id_time1: ["32", 0], id_time2: ["31", 2] }
            ]
        }]
    }
]

////-----------------------------------
////----Dinamica na Tabela 

const cabecalhoButtons = document.querySelectorAll('.cabecalho>button')
const tabelaButtons = document.querySelectorAll('.tabela>button')
const divBody = document.querySelector('.body')

divBody.innerHTML = tabelaFGPontos('A', selecoesFaseDeGrupos)

tabelaButtons[0].addEventListener('click', () => {
    let num = 0
    for (i in cabecalhoButtons) {
        if (cabecalhoButtons[i].classList == 'active') {
            num = parseInt(i) - 1
        }
    }
    if (num < 0) { num = 7 }
    cabecalhoButtons[num].click()
})

tabelaButtons[1].addEventListener('click', () => {
    let num = 0
    for (i in cabecalhoButtons) {
        if (cabecalhoButtons[i].classList == 'active') {
            num = parseInt(i) + 1
        }
    }
    if (num > 7) { num = 0 }
    cabecalhoButtons[num].click()
})

for (item of cabecalhoButtons) {
    item.addEventListener('click', e => {
        let tag = e.target
        if (tag.classList.contains('active')) {

        } else {
            for (i of cabecalhoButtons) {
                i.classList.remove('active')
            }
            tag.classList.add('active')
            divBody.innerHTML = tabelaFGPontos(tag.innerText, selecoesFaseDeGrupos)
        }
    })
}
////-----------------------------------
////----Dinamica nos Jogos de Grupo 
const fGButtons = document.querySelectorAll('.fg-header>button')
const jogosContainer = document.querySelector('.fg-container')

jogosContainer.innerHTML = jogosFG('a', rodadas, selecoesFaseDeGrupos)

for (item of fGButtons) {
    item.addEventListener('click', e => {
        let tag = e.target
        if (tag.classList.contains('active')) {

        } else {
            for (i of fGButtons) {
                i.classList.remove('active')
            }
            tag.classList.add('active')
            jogosContainer.innerHTML = jogosFG(tag.innerText, rodadas, selecoesFaseDeGrupos)
        }
    })
}
////----Funções-----
function tabelaFGPontos(GRUPO, ARRAY) {
    const group = GRUPO.toLowerCase()
    let textHTML = ''
    let selecoes = []

    for (item in ARRAY) {
        if (ARRAY[item].grupo == group) {
            selecoes.push(ARRAY[item])
        }
    }
    selecoes.sort((a, b) => {
        let somaPtA = (a.pontos[1] * 3) + (a.pontos[2])
        let somaPtB = (b.pontos[1] * 3) + (b.pontos[2])
        let somaGolsA = (a.pontos[4] - a.pontos[5])
        let somaGolsB = (b.pontos[4] - b.pontos[5])
        if (somaPtA < somaPtB) {
            return -1
        } else if (somaPtA > somaPtB) {
            return 1
        } else if (somaPtA == somaPtB) {
            if (somaGolsA < somaGolsB) {
                return -1
            } else if (somaGolsA > somaGolsB) {
                return 1
            } else if (somaGolsA == somaGolsB) {
                if (a.pontos[4] < b.pontos[4]) {
                    return -1
                } else if (a.pontos[4] > b.pontos[4]) {
                    return 1
                } else {
                    return 0
                }
            }
        }
    }).reverse()

    for (i in selecoes) {
        let text = ''
        let spanPoint = ''
        if (i == 0) {
            text = '-active-1'
        } else if (i == 1) {
            text = '-active-2'
        }

        spanPoint += `<span>${(selecoes[i].pontos[1] * 3) + (selecoes[i].pontos[2])}</span>`
        for (pt in selecoes[i].pontos) {
            spanPoint += `<span>${selecoes[i].pontos[pt]}</span>`
        }
        spanPoint += `<span>${selecoes[i].pontos[4] - selecoes[i].pontos[5]}</span>`

        textHTML += `
        <div class="row${text}">
        <div class="time-info">
            <span class="colocacao">
                ${parseInt(i) + 1}º
            </span>
            <div class="bandeira" style="background-image: url(${selecoes[i].bandeira})">
            </div>
    
            <span class="time">${selecoes[i].selecao}</span>
        </div>
        <div class="dados">
            ${spanPoint}
        </div>
    </div>
    `
    }
    return textHTML
}
//
function jogosFG(GRUPO, JOGOS, ARRAY) {
    let grupo = GRUPO.toLowerCase()
    let textHTML = ''
    for (item of JOGOS) {
        if (item.grupo == grupo) {
            for (i in item.rodadas) {
                let num = parseInt(i)

                textHTML += `
                <div class="fg-rodada rodada-${num + 1}">
                                <span>Rodada ${num + 1}</span>
                                <div class="fg-partidas">
                                `
                for (p in item.rodadas[num].partidas) {
                    let nu = parseInt(p)
                    let time1 = ''
                    let time2 = ''
                    for (y of ARRAY) {

                        if (y.id == item.rodadas[num].partidas[nu].id_time1[0]) {
                            time1 = y
                            time1.gols = item.rodadas[num].partidas[nu].id_time1[1]
                        }
                        if (y.id == item.rodadas[num].partidas[nu].id_time2[0]) {
                            time2 = y
                            time2.gols = item.rodadas[num].partidas[nu].id_time2[1]
                        }
                    }
                    textHTML += `
                    <div class="fg-partida">
                        <span> ${item.rodadas[num].dia[nu] ? item.rodadas[num].dia[nu] : item.rodadas[num].dia[0]} | ` +
                        `${item.rodadas[num].hora[nu] ? item.rodadas[num].hora[nu] : item.rodadas[num].hora[0]} </span>` +
                        `<div class="selecoes">
                            <div class="selecao">
                            <p>${time1.selecao}</p>
                            <div class="bandeira" style="background-image: url(${time1.bandeira})"></div>
                            </div>
                            <div class="fg-placar">
                                <p>${time1.gols}</p>
                                <span>X</span>
                                <p>${time2.gols}</p>
                            </div>
                            <div class="selecao">
                            <p>${time2.selecao}</p>
                            <div class="bandeira" style="background-image: url(${time2.bandeira})"></div>
                            </div>
                        </div>
                    </div>
                    `
                }
                textHTML += `
                </div>
                </div>
                `

            }
        }
    }
    return textHTML

}
