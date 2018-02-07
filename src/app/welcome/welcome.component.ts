


import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


  flashcards = [
    {

      question: 'what are the types of directives ?',
      answer: 'Component, Structural, Attribute.'
    },
    {

      question: 'what are the ways of the data binding ?',
      answer: 'Interpolation, Data, Property, Two-Way.'
    },
    {

      question: 'what is CLI in Angular ?',
      answer: 'CLI is a command line interface for angular.'
    },
    {
      question: 'What are Components ?',
      answer: 'UI Basic building block .'
    },

    {
      question: 'What is a template ?',
      answer: 'It is a view in Angular.'

    }

  ]

  public index = 0;
  public selectedFlashcard = this.flashcards[this.index];

  public iterateFlashcard(): void {

    if (this.index == 0 || this.index < this.flashcards.length) {
      this.selectedFlashcard = this.flashcards[this.index++];
      if (this.index == this.flashcards.length) {
        this.index = this.flashcards.length - 1;
      }

    }

  }

  public chooseRandomCard(): void {
    let randomIndex = Math.floor((Math.random() * this.flashcards.length) + 1);
    this.selectedFlashcard = this.flashcards[randomIndex];
  }

  public previousFlashcard(): void {

    if (this.index > 0 || this.index == this.flashcards.length) {


      this.selectedFlashcard = this.flashcards[--this.index];

      if (this.index < 0) {
        this.index = 0;
      }
    }
  }

}
