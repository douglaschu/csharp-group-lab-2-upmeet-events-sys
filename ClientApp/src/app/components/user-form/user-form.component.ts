import { Component, EventEmitter, Output } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    newUser: Favorite = {} as Favorite;
    @Output() eventCreated = new EventEmitter<Favorite>();
 
    constructor() {}
  
    ngOnInit(): void {}
  
    userLogIn() {
      this.eventCreated.emit(this.newUser);
      this.newUser = {} as Favorite; //resets the form
    }
  
    displayForm: boolean = false;
    toggleDisplay(): void {
      this.displayForm = !this.displayForm;
    }
  }
  