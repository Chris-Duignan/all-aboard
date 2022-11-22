import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
})
export class DiceComponent implements OnInit {
  public diceValues: Array<any> = [
    { value: 0, imagePath: '' },
    { value: 0, imagePath: '' },
    { value: 0, imagePath: '' },
    { value: 0, imagePath: '' },
    { value: 0, imagePath: '' },
    { value: 0, imagePath: '' },
  ];
  public diceImages = [
    '../../../assets/dice/dice-six-faces-one.svg',
    '../../../assets/dice/dice-six-faces-two.svg',
    '../../../assets/dice/dice-six-faces-three.svg',
    '../../../assets/dice/dice-six-faces-four.svg',
    '../../../assets/dice/dice-six-faces-five.svg',
    '../../../assets/dice/dice-six-faces-six.svg',
  ];

  constructor() {}

  ngOnInit(): void {
    this.rollDice();
  }

  rollDice() {
    for (let i = 0; i < this.diceValues.length; i++) {
      this.diceValues[i].value = Math.floor(Math.random() * 6) + 1;
      this.diceValues[i].imagePath =
        this.diceImages[this.diceValues[i].value - 1];
      console.log(this.diceValues[i]);
    }
  }
}

// dice from https://game-icons.net/1x1/delapouite/dice-six-faces-six.html
