import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authS/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//authSerice in constructor has to be public, creates error when private
username: any
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser()
} 
getCurrentUser(){
  this.authService.getCurrentUser()
}
}