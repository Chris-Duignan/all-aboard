export class Event {

    constructor(
        public title: string,
        public latitude: string,
        public longitude: string,
        public area: string,
        public date: string,
        public start_time: string,
        public organiser: number,
        public duration: number,
        public visibility: boolean,
        public willing_to_teach: boolean,
        public description?: string,
    ) {}
}