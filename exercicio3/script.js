let nacionalidade //= adicione o prompt aqui

// # Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, 
//utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" 
//e guarde o valor da resposta em uma const `nacionalidade`.

const dinamicaNacionalidade = (nacionalidade) => {
    nacionalidade = prompt("Qual a sua nacionalidade?")
    nacionalidade = nacionalidade.toLowerCase()
// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

if (nacionalidade == ("brasileira" || "argentina" || "uruguaia" || "chilena" || "colombiana")) {
    console.log("Você é" + nacionalidade)
}else{
    console.log("nacionalidade não encontrada")
}
}

dinamicaNacionalidade()