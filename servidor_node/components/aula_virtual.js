module.exports = function (socket) {
	socket.on('aula_virtual', function(data){
		console.log('Alguien ingresó a aula virtual');
        socket.emit('borrar', "Jesus está borrando");
	});


}