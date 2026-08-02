import { motion } from "framer-motion";
import { cx } from "../../lib/cx";
import { fadeUp, viewportOnce } from "../../lib/motion";

export function SectionHead({ eyebrow, title, description, center = false, className }) {
  return (
    <motion.div
      className={cx("section-head", center && "section-head-center", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
