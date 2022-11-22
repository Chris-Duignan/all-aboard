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
    public router: Router
    ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.stateService.getUser();
    console.log(this.user);
  }
  goToCreateEvent(){
    this.router.navigate(['createEvent'])
  }
}
