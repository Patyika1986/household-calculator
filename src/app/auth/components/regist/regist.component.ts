import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit{

  constructor(public spinnerService: SpinnerService) { }

  public registForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
      this.initializeForm();
  }

  private initializeForm(): void {
    this.registForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(9)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });
  }


  public navigateBack(): void {
    this.spinnerService.loadSpinner('/login');
  }

  public onSubmit(): void {
    console.log(this.registForm.value);
  }
}
