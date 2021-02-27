import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatur',
  templateUrl: './generatur.component.html',
  styleUrls: ['./generatur.component.css'],
})
export class GeneraturComponent implements OnInit {
  numberOfChar = 10;
  password: number = 0;
  passwords: string = '';
  passwordArray: number[] = [];
  savedPasswordArray = [];
  savedButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  generatur(): void {
    this.passwordArray = [];
    for (let index = 0; index < this.numberOfChar; index++) {
      this.password = this.mathRandom();
      this.passwordArray.push(this.password);
    }
    this.passwords = String.fromCharCode(...this.passwordArray);
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
