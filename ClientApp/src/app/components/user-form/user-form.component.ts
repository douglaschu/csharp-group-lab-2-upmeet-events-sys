import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    userName: string = "";
    @Output() userLoggedIn = new EventEmitter<string>();
 
    constructor() {}
  
    ngOnInit(): void {}
  
    userLogIn() {
      this.userLoggedIn.emit(this.userName);
      console.log(this.userName)
      this.userName = ""; //resets the form
    }
  
    displayForm: boolean = false;
    toggleDisplay(): void {
      this.displayForm = !this.displayForm;
    }
  }
  