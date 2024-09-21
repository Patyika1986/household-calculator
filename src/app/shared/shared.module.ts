import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';

// material:
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { IncomeBtnComponent } from './components/income-btn/income-btn.component';
import { OutputBtnComponent } from './components/output-btn/output-btn.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { InfoBtnComponent } from './components/info-btn/info-btn.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    IncomeBtnComponent,
    OutputBtnComponent,
    BackBtnComponent,
    InfoBtnComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    SpinnerComponent,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HeaderComponent,
    IncomeBtnComponent,
    OutputBtnComponent,
    BackBtnComponent,
    InfoBtnComponent
  ]
})
export class SharedModule { }
