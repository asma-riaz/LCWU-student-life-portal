import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, CalendarSearch } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { CHIPS, EVENTS } from "../../data/events";
import { useApiData } from "../../lib/api";

export function SocialLife() {
  const { data: events } = useApiData("/events.php", EVENTS);
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return events;
    return events.filter((event) =>
      [event.title, event.club, event.venue, event.desc].join(" ").toLowerCase().includes(term)
    );
  }, [events, query]);

  return (
    <section className="section" id="social">
      <div className="container">
        <SectionHead
          eyebrow="Social Life & Activities"
          title="Explore What's Happening"
          description="Browse upcoming events, join student clubs, and discover opportunities to get involved across campus."
        />

        <div className="chip-row">
          {CHIPS.map((chip) => (
            <span className="chip" key={chip.label}>
              <chip.icon size={15} />
              {chip.label}
            </span>
          ))}
        </div>

        <div className="toolbar">
          <div className="search-box">
            <Search size={16} />
            <input
              type="search"
              placeholder="Search events by name, club, or venue"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search events"
            />
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <CalendarSearch size={30} />
            <p>No events match that search. Try a different keyword.</p>
          </div>
        ) : (
          <motion.div
            className="event-grid"
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
          >
            {filteredEvents.map((event) => (
              <motion.article className="card event-card" key={event.id} variants={fadeUp} whileHover={{ y: -6 }}>
                <div className="event-card-media">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <div className="event-card-date">
                    <span className="day">{event.day}</span>
                    <span className="mon">{event.month}</span>
                  </div>
                </div>
                <div className="event-card-body">
                  <span className="event-card-club">{event.club}</span>
                  <h3>{event.title}</h3>
                  <span className="event-card-venue">
                    <MapPin size={14} />
                    {event.venue}
                  </span>
                  <p className="desc">{event.desc}</p>
                  <div className="event-card-footer">
                    <span className="tag">{event.tag}</span>
                    <Button href="#contact" size="sm" variant="primary">
                      Register Now
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
