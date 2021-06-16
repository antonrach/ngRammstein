import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../data.service'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['((', '))']
})

export class CardComponent implements OnInit {

    @Input() card: Card;
    textColor: string;

    constructor(public _dialog: MatDialog) {

    }

    ngOnInit() {
        this.textColor = this.card.color ? this.card.color : 'white';
        
        
    }

    makeAlert() {
        const dialogRef = this._dialog.open(DialogComponent, {data: { paragraphs: [
            `Rammstein - ${this.card.album}`,
            `Number of tracks: ${this.card.tracks.length}`,
          ],
          isAlbum: true,
          cover: this.card.coverURL,
          released: new Date(this.card.released)
        },
          width: '600px',
          panelClass: 'album',
          backdropClass: 'album-backdrop',
        })
//         alert(`
// Rammstein - ${this.card.album}
// Number of tracks: ${this.card.tracks.length}
//         `);
    }

    setColor(color: string) {
        this.textColor = color;

        if(localStorage.getItem('colors')) {
            let colors = JSON.parse(localStorage.getItem('colors'));

            let ind = colors.findIndex(({ album }) => album === this.card.album);
            if (ind === -1) {
                colors.push({
                    album: this.card.album,
                    color
                })
            } else {
                colors[ind] = {
                    album: this.card.album,
                    color
                }
            }
            
            localStorage.setItem('colors', JSON.stringify(colors));
        } else {
            localStorage.setItem('colors', JSON.stringify([{
                album: this.card.album,
                color
            }]))
        }

    }

}
