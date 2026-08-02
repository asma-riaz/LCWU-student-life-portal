import { GraduationCap } from "lucide-react";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "../../data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark">
                <GraduationCap size={20} />
              </span>
              LCWU Student Life
            </a>
            <p>
              The centralized student portal for academics, wellbeing, and campus life at Lahore College for Women University.
            </p>
            <div className="social-row">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div className="footer-col" key={column.title}>
              <h5>{column.title}</h5>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>Copyright {year} LCWU Student Life. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
