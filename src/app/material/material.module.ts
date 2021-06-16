import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// MatDialog['decorators'][0].args[0].animations[0] = trigger('transformMenu', [
//   state('void', style({
//     opacity: 0,
//     transform: 'scale(0, 0)'
//   })),
//   state('enter-start', style({
//     opacity: 0,
//     transform: 'scale(0, 0)'
//   })),
//   state('enter', style({
//     opacity: 1,
//     transform: 'scale(1, 1)'
//   })),
//   transition('void => enter-start', animate('0ms ease-in-out')),
//   transition('enter-start => enter', animate('500ms ease-in-out')),
//   transition('* => void', animate('500ms ease-in-out', style({ opacity: 0 })))
// ]);

const MaterialComponents = [
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [...MaterialComponents],
  exports: [...MaterialComponents]
})
export class MaterialModule { }
