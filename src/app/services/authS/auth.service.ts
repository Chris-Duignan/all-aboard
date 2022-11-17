import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginInfo, SignUpInfo } from '../../interfaces/LoginInfo'
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  signUp({username, email, password}: SignUpInfo){
    return from(createUserWithEmailAndPassword(this.auth, email, password
      ))
  }
  login({email, password}: LoginInfo){
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }
}
