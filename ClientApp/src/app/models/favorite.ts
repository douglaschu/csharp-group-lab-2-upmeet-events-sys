export interface Favorite {
  favoriteId: number;
  userName: string;
  eventId: number;

  
  //event: string; //change to account for table join -- object reference?
  //Reference can be handled by manual get of favorites list
}
