import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  currentTitle: string = "";
  public inputOrOutput: string[] = ['Output','Input'];

  public whichEdition:WhitchEdition[] = [
    {id:'1',title:'Hörnlein',value:20,thePurposeOf:'The purpose of Edition 1',ibahn:'IBAN 1',since:new Date(),recipient:'Recipient 1',kind:'Debts'},
    {id:'2',title:'Coe Inkasso',value:25,thePurposeOf:'The purpose of Edition 2',ibahn:'IBAN 2',since:new Date(),recipient:'Recipient 2',kind:'Debts'},
    {id:'3',title:'Kodiak',value:25,thePurposeOf:'The purpose of Edition 3',ibahn:'IBAN 3',since:new Date(),recipient:'Recipient 3',kind:'Debts'},
    {id:'4',title:'Real-Solution',value:25,thePurposeOf:'The purpose of Edition 4',ibahn:'IBAN 4',since:new Date(),recipient:'Recipient 4',kind:'Debts'},
    {id:'5',title:'Riwerti',value:20,thePurposeOf:'The purpose of Edition 5',ibahn:'IBAN 5',since:new Date(),recipient:'Recipient 5',kind:'Debts'},
    {id:'6',title:'Ralf-Hey',value:20,thePurposeOf:'The purpose of Edition 6',ibahn:'IBAN 6',since:new Date(),recipient:'Recipient 6',kind:'Debts'},
    {id:'7',title:'Hörnlein',value:20,thePurposeOf:'The purpose of Edition 7',ibahn:'IBAN 7',since:new Date(),recipient:'Recipient 7',kind:'Debts'},
    {id:'8',title:'Deutschekraftfahrzeug',value:25,thePurposeOf:'The purpose of Edition 8',ibahn:'IBAN 8',since:new Date(),recipient:'Recipient 8',kind:'Debts'},
    {id:'9',title:'Axactor',value:30,thePurposeOf:'The purpose of Edition 9',ibahn:'IBAN 9',since:new Date(),recipient:'Recipient 9',kind:'Debts'},
    {id:'10',title:'Riwerti',value:20,thePurposeOf:'The purpose of Edition 10',ibahn:'IBAN 10',since:new Date(),recipient:'Recipient 10',kind:'Debts'},
    {id:'11',title:'Hörnlein',value:10,thePurposeOf:'The purpose of Edition 11',ibahn:'IBAN 11',since:new Date(),recipient:'Recipient 11',kind:'Debts'},
    {id:'12',title:'Kredit',value:250,thePurposeOf:'The purpose of Edition 12',ibahn:'IBAN 12',since:new Date(),recipient:'Recipient 12',kind:'Debts'},
    {id:'13',title:'Apple-Storage',value:2.99,thePurposeOf:'The purpose of Edition 13',ibahn:'IBAN 13',since:new Date(),recipient:'Recipient 13',kind:'Subscribers'},
    {id:'14',title:'Fahrkarten',value:83.3,thePurposeOf:'The purpose of Edition 14',ibahn:'IBAN 14',since:new Date(),recipient:'Recipient 14',kind:'Mobility'},
    {id:'15',title:'Apple-Music',value:20,thePurposeOf:'The purpose of Edition 15',ibahn:'IBAN 15',since:new Date(),recipient:'Recipient 15',kind:'Subscribers'},
    {id:'16',title:'Electricity ',value:157,thePurposeOf:'The purpose of Edition 16',ibahn:'IBAN 16',since:new Date(),recipient:'Recipient 16',kind:'Housing costs'},
    {id:'17',title:'Rent',value:950.93,thePurposeOf:'The purpose of Edition 17',ibahn:'IBAN 17',since:new Date(),recipient:'Recipient 17',kind:'Housing costs'},
    {id:'18',title:'Menza',value:100,thePurposeOf:'The purpose of Edition 18',ibahn:'IBAN 18',since:new Date(),recipient:'Recipient 18',kind:'School expenses'},
    {id:'19',title:'Kindergarten',value:73,thePurposeOf:'The purpose of Edition 19',ibahn:'IBAN 19',since:new Date(),recipient:'Recipient 19',kind:'School expenses'},
    {id:'20',title:'ETC',value:0,thePurposeOf:'The purpose of Edition 20',ibahn:'IBAN 20',since:new Date(),recipient:'Recipient 20',kind:'etc'},
  ];
  public value = 'Clear me';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.currentTitle = this.titleService.getTitle();
  }

  public onClick(): void {
    console.log('click from output component');
  }


  /*
    It should be checked whether value is 0, if so then show how much input, otherwise hide it
  */ 
  private checkIfValueNull(){
    this.whichEdition.filter(x => x.value === 0);
  }

}
