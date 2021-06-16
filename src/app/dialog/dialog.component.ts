import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],

})
export class DialogComponent implements OnInit, AfterViewInit {

  @ViewChild('imgContainer') imgContainer: ElementRef;
  img;

  imageStatus: string = 'loading';

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    //console.log(img);
    
  }

  ngAfterViewInit(): void {
    if(this.data.isAlbum) {
      this.img = new Image();
      this.img.src = `assets/img/albums/${this.data.cover}`;
      this.img.onload = (() => {
        this.imageStatus = 'success';
        this.imgContainer.nativeElement.appendChild(this.img);
      });
      this.img.onerror = (() => {
        this.imageStatus = 'error';
      });
    }
  }

}
