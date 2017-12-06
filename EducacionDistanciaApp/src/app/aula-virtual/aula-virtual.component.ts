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

	public estoyDibujando:boolean;
  public socket = io('http://localhost:3000');
	
  constructor() { 
        
        this.socket = io('http://localhost:3000');
        
        //recibir eventos del servidor
        this.socket.on('io_pulsaRaton', function(data){
          this.socket = io('http://localhost:3000');
        
          let ctxLienzo = $("#pizarra").get(0).getContext('2d');
          this.estoyDibujando = true;
          //Indico que vamos a dibujar
          ctxLienzo.beginPath();
          //Averiguo las coordenadas X e Y por dónde va pasando el ratón
          ctxLienzo.moveTo(data.x,data.y);
        });

        this.socket.on('io_mueveRaton', function(data){
          console.log(this.estoyDibujando);
          if(this.estoyDibujando){
                  let ctxLienzo = $("#pizarra").get(0).getContext('2d');
            //indicamos el color de la línea
            ctxLienzo.strokeStyle='#000';
            //Por dónde vamos dibujando
            ctxLienzo.lineTo(data.x,data.y);
            ctxLienzo.stroke();
          }
        });


        //Dejamos todo preparado para escuchar los eventos
        //document.addEventListener('mousedown',pulsaRaton,false);
        //document.addEventListener('mousemove',mueveRaton,false);
        //document.addEventListener('mouseup',levantaRaton,false);

  	}

    
  	ngOnInit() {


        
   
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
    this.socket = io('http://localhost:3000');
        
    let ctxLienzo = $("#pizarra").get(0).getContext('2d');
		this.estoyDibujando = true;
		//Indico que vamos a dibujar
		ctxLienzo.beginPath();
		//Averiguo las coordenadas X e Y por dónde va pasando el ratón
		ctxLienzo.moveTo(event.clientX,event.clientY-200);


    this.socket.emit('io_pulsaRaton', { x: event.clientX, y: event.clientY-200});
	}

  PulsaRaton(positionX, positionY){
    let ctxLienzo = $("#pizarra").get(0).getContext('2d');
    this.estoyDibujando = true;
    //Indico que vamos a dibujar
    ctxLienzo.beginPath();
    //Averiguo las coordenadas X e Y por dónde va pasando el ratón
    ctxLienzo.moveTo(positionX, positionY);


  }

	mueveRaton(event: MouseEvent){
		this.socket = io('http://localhost:3000');
     
    console.log(this.estoyDibujando);
		if(this.estoyDibujando){
            let ctxLienzo = $("#pizarra").get(0).getContext('2d');
			//indicamos el color de la línea
			ctxLienzo.strokeStyle='#000';
			//Por dónde vamos dibujando
			ctxLienzo.lineTo(event.clientX,event.clientY-200);
			ctxLienzo.stroke();

      this.socket.emit('io_mueveRaton', { x: event.clientX, y: event.clientY-200});
		}
  }

	levantaRaton(event: MouseEvent){
        let ctxLienzo = $("#pizarra").get(0).getContext('2d');
		//Indico que termino el dibujo
		ctxLienzo.closePath();
		this.estoyDibujando = false;

    this.socket.emit('io_levantaRaton');
	}

    public EstoyDibujando(){
        console.log(this.estoyDibujando);
    }

    public conectarAulaVirtual(){
        this.socket.emit("aula_virtual", "prueba");
    }

}
