import { motion } from "framer-motion";
import { StatBlock } from "../ui/StatBlock";
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from "../../lib/motion";
import { ABOUT_PARAGRAPHS, ABOUT_STATS, ABOUT_FEATURES, ABOUT_FEATURE_WIDE } from "../../data/about";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <motion.div className="about-copy" variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <span className="eyebrow">About Student Life</span>
          <h2>Built around what students actually ask for</h2>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <div className="stat-grid">
            {ABOUT_STATS.map((stat) => (
              <StatBlock key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="feature-grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {ABOUT_FEATURES.map((feature) => (
            <motion.div className="card feature-card" key={feature.title} variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="feature-card-icon">
                <feature.icon size={22} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}

          <motion.div className="card feature-card feature-card-wide" variants={fadeUp} whileHover={{ y: -6 }}>
            <span className="feature-card-icon">
              <ABOUT_FEATURE_WIDE.icon size={22} />
            </span>
            <div>
              <h3>{ABOUT_FEATURE_WIDE.title}</h3>
              <p>{ABOUT_FEATURE_WIDE.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
