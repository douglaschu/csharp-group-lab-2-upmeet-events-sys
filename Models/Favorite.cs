using System;
using System.Collections.Generic;

namespace group_events_project.Models;

public partial class Favorite
{
    public int FavoriteId { get; set; }

    public string? UserName { get; set; }

    public int? EventId { get; set; }

    public virtual Event? Event { get; set; }
}
