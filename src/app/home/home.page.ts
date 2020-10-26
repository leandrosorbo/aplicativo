import { Component } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedDateString1: string = new Date().toISOString();
  minDateInput: string = new Date().toISOString();
  maxDateInput: string = new Date().toISOString();

  selectedDateString2: string = new Date().toISOString();
  minDateOutput: string = new Date().toISOString();
  maxDateOutput: string = new Date().toISOString();


 constructor(public actionSheetController: ActionSheetController, private platform1: Platform, private platform2: Platform) {
this.platform1.ready().then(() => {
let date1: Date = new Date();
date1.setDate(date1.getDate() - 0);
this.minDateInput = date1.toISOString();

date1 = new Date();
date1.setDate(date1.getDate() + 365);
this.maxDateInput = date1.toISOString();


});
this.platform2.ready().then(() => {
  let date2: Date = new Date();
  date2.setDate(date2.getDate() + 1);
  this.minDateOutput = date2.toISOString();

  date2 = new Date();
  date2.setDate(date2.getDate() + 365);
  this.maxDateOutput = date2.toISOString();
}

);






}
}
