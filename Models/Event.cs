﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace group_events_project.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? EventName { get; set; }

    public string? EventLocation { get; set; }

    public double? Price { get; set; }

    public string? EventDescription { get; set; }

    public string? EventImage { get; set; }

    public string? EventCategory { get; set; }

    public string? EventVenue { get; set; }

    public DateTime? EventTime { get; set; }
    //remove infinate loop
    [JsonIgnore]
    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
}
