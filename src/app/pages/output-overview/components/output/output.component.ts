import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  currentTitle: string = "";

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.currentTitle = this.titleService.getTitle();
  }

}
