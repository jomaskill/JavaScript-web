

 //vetor que pega tudo da classe
var paciente = document.querySelectorAll(".paciente");


for(var i=0 ; i < paciente.length; i++){

	peso = paciente[i].querySelector(".info-peso").textContent;
	altura = paciente[i].querySelector(".info-altura").textContent;

	//Tratamento de Erro - peso
	var pesoControle = validaPeso(peso);
	if (!pesoControle){
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	//Tratamento de Erro - altura
	var alturaControle = validaAltura(altura);
	if(!alturaControle){
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	if(pesoControle && alturaControle){
		var imc = calculaImc(peso, altura);
		paciente[i].querySelector(".info-imc").textContent = imc;
	}
}



function validaPeso(peso){
	if(peso < 0 || peso > 200){
		alert("peso invalido");
		return false;
	}
	return true;
}

function validaAltura(altura){
	if(altura < 0 || altura > 3){
		alert("altura invalida");
		return false;

	}
	return true;
}
// Calcula de IMC
function calculaImc(peso, alura){
	var imc = peso / (altura*altura);
	return imc.toFixed(2);
}