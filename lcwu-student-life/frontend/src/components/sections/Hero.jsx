import { motion } from "framer-motion";
import { Compass, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { StatBlock } from "../ui/StatBlock";
import { fadeRight, EASE } from "../../lib/motion";
import { HERO_STATS } from "../../data/siteConfig";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMAGE})` }} role="img" aria-label="Students on the LCWU campus" />
      <div className="hero-scrim" />

      <div className="hero-content container">
        <div className="hero-grid">
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              Everything Students Need,<br></br> <span className="accent">All in One Place.</span>
            </motion.h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              Access lecture notes, explore final year projects, discover campus events, find food spots, stay updated with university information, and take care of your wellbeing, all from a single platform.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            >
              <Button href="#campus" variant="primary">
                <Compass size={18} />
                Explore Campus
              </Button>
              <Button href="#social" variant="ghost">
                <CalendarDays size={18} />
                Upcoming Events
              </Button>
            </motion.div>
          </div>

          <motion.div className="hero-panel" variants={fadeRight} initial="hidden" animate="show">
            <div className="hero-panel-label">
              <ShieldCheck size={16} />
              Student Life at a glance
            </div>
            <div className="stat-grid">
              {HERO_STATS.map((stat) => (
                <StatBlock key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-scrollcue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
