import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  ngOnInit() {
    const routeParams = this._route.snapshot.paramMap;
    let id: number = Number(routeParams.get('id'));
  }
  @Input() event: Event = {} as Event;
  @Output() addedToFavorites = new EventEmitter<Event>();
  constructor(
    private _eventService: EventService,
    private _route: ActivatedRoute
  ) {}

  addToFavorites(event: Event) {
    const result: Favorite = {
      favoriteId: 0,
      eventId: event.id,
      userName: 'user name goes here',
    };
    this._eventService
      .addEventToFave(result)
      .subscribe((response: Favorite) => {
        console.log(response);
      });
  }
}

// allEventList: Event[] = [];
// ngOnInit(): void {
//   this.callGetEventById(id);
// }
//   callGetEventById(id: number): void {
//     let target: number = this._eventService.findIndex((e) => e.id == id);
//     console.log(response);
//     this.allEventList = response;
//   }