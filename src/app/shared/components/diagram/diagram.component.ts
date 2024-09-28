import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent {
  constructor(private router: Router) { }


  @Input() label: string = "Diagram";
  @Input() page: string = "";


  onClick(page: string) {
    this.router.navigate([this.page]);
  }
}
