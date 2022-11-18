export class Game {
  constructor(
    public game_id: number,
    public name: string,
    public description: string,
    public image_url: string,
    public min_players: number,
    public max_players: number,
    public rules_url: any
  ) {}
}
