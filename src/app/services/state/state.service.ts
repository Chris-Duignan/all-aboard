import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  user = {
    uid: '',
    user_id: 0,
    username: '',
    name: '',
    email: '',
    friends: new Array(),
    games: new Array(),
  };

  constructor(private usersService: UsersService) {}

  getUser() {
    return this.user;
  }

  setUid(new_uid: string) {
    this.fetchUserDetails(new_uid);
  }

  addGame(game: any) {
    this.user.games.push(game);
  }

  fetchUserDetails(uid: string) {
    this.usersService.getUserIdByUID(uid).subscribe((user_id) => {
      this.usersService.getUser(user_id).subscribe((user) => {
        //this.user.uid = uid;
        this.user = { ...user, uid: uid };
      });
    });
  }
}
