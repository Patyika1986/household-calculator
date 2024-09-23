import { Component, forwardRef, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],  
})
export class AddTasksComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  public title: string = 'Task Overview';
  public form!: FormGroup;
  public isIncome: boolean = false;
  public isExpense: boolean = true;

  ngOnInit(): void {
    this.initializeForm(); 
  }

  initializeForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      value: ['', [Validators.required, Validators.min(0)]],
      purpose: ['',Validators.required],  
      ibahn: ['',Validators.required],    
      since: ['', Validators.required],
      recipient: ['',Validators.required],  
      kind: ['', Validators.required],
    });
  }

  public onClick(): void {
    console.log('click from income component');
  }

  public changeIncomeOutput(isIncome:any,isExpense:any): void {
    console.warn('income',isIncome._checked)
    console.warn('expense',isExpense)
    this.isIncome = isIncome._checked;
    this.isExpense = isExpense._checked;
    if(isIncome._checked){
      this.form.removeControl('purpose');
      this.form.removeControl('ibahn');
      this.form.removeControl('recipient');
    }else{
      this.form.addControl('purpose', this.fb.control('', Validators.required));
      this.form.addControl('ibahn', this.fb.control('', Validators.required));
      this.form.addControl('recipient', this.fb.control('', Validators.required));
    }

    // income = mat-radio-2
    // expense = mat-radio-3

  }

  public onSubmit() {
    if (this.form.valid) {
      console.log(this.form,'form is valide');

    } else {
      console.log(this.form);
      console.log('Form is invalid');
    }
  }
}
