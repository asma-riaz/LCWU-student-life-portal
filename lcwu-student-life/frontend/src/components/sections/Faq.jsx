import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cx } from "../../lib/cx";
import { SectionHead } from "../ui/SectionHead";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { FAQ_ITEMS } from "../../data/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section section-surface" id="faq">
      <div className="container">
        <SectionHead
          eyebrow="Frequently Asked Questions"
          title="Quick answers before you ask Student Affairs"
          center
        />

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                className={cx("faq-item", isOpen && "faq-item-open")}
                key={item.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <button
                  type="button"
                  className="faq-item-q"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <Plus size={18} />
                </button>
                <motion.div
                  className="faq-item-a"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p>{item.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
