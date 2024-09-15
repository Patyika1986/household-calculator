import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output-btn',
  templateUrl: './output-btn.component.html',
  styleUrls: ['./output-btn.component.scss']
})
export class OutputBtnComponent {
  constructor(private router: Router) { }


  @Input() label: string = "Output";
  @Input() page: string = "";


  onClick(page: string) {
    this.router.navigate([this.page]);
  }
}
