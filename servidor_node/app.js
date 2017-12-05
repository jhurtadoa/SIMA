var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

//Carga de componentes
var chatComponent = require('./Components/chat.js');
var aula_virtualComponent= require('./Components/aula_virtual.js');

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


function handler (req, res) {

  fs.readFile(__dirname + "/index.html",
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}




io.on('connection', function (socket) {



  var usuario = new Object();
  usuario.Id = 1;
  usuario.nombre = "Berna";
  debugger;

  console.log('ya se conectó');
  chatComponent(io, socket);
  
  aula_virtualComponent(socket);
  

  socket.on('disconnect', function () {
    console.log('Un usuario a cerrado sesion');
  });
});




