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
    
        //api/Events/3
    [HttpDelete("{id}")]
        public Event deleteEvent(int id)
        {
            Event deleted = _dbContext.Events.Find(id);
            _dbContext.Events.Remove(deleted);
            _dbContext.SaveChanges();
            return deleted;
        }

    }
}
