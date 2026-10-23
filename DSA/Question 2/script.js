const fs = require("fs");
// Here input is an array [name, age]
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

function Solution() {

    const name = input[0];
    const age = input[1];

    console.log(`Hello ${name} you are ${age} years old.`);
}

module.exports = { Solution }; 