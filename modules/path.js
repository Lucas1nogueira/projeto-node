const path = require("path");

// Apenas o nome do arquivo atual (basename)
console.log("Arquivo atual: " + path.basename(__filename));

// Nome do diretório atual (dirname)
console.log("Diretório atual: " + path.dirname(__filename));

// Extensão do arquivo (extname)
console.log("Extensão do arquivo: " + path.extname(__filename));

// Criar objeto Path (parse)
const objPath = path.parse(__filename);
console.log("Objeto Path: " + objPath);

// Juntar caminhos de arquivos
console.log("Caminho criado: " + path.join(__dirname, "teste", "teste.html"));
