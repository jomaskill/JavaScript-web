

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

	//criando um tipo de requisição
    var xhr = new XMLHttpRequest();

    //Definindo a requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	//verificar se ouve uma reposta da requisição
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText; //salvei a resposta
        var pacientes = JSON.parse(resposta); //tranformei JSON para js

        //adiciona cada novo paciente na tabela
        pacientes.forEach(function(paciente){
        	adicionaPacienteNaTabela(paciente);
        });        
    });

    //Enviando a requisição
    xhr.send();
});