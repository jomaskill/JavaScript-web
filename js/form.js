

/////Ações do botão/////////////////
var botao = document.querySelector("#adicionar-paciente");

//clicando no botão aciona a função
botao.addEventListener("click", adicionar);

function adicionar(event){

	//previne que a página recarrega após clicar no botão
	event.preventDefault();

	//extraindo informações do paciente
	var form = document.querySelector("#formulario"); //pegando dados do form
	var paciente = coletaDadosPaciente(form);

	//Criando Td e Tr
	var pacientTr = montaTr(paciente);

	//Validando novo paciente
	if(!validaPaciente(paciente)){
		alert("paciente inválido");
	}else{
		//Adicionando valores na tabela
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacientTr);
		form.reset();
	}
}

function adicionaPacienteNaTabela(paciente){

	//Criando Td e Tr
	var pacientTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacientTr);
}

function coletaDadosPaciente(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var pacientTr = document.createElement("tr");
	pacientTr.classList.add("paciente");

	//Criando a td
	//extraindo valores do formulário e colocando na td
	//Adicionando valores na tr
	pacientTr.appendChild(montaTd("info-nome", paciente.nome));
	pacientTr.appendChild(montaTd("info-peso", paciente.peso));
	pacientTr.appendChild(montaTd("info-altura", paciente.altura));
	pacientTr.appendChild(montaTd("info-gordura", paciente.gordura));
	pacientTr.appendChild(montaTd("info-imc", paciente.imc));

	return pacientTr;
}

function montaTd(dado, classe){

	var td = document.createElement("td");

	td.classList.add(dado);
	td.textContent = classe;

	return td;
}

function validaPaciente(paciente){

	if (validaPeso(paciente.peso) && validaAltura(paciente.altura)){
		return true;
	}
	return false;
}