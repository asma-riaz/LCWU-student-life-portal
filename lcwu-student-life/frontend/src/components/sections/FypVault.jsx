import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, FolderSearch, ExternalLink, Users } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { FYP_PROJECTS } from "../../data/fypProjects";
import { DEPARTMENTS } from "../../data/subjects";
import { useApiData } from "../../lib/api";

export function FypVault() {
  const { data: projects } = useApiData("/fyp.php", FYP_PROJECTS);
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const haystack = [project.title, project.desc, ...project.students, ...project.tech].join(" ").toLowerCase();
      const matchesTerm = !term || haystack.includes(term);
      const matchesDept = dept === "all" || project.dept === dept;
      return matchesTerm && matchesDept;
    });
  }, [projects, query, dept]);

  return (
    <section className="section section-surface" id="fyp">
      <div className="container">
        <SectionHead
          eyebrow="Final Year Project Vault"
          title="See what past cohorts built"
          description="Browse final year projects by department, tech stack, or keyword before you pitch your own."
        />

        <div className="toolbar">
          <div className="search-box">
            <Search size={16} />
            <input
              type="search"
              placeholder="Search by title, student, or technology"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search final year projects"
            />
          </div>
          <select className="filter-select" value={dept} onChange={(event) => setDept(event.target.value)} aria-label="Filter by department">
            <option value="all">All Departments</option>
            {DEPARTMENTS.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="empty-state">
            <FolderSearch size={30} />
            <p>No projects match those filters. Try a broader search.</p>
          </div>
        ) : (
          <motion.div
            className="fyp-grid"
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div className="card fyp-card" key={project.title} variants={fadeUp} whileHover={{ y: -5 }}>
                <div className="fyp-card-top">
                  <Lightbulb size={20} color="var(--color-primary)" />
                  <span className="fyp-card-year">{project.year}</span>
                </div>
                <h4>{project.title}</h4>
                <span className="fyp-card-dept">{project.dept}</span>
                <p className="desc">{project.desc}</p>
                <div className="fyp-card-people">
                  <span>
                    <Users size={13} style={{ display: "inline", marginRight: 6, verticalAlign: -2 }} />
                    {project.students.join(", ")}
                  </span>
                  <span>
                    Supervised by <strong>{project.supervisor}</strong>
                  </span>
                </div>
                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span className="tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="fyp-card-actions">
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={15} />
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
