import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputtext: string;
  key = 'username';

  selectedDateString1 = new Date().toISOString();
  minDateInput: string = new Date().toISOString();
  maxDateInput: string = new Date().toISOString();

  selectedDateString2 = new Date().toISOString();
  minDateOutput: string = new Date().toISOString();
  maxDateOutput: string = new Date().toISOString();

  constructor(private platform1: Platform, private platform2: Platform, private storage: Storage) {

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
      date2.setDate(date2.getDate() - 0);
      this.minDateInput = date2.toISOString();

      date2 = new Date();
      date2.setDate(date2.getDate() + 365);
      this.maxDateOutput = date2.toISOString();

    }

    );

  }

  saveData() {
    this.storage.set(this.key, this.inputtext);
  }

  loadData(){
  this.storage.get(this.key).then((val) => {
    console.log('Your username is', val);
  });
}


}
