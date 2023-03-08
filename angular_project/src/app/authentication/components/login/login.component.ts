import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { LoginService } from '../../services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showText = 'Mostrar';
  hideText = 'Ocultar';
  showPassword = false;

  constructor(
    private loginService: LoginService
  ){
    let controls: any = {
      username: new FormControl('', [Validators.required, Validators.minLength(4)]), //primero > valor del input predefinido - segundo > validaciones, restricciones para los controles del formulario (no vacio, numerico...)
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      isAdmin: new FormControl(false)
    }
    this.loginForm = new FormGroup(controls);
  }

  showOrHidePassword(): void{
    this.showPassword = !this.showPassword;
    (document.getElementById('password') as HTMLInputElement).type = this.showPassword ? 'text' : 'password';
    (document.getElementById('password-btn') as HTMLInputElement).textContent = this.showPassword ? this.hideText : this.showText;
  }
  
  login(): void{
    let user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      isAdmin: this.loginForm.value.isAdmin
    }
    this.loginService.login(user);
    // this.router.navigate(['home']);
  }
}
