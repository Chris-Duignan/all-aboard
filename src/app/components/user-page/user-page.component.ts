import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/state/state.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user = <User>{};

  constructor(
    public stateService: StateService,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.user.uid === '') {
      if (this.authService.isLoggedIn$) {
        this.authService.getCurrentUser();
        while (this.user.uid === '') {
          this.getUser();
        }
      }
    }
  }

  getUser() {
    this.user = this.stateService.getUser();
  }
  goToCreateEvent() {
    this.router.navigate(['createEvent']);
  }

  formatGameName(gameName: string) {
    return gameName
      .split('-')
      .map((word: string) => {
        if (word[0]) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return '-';
        }
      })
      .join(' ');
  }
}
