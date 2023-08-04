// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// require("./modules/path");

// --------------------- Objeto person
// const person = new Person("Lucas");
// console.log(person.sayMyName());

// ------- Criação de pasta ou arquivo
// require("./modules/fs");

// ------------------------------ HTTP
// require("./modules/http");

// -------------------- Uso do Express
require("./modules/express");
