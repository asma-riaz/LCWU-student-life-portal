import { useEffect, useState } from "react";
import { GraduationCap, Menu, X, Moon, Sun } from "lucide-react";
import { cx } from "../../lib/cx";
import { NAV_LINKS } from "../../data/siteConfig";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useTheme } from "../../context/ThemeContext";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className={cx("navbar", (scrolled || menuOpen) && "navbar-scrolled")}>
      <div className="navbar-inner">
        <a href="#home" className="brand" onClick={handleLinkClick}>
          <span className="brand-mark">
            <GraduationCap size={20} />
          </span>
          LCWU
        </a>

        <nav
          className={cx("nav-links", menuOpen && "nav-open")}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={cx(activeId === link.href.replace("#", "") && "nav-active")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
