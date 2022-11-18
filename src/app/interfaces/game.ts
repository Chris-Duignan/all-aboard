export interface Games {
  games: Game[];
}

export interface Game {
  game_id: number;
  name: string;
  description: string;
  image_url: string;
  min_players: number;
  max_players: number;
  rules_url: any;
}
