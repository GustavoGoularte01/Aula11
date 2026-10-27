let url = 'https://randomuser.me/api/?format=json&results=10';
fetch(url)
    .then( (resp) => resp.json())
    .then (function(dados){
        console.log(dados);
        let usuarios = dados.results;
        let div = document.querySelector('#lista');
        usuarios.forEach(function(usuario){
            div.innerHTML +=`<img src='${usuario.picture.large}'> <br> ${usuario.name.first} <br>`;
        })
    })
