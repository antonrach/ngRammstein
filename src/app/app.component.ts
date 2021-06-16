import { Component, OnInit } from '@angular/core';
import { DataService, Card } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private dataService: DataService;
  toggle = true;

  cards: Card[];

  constructor(public _dialog: MatDialog) {
    this.dataService = new DataService();
  }

  ngOnInit() {

    // const img = new Image();
    // img.src = "assets/img/albums/rammstein.jpg";
    // console.log(img);
    

    this.cards = this.dataService.cards;

    const colors = JSON.parse(localStorage.getItem('colors'));
    if(!colors!) {
      return
    }

    colors.forEach((item) => {
      const ind = this.cards.findIndex(({ album }) => album === item.album);
      if(ind !== -1) {
        this.cards[ind].color = item.color;
      }
    })
    
  }

  makeAlert() {
//     alert(`

//     `)

    const dialogRef = this._dialog.open(DialogComponent, {data: {paragraphs: [
      'Rammstein',
      `Number of albums: ${this.cards.length}`,
      `Total tracks: ${this.cards.reduce((acc, cur) => {return acc + cur.tracks.length}, 0)}`
    ]},
    width: '600px'
  })}


  buttonText = this.toggle ? 'Hide' : 'Show';

  toggleCards() {
    this.toggle = !this.toggle;
    this.buttonText = this.toggle ? 'Hide' : 'Show';
  }
}
