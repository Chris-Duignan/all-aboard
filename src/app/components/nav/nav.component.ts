import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  route = '';
  importantBit = '';

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe(() => {
      this.route = this.router.url;
      if (this.route.includes('user')) {
        this.importantBit = 'user';
      } else if (this.route.includes('events')) {
        this.importantBit = 'events';
      } else if (this.route.includes('games')) {
        this.importantBit = 'games';
      } else if (this.route.includes('chat')) {
        this.importantBit = 'chat';
      }
      console.log(this.importantBit);
    });
  }

  ngOnInit(): void {}
  signOut() {
    this.authService
      .signOut()
      .subscribe(() => this.router.navigate(['/login']));
  }
}
