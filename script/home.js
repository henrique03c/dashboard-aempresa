(() => {
  let key = 0;
  notificar();
  sessionStorage.clear();

  const keys = Object.keys(localStorage);
  for (key of keys) {
    if (localStorage.getItem(key)) {
      JSON.parse(localStorage.getItem(key)).forEach(i => {
        if (i.index == 'c') {
          document.getElementById('inicioc').innerHTML = (``);
          document.getElementById('inicioc').style.height = '0px';
          
          showcliente();
          
          let cliente = document.getElementById('boxClientes'),
          HTMLTemporarioC = cliente.innerHTML,
          HTMLNovoC = htmlcliente;
          HTMLTemporarioC = HTMLNovoC + HTMLTemporarioC;
          cliente.innerHTML = HTMLTemporarioC;

          function showcliente() {
            htmlcliente =
              (`<div class='box'>` +
              `<div class='box_all'>` +
              `<div class='box_icon'>${i.nome.substr(0, 2)}</div>` +
              `<div class='box_name'>` +
              `<div class='nome_despesa'>${i.nome}</div>` +
              `<div class='mes_despesa'>${i.email}</div>` +
              `</div><div class='box-atalho'>` +
              `<div onclick='visu(${i.id},1)' class='atalho visu' title='Visualizar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-info-square' viewBox='0 0 16 16'>` +
              `<path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/>` +
              `<path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>` +
              `</svg></div>` +
              `<div onclick='alter(${i.id},1)' class='atalho alter' title='Alterar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>` +
              `<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>` +
              `<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/>` +
              `</svg></div>` +
              `<div onclick='delet(${i.id},1)' class='atalho delet' title='Deletar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>` +
              `<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>` +
              `<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>` +
              `</svg></div></div></div></div>`
            );
            return htmlcliente;
          };
        } else {
          document.getElementById('iniciop').innerHTML = (``);
          document.getElementById('iniciop').style.height = '0px';
          showproduto();

          let produto = document.getElementById('boxProdutos'),
          HTMLTemporarioP = produto.innerHTML,
          HTMLNovoP = htmlproduto;
          HTMLTemporarioP = HTMLNovoP + HTMLTemporarioP;
          produto.innerHTML = HTMLTemporarioP;

          function showproduto() {
            htmlproduto =
              (`<div class='box'><div class='box_all'>` +
              `<div class='box_icon'>${i.nome.substr(0, 2)}</div><div class='box_name'>` +
              `<div class='nome_despesa'>${i.nome}</div>` +
              `<div class='valor_despesa'>R$ ${i.valor}</div></div><div class='box-atalho'>` +
              `<div onclick='visu(${i.id},2)' class='atalho visu' title='Visualizar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-info-square' viewBox='0 0 16 16'>` +
              `<path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/>` +
              `<path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/></svg></div>` +
              `<div onclick='alter(${i.id},2)' class='atalho alter' title='Alterar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>` +
              `<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>` +
              `<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg></div>` +
              `<div  onclick='delet(${i.id},2)' class='atalho delet' title='Deletar ${i.nome}'>` +
              `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>` +
              `<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>` +
              `<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>` +
              `</svg></div></div></div></div>`
            );
            return htmlproduto;
          };
        };
      });
    };
  };
})();

// Visualizar
function visu(id, index) {
  // 1 cliente
  // 2 Produto
  if (index == 1) {
    sessionStorage.setItem('visu', id)
    window.location.href = "calterar/";
  } else {
    sessionStorage.setItem('visu', id)
    window.location.href = "palterar/";
  }
};

// Alterar
function alter(id, index) {
  // 1 cliente
  // 2 Produto
  if (index == 1) {
    sessionStorage.setItem('alterar', id)
    window.location.href = "calterar/";
  } else {
    sessionStorage.setItem('alterar', id)
    window.location.href = "palterar/";
  }
  sessionStorage.setItem('nalt', index)
};

// Deletar
function delet(id, index) {
  localStorage.removeItem(id);
  sessionStorage.setItem('ndel', index)
  location.reload();
};

// Notificação
let closea = document.querySelector('.nclose');

closea.addEventListener('click', (event) => {
  event.preventDefault();
  close();
})

function altericon(icon){
  let iconp = document.getElementById('np');
  let iconc = document.getElementById('nc');

  if (icon == 1){
    iconp.style.display = "none";
    iconc.style.display = "block";
  } else {
    iconp.style.display = "block";
    iconc.style.display = "none";
  }
};

function close() {
  let notification = document.getElementById('notificacao');
  notification.style.right = "-25%";
  notification.style.visibility = "hidden";
};

function notificar() {
  let notification = document.getElementById('notificacao');
  function bye() {
    setTimeout(function(){
      close();
    },6000);
  };
  let notifi = document.querySelector('.notifi');

  if (!(sessionStorage.getItem('ndel') === null)) {
    notification.style.visibility = "visible";
    let index = sessionStorage.getItem('ndel');
    
    if (index == 1) {
      notifi.innerHTML = `Cliente deletado<br>com sucesso!`;
      altericon(1);
    } else {
      notifi.innerHTML = `Produto deletado<br>com sucesso!`;
      altericon(2);
    };

    notification.style.backgroundColor = "#e84c62";
    bye();
  };

  if (!(sessionStorage.getItem('nalt') === null)) {
    notification.style.visibility = "visible";
    let index = sessionStorage.getItem('nalt');

    if (index == 1) {
      notifi.innerHTML = `Cliente alterado<br>com sucesso!`;
      altericon(1);
    } else {
      notifi.innerHTML = `Produto alterado<br>com sucesso!`;
      altericon(2)
    };
    notification.style.backgroundColor = "#dab33e";
    bye();
  };

  if (!(sessionStorage.getItem('nadd') === null)) {
    notification.style.visibility = "visible";
    let index = sessionStorage.getItem('nadd');

    if (index == 1) {
      notifi.innerHTML = `Cliente adicionado<br>com sucesso!`;
      altericon(1);
    } else {
      notifi.innerHTML = `Produto adicionado<br>com sucesso!`;
      altericon(2);
    };
    notification.style.backgroundColor = "#287cfb";
    bye();
  };

};
