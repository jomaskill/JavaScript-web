
1//Ações do botão
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
}

