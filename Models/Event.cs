using System;
using System.Collections.Generic;

namespace group_events_project.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? EventName { get; set; }

    public DateTime? EventDate { get; set; }

    public TimeSpan? EventTime { get; set; }

    public string? EventLocation { get; set; }

    public float? Price { get; set; }

    public string? EventDescription { get; set; }

    public string? EventImage { get; set; }

    public string? EventCategory { get; set; }

    public string? EventVenue { get; set; }

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
}
