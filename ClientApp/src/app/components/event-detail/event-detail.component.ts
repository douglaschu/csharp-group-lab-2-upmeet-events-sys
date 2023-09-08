import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  userName: string = "";

  ngOnInit() {
    this.userName = this._userService.user; 

    const routeParams = this._route.snapshot.paramMap;
    let id: number = Number(routeParams.get('id'));
    console.log(id);
    this._eventService.getEventById(id).subscribe((response: Event) => {
      console.log(response);
      this.event = response;
    });
  }
  event: Event = {} as Event;
  @Output() addedToFavorites = new EventEmitter<Event>();
  constructor( private _userService: UserService,
    private _eventService: EventService,
    private _route: ActivatedRoute
  ) {}

  addToFavorites(event: Event) {
    this.userName = this._userService.user; 

    const result: Favorite = {
      favoriteId: 0,
      eventId: event.id,
      userName: this.userName,
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