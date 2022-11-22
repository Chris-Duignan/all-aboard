export interface Meets {
    meets: Meet[];
}

export interface Meet {
    event_id: number,
    title: string,
    description: string | null,
    latitude: string,
    longitude: string,
    area: string,
    date: string,
    start_time: string,
    duration: number,
    organiser: string,
    visibility: boolean,
    willing_to_teach: boolean
    max_players: number,
    guests: {user_id: number, username: string}[],
    games: string[],
}