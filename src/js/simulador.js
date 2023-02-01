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

function checkSelecao(input, grupo, selecId) {
  const primeiro = grupos[grupo]["1"];
  const segundo = grupos[grupo]["2"];

  const condicoes = [
    {
      condicao: () => primeiro !== "" && segundo !== "" && selecId === primeiro,
      acao: () => {
        grupos[grupo]["1"] = "";
        input.checked = false;
      },
    },
    {
      condicao: () => primeiro !== "" && segundo !== "" && selecId === segundo,
      acao: () => {
        grupos[grupo]["2"] = "";
        input.checked = false;
      },
    },
    {
      condicao: () => primeiro === "" && segundo === "",
      acao: () => {
        grupos[grupo]["1"] = selecId;
        input.checked = true;
      },
    },
    {
      condicao: () => primeiro !== "" && primeiro === selecId,
      acao: () => {
        grupos[grupo]["1"] = "";
        input.checked = false;
      },
    },
    {
      condicao: () => primeiro === "" && segundo !== "" && segundo !== selecId,
      acao: () => {
        grupos[grupo]["1"] = selecId;
        input.checked = true;
      },
    },
    {
      condicao: () => primeiro !== "" && primeiro !== selecId && segundo === "",
      acao: () => {
        grupos[grupo]["2"] = selecId;
        input.checked = true;
      },
    },
    {
      condicao: () => segundo !== "" && segundo === selecId,
      acao: () => {
        grupos[grupo]["2"] = "";
        input.checked = false;
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

