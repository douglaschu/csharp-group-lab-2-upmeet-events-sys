import { Favorite } from 'src/app/models/favorite';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
    public allFavoritesList: Favorite[] = [];
  
    constructor(private _eventService: EventService) {}
  
    ngOnInit(): void {
      this.callGetAllFavorites();
    }
    callGetAllFavorites() {
      this._eventService.getAllFavorites().subscribe((response: Favorite[]) => {
        console.log(response);
        this.allFavoritesList = response;
      });
  }
}
