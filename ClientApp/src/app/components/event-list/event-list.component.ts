import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  public allEventList: Event[] = [];

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
  // callGetEventsByCategory(Category: Event):void{
  //   this._eventService.getEventsByCategory(Category).subscribe((response: Event[]) => {
  //     console.log(response);
  //     this.allEventList = response;
  //   });
  // }
  // deleteEvent(){

  // }
}
