import { Component, effect, inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/services/title/title.service';
import { runInInjectionContext } from '@angular/core';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }


  public currentTitle: string = "App";
  public title =  `Household Budget ${this.currentTitle}`;
  private titleService = inject(TitleService);
  private injector = inject(Injector); 

  ngOnInit(): void {
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
