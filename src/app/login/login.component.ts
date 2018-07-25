import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthorized: boolean = false
  @Output() doLogin: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  login(isAuth: boolean) : void {
    this.doLogin.emit(isAuth)
  }

}
