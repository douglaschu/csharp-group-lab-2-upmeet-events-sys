import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event = {} as Event;

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {}

  // allEventList: Event[] = [];
  // ngOnInit(): void {
  //   this.callGetEventById(id);
  // }
  // callGetEventById(id: number): void {
  //   let target: number = this.allEventList.findIndex((e) => e.id == id);
  //   console.log(response);
  //   this.allEventList = response;
  //}
}
