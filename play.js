const net = require("net");
const { connect } = require('./client');

// setup interface to handle user input from stdin

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } 
  //also need to write statements here to define what happens when arrow keys are entered
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //register an event listener for stdin
  //handleUserInput runs when you receive input from your keyboard
  stdin.on("data", handleUserInput);


  return stdin;
};

//connection process is in progress
console.log("Connecting ...");
connect();
setupInput();