const chalk = require("chalk");
const { greetUser } = require("./greet");

console.log(chalk.green(greetUser("Yonis")));
console.log(chalk.blue.bold("Det här är blå och fet text"));
console.log(chalk.bgRed.white(" Varning! "));