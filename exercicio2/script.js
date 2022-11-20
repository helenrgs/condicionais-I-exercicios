
// # Exercício 2
//modifiquei (:)
// Escreva uma função que receba três valores. 
function meiaCarteirinha(seFormada, naFaculdade, idade) {
    idade = prompt("Qual a sua idade?")
    formadaOunao = prompt("Já é formada?")
    let naFaculdadeOUnao = prompt("Já é formada?")

    seFormada = formadaOunao.toLowerCase()
    naFaculdade = naFaculdadeOUnao.toLowerCase()

    if (idade >= 18) {
        console.log("Você é maior de idade!")
    } else {
        console.log("Você é menor de idade!")
    }

    if (seFormada == "true") {
        console.log("Você já é formada!")
    } else if (seFormada == false) {
        console.log("Você não é formada!")
        naFaculdade = prompt("Está na faculdade?")
        if (naFaculdade == "true") {
            console.log("Você está na faculdade")
        } else if (naFaculdade == false) {
            console.log("Você está se formando!")
        }
    }
}
//Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, 
//e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, 
//e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>

meiaCarteirinha()