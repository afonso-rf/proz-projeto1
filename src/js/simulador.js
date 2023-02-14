const selecoesFaseDeGrupos = [
  {
    id: 1,
    grupo: "a",
    selecao: "HOLANDA",
    bandeira: "src/img/seleções/holanda.png",
  },
  {
    id: 2,
    grupo: "a",
    selecao: "SENEGAL",
    bandeira: "src/img/seleções/senegal.png",
  },
  {
    id: 3,
    grupo: "a",
    selecao: "EQUADOR",
    bandeira: "src/img/seleções/equador.png",
  },
  {
    id: 4,
    grupo: "a",
    selecao: "CATAR",
    bandeira: "src/img/seleções/catar.png",
  },
  {
    id: 5,
    grupo: "b",
    selecao: "INGLATERRA",
    bandeira: "src/img/seleções/inglaterra.png",
  },
  {
    id: 6,
    grupo: "b",
    selecao: "ESTADOS UNIDOS",
    bandeira: "src/img/seleções/eua.png",
  },
  {
    id: 7,
    grupo: "b",
    selecao: "IRÃ",
    bandeira: "src/img/seleções/ira.png",
  },
  {
    id: 8,
    grupo: "b",
    selecao: "PAÍS DE GALES",
    bandeira: "src/img/seleções/pais-de-gales.png",
  },
  {
    id: 9,
    grupo: "c",
    selecao: "ARGENTINA",
    bandeira: "src/img/seleções/argentina.png",
  },
  {
    id: 10,
    grupo: "c",
    selecao: "POLÔNIA",
    bandeira: "src/img/seleções/polonia.png",
  },
  {
    id: 11,
    grupo: "c",
    selecao: "MÉXICO",
    bandeira: "src/img/seleções/mexico.png",
  },
  {
    id: 12,
    grupo: "c",
    selecao: "ARÁBIA SAUDITA",
    bandeira: "src/img/seleções/arabia-saudita.png",
  },
  {
    id: 13,
    grupo: "d",
    selecao: "FRANÇA",
    bandeira: "src/img/seleções/franca.png",
  },
  {
    id: 14,
    grupo: "d",
    selecao: "AUSTRÁLIA",
    bandeira: "src/img/seleções/australia.png",
  },
  {
    id: 15,
    grupo: "d",
    selecao: "TUNÍSIA",
    bandeira: "src/img/seleções/tunisia.png",
  },
  {
    id: 16,
    grupo: "d",
    selecao: "DINAMARCA",
    bandeira: "src/img/seleções/dinamarca.png",
  },
  {
    id: 17,
    grupo: "e",
    selecao: "JAPÃO",
    bandeira: "src/img/seleções/japao.png",
  },
  {
    id: 18,
    grupo: "e",
    selecao: "ESPANHA",
    bandeira: "src/img/seleções/espanha.png",
  },
  {
    id: 19,
    grupo: "e",
    selecao: "ALEMANHA",
    bandeira: "src/img/seleções/alemanha.png",
  },
  {
    id: 20,
    grupo: "e",
    selecao: "COSTA RICA",
    bandeira: "src/img/seleções/costa-rica.png",
  },
  {
    id: 21,
    grupo: "f",
    selecao: "MARROCOS",
    bandeira: "src/img/seleções/marrocos.png",
  },
  {
    id: 22,
    grupo: "f",
    selecao: "CROÁCIA",
    bandeira: "src/img/seleções/croacia.png",
  },
  {
    id: 23,
    grupo: "f",
    selecao: "BÉLGICA",
    bandeira: "src/img/seleções/belgica.png",
  },
  {
    id: 24,
    grupo: "f",
    selecao: "CANADÁ",
    bandeira: "src/img/seleções/canada.png",
  },
  {
    id: 25,
    grupo: "g",
    selecao: "BRASIL",
    bandeira: "src/img/seleções/brasil.png",
  },
  {
    id: 26,
    grupo: "g",
    selecao: "SUÍÇA",
    bandeira: "src/img/seleções/suica.png",
  },
  {
    id: 27,
    grupo: "g",
    selecao: "CAMARÕES",
    bandeira: "src/img/seleções/camaroes.png",
  },
  {
    id: 28,
    grupo: "g",
    selecao: "SÉRVIA",
    bandeira: "src/img/seleções/servia.png",
  },
  {
    id: 29,
    grupo: "h",
    selecao: "PORTUGAL",
    bandeira: "src/img/seleções/portugal.png",
  },
  {
    id: 30,
    grupo: "h",
    selecao: "COREIA DO SUL",
    bandeira: "src/img/seleções/coreiadosul.png",
  },
  {
    id: 31,
    grupo: "h",
    selecao: "URUGUAI",
    bandeira: "src/img/seleções/uruguai.png",
  },
  {
    id: 32,
    grupo: "h",
    selecao: "GANA",
    bandeira: "src/img/seleções/gana.png",
  }
]

let grupos = {
  grupoA: {
    1: "",
    2: "",
  },
  grupoB: {
    1: "",
    2: "",
  },
  grupoC: {
    1: "",
    2: "",
  },
  grupoD: {
    1: "",
    2: "",
  },
  grupoE: {
    1: "",
    2: "",
  },
  grupoF: {
    1: "",
    2: "",
  },
  grupoG: {
    1: "",
    2: "",
  },
  grupoH: {
    1: "",
    2: "",
  },
};

const oitavasFase = [
  {
    jogo: ['a1', 'b2'],
    selecao: ['', '']
  },
  {
    jogo: ['c1', 'd2'],
    selecao: ['', '']
  },
  {
    jogo: ['e1', 'f2'],
    selecao: ['', '']
  },
  {
    jogo: ['g1', 'h2'],
    selecao: ['', '']
  },
  {
    jogo: ['b1', 'a2'],
    selecao: ['', '']
  },
  {
    jogo: ['d1', 'c2'],
    selecao: ['', '']
  },
  {
    jogo: ['f1', 'e2'],
    selecao: ['', '']
  },
  {
    jogo: ['h1', 'g2'],
    selecao: ['', '']
  }
]

const faseG = document.getElementById('faseG')
for (let i of 'abcdefgh') {
  faseG.innerHTML += gruposSelec(i, selecoesFaseDeGrupos)
}

//Funções
function checkSelecao(input, grupo, selecId, p1, p2) {
  const primeiro = grupos[grupo]["1"];
  const segundo = grupos[grupo]["2"];
  let selecao = {}

  for (let i in selecoesFaseDeGrupos) {
    if (selecoesFaseDeGrupos[i].id == selecId) {
      selecao.selecao = selecoesFaseDeGrupos[i].selecao
      selecao.bandeira = selecoesFaseDeGrupos[i].bandeira
    }
  }

  const condicoes = [
    {
      condicao: () => primeiro === "" && segundo === "",
      acao: () => {
        grupos[grupo]["1"] = selecId;
        input.checked = true;
        const div = document.createElement('div')
        div.className = 'selecao'
        div.innerHTML = `<img src="${selecao.bandeira}" alt="${selecao.selecao}" class="bandeiras">
        <span>${selecao.selecao}</span>`
        document.querySelector(`span#${p1}~label`).style.display = 'none'
        document.getElementById(p1).appendChild(div)
        document.querySelector(`label[for="${selecId}"]>span`).className = 'primeiro'
        for(let i in oitavasFase){
          if(oitavasFase[i].jogo[0] === p1){
            oitavasFase[i].selecao[0] = selecId
          }
        }
      },
    },
    {
      condicao: () => primeiro !== "" && primeiro === selecId,
      acao: () => {
        grupos[grupo]["1"] = "";
        input.checked = false;
        document.getElementById(p1).innerHTML = ''
        document.querySelector(`.boxFases>span#${p1}~label`).style.display = ''
        document.querySelector(`label[for="${selecId}"]>span`).className = ''
        for(let i in oitavasFase){
          if(oitavasFase[i].jogo[0] === p1){
            oitavasFase[i].selecao[0] = ''
          }
        }
      },
    },
    {
      condicao: () => primeiro === "" && segundo !== "" && segundo !== selecId,
      acao: () => {
        grupos[grupo]["1"] = selecId;
        input.checked = true;
        const div = document.createElement('div')
        div.className = 'selecao'
        div.innerHTML = `<img src="${selecao.bandeira}" alt="${selecao.selecao}" class="bandeiras">
        <span>${selecao.selecao}</span>`
        document.getElementById(p1).appendChild(div)
        document.querySelector(`#${p1}~label`).style.display = 'none'
        document.querySelector(`label[for="${selecId}"]>span`).className = 'primeiro'
        for(let i in oitavasFase){
          if(oitavasFase[i].jogo[0] === p1){
            oitavasFase[i].selecao[0] = selecId
          }
        }
      },
    },
    {
      condicao: () => primeiro !== "" && primeiro !== selecId && segundo === "",
      acao: () => {
        grupos[grupo]["2"] = selecId;
        input.checked = true;
        const div = document.createElement('div')
        div.className = 'selecao'
        div.innerHTML = `<img src="${selecao.bandeira}" alt="${selecao.selecao}" class="bandeiras">
        <span>${selecao.selecao}</span>`
        document.getElementById(p2).appendChild(div)
        document.querySelector(`span#${p2}~label`).style.display = 'none'
        document.querySelector(`label[for="${selecId}"]>span`).className = 'segundo'
        for(let i in oitavasFase){
          if(oitavasFase[i].jogo[1] === p2){
            oitavasFase[i].selecao[1] = selecId
          }
        }
      },
    },
    {
      condicao: () => segundo !== "" && segundo === selecId,
      acao: () => {
        grupos[grupo]["2"] = "";
        input.checked = false;
        document.getElementById(p2).innerHTML = ''
        document.querySelector(`.boxFases>span#${p2}~label`).style.display = ''
        document.querySelector(`label[for="${selecId}"]>span`).className = ''
        for(let i in oitavasFase){
          if(oitavasFase[i].jogo[1] === p2){
            oitavasFase[i].selecao[1] = ''
          }
        }
      },
    },
  ];

  const fCondicao = condicoes.find((fCond) => fCond.condicao());
  if (fCondicao) {
    fCondicao.acao();
  } else {
    input.checked = false;
  }
}
function gruposSelec(GRUPO, ARRAY) {
  let selecoesGrupo = []
  let itensG = ''

  for (let i in ARRAY) {
    if (ARRAY[i].grupo == GRUPO) {
      selecoesGrupo.push(ARRAY[i])
    }
  }

  for (let i in selecoesGrupo) {
    itensG += `
    <div class="itensG">
            <label for="${selecoesGrupo[i].id}">
                <span></span>
                <input type="checkbox" name="selecao${selecoesGrupo[i].id}" id="${selecoesGrupo[i].id}" onchange="checkSelecao(this, 'grupo${GRUPO.toUpperCase()}', '${selecoesGrupo[i].id}', '${GRUPO}1' ,'${GRUPO}2');">
                <img src="${selecoesGrupo[i].bandeira}" alt="${selecoesGrupo[i].selecao}" class="bandeiras">
                ${selecoesGrupo[i].selecao}</label>
        </div>`
  }

  let texHtml = `
  <div class="grupo grupo-${GRUPO}">
    <h3>GRUPO ${GRUPO.toUpperCase()}</h3>
    <div class="grupoBox">

    ${itensG}
    </div>
  </div>`

  return texHtml
}

function oitavasSelec(OITAVAS, ARRAY) {
  let selecoesOitavas = []
  let itens = ''

  for(let i in  OITAVAS) {
    let lista = []
    for(let y of ARRAY) {
      if(OITAVAS[i].selecao[0] == y.id){
        lista.push(y)
      }
      if(OITAVAS[i].selecao[1] == y.id){
        lista.push(y)
      }
    }
    selecoesOitavas.push(lista)
  }

  for(let i in selecoesOitavas){
    itens += `
    <div class="grupo confronto-${i}">
    <h3>Confronto ${parseInt(i)+1}</h3>
    <div class="grupoBox">
    `
    for(let j in selecoesOitavas[i]){
      itens +=`
      <div class="itensG">
            <label for="o${selecoesOitavas[i][j].id}">
                <span></span>
                <input type="checkbox" name="${selecoesOitavas[i][j].id}" id="o${selecoesOitavas[i][j].id}">
                <img src="${selecoesOitavas[i][j].bandeira}" alt="${selecoesOitavas[i][j].selecao}" class="bandeiras">
                ${selecoesOitavas[i][j].selecao}</label>
      </div>
      `
    }
    itens += `
    </div>
  </div>
  `
  }

  return itens
}

let pagAtual = 'oitavas'

const fases = {
  oitavas: {
    fechar: () => {
      const elemento = document.getElementById('oitavas');
      elemento.className = 'oitavas escondeFase'
    },
    abrir: () => {
      const elemento = document.getElementById('oitavas');
      elemento.className = 'oitavas'
    },
  },
  quartas: {
    fechar: () => {
      const elemento = document.getElementById('quartas');
      elemento.classList.add(['faseQuartas', 'escondeFase'])
    },
    abrir: () => {
      const elemento = document.getElementById('quartas');
      elemento.classList.remove('escodeFase')
      elemento.innerHTML += oitavasSelec(oitavasFase,selecoesFaseDeGrupos)
    },
  },
  semi: {
    fechar: () => {
      const elemento = document.getElementById('semi');
      elemento.className = 'faseSemi escondeFase'
    },
    abrir: () => {
      const elemento = document.getElementById('semi');
      elemento.className = 'faseSemi'
    },
  },
  final: {
    fechar: () => {
      const elemento = document.getElementById('final');
      elemento.className = 'faseFinal escondeFase'
    },
    abrir: () => {
      const elemento = document.getElementById('final');
      elemento.className = 'faseFinal'
    },
  }
}

function avancarFase() {
  if (pagAtual === 'quartas') {
    pagAtual = 'semi'
    fases.oitavas.fechar()
    fases.quartas.fechar()
    fases.semi.abrir()
  }
  if (pagAtual === 'oitavas') {
    pagAtual = 'quartas'
    fases.oitavas.fechar()
    fases.quartas.abrir()
    fases.semi.fechar()
  }
  if (pagAtual === 'grupos') {
    pagAtual = 'oitavas'
    fases.oitavas.abrir()
    fases.quartas.fechar()
    fases.semi.fechar()
  }
}