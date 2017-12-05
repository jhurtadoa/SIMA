import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

declare var JQuery:any;
declare var $:any;
@Component({
     selector: 'app-aula-virtual',
     templateUrl: './aula-virtual.component.html',
     styleUrls: ['./aula-virtual.component.css']
})

export class AulaVirtualComponent implements OnInit {

private metodonuevo(data){
        console.log(data);
    }
	public estoyDibujando:boolean;
    public socket: any;
	constructor() { 
		alert("constructor");
        this.socket = io('http://localhost:3000');
        this.socket.on("borrar", function(data){
            
            this.metodonuevo(data);
        });
        //Dejamos todo preparado para escuchar los eventos
        //document.addEventListener('mousedown',pulsaRaton,false);
        //document.addEventListener('mousemove',mueveRaton,false);
        //document.addEventListener('mouseup',levantaRaton,false);

  	}

    
  	ngOnInit() {


        
        alert("on init");
        let ctxLienzo = $("#pizarra").get(0).getContext('2d');
        this.estoyDibujando = false;
        $("#pizarra").on("mousedown", this.pulsaRaton);
        $("#pizarra").on("mousemove", this.mueveRaton);
        $("#pizarra").on("mouseup", this.levantaRaton);
        

	}

	iniciar(){
      	//Dejamos todo preparado para escuchar los eventos
			
	}

  	pulsaRaton(event: MouseEvent){

        let ctxLienzo = $("#pizarra").get(0).getContext('2d');
		this.estoyDibujando = true;
		//Indico que vamos a dibujar
		ctxLienzo.beginPath();
		//Averiguo las coordenadas X e Y por dónde va pasando el ratón
		ctxLienzo.moveTo(event.clientX,event.clientY-72);
	}

	mueveRaton(event: MouseEvent){
		console.log(this.estoyDibujando);
		if(this.estoyDibujando){
            let ctxLienzo = $("#pizarra").get(0).getContext('2d');
			//indicamos el color de la línea
			ctxLienzo.strokeStyle='#000';
			//Por dónde vamos dibujando
			ctxLienzo.lineTo(event.clientX,event.clientY-72);
			ctxLienzo.stroke();
		}
	}

  	levantaRaton(event: MouseEvent){
        let ctxLienzo = $("#pizarra").get(0).getContext('2d');
		//Indico que termino el dibujo
		ctxLienzo.closePath();
		this.estoyDibujando = false;
	}

    public EstoyDibujando(){
        console.log(this.estoyDibujando);
    }

    public conectarAulaVirtual(){
        this.socket.emit("aula_virtual", "prueba");
    }

}
