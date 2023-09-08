import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  public allEventList: Event[] = [];
  public allFavoritesList: Favorite[] = [];
  @Output() faveAdded = new EventEmitter<Favorite>();


  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this.callGetAllEvents();
  }
  callGetAllEvents() {
    this._eventService.getAllEvents().subscribe((response: Event[]) => {
      console.log(response);
      this.allEventList = response;
    });
  }
  callAddNewEvent(newEvent: Event) {
    this._eventService.addNewEvent(newEvent).subscribe((response: Event) => {
      console.log(response);
      this.allEventList.push(response);
    });
  }
  userName: string = ""; 
  userLoggedIn(user:string){
  this.userName = user;
}

  callAddUserToFave(addUser: Favorite){
    this._eventService.addUserToFave(addUser).subscribe((response: Favorite) => {
      console.log(response);
      this.allFavoritesList.push(response);
    });
  }
  getEventsByNewest(): Event[] {
    return this.allEventList.reverse();
  }
  eventFavorited: boolean = false;
  callAddEventToFave(event: Event) {
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
callDeleteEvent(event: Event) {
  let theEvent: Event = {} as Event;
  this.eventFavorited = false; 
  // theEvent.userName = this.theEvent;
  theEvent.id = event.id; 
  this._eventService.deleteEvent(theEvent).subscribe((response: Event) => {
      console.log(response);
      this.allFavoritesList.push(response);
});
}

eventDeleted:boolean = false;
callDeleteEvent():void{
  this._eventService.emit(this.individualPost)
  this._eventService={} as Event;
  this.postDeleted = true;
}
}
// deleteEvent(id: number): Observable<Event>{
//   return this.http.delete<Event>(`${this.baseUrl}api/Events/${id}`);
// }

// removeEventFromFave(removedFavorite:Favorite): Observable<Favorite>{
//   return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite?UserName=${removedFavorite.userName}&EventId=${removedFavorite.eventId}`);
// }
