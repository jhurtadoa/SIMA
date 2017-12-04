import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {users_list} from "../services/usuarios"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  public login(form: NgForm){
    console.log(form.value);
    if(form.value.txUser == users_list[0].nombre && 
       form.value.txPassword == users_list[0].password)
    {
        localStorage.setItem('userlogin', form.value.txUser);
        alert("Usuario logueado correctamente");
        this.router.navigate(['/']);
    }else{
        localStorage.setItem('userlogin', null);
        alert("Usuario o contraseña incorrecta");
        this.clearForm(form);
    }
  }

  public clearForm(form: NgForm){

  }
}
