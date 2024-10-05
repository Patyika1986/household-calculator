import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-btn',
  templateUrl: './balance-btn.component.html',
  styleUrls: ['./balance-btn.component.scss']
})
export class BalanceBtnComponent {
  constructor(private router: Router) { }


  @Input() label: string = "Balance";
  @Input() page: string = "";


  onClick(page: string) {
    this.router.navigate([this.page]);
  }
}
