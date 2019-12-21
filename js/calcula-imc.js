

 //vetor que pega tudo da classe
var paciente = document.querySelectorAll(".paciente");

console.log(paciente.classList);

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
	var controle = true;
	if(peso < 0 || peso > 200){
		alert("peso invalido");
		controle = false;
	}
	return controle;
}

function validaAltura(altura){
	var controle = true;
	if(altura < 0 || altura > 2.5){
		alert("altura invalida");
		controle = false;

	}
	return controle;
}
// Calcula de IMC
function calculaImc(peso, alura){
	var imc = peso / (altura*altura);
	return imc.toFixed(2);
}