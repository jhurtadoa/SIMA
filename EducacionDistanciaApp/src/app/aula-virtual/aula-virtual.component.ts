import { Component, OnInit } from '@angular/core';
declare var JQuery:any;
declare var $:any;
declare var fabric:any;
@Component({
  selector: 'app-aula-virtual',
  templateUrl: './aula-virtual.component.html',
  styleUrls: ['./aula-virtual.component.css']
})
export class AulaVirtualComponent implements OnInit {
	
	constructor() { 
		console.log('hola0');
  	}

  	ngOnInit() {
  		$(function(){
			var canvas = new fabric.Canvas('pizarra', {isDrawingMode: true});
  		});
	}
}
