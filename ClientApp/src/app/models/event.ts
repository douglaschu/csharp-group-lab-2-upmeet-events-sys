import { Time } from '@angular/common';

export interface Event {
  id: number;
  eventName: string;
  eventDate: Date;
  eventTime: Date;
  eventLocation: string;
  price: number;
  eventDescription: string;
  eventImage: string;
  eventCategory: string;
  eventVenue: string;

  //favorites: number; //change to account for table join?
  //Can be handled with
}
