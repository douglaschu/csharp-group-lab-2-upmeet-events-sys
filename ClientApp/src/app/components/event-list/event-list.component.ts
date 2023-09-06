import { Component } from '@angular/core';
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
    this._eventService.getAllEvents().subscribe((response: Event[]) => {
      console.log(response);
      this.allEventList = response;
    });
  }
}
