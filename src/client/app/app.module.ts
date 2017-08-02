import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { CategoriesService } from './categories.service';
import { HangmanComponent } from './hangman/hangman.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameoverComponent } from './gameover/gameover.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    HangmanComponent,
    WelcomeComponent,
    GameoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
