function Converter() {
//pegou o onclick do html
    var valorElemento = document.getElementById("valor");
//pegou o id do input do html, onde será o valor em dólar que a pessoa vai colocar
    var valor = valorElemento.value;
//colocou o valor para o valor do elemento
    var valorDolar = parseFloat(valor);
//o valor em dólar que a pessoa colocar passará de string para numérico (1+1 não será mais 11)
    var valorReal = valorDolar * 5;
//criou uma nova var para o valor convertido e fez a multiplicação 
    console.log(valorReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    console.log(elementoValorConvertido);
//pegou o id do h2 que será impresso na tela

    var valorConvertido = "O resultado da conversão é R$ " + valorReal
//quando a pessoa apertar o botão o resultado será impresso na tela
    console.log(valorConvertido)
    elementoValorConvertido.innerHTML = valorConvertido
//passar o que será impresso para o HTML
}
