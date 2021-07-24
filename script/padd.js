(() => {
  sessionStorage.clear();
  const button = document.getElementById('adicionar');
  const nomeInput = document.getElementById('nome');
  const codProdutoInput = document.getElementById('cod-produto');
  const descricaoInput = document.getElementById('descricao');
  const valorInput = document.getElementById('valor');
  let obrigatoriooff = false;
  let id = 0;


  button.addEventListener('click', (event) => {
    event.preventDefault();

    obrigatorio ();

    if (obrigatoriooff == true) {
      const keys = Object.keys(localStorage);
      for (key of keys) {
        id = id + 1;
      };
    
      id = id + 1;
      sechsearchID();
    
      function sechsearchID(){
        for (key of keys) {
          if (id == key) {
            id = id + 1;
            sechsearchID();
            break;
          };
        };
      };

      addProd();
      window.location.href = "../index.html";
    };
  })

  function addProd(){
    let index = "p";
    let nome = nomeInput.value;
    let codProduto = codProdutoInput.value;
    let descricao = descricaoInput.value;
    let valor = valorInput.value;
    let addProduto = [];

    addProduto.push({
        index: index,
        id: id,
        nome: nome,
        codProduto: codProduto,
        descricao: descricao, 
        valor: valor
    });

    localStorage.setItem(`${id}`, JSON.stringify(addProduto));
    sessionStorage.setItem('nadd', '2');
  }

  function obrigatorio() {
    let onome = document.getElementById('onome');
    let ovalor = document.getElementById('ovalor');


    if (nomeInput.value == "") {
      onome.style.display = "inline-block"; /* inline-block */
    } else {
      onome.style.display = "none";
    };
    
    if (valorInput.value == "") {
      ovalor.style.display = "inline-block"; /* inline-block */
    } else {
      ovalor.style.display = "none";
    };

    if (!(nomeInput.value == "") && !(valorInput.value == "")){
      obrigatoriooff = true;
    };
  };

})();