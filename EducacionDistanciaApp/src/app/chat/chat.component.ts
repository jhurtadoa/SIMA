import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

declare var JQuery:any;
declare var $:any;
declare var fabric:any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	public socket = io('http://localhost:3000');
	public mensaje:String;


 	constructor() {
 		this.mensaje = '' 		
		this.socket = io('http://localhost:3000');

		this.socket.on('mensajes',function(data){
  			debugger;
			$("#chat").append("</br>" + data);
		});
 	}

  	ngOnInit() {

  	}

  	EnvioMensaje(Usuario){		

		this.socket.emit('chat', Usuario + ": " + $("#mensaje").val());
		$("#mensaje").val("");		
		
  	}

}