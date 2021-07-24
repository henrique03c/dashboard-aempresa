(() => {
  sessionStorage.clear();
  const button = document.getElementById('adicionar');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telInput = document.getElementById('telefone');
  const enderecoInput = document.getElementById('endereco');
  const bairroInput = document.getElementById('bairro');
  const cidadeInput = document.getElementById('cidade');
  const cepInput = document.getElementById('cep');
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
      addUser();
      window.location.href = "../index.html";
    };
  })

  function addUser(){
    let index = "c";
    let nome = nomeInput.value;
    let email = emailInput.value;
    let telefone = telInput.value;
    let endereco = enderecoInput.value;
    let bairro = bairroInput.value;
    let cidade = cidadeInput.value;
    let cep = cepInput.value;
    let addUsuario = [];

    addUsuario.push({
        index: index,
        id: id,
        nome: nome,
        email: email,
        telefone: telefone, 
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        cep: cep
    });
  
    localStorage.setItem(`${id}`, JSON.stringify(addUsuario));
    sessionStorage.setItem('nadd', "1");
  }

  function obrigatorio() {
    let onome = document.getElementById('onome');
    let oemail = document.getElementById('oemail');
    let oendereco = document.getElementById('oendereco');
    let obairro = document.getElementById('obairro');
    let ocidade = document.getElementById('ocidade');

    if (nomeInput.value == "") {
      onome.style.display = "inline-block"; /* inline-block */
    } else {
      onome.style.display = "none";
    };
    
    if (emailInput.value == "") {
      oemail.style.display = "inline-block"; /* inline-block */
    } else {
      oemail.style.display = "none";
    }
    
    if (enderecoInput.value == "") {
      oendereco.style.display = "inline-block"; /* inline-block */
    } else {
      oendereco.style.display = "none";
    }
    
    if (bairroInput.value == "") {
      obairro.style.display = "inline-block"; /* inline-block */
    } else {
      obairro.style.display = "none";
    }

    if (cidadeInput.value == "") {
      ocidade.style.display = "inline-block"; /* inline-block */
    } else {
      ocidade.style.display = "none";
    }

    if (!(nomeInput.value == "") && !(emailInput.value == "") && !(enderecoInput.value == "") && !(bairroInput.value == "") && !(cidadeInput.value == "") ){
      obrigatoriooff = true;
    };
  };

})();