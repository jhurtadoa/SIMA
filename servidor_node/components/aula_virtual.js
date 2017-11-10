module.exports = function (socket) {
	socket.on('aula_virtual', function(data){
		console.log('Alguien ingresó a aula virtual');
	});
}