import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'
import { User } from '../user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedInUser : User;
  error : any;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService :AuthenticationService ) {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]]
    });

}

get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

 
  this.loggedInUser = this.authenticationService.login(this.f.username.value, this.f.password.value)
   if(this.loggedInUser != null){
    this.router.navigate(['/home']);
   }else{

     alert('invalid user name and password');
   }
}

}


