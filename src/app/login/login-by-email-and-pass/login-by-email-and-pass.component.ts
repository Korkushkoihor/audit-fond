import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-by-email-and-pass',
  templateUrl: './login-by-email-and-pass.component.html',
  styleUrls: ['./login-by-email-and-pass.component.css']
})
export class LoginByEmailAndPassComponent implements OnInit {

  emailField: string = '';
  passwordField: string = '';

  loginGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  submitLogin() {
    this.authService.signIn(this.emailField, this.passwordField).then((res) => {
      this.router.navigate(['/profile']);
    }).catch(err => {
      this.errorMessage = 'login or password is incorrect!';
    });
  }

}
