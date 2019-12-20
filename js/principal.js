
//Ações do botão
var botao = document.querySelector("#adicionar-paciente");
//clicando no botão aciona a função
botao.addEventListener("click", adicionar);

function adicionar(event){
	event.preventDefault();
	var form = document.querySelector("#formulario"); //pegando dados do form

	var pacientTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = form.nome.value;
	pesoTd.textContent = form.peso.value;
	alturaaTd.textContent = form.altura.value;
	gorduraTd.textContent = form.gordura.value;

	console.log(form.peso.value);

	pacientTr.appendChild(nomeTd);
	pacientTr.appendChild(pesoTd);
	pacientTr.appendChild(alturaaTd);
	pacientTr.appendChild(gorduraTd);
	pacientTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacientTr);

	location.reload();
}


 //vetor que pega tudo da classe
var paciente = document.querySelectorAll(".paciente");

console.log(paciente.classList);

for(var i=0 ; i < paciente.length; i++){

	var controle = true;
	peso = paciente[i].querySelector(".info-peso").textContent;
	altura = paciente[i].querySelector(".info-altura").textContent;

	//Tratamento de Erro	
	if(peso < 0 || peso > 200){
		alert("peso invalido");
		controle = false;
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	if(altura < 0 || altura > 2.5){
		alert("altura invalida");
		controle = false;
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	if(controle){
		var imc = peso / (altura*altura);
		paciente[i].querySelector(".info-imc").textContent = imc.toFixed(2);
	}
}




