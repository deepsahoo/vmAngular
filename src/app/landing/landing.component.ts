import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { User } from '../user.model'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  currentUser : User;
  constructor(private authenticationService :AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(
      currentData => this.currentUser = currentData)
  }

}
