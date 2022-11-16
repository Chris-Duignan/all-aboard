export interface User {
    user_id: number,
    username: string,
    name: string,
    email: string,
    friends: number[],
    fav_games: number[]
}