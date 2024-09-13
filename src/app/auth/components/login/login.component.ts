import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public spinnerService: SpinnerService, public fb:FormBuilder) { }

  public loginForm!: FormGroup;


  ngOnInit(): void {
    this.initializeLoginForm();
  }


  public navigateGuest(): void {
    this.spinnerService.loadSpinner('/register');
  }


  private initializeLoginForm(): void {
      this.loginForm = this.fb.group({
        email: ['',Validators.compose([Validators.required, Validators.email,Validators.minLength(5),Validators.maxLength(50)])],
        password: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      });
  }


  public signIn(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
