module.exports = function (io, socket) {
	socket.on('aula_virtual', function(data){
		console.log('Alguien ingresó a aula virtual');
        socket.emit('borrar', "Jesus está borrando");
	});

    socket.on('io_pulsaRaton', function(data){
        socket.broadcast.emit('io_pulsaRaton',data);   
        //socket.emit('borrar', "Jesus está borrando");
    });

    socket.on('io_mueveRaton', function(data){
        socket.broadcast.emit('io_mueveRaton',data);   
        //socket.emit('borrar', "Jesus está borrando");
    });

}