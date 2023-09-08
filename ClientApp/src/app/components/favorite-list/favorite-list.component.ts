import { Favorite } from 'src/app/models/favorite';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
    public allFavoritesList: Favorite[] = [];
    public eventsList: Event[] = [];
  
    constructor(private _eventService: EventService, private _userService: UserService) {}
  
    ngOnInit(): void {
      this.userName = this._userService.user; 
      this.callGetAllFavorites();
    }
    callGetAllFavorites() {
      this.userName = this._userService.user; 

      this._eventService.getFavesByUser(this.userName).subscribe((response: Event[]) => {
        console.log(response);
        this.eventsList = response;
      });
  }

  eventFavorited: boolean = false;
  userName: string = ""; 
  RemoveEventFromFave(event: Event) {
    this.userName = this._userService.user; 

    let newFave: Favorite = {} as Favorite;
    this.eventFavorited = false; 
    newFave.userName = this.userName;
    // newFave.eventId = event.id; 
    this._eventService.removeEventFromFave(newFave).subscribe((response: Favorite) => {
        console.log(response);
        this.allFavoritesList.push(response);
  });
}

  callRemoveEventFromFave(event: Event) {
    this.userName = this._userService.user; 

    let newFave: Favorite = {} as Favorite;
    this.eventFavorited = false; 
    newFave.userName = this.userName;
    newFave.eventId = event.id; 
    this._eventService.removeEventFromFave(newFave).subscribe((response: Favorite) => {
        console.log(response);
        this.allFavoritesList.push(response);
        this.callGetAllFavorites();
  });

}
}
