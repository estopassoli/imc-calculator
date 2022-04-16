# Exercício Javascript nível básico

Neste exercícios iremos trabalhar com Javascript!
Faremos uma calculadora de IMC.

Você irá aprender:

Como capturar valores contidos em Elementos;
Como manipular valores;
Como fazer calculos dentro de uma função;
Como imprimir valores na sua página a partir do Javascript;


# Iniciando HTML

Iremos criar uma página HTML com os seguintes elementos:

- <form> //Elemento 1

- <label> //Elemento 2
  
- <span> //Elemento 3

(Para efetuar quebras de linha e deixar o form mais bonito utilize a tag <br> onde deseja quebrar linhas)

Dentro do <form> você irá colocar os seguintes elementos:

- <label> Altura: 
- <input> type="text" id="altura" required autocomplete="off" placeholder="Apenas números"

- <label> Peso: 
- <input> Atributos: type="text" id="peso" required autocomplete="off" placeholder="Apenas números"

- <button>Calcular</button> Atributos: type="submit" id="submit"


Dentro da tag <label> irá conter a descrição: 

- O seu IMC é: 

Por fim, na tag <span> adicione o atributo id="resultado", pois iremos fazer o resultado aparecer nela!

# Javascript

Crie um arquivo script.js e linke NO FINAL DA PÁGINA HTML
<script src="caminho para o script"></script>

é muito importante ser no final da página, pois antes de carregar seu script, precisamos que a página carregue o documento primeiro (elementos)

Para darmos inicio, faça um DOM nos seguintes elementos:

- id="resultado" => const resultado = document.getElementById('resultado');
- id="submit" => const submit = document.getElementById('submit');

Faça uma função 'onclick' no botão submit, para que ao clicar no botão ele execute esta função:

button.onclick = function(e){} //um exemplo bem padrão de uma função onclick

//este "e" contido dentro de parenteses é para indicar o evento que ocorre dentro do click, neste caso como é um botão do tipo submit, o evento é de submitar o formulário

Todo formulário, ao ser enviado (submitado) por padrão, ele faz a página recarregar, e como nao queremos que a pagina carregue, no inicio da função coloque:

e.preventDefault() //isso fará com que ele previna da página recarregar a cada click.

Função:

Dentro da nossa função onclick, faça um DOM nos elementos:

var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;

isso fará com que você pegue os valores dos <input> e adicione a duas variáveis: "peso" e "altura"

Agora vamos calcular os valores do input!

Para isto, crie uma var chamada "imc" que irá calcular o valor dos 2 inputs e guardar em uma variável

var imc = peso / (altura * altura);

Por ultimo, vamos imprimir o valor resultado na tag de id="resultado" que já fizemos o DOM no inicio do exercício

Para fazer isso iremos utilizar a classe "innerHTML" que faz "aparecer" algo em formato de HTML.

resultado.innerHTML = imc; //isso fará com que, depois de calcular o imc ele aparecerá nesta const resultado, que já está com um elemento selecionado no nosso front-end

Pronto, você fez uma calculadora de IMC!!! <3



Parte opcional do projeto:

Fazer um condicionamento usando if() / else if()

imc < 18.5
resultado.innerHTML += " | Abaixo do peso";

imc >= 18.5 && imc <= 24.9
resultado.innerHTML += " | Peso normal";

imc >= 25 && imc <= 29.9
resultado.innerHTML += " | Acima do peso";

imc >= 30 && imc <= 34.9
resultado.innerHTML += " | Obesidade grau 1";

imc >= 35 && imc <= 39.9
resultado.innerHTML += " | Obesidade grau 2";

imc >= 40
resultado.innerHTML += " | Obesidade mórbida";