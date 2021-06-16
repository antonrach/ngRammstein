import { Component, OnInit } from '@angular/core';
import { DataService, Card } from '../data.service';
import { InputSong } from '../songs/songs.component';
import songStringGenerator from '../../utils/songStringGenerator';

interface Album {
  album: string,
  checked: boolean
}

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  private dataService: DataService;

  toggle: boolean = true;

  cards: Card[];
  albums: Album[] = [];

  favAlbum: string;
  favSongs: string[] = [];
  favSongsString: string = ``;

  resFavS: string = 'Favourite songs are:';
  resFavSHere: boolean = true;

  _inputs: InputSong[] = [{id: 1, value: ''}];

  constructor() {
    this.dataService = new DataService();
  }

  setFavAlbum(a) {
    this.favAlbum = a;
  }

  setFavSongs(s: InputSong[]) {
    s.forEach((item) => {
      if(item.value.trim()) {
        this.favSongs.push(item.value);
      }
    })
    this.favSongsString = songStringGenerator(this.favSongs);
    localStorage.setItem('favSongs', JSON.stringify(this.favSongs));
    this.checkClass();
    //this.setStringSongs();
    //console.log(this.favSongsString);
    
    
  }

  checkClass() {
    if(this.favSongs.length === 1) {
      this.resFavS = "Favourite song is:";
    } else {
      this.resFavS = "Favourite songs are:";
    }

    if(!this.favSongs.length) {
      this.resFavSHere = false;
    } else {
      this.resFavSHere = true;
    }
  }

  setToggle(b, reset) {
    this.toggle = b;
    if(b) {
      if(reset) {
        localStorage.removeItem('favAlbum');
        localStorage.removeItem('favSongs');
        this._inputs = [{id: 1, value: ''}];
        this.favSongs = [];
        this.favAlbum = '';
        this.albums.forEach((item) => {
          item.checked = false;
        })
        location.href = '#fav-cont';
        return
      }
      if(this.favSongs.length) {
        this._inputs = [];
        this.favSongs.forEach((item, id) => {
          this._inputs.push({
            value: item,
            id
          })
        })
        this.favSongs = [];
      } else {
        this._inputs = [{id: 1, value: ''}];
      }

      location.href = '#fav-cont';
      //console.log(document.body.clientHeight);
    }
    if(!b) {
      localStorage.setItem('favAlbum', this.favAlbum);
      let _favAlb = this.favAlbum;
      let i = this.albums.findIndex(({ album }) => album === _favAlb );
      this.albums.forEach((item, id) => {
        if(id === i) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      })
      //this.albums[i].checked = true;
    }
  }


  ngOnInit(): void {

    this.cards = this.dataService.cards;
    this.cards.forEach(item => {
      this.albums.push({album: item.album, checked: false})
    })

    const savedFavAlbum = localStorage.getItem('favAlbum');
    if(savedFavAlbum) {
      this.favAlbum = savedFavAlbum;
      this.toggle = false;

      let i = this.albums.findIndex(({ album }) => album === savedFavAlbum );
      this.albums.forEach((item, id) => {
        if(id === i) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      })

      if(localStorage.getItem('favSongs')) {
        this.favSongs = JSON.parse(localStorage.getItem('favSongs'));
      }
      this.favSongsString = songStringGenerator(this.favSongs);
      this.checkClass();
      //console.log(this.favSongs);
      
    }
    
    //console.log(!!this.favAlbum);
    //console.log(this.favSongs);
    
    
  }

  cl(e) {
    console.log(e);
    
  }


}
