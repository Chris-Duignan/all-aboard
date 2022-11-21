import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  formattedName = '';
  shortDescription = '';
  gamePageLink = '';

  constructor() {}

  ngOnInit(): void {
    this.formattedName = this.game.name
      .split('-')
      .map((word: string) => {
        if (word[0]) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return '-';
        }
      })
      .join(' ');
    this.shortDescription = this.game.description.split('.')[0];
    this.gamePageLink = `/games/${this.game.game_id}`;
  }
}
