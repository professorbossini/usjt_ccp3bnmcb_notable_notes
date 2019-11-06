export class NoteService{
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
          let i = this.notes.indexOf(note);
          if (i > -1)
            this.notes.splice (i, 1);
      }

      addNote (note){
          this.notes.push(note);
      }
}