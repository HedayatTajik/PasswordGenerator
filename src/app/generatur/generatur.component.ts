import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatur',
  templateUrl: './generatur.component.html',
  styleUrls: ['./generatur.component.css'],
})
export class GeneraturComponent implements OnInit {
  number: number = 0;
  password: number = 0;
  passwords: string = '';
  passwordArray = [];
  savedPasswordArray = [];
  savedButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  generatur() {
    this.passwordArray = [];
    for (let index = 0; index < 10; index++) {
      this.password = this.mathRandom();
      this.passwordArray.push(this.password);
    }
    this.passwords = String.fromCharCode(...this.passwordArray);
    this.savedButton = true;
  }

  mathRandom(): number {
    let number = Math.floor(Math.random() * 127);
    if (number < 35) {
      let flag = true;
      while (flag) {
        number = Math.floor(Math.random() * 127);
        if (number > 35) {
          flag = false;
        }
      }

      if (number > 93 && number < 97) {
        let flag = true;
        while (flag) {
          console.log('while');
          number = Math.floor(Math.random() * 127);
          if (number < 93 || number > 97) {
            flag = false;
          }
        }
      }
    }
    return number;
  }

  savePassword() {
    this.savedPasswordArray.push(this.passwords);
    console.log('savedPasswordArray', this.savedPasswordArray);
  }
  deleteItem(indexOfelement) {
    this.savedPasswordArray.splice(indexOfelement, 1);
  }
  deleteAllPassword() {
    this.savedPasswordArray = [];
  }
}
