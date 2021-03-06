// Stores the active TCP connection object.
let connection;

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up")
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'i') {
    connection.write("Say: good luck!")
  } else if (key === 'j') {
    connection.write("Say: i'm winning");
  } else if (key === 'k') {
    connection.write("Say: i <3 red blox");
  } else if (key === 'l') {
    connection.write("Say: get out of my way!");
  }
};

const setupInput = function (conn) {
  connection = conn;
  //console.log(connection);
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //register an event listener for stdin
  //handleUserInput runs when you receive input from your keyboard
  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = { setupInput };
