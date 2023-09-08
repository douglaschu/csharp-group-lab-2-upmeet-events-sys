import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    userName: string = "";
    displayForm: boolean = false;

    @Output() userLoggedIn = new EventEmitter<string>();
 
    constructor(private _userService:UserService) {}
  
    ngOnInit(): void {}
  
    userLogIn() {
      this.userLoggedIn.emit(this.userName);
      console.log(this.userName);
      this._userService.user = this.userName;
      this.userName = ""; //resets the form
      this.displayForm = false; 
    }
  
    toggleDisplay(): void {
      this.displayForm = !this.displayForm;
    }
  }
  