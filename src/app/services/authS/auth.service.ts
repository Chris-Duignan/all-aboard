import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginInfo, SignUpInfo } from '../../interfaces/LoginInfo'
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   private authState = new BehaviorSubject<Object | null>(null);
// readonly isLoggedIn$ = authState(this.auth)

  constructor(private auth: Auth) { }

  signUp({username, email, password}: SignUpInfo){
    return from(createUserWithEmailAndPassword(this.auth, email, password
      ))
  }
  login({email, password}: LoginInfo){
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }
  signOut(){
    return from(this.auth.signOut())
  }
  // getCurrentUser(){
  //   return this.auth.currentUser!;  //! telling ts that there will be a user
  // }
}
