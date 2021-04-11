import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Register Form'


  isLogin: boolean = false

  errorMessage: any;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
  }


  loginForm = this.builder.group({
    _firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
    _lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
    _username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(14)]],
    _email: ['', [Validators.required, this.emailValidator]],
    passwordGroup: this.builder.group({
      _password: ['', [Validators.required]],
      _verifyPassword: ['', [Validators.required]]
    }, {validators: this.matchPassword})
  });

  emailValidator(control: AbstractControl) : any {
      let email: string = control.value;
      if (email == '') {
        return null;
      }

      let domain: string =  email.substring(email.lastIndexOf('@') + 1);
      if (domain.toLowerCase() == '.com') {
        return null;
      }
      return {'emailError': true}
  }

  // @ts-ignore
  matchPassword(group: AbstractControl): any {
      let password = group.get('_password');
      let verifyPassword = group.get('_verifyPassword');

      if (password?.value == verifyPassword?.value) {
        return null;
      }

      return {'passwordMisMatch' : true}
  }

}
