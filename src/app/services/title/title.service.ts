import { Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private currentTitle = signal<string>('');

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.initTitle();
  }

public initTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data['title'])
    ).subscribe(title => {
      if (title) {
        this.currentTitle.set(title);
        this.titleService.setTitle(title); 
      }
    });
  }

  getTitleSignal() {
    return this.currentTitle;
  }

  private getActiveRoute() {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
  
  updateTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
