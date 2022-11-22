import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //authSerice in constructor has to be public, creates error when private
  username: any;
  auth = getAuth();
  constructor(
    public authService: AuthService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.stateService.fetchUserDetails(user.uid);
      } else {
        console.log('no user logged in');
      }
    });
  }

  getCurrentUser() {
    //this.authService.getCurrentUser();
    this.username = this.stateService.getUser().username;
  }
}
