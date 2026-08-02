import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, X, Phone } from "lucide-react";
import { cx } from "../../lib/cx";
import { COMPASS_LINKS, EMERGENCY_CONTACTS, EMERGENCY_ICON } from "../../data/siteConfig";

const EmergencyIcon = EMERGENCY_ICON;

export function CompassDock() {
  const [dockOpen, setDockOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const dockRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dockRef.current && !dockRef.current.contains(event.target)) {
        setDockOpen(false);
        setPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLinkClick() {
    setDockOpen(false);
    setPopoverOpen(false);
  }

  return (
    <div className={cx("compass-dock", dockOpen && "compass-dock-open")} ref={dockRef}>
      <AnimatePresence>
        {popoverOpen && (
          <motion.div
            className="compass-popover"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <h5>
              <EmergencyIcon size={16} />
              Emergency Contacts
            </h5>
            <ul>
              {EMERGENCY_CONTACTS.map((contact) => (
                <li key={contact.label}>
                  <span>{contact.label}</span>
                  <a href={`tel:${contact.number.replace(/\s+/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Phone size={13} />
                    <strong>{contact.number}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {dockOpen && (
          <motion.div
            className="compass-dock-menu"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          >
            {COMPASS_LINKS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="compass-dock-item"
                onClick={handleLinkClick}
                variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
              >
                <item.icon size={16} />
                {item.label}
              </motion.a>
            ))}
            <motion.button
              type="button"
              className="compass-dock-item compass-dock-item-urgent"
              onClick={() => setPopoverOpen((open) => !open)}
              variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
            >
              <EmergencyIcon size={16} />
              Emergency Contacts
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="compass-dock-toggle"
        onClick={() => setDockOpen((open) => !open)}
        aria-label="Quick access menu"
        aria-expanded={dockOpen}
      >
        {dockOpen ? <X size={22} /> : <Compass size={22} />}
      </button>
    </div>
  );
}
