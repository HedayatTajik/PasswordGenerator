import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatur',
  templateUrl: './generatur.component.html',
  styleUrls: ['./generatur.component.css'],
})
export class GeneraturComponent implements OnInit {
  numberOfChar = 10;
  randomNumber: number = 0;
  passwords: string = '';
  randomNumberArray: number[] = [];
  savedPasswordArray = [];
  savedButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  generatur(): void {
    this.randomNumberArray = [];
    for (let index = 0; index < this.numberOfChar; index++) {
      this.randomNumber = this.mathRandom();
      this.randomNumberArray.push(this.randomNumber);
    }
    this.passwords = String.fromCharCode(...this.randomNumberArray);
    this.savedButton = true;
  }

  mathRandom(): number {
    let number = Math.floor(Math.random() * 126);

    if (
      number < 35 ||
      number === 39 ||
      number === 44 ||
      number === 46 ||
      number === 94 ||
      number === 95 ||
      number === 96
    ) {
      let flag = true;
      while (flag) {
        number = Math.floor(Math.random() * 126);
        if (
          number >= 35 &&
          number !== 39 &&
          number !== 44 &&
          number !== 46 &&
          number !== 94 &&
          number !== 95 &&
          number !== 96
        ) {
          flag = false;
        }
      }
    }

    if (
      number < 35 ||
      number === 39 ||
      number === 44 ||
      number === 46 ||
      number === 94 ||
      number === 95 ||
      number === 96
    ) {
      console.warn('Error', number);
    }

    return number;
  }

  savePassword() {
    this.savedPasswordArray.push(this.passwords);
  }
  deleteItem(indexOfelement) {
    this.savedPasswordArray.splice(indexOfelement, 1);
  }
  deleteAllPassword() {
    this.savedPasswordArray = [];
    this.savedButton = false;
  }
}
