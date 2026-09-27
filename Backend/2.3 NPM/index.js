// var generateName = require('sillyname');
/*
import generateName from "sillyname";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
console.log("Name is " + sillyName + ".");
import superheroes from "superheroes";

const name = superheroes.random();

console.log(`I am ${name}`);
*/

import fs from 'fs';
const superheroes = JSON.parse(fs.readFileSync('./node_modules/superheroes/superheroes.json', 'utf8'));

const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${name}`);
