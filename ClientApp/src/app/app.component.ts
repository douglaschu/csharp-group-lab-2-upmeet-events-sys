import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  userName: string = ""; 
  userLoggedIn(user:string){
  this.userName = user;
}
}

