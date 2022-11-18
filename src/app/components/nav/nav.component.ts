import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/authS/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  signOut(){
    this.authService.signOut().subscribe(
      (data) => console.log(data)
    )
   
  }

}
