import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginInfo, SignUpInfo } from '../../interfaces/LoginInfo';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from, BehaviorSubject, switchMap, forkJoin } from 'rxjs';
//
import { authState } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //below will make a variable called isLoggedIn$ which will be accessible from anywhere hopefully :)
  private authState = new BehaviorSubject<Object | null>(null);
  readonly isLoggedIn$ = authState(this.auth);
  public currentUID: any;
  public currentUserId: any;

  constructor(
    private auth: Auth,
    private http: HttpClient,
    private usersService: UsersService
  ) {}

  signUp({ username, email, password, location }: SignUpInfo) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(({ user }) =>
        this.http.post('https://all-aboard.cyclic.app/api/users', {
          uid: user.uid,
          username: username,
          location: location,
        })
      )
    );
  }
  login({ email, password }: LoginInfo) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  signOut() {
    return from(this.auth.signOut());
  }

  getCurrentUser() {
    return this.auth.onAuthStateChanged((user) => {
      this.currentUID = user?.uid;
      if (this.currentUID) {
        this.usersService
          .getUserIdByUID(this.currentUID)
          .subscribe((user_id) => {
            this.currentUserId = user_id;
          });
      }

      return user?.uid;
    });
  } //! telling ts that there will be a user
}
