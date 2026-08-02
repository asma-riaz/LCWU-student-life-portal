import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { WELLBEING_CARDS, WELLBEING_CALLOUT } from "../../data/wellbeing";

export function Wellbeing() {
  return (
    <section className="section section-surface" id="wellbeing">
      <div className="container">
        <SectionHead
          eyebrow="Mental Health and Study Hacks"
          title="Wellbeing, without the guesswork"
          description="Practical habits for the semester grind, plus a direct line to real support when you need more than a tip."
          center
        />

        <motion.div
          className="wellbeing-grid"
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {WELLBEING_CARDS.map((card) => (
            <motion.div className="card wellbeing-card" key={card.title} variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="wellbeing-card-icon">
                <card.icon size={20} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="callout-banner"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <HeartHandshake size={34} />
          <div>
            <h4>{WELLBEING_CALLOUT.title}</h4>
            <p>{WELLBEING_CALLOUT.desc}</p>
          </div>
          <Button href="#contact" variant="gold" size="sm">
            Book a Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
