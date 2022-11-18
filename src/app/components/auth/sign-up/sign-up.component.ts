import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from 'src/app/services/authS/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
form!: FormGroup;
  constructor(private authService: AuthService, 
    private router:Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
signUp(){
  console.log(this.form.value)
  this.authService.signUp(this.form.value).subscribe(
    (data) => console.log(data.user.uid),
    // (error) => console.log(error),
    () => this.router.navigate(['login'])
  )
}
}