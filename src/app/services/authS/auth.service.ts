import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginInfo, SignUpInfo } from '../../interfaces/LoginInfo'
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from, BehaviorSubject, switchMap, forkJoin } from 'rxjs';
//
import { authState } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //below will make a variable called isLoggedIn$ which will be accessible from anywhere hopefully :)
private authState = new BehaviorSubject<Object | null>(null);
readonly isLoggedIn$ = authState(this.auth)

  constructor(private auth: Auth, private http: HttpClient) { }

  signUp({username, email, password, location}: SignUpInfo){
    return from(createUserWithEmailAndPassword(this.auth, email, password
      )).pipe(
        switchMap(({user}) => 
         this.http.post<any>('https://all-aboard.cyclic.app/api/users', {uid: user.uid, username, location}) 
        ))
      }
  login({email, password}: LoginInfo){
    return from(signInWithEmailAndPassword(this.auth, email, password)
    )
      }
  signOut(){
    return from(this.auth.signOut())
  }
  getCurrentUser(){
   return this.auth.onAuthStateChanged((user) => {
     return user?.uid
       })
    };  //! telling ts that there will be a user
 
 
}
