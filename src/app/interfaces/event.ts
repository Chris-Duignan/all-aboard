export interface Events {
    events: Event[];
}

export interface Event {
    event_id: number,
    title: string,
    latitude: string,
    longitude: string,
    area: string,
    date: string,
    start_time: string,
    duration: number,
    organiser: number,
    guests: null,
    games: null,
    visibility: boolean,
    willing_to_teach: boolean
}