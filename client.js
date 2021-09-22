const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //make connection to server and output confirmation
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  //retrieve data from server and output it
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: CYW');
  });

  return conn;
};

module.exports = { connect };
