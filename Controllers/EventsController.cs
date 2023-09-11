using group_events_project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace group_events_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {

        EventsDbContext _dbContext = new EventsDbContext();

        //api/Events
        [HttpGet]
        public List<Event> getAll()
        {
            return _dbContext.Events.ToList();
        }

        //api/Events/Favorites
        [HttpGet("Favorites")]
        public List<Favorite> getFavorites(string userName)
        {
            return _dbContext.Favorites.Where(u => u.UserName == userName).ToList();
        }
        //api/Events/FavoritesByUser
        [HttpGet("FavoritesByUser")]
        public List<Event> getFavoritesByUser(string userName)

            {
            List<Favorite> faves = getFavorites(userName);
            List<Event> result = new List<Event>();
            foreach (Favorite fav in faves)
            {
                Event e = _dbContext.Events.FirstOrDefault( e => e.Id == fav.EventId );
                result.Add(e);
            }
            return result;
            }

        //api/Events/1
        [HttpGet("{id}")]
        public Event getById(int id)
        {
            return _dbContext.Events.Find(id);
        }


        //api/Events/Category?category=
        [HttpGet("Category")]
        public List<Event> getByCategory(string category)
        {
            return _dbContext.Events.Where(i => i.EventCategory == category).ToList();
        }

        //api/Events
        [HttpPost]
        public Event addEvent([FromBody] Event newEvent)
        {
            _dbContext.Events.Add(newEvent);
            _dbContext.SaveChanges();
            return newEvent;
        }

        //api/Events/Favorite
        [HttpPost("Favorite")]
        public Favorite addFavorite([FromBody] Favorite newFavorite)
        {
            _dbContext.Favorites.Add(newFavorite);
            _dbContext.SaveChanges();
            return newFavorite;
        }

        //api/Events/3
        [HttpPut("{id}")]
        public Event updateEvent(int id, [FromBody] Event updatedEvent)
        {
            Event e = _dbContext.Events.Find(id);
            e = updatedEvent;
            _dbContext.Events.Update(e);
            _dbContext.SaveChanges();
            return e;
        }

        ////api/Events/Favorite/3
        //[HttpPut("Favorite/{id}")]
        //public Favorite updateFavorite(int FavoriteId, [FromBody] Favorite updatedFavorite)
        //{
        //    Favorite f = _dbContext.Favorites.Find(FavoriteId);
        //    f = updatedFavorite;
        //    _dbContext.Favorites.Update(f);
        //    _dbContext.SaveChanges();
        //    return f;
        //}


        //api/Events/3
        [HttpDelete("{id}")]
        public Event deleteEvent(int id)
        {
            List<Favorite> fave = _dbContext.Favorites.Where(f => f.EventId == id).ToList();
            foreach (Favorite f in fave)
            {
                _dbContext.Favorites.Remove(f); 
            }
           
            Event deleted = _dbContext.Events.Find(id);
            _dbContext.Events.Remove(deleted);
            _dbContext.SaveChanges();
            return deleted;
        }
        //api/Events/Favorite
        [HttpDelete("Favorite")]
        public Favorite removeFavorite(string UserName, int EventId)
        {
            Favorite remove = _dbContext.Favorites.FirstOrDefault(f => f.UserName == UserName && f.EventId == EventId);
            _dbContext.Favorites.Remove(remove);
            _dbContext.SaveChanges();
            return remove;
        }

        //api/Events/Favorites/2
        //[HttpDelete("Favorite/{FavoriteId}")]
        //public Favorite removeFavorite(int id)
        //{
        //    Favorite remove = _dbContext.Favorites.Find(id);
        //    _dbContext.Favorites.Remove(remove);
        //    _dbContext.SaveChanges();
        //    return remove;
        //}

    }
}
