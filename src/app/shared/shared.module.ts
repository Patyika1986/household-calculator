// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material:
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// components:
import { IncomeBtnComponent } from './components/income-btn/income-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { OutputBtnComponent } from './components/output-btn/output-btn.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { InfoBtnComponent } from './components/info-btn/info-btn.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { FunctionalityBtnComponent } from './components/functionality-btn/functionality-btn.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    IncomeBtnComponent,
    OutputBtnComponent,
    BackBtnComponent,
    InfoBtnComponent,
    LogoutBtnComponent,
    FunctionalityBtnComponent,
    FooterContentComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
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
    InfoBtnComponent,
    LogoutBtnComponent,
    FunctionalityBtnComponent,
    FooterContentComponent,
    MatIconModule
  ]
})
export class SharedModule { }
