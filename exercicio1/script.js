
// # Exercício 1

//Crie uma função que receba uma const numérica qualquer. 
//Crie um `if` para verificar se o número guardado na const é **par**. 
//Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

const ehPar = (x) => {
    x = prompt("Digite um número")
    if (x%2==0) {
        console.log("É par")
    } else {
        console.log("É ímpar!")
    }
}
ehPar()