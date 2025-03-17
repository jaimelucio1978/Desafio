let amigos = [];
let nomeAmigo;
let tamanhoArray;
let nomesGerados = [];

function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value;
    
    validarNomeAmigo(nomeAmigo);
    limparInput();
}

function validarNomeAmigo(nome){
    if (nome == ''){
        alert('Por favor, insira um nome válido.')
    }else {
        atualizarArrayAmigo(nome);
        AdicionarAmigoListaExibicao();
    }
}

function atualizarArrayAmigo(nome){
    amigos.push(nome);
}

function limparInput(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}

function AdicionarAmigoListaExibicao(){
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    for(let amigo of amigos){
        let text = '<li>' + amigo + '</li>';
        listaExibicao.innerHTML += text;
    }
    
}

function sortearAmigo(){
    if(validaAmigosArray()){
        let numero = gerarNumeroAleatorio();

        if(numero == 'limite'){
            btnReinciarSorteio('sim');
        }else{
            mostrarSorteado(numero);
        }
    }
}

function validaAmigosArray() {
    if(amigos.length > 0){
        tamanhoArray = amigos.length;
        return true;
    }else {
        alert('Por favor, adicione amigos antes de sortear.');
        return false;
    }
}

function gerarNumeroAleatorio(){
    let novoNumeroGerado = parseInt(Math.random() * tamanhoArray);
    
    if (tamanhoArray == nomesGerados.length){
        alert('Todos os nomes foram sorteados. Por favor reinicie o jogo!');
        return 'limite';
    }
    else if(nomesGerados.includes(novoNumeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        nomesGerados.push(novoNumeroGerado);
        return novoNumeroGerado;
    }
}

function mostrarSorteado(numero){
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    sorteado.innerHTML += '<li>'+ amigos[numero] +'</li>';
}


function ReinciarSorteio(set){
    
    let divReiniciar = document.getElementById('reiniciarSorteio');
    
    if(set =='sim'){
        divReiniciar.hidden = false;
    }else{
        divReiniciar.hidden = true;
    }
}

function limparArray(){
    amigos = [];
    numerosGerados = [];
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    btnReinciarSorteio('nao');
}