import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-btn',
  templateUrl: './income-btn.component.html',
  styleUrls: ['./income-btn.component.scss']
})
export class IncomeBtnComponent {

  constructor(private router: Router) { }


  @Input() label: string = "Income";
  @Input() page: string = "";


  onClick(page: string) {
    this.router.navigate([this.page]);
  }

}
