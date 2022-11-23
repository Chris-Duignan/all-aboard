export class Meet {

    constructor(
        public title: string,
        public latitude: string,
        public longitude: string,
        public area: string,
        public date: string,
        public start_time: string,
        public user_id: number,
        public visibility: boolean,
        public willing_to_teach: boolean,
        public duration?: number,
        public description?: string,
    ) {}
}