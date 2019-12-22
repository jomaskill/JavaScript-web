

removerPaciente();

//Função para remover um paciente
function removerPaciente(){
	var tabela = document.querySelector("table");//selecionando a tabela de dados

	//adicionando evento de duplo click
	tabela.addEventListener("dblclick", function(event) {

		event.target.parentNode.classList.add("fadeOut");
		/*
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
		paiDoAlvo.remove();
		*/
		setTimeout(function() {
        	event.target.parentNode.remove(); // função que remove a TR
    	}, 500);
	});
}