const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "teste de arquivo!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar ao arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "continuação do teste!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
