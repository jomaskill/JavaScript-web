

removerPaciente();

//Função Para remover um paciente
function removerPaciente(){
	var tabela = document.querySelector("table");//selecionando a tabela de dados

	//adicionando evento de duplo click
	tabela.addEventListener("dblclick", function(event) {

		/*
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
		paiDoAlvo.remove();
		*/

	 event.target.parentNode.remove();// função que remove a TR
	});
}