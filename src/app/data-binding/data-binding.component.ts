import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  inputText = 'Pole tekstowe';
  inputText2Way = '';
  button = true;
  showClick = '';
  type = 'text';
  titleColor = 'titleClass';
  i2placeholder = 'Type something to see 2 way binding';
  i2length = 250;
  srcUrl = '';
  mainClass = '';
  professions = '';
  skills = '';
  name = '';


  constructor() {
    setTimeout(
      () => {
        this.button = false;
      },
      3000
    );
  }

  click(event) {
    this.showClick = 'Przycisk aktywny';
    this.button = false;
  }

  change() {
    this.showClick = 'Clicked';
    this.srcUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSBcg7DNraz4nYj4Kd7_Bmk9fopushNy_KAmYn36_0-QXXfHD';
  }

  onMouseMove() {
    this.mainClass = 'mainClass';
  }

  ngOnInit(): void {
  }
}
