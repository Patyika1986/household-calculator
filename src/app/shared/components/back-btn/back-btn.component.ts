import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TitleService } from 'src/app/services/title/title.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent {
  currentTitle: string = '';

  constructor(
    private location: Location,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public navigateBack() {
    this.router.navigate(['/home']).then(() => {
      this.currentTitle = this.titleService.getTitle();
    });
  }
}
