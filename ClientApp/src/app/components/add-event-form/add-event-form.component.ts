import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})
export class AddEventFormComponent {
  newEvent: Event = {} as Event;
  @Output() eventCreated = new EventEmitter<Event>();
  //@Input() events: Event[];

  constructor() {}

  ngOnInit(): void {}

  //trying ngForm for form
  // submitEvent = (submit: NgForm) => {
  //   this.eventCreated.emit({
  //     eventName: submit.value.eventName,
  //     eventDate: submit.value.eventDate,
  //     eventTime: submit.value.eventTime,
  //     eventLocation: submit.value.eventLocation,
  //     eventVenue: submit.value.eventVenue,
  //     eventDescription: submit.value.eventDescription,
  //     price: submit.value.price,
  //     eventImage: submit.value.image,
  //     eventCategory: submit.value.eventCategory,
  //     id: submit.value.id,
  //     //I don't know if this will work with ngForm (identity)
  //   });
  //   this.new;
  // };

  submitEvent() {
    this.eventCreated.emit(this.newEvent);
    this.newEvent = {} as Event;//resets all form fields after submit
  }

  displayForm: boolean = false;
  toggleDisplay(): void {
    this.displayForm = !this.displayForm;
  }
  //Justin's method without ngForm
}
