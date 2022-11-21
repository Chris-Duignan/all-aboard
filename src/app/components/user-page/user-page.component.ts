import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/authS/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user = <User>{};

  constructor(
    private usersService: UsersService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser();
    this.getUser(this.authService.currentUserId);
  }

  getUser(id: number): void {
    this.authService.getCurrentUser();
    this.usersService.getUser(id).subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
}
