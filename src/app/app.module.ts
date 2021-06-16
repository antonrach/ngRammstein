import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FavComponent } from './fav/fav.component';
import { OptionComponent } from './option/option.component';
import { SongsComponent } from './songs/songs.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FavComponent,
    OptionComponent,
    SongsComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
