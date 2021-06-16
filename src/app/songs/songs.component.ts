import { Component, OnInit, Input } from '@angular/core';


export interface InputSong {
  id: number,
  value: string
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent implements OnInit {

  @Input() inputs: InputSong[];

  //inputs: InputSong[] = [{id: 1, value: ''}];
  addDis: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.inputs.length >= 10) {
      this.addDis = true;
    }
  }

  addInput() {
    const _inputs = this.inputs;
    this.inputs.push({id: _inputs.length + 1, value: ''})
    //console.log(this.inputs);
    if(this.inputs.length >= 10) {
      this.addDis = true;
    }
  }

  deleteInput(id) {
    this.inputs.splice(id, 1);
    this.inputs.forEach((item, i) => {
      if((item.id - 1) >= id) {
        this.inputs[i].id = item.id - 1;
    }
    })
    if(this.inputs.length < 10) {
      this.addDis = false;
    }

    //console.log(this.inputs);
  }
  

}
