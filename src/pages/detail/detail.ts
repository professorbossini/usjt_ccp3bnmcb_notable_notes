import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertCmp, AlertController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  newNoteFlag = false;
  note;
  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public noteService: NoteService,
                public alertController: AlertController) {
    this.note = this.navParams.get ('noteParam');
    if (!this.note){
      this.note = {
        id: '',
        date: '',
        title: '',
        content: ''
      }
      this.newNoteFlag = true;
    }
    console.log ('DetailPage', this.note)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave (){
    if (this.newNoteFlag)
      this.noteService.addNote (this.note);
  }

  onTrash(){
    let confirm = this.alertController.create({
      title: 'Apagar?',
      message: `Deseja apagar essa nota: ${this.note.title}?`,
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "OK",
          handler: () => {
            this.noteService.removeNote(this.note);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
