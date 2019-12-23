
var nome = document.querySelector("#filtrar-tabela");

//adicionando o evento de digitação
nome.addEventListener("input", function(){
	//this.value = valor do input

	// selecionando todos os pacientes
    var paciente = document.querySelectorAll(".paciente"); 


    // apenas faz algo, caso tenha algo digitado
    if(this.value.length > 0){
    //iterando sobre todos
	    for(var i=0 ; i < paciente.length ; i ++){
	    	var nomeBuscado = paciente[i].querySelector(".info-nome").textContent;

	    	var expressao = new RegExp(this.value, "i"); //expressão regular

	    	//testa caso aja alguma subString de expressao nos nomes da tabela
	    	if (!expressao.test(nomeBuscado)){ //caso o nome ñ esteja na lista
	    		paciente[i].classList.add("invisivel");
	    	}else{ //caso esteja
	    		paciente[i].classList.remove("invisivel");
	    	}
	    }
	} else{ //caso não tenho algo digitado
		 for(var i=0 ; i < paciente.length ; i ++){
	    	paciente[i].classList.remove("invisivel");
	    }
	}
});
