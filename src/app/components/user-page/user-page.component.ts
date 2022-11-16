import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user = <User>{}

  constructor(private usersService: UsersService) { }
  
  ngOnInit(): void {
    this.getUser(2);
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe((user) => {
      console.log(user)
      this.user = user;
    })
  }
}
