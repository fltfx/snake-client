const net = require("net");
const { connect } = require('./client');
const { setupInput } = require('./input');

// setup interface to handle user input from stdin



//connection process is in progress
console.log("Connecting ...");
let newConnection = connect();
setupInput(newConnection);