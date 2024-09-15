import { Component, OnInit, inject, Injector, effect } from '@angular/core';
import { TitleService } from './services/title/title.service';
import { runInInjectionContext } from '@angular/core';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentTitle: string = "App";
  public title =  `Household Budget ${this.currentTitle}`;
  private titleService = inject(TitleService);
  private injector = inject(Injector); 
  constructor() {}

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.currentTitle = this.titleService.getTitleSignal()();
        if(this.currentTitle != "App"){
          this.title = `Household Budget ${this.currentTitle}`;
        }
      });
    });
  }
}



