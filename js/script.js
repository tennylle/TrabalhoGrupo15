window.onload = function() {

    const urlParams = new URLSearchParams(window.location.search);


    const nome = urlParams.get('nome');
    const email = urlParams.get('email');
    const telefone = urlParams.get('telefone');


    document.getElementById('nome').textContent = nome ? nome : 'Não informado';
    document.getElementById('email').textContent = email ? email : 'Não informado';
    document.getElementById('telefone').textContent = telefone ? telefone : 'Não informado';
};
