export interface Meets {
    meets: Meet[];
}

export interface Meet {
    event_id: number,
    title: string,
    latitude: any,
    longitude: any,
    description: string | null,
    area: string,
    date: string,
    start_time: string,
    duration: number,
    user_id: string,
    visibility: boolean,
    willing_to_teach: boolean
    max_players: number,
    guests: {user_id: number, username: string}[],
    games: string[],
}