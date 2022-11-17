export interface Meets {
  meets: Meet[];
}

export interface Meet {
  event_id: number;
  title: string;
  latitude: string;
  longitude: string;
  area: string;
  date: string;
  start_time: string;
  duration: number;
  organiser: any;
  guests: null;
  games: null;
  visibility: boolean;
  willing_to_teach: boolean;
}
