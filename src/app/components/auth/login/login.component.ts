import { Component, EventEmitter, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/authS/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  signUpClicked() {
    this.router.navigate(['/sign-up']);
  }

login(){
  this.authService.login(this.form.value).subscribe({
    next: () => this.router.navigate(['events']),
    error: (error) => alert(error)
  })
    
}
signUpClicked(){
  this.router.navigate(['/sign-up'])
}

}
