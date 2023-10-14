// Programa em pseudolinguagem
const pseudocodigo = `ESCREVA Meu nome;`;
// Variável para armazenar os comandos ESCREVA
const comandosEscreva = [];
// Função para traduzir o comando ESCREVA em JavaScript
function escrever(script) {
    comandosEscreva.push(`console.log("${script}");`);
    return `console.log("${script}");`;
}
// Analisador sintático simples que processa o código da pseudolinguagem
function parsePseudocodigo(code) {
    if (code.startsWith("ESCREVA ") && code.endsWith(";")) {
        const conteudo = code.substring(8, code.length - 1); // Remove o "ESCREVA " e o último caractere (";")
        return escrever(conteudo);
    }
    return "";
}
// Processa o programa e gera código JavaScript
const linhas = pseudocodigo.split(";"); // Dividindo por ponto e vírgula
linhas.forEach(line => {
    const codigo = parsePseudocodigo(line.trim() + ";"); // Adicionando um ponto e vírgula para corresponder à sintaxe
    if (codigo) {
        console.log(codigo);
    }
});
//# sourceMappingURL=index.js.map