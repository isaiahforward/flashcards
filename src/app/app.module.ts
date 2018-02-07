import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlashcardComponent } from './welcome/flashcard/flashcard.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
  AppComponent,
  WelcomeComponent,
  FlashcardComponent
  ],
  imports: [
    BrowserModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
