const fs = require('fs');
const getNotes =  require('./notes.js');
const chalk = require('chalk');
const msg = getNotes();
var validator = require('validator');

console.log(chalk.green(msg));
console.log(chalk.green('Success!'));
console.log(validator.isEmail("saed_sharqawi@hotmail.com"));
fs.writeFileSync('notes.txt', 'My name is saeed alsharqwi');
fs.appendFileSync('notes.txt', ' data to append');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));