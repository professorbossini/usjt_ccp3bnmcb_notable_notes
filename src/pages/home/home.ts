import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ 
  selector: 'page-home', 
  templateUrl: 'home.html'})
export class HomePage {

  notes = [
    {
      id: 1,
      title: 'Firebase',
      content: 'Programar serverless',
      date: '2019-06-05'
    },
    {
      id: 2,
      title: 'Angular',
      content: 'Dá pra usar com Ionic',
      date: '2019-07-07'
    },
    {
      id: 3,
      content: 'old but gold',
      title: 'Java',
      date: '2019-09-09'
    }   
  ]
  
  constructor(public navCtrl: NavController) {
    
  }

  onItemClick (n){
    //console.log ("onItemClick", n)
    this.navCtrl.push('DetailPage', {noteParam: n})
  }
 

}
