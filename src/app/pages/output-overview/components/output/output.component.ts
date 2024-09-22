import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';
import { DataService } from '../../../../services/data/data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  currentTitle: string = "";
  public inputOrOutput: string[] = ['Output', 'Input'];
  public isMoneyActive = false;


  public value = 'Clear me';

  constructor(private titleService: Title, public dataService:DataService) { }

  ngOnInit(): void {
    this.currentTitle = this.titleService.getTitle();
  }

  public onClick(): void {
    console.log('click from output component');
  }

  public changeInputsOutput(value: Event): void {
    const selectElement = value.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);
  }

  public clearInput(): void {
    this.value = '';
  }


  public readMoney(money: number): void {
    if (this.value === '') {
      money = 0;
    }
    console.log('Read money', money);
  }

  public changeKindSelection(selectedId: string): void {
    const selectedItem = this.dataService.whichEdition.find(item => item.id === selectedId);
    if (selectedItem) {
      selectedItem.value === 0 ? this.isMoneyActive = true : this.isMoneyActive = false;
      console.log('Selected item:', selectedItem);
    }
  }

  /*
    It should be checked whether value is 0, if so then show how much input, otherwise hide it
  */
  private checkIfValueNull() {
    this.dataService.whichEdition.filter(x => x.value === 0);
  }

}
