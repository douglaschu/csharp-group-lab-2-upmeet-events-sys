using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace group_events_project.Models;

public partial class EventsDbContext : DbContext
{
    public EventsDbContext()
    {
    }

    public EventsDbContext(DbContextOptions<EventsDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=EventsDB;Integrated Security=SSPI;Encrypt=false;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Event__3213E83FD132DE31");

            entity.ToTable("Event");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EventCategory)
                .HasMaxLength(255)
                .HasColumnName("eventCategory");
            entity.Property(e => e.EventDate)
                .HasColumnType("date")
                .HasColumnName("eventDate");
            entity.Property(e => e.EventDescription)
                .HasMaxLength(4000)
                .HasColumnName("eventDescription");
            entity.Property(e => e.EventImage)
                .HasMaxLength(4000)
                .HasColumnName("eventImage");
            entity.Property(e => e.EventLocation)
                .HasMaxLength(255)
                .HasColumnName("eventLocation");
            entity.Property(e => e.EventName)
                .HasMaxLength(255)
                .HasColumnName("eventName");
            entity.Property(e => e.EventTime)
                .HasColumnType("date")
                .HasColumnName("eventTime");
            entity.Property(e => e.EventVenue)
                .HasMaxLength(255)
                .HasColumnName("eventVenue");
            entity.Property(e => e.Price).HasColumnName("price");
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.FavoriteId).HasName("PK__Favorite__CE74FAD51744A952");

            entity.ToTable("Favorite");

            entity.Property(e => e.EventId).HasColumnName("eventId");
            entity.Property(e => e.UserName)
                .HasMaxLength(255)
                .HasColumnName("userName");

            entity.HasOne(d => d.Event).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("FK__Favorite__eventI__656C112C");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
