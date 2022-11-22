import { Component, EventEmitter, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/authS/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { StateService } from 'src/app/services/state/state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  signUpClicked() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (res) => this.handleNext(res),
      error: (error) => alert(error),
    });
  }

  handleNext(user: any) {
    console.log(user.user.uid);
    this.router.navigate(['events']);
    this.stateService.setUid(user.user.uid);
  }
}
