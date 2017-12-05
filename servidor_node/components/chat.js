module.exports = function (io, socket) {
	socket.on('chat', function(data){
		console.log('Alguien envio un mensaje');		
		io.sockets.emit('mensajes',data);		
		//io.socket.broadcast.emit('mensajes',data);

	});
}