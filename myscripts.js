var vetor = [
    {nome: 'Maria', telefone: '(88) 9 9988 7766', email: 'maria@gmail.com', imagem: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/advance-card-bttf.png' },
    {nome: 'José', telefone: '(88) 9 9988 7765', email: 'jose@gmail.com', imagem: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/advance-card-bttf.png' },
    {nome: 'Eduardo', telefone: '(88) 9 9988 7764', email: 'eduardo@gmail.com', imagem: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/advance-card-bttf.png' },
    {nome: 'Felipe', telefone: '(88) 9 9988 7763', email: 'felipe@gmail.com', imagem: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/advance-card-bttf.png' },
];

var conteudo = '';

for (let i = 0; i < vetor.length; i++) {
    const item = vetor[i];
    
    conteudo += '<label>Nome:</label>';
    conteudo += '<label>'+ item.nome +'</label>';
    conteudo += '<br/>';
    conteudo += '<label>Telefone:</label>';
    conteudo += '<label>'+ item.telefone +'</label>';
    conteudo += '<br/>';
    conteudo += '<label>E-mail:</label>';
    conteudo += '<label>'+ item.email +'</label>';
    conteudo += '<br/>';
    conteudo += '<img src='+ item.imagem +' />';
    conteudo += '<br/>';
    conteudo += '<br/>';
}


var content = document.getElementById('conteudo');
content.innerHTML = conteudo;