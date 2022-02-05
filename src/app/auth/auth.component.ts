import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  sinUpForm!: FormGroup;
  longInForm!: FormGroup;
  isLoginMode: boolean = false;
  isLoading: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.sinUpForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      { validators: this.checkPasswords }
    );
    this.longInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  };

  toggleForm() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogInSubmit() {
    if (!this.longInForm.valid) {
      return;
    }
    const email = this.longInForm.value.email;
    const password = this.longInForm.value.password;
    this.isLoading = true;
    this.authService.login(email, password).subscribe(
      (resData) => {
        this.notifierService.notify(
          'warning',
          `Welcome to our website! We're glad you are here!`
        );
        this.router.navigate(['shop']);
        this.isLoading = false;
        console.log(resData);
      },
      (errorRes) => {
        this.isLoading = false;
        this.notifierService.notify('error', `${errorRes}`);
      }
    );
    this.longInForm.reset();
  }

  onSignupSubmit() {
    if (!this.sinUpForm.valid) {
      return;
    }
    const email = this.sinUpForm.value.email;
    const password = this.sinUpForm.value.password;
    this.isLoading = true;

    this.authService.signup(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.notifierService.notify(
          'warning',
          `Welcome to our website! We're glad you are here!`
        );
        this.router.navigate(['shop']);
        this.isLoading = false;
      },
      (errorRes) => {
        this.isLoading = false;

        this.notifierService.notify('error', `${errorRes}`);
      }
    );
    this.sinUpForm.reset();
  }
}
