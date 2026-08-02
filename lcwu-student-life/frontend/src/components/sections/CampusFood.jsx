import { motion } from "framer-motion";
import { Star, Clock, Wallet } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { CAMPUS_SPOTS } from "../../data/campus";
import { FOOD_SPOTS, BUDGET_TIP } from "../../data/food";
import { useApiData } from "../../lib/api";

export function CampusFood() {
  const { data: foodSpots } = useApiData("/food.php", FOOD_SPOTS);

  return (
    <section className="section section-surface" id="campus">
      <div className="container">
        <SectionHead
          eyebrow="Campus Survival Guide"
          title="Find your way around, fast"
          description="The buildings and services you will actually use every week, plus where to eat between classes."
        />

        <motion.div
          className="campus-grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {CAMPUS_SPOTS.map((spot) => (
            <motion.div className="card campus-card" key={spot.title} variants={fadeUp} whileHover={{ y: -5 }}>
              <span className="campus-card-icon">
                <spot.icon size={20} />
              </span>
              <div>
                <h3>{spot.title}</h3>
                <p>{spot.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="subsection-head">
          <div>
            <h3>Where to eat</h3>
            <p>Where to eat between classes, and roughly what it costs.</p>
          </div>
        </div>

        <motion.div
          className="food-grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {foodSpots.map((spot) => (
            <motion.div className="card food-card" key={spot.name} variants={fadeUp} whileHover={{ y: -6 }}>
              <div className="food-card-media">
                <img src={spot.image} alt={spot.name} loading="lazy" />
              </div>
              <div className="food-card-body">
                <div className="food-card-top">
                  <h4>{spot.name}</h4>
                  <span className="food-card-rating">
                    <Star size={14} fill="currentColor" />
                    {spot.rating}
                  </span>
                </div>
                <p>{spot.desc}</p>
                <div className="food-card-meta">
                  <span>
                    <Wallet size={14} />
                    {spot.price}
                  </span>
                  <span>
                    <Clock size={14} />
                    {spot.hours}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="budget-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <Wallet size={30} />
          <div>
            <h4>{BUDGET_TIP.title}</h4>
            <p>{BUDGET_TIP.desc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
