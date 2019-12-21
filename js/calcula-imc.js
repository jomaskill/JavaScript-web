

 //vetor que pega tudo da classe
var paciente = document.querySelectorAll(".paciente");

console.log(paciente.classList);

for(var i=0 ; i < paciente.length; i++){

	var controle = true;
	peso = paciente[i].querySelector(".info-peso").textContent;
	altura = paciente[i].querySelector(".info-altura").textContent;

	//Tratamento de Erro - peso
	if(peso < 0 || peso > 200){
		alert("peso invalido");
		controle = false;
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	//Tratamento de Erro - altura
	if(altura < 0 || altura > 2.5){
		alert("altura invalida");
		controle = false;
		paciente[i].querySelector(".info-imc").textContent = "invalido";
		paciente[i].classList.add("paciente-invalido");
	}

	if(controle){
		var imc = calculaImc(peso, altura);
		paciente[i].querySelector(".info-imc").textContent = imc;
	}
}


// Calcula de IMC
function calculaImc(peso, alura){
	var imc = peso / (altura*altura);
	return imc.toFixed(2);
}