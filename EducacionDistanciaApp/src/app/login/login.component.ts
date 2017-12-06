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
      debugger;
    console.log(form.value);
    //if(form.value.txUser == users_list[0].nombre && 
    //   form.value.txPassword == users_list[0].password)
    if(form.value.txUser != "" && form.value.txPassword != "")
    {
        localStorage.setItem('userlogin', form.value.txUser);
        alert("Bienvenido "+ form.value.txUser);
        this.router.navigate(['/dashboard']);
    }else{
        localStorage.setItem('userlogin', null);
        alert("Usuario o contraseña incorrecta");
        this.clearForm(form);
    }
  }

  public clearForm(form: NgForm){

  }
}
