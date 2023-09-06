import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Favorite } from '../models/favorite';
import { Event } from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}api/Events`);
  }

  getAllFavorites(): Observable<Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}api/Events/Favorites`);
  }

  getEventById(id: number){
    return this.http.get<Event>(`${this.baseUrl}api/Events/${id}`);
  }

  getEventsByCategory(Category:Event): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}api/Events/Category?=${Category}`);
  }

  addNewEvent(newEvent:Event): Observable<Event>{
    return this.http.post<Event>(`${this.baseUrl}api/Events`, newEvent); 
  }

  addEventToFave(addFave:Favorite): Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}api/Events/Favorites`, addFave); 
  }
  updateEvent(updateEvent:Event): Observable<Event>{
    return this.http.put<Event>(`${this.baseUrl}api/Events/${updateEvent.id}`, updateEvent);
  }

  deleteEvent(id: number): Observable<Event>{
    return this.http.delete<Event>(`${this.baseUrl}api/Events/${id}`);
  }

  removeFavorite(favoriteId: number): Observable<Favorite>{
    return this.http.delete<Favorite>(`${this.baseUrl}api/Events/Favorite/${favoriteId}`);
  }
}
