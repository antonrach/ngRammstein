import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() album: string;
  @Input() idx: number;
  @Input() check: boolean;

  @Output() newPick = new EventEmitter<string>();

  ngOnInit(): void {
    //console.log(this.check);
    
  }

  setPick() {
    this.newPick.emit(this.album)
  }

}
