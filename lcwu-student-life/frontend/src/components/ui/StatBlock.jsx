import { useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

export function StatBlock({ value, suffix = "", label }) {
  const [inView, setInView] = useState(false);
  const displayValue = useCountUp(value, { start: inView });

  return (
    <motion.div className="stat" onViewportEnter={() => setInView(true)} viewport={{ once: true, amount: 0.6 }}>
      <span className="stat-num">
        {displayValue.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}
