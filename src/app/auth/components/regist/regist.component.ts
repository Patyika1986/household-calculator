import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit{

  constructor(public spinnerService: SpinnerService,private authService:AuthService) { }

  public registForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
      this.initializeForm();
  }

  private initializeForm(): void {
    this.registForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(9)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }



  public navigateBack(): void {
    this.spinnerService.loadSpinner('/login');
  }

  public onSubmit(): void {
    if(this.registForm.valid){
      if(this.authService.confirmPasswords(this.registForm.value.password, this.registForm.value.confirmPassword)){
        console.log('Passwords are the same');
      }else{
        console.log('Passwords are not the same');
      }
    }
  }
}
