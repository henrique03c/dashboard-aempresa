(() => {
 const button = document.getElementById('alterar');
 const nomeInput = document.getElementById('nome');
 const codProdutoInput = document.getElementById('cod-produto');
 const descricaoInput = document.getElementById('descricao');
 const valorInput = document.getElementById('valor');
 let i = 0;
 id = 0;

  if (!sessionStorage.length == 0) {
    if (!(sessionStorage.getItem('visu') === null)) {
      i = sessionStorage.getItem('visu');

      let title = document.getElementById('title');
      title.innerText = "a • Visualizar Produto"

      let cancel = document.getElementById('cancelar');
      cancel.innerText = "Voltar"

      button.style.display = 'none';


      if (localStorage.getItem(i)) {
        JSON.parse(localStorage.getItem(i)).forEach(i => {

          nomeInput.value = i.nome;
          codProdutoInput.value = i.codProduto;
          descricaoInput.value = i.descricao;
          valorInput.value = i.valor;

          let titulo = document.querySelector('.titulo')
          titulo.innerText = `Visualizar ${i.nome}`;
        });
      };

      nomeInput.disabled = true;
      codProdutoInput.disabled = true;
      descricaoInput.disabled = true;
      valorInput.disabled = true;
    };

    if (!(sessionStorage.getItem('alterar') === null)) {
      i = sessionStorage.getItem('alterar');
      id = i;

      if (localStorage.getItem(i)) {
        JSON.parse(localStorage.getItem(i)).forEach(i => {

          nomeInput.value = i.nome;
          codProdutoInput.value = i.codProduto;
          descricaoInput.value = i.descricao;
          valorInput.value = i.valor;
        });
      };
    
      button.addEventListener('click', (event) => {
        event.preventDefault();
    
        obrigatorio ();
    
        if (obrigatoriooff == true) {
          addProd();
          window.location.href = "../index.html";
        };
      });
    
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
    };
  } else {
    window.location.href = "../";
  };
})();

