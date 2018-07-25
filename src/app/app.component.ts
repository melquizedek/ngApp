import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'
  authenticated: boolean = true

  isLoginSuccess(val) : void {
    this.authenticated = val
    console.log('authenticated ', this.authenticated)
  }

}
