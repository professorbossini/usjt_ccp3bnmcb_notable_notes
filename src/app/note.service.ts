import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class NoteService{

    constructor (private db: AngularFireDatabase){

    }

    fetchNotes (){
        return this.db.list("/notes/");
    }

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

      removeNote (note){
          this.db.object("/notes/" + note.$key).remove();
          /*let i = this.notes.indexOf(note);
          if (i > -1)
            this.notes.splice (i, 1);*/

      }

      addNote (note){
          //this.notes.push(note);
          this.db.list('/notes/').push({
              title: note.title,
              content: note.content,
              date: note.date
          })
      }

      editNote (note){
          this.db.object("/notes/" + note.$key).update({
              content: note.content,
              title: note.title,
              date: note.date
          })
      }
}