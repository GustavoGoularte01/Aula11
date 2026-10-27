let url='../dados/menu.json';

fetch(url)
    .then( (resp) => resp.json())
    .then(function(dados){
        let div = document.querySelector('#menu')
        let opcoes = dados.opcoes;
        opcoes.forEach(function(opc){
            div.innerHTML += `${opc.nome}<br>`
        })
        
    }) 