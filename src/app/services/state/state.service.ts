import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthService } from '../authS/auth.service';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  user = {
    uid: '',
    user_id: 0,
    username: '',
    location: '',
    email: '',
    friends: new Array(),
    games: new Array(),
    events: new Array(),
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

  addEvent(event: any) {
    this.user.events.push(event);
  }

  fetchUserDetails(uid: string) {
    console.log('fetching user details...');
    this.usersService.getUserIdByUID(uid).subscribe((user_id) => {
      this.usersService.getUser(user_id).subscribe((user) => {
        this.user = { ...user, uid: uid };
        console.log(this.user);
      });
    });
  }
}
