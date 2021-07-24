(() => {
 const button = document.getElementById('alterar');
 const nomeInput = document.getElementById('nome');
 const emailInput = document.getElementById('email');
 const telInput = document.getElementById('telefone');
 const enderecoInput = document.getElementById('endereco');
 const bairroInput = document.getElementById('bairro');
 const cidadeInput = document.getElementById('cidade');
 const cepInput = document.getElementById('cep');
 let i = 0;
 id = 0;

  if (!sessionStorage.length == 0) {
    if (!(sessionStorage.getItem('visu') === null)) {
      i = sessionStorage.getItem('visu');

      let title = document.getElementById('title');
      title.innerText = "a • Visualizar Cliente"

      let cancel = document.getElementById('cancelar');
      cancel.innerText = "Voltar"

      button.style.display = 'none';


      if (localStorage.getItem(i)) {
        JSON.parse(localStorage.getItem(i)).forEach(i => {

          nomeInput.value = i.nome;
          emailInput.value = i.email;
          telInput.value = i.telefone;
          enderecoInput.value = i.endereco;
          bairroInput.value = i.bairro;
          cidadeInput.value =  i.cidade;
          cepInput.value = i.cep;

          let titulo = document.querySelector('.titulo')
          titulo.innerText = `Visualizar ${i.nome}`;
        });
      };

      nomeInput.disabled = true;
      nomeInput.disabled = true;
      emailInput.disabled = true;
      telInput.disabled = true;
      enderecoInput.disabled = true;
      bairroInput.disabled = true;
      cidadeInput.disabled = true;
      cepInput.disabled = true;

    };

    if (!(sessionStorage.getItem('alterar') === null)) {
      i = sessionStorage.getItem('alterar');
      id = i;

      if (localStorage.getItem(i)) {
        JSON.parse(localStorage.getItem(i)).forEach(i => {

          nomeInput.value = i.nome;
          emailInput.value = i.email;
          telInput.value = i.telefone;
          enderecoInput.value = i.endereco;
          bairroInput.value = i.bairro;
          cidadeInput.value =  i.cidade;
          cepInput.value = i.cep;
        });
      };
    
      button.addEventListener('click', (event) => {
        event.preventDefault();
    
        obrigatorio ();
    
        if (obrigatoriooff == true) {
          addUser();
          window.location.href = "../index.html";
        };
      });
    
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
    };
  } else {
    window.location.href = "../";
  };
})();

