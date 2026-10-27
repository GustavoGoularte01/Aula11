let xhr;

function criarObjetoXhr(){
    if( window.XMLHttpRequest)
        xhr = new XMLHttpRequest();
    else
        alert('Erro...');
}
function carregarJson(url){
    criarObjetoXhr();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send(null);
    xhr.onload = function(){
        exibirMenu(xhr.response);
    }
}

function exibirMenu(json){
    let div = document.querySelector('#menu');
    console.log(json)
    for(let opc of json.opcoes){
        div.innerHTML += `${opc.id} - ${opc.nome}<br>`;
    }

}

carregarJson('../dados/menu.json');