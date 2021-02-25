import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  user: User;

  constructor() {
    this.user = new User();
    this.user.usrname = "vmUser@vmw.com";
    this.user.password = "VM@123";
    this.currentUserSubject = new BehaviorSubject<any>(this.user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username, password) {
    if (this.user.usrname === username && this.user.password === password) {
      this.currentUserSubject.next(this.user);
      return this.user;
    } else {
      return null;
    }

  }
}

