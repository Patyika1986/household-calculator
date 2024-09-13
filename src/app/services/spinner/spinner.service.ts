import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private router: Router) { }

  public activateSpinner = signal(false);
  public btnDisabled = signal(false);


  public loadSpinner(navigate?:string): void {
    this.activateSpinner.set(true);
    this.btnDisabled.set(true);
    setTimeout(() => {
      this.activateSpinner.set(false);
      this.btnDisabled.set(false);
      this.router.navigate([navigate]);
    },1000);
  }
}
