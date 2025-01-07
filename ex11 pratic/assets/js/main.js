//capturar evento de submite do botao do formulario
const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const inputPeso = e.target.querySelector('#peso');
	const inputAltura = e.target.querySelector('#altura');

	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);
	console.log(peso, altura);

	if(!peso){
		botadnoResultado('Peso Inválido', false);
		return;
	}

	if (!altura){
		botadnoResultado('Altura inválida', false);
		return;
	}
	const imc=getImc(peso, altura);
	const nivelImc = getNivelImc(imc);
	function getImc (peso, altura){
		const imc = peso/ altura **2;
		return imc.toFixed(2); //coloca 2casas decimais

	}
	const msg = `Seu IMC é ${imc} (${nivelImc}).`

	botadnoResultado(msg, true);

});

function getNivelImc (imc){
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if (imc >= 39.9) return nivel [5]; //quando tem apenas um 'if', não precisa de chaves {}
  if (imc >= 34.9) return nivel [4];
  if (imc >= 29.9) return nivel [3];
  if (imc >= 24.9) return nivel [2];
  if (imc >= 18.5) return nivel [1];
  if (imc <18.5) return nivel [0];
}


 function criaP(){
	const p = document.createElement('p');
	return p;
 }
 					//msg ou algo entre parenteses na funcao é como se fosse em compactador, e é assim que voce vai chamar essas funcao quando for chamar em algum lugar
function botadnoResultado(msg, isValid) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = ''; //apaga o resultado atual



const p= criaP();
if (isValid) {
p.classList.add('paragrafo-resultado');
} else {
p.classList.add('bad');
}
p.innerHTML = msg;
resultado.appendChild(p); //
//appendChild(p) coloca algo dentro de outro. Por exemplo,
// se você criou um texto (como um parágrafo), 
// pode usar isso para 
// colocá-lo dentro de uma área chamada resultado
}