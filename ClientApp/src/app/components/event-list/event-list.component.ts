import { Component, OnInit } from '@angular/core';
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
  getEventsByNewest(): Event[] {
    return this.allEventList.reverse();
  }
  callAddEventToFave(newFave: Favorite) {
    this._eventService.addEventToFave(newFave).subscribe((response: Favorite) => {
        console.log(response);
        this.allFavoritesList.push(response);
      });
  }
}
// callGetEventsByCategory(Category: Event):void{
//   this._eventService.getEventsByCategory(Category).subscribe((response: Event[]) => {
//     console.log(response);
//     this.allEventList = response;
//   });
// }
// deleteEvent(){

// }
