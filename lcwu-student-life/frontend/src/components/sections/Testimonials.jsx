import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { TESTIMONIALS } from "../../data/testimonials";
import { useApiData } from "../../lib/api";

export function Testimonials() {
  const { data: testimonials } = useApiData("/testimonials.php", TESTIMONIALS);

  return (
    <section className="section section-surface" id="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="Student Stories"
          title="What students say about Student Life"
          center 
        />

        <motion.div
          className="testimonial-grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial) => (
            <motion.div className="card testimonial-card" key={testimonial.name} variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-card-who">
                <span className="avatar-initials">{testimonial.initials}</span>
                <div>
                  <div className="testimonial-card-name">{testimonial.name}</div>
                  <div className="testimonial-card-dept">{testimonial.dept}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
