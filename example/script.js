const resultado = document.getElementById('resultado');
const submit = document.getElementById('submit');


submit.onclick = function (e) {
    e.preventDefault();
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var imc = peso / (altura * altura);
    
    resultado.innerHTML = imc;    
}