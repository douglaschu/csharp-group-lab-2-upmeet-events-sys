import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';
import { Favorite } from 'src/app/models/favorite';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  public allEventList: Event[] = [];
  public allFavoritesList: Favorite[] = [];
  @Output() faveAdded = new EventEmitter<Favorite>();


  constructor(private _eventService: EventService, private _userService: UserService) {}

  ngOnInit(): void {
    this.userName = this._userService.user;
    this.callGetAllEvents();
  }
  callGetAllEvents() {
    this.userName = this._userService.user;

    this._eventService.getAllEvents().subscribe((response: Event[]) => {
      console.log(response);
      this.allEventList = response;
    });
  }
  callAddNewEvent(newEvent: Event) {
    this.userName = this._userService.user;

    this._eventService.addNewEvent(newEvent).subscribe((response: Event) => {
      console.log(response);
      this.allEventList.push(response);
    });
  }
  userName: string = ""; 
  userLoggedIn(user:string){
  this.userName = this._userService.user;

  this.userName = user;
}

  callAddUserToFave(addUser: Favorite){
    this.userName = this._userService.user;

    this._eventService.addUserToFave(addUser).subscribe((response: Favorite) => {
      console.log(response);
      this.allFavoritesList.push(response);
    });
  }
  getEventsByNewest(): Event[] {
    this.userName = this._userService.user;

    return this.allEventList.reverse();
  }
  eventFavorited: boolean = false;
  callAddEventToFave(event: Event) {
    this.userName = this._userService.user;

    let newFave: Favorite = {} as Favorite;
    this.eventFavorited = true; 
    newFave.userName = this.userName;
    newFave.eventId = event.id; 
    this._eventService.addEventToFave(newFave).subscribe((response: Favorite) => {
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
  });
}
// callGetEventsByCategory(Category: Event):void{
//   this._eventService.getEventsByCategory(Category).subscribe((response: Event[]) => {
//     console.log(response);
//     this.allEventList = response;
//   });
// }
eventDeleted:boolean = false;
callDeleteEvent(id: number) {
  this.userName = this._userService.user;

  this.eventDeleted = true;
  this._eventService.deleteEvent(id).subscribe((response: Event) => {
      console.log(response);
      this.callGetAllEvents();
});
}

// callDeleteEvent():void{
//   this._eventService.emit(this.individualPost)
//   this._eventService={} as Event;
//   this.postDeleted = true;
// }
}
// deleteEvent(id: number): Observable<Event>{
//   return this.http.delete<Event>(`${this.baseUrl}api/Events/${id}`);
// }

// removeEventFromFave(removedFavorite:Favorite): Observable<Favorite>{
//   return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite?UserName=${removedFavorite.userName}&EventId=${removedFavorite.eventId}`);
// }
