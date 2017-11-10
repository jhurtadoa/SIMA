module.exports = function (socket) {
	socket.on('chat', function(data){
		console.log('Alguien ingresó a chat');
	});
}