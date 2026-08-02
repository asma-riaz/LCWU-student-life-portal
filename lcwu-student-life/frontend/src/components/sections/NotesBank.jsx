import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, BookMarked, FileSearch, FileStack } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { SUBJECTS, DEPARTMENTS } from "../../data/subjects";
import { useApiData } from "../../lib/api";

export function NotesBank() {
  const { data: subjects } = useApiData("/subjects.php", SUBJECTS);
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");
  const [sem, setSem] = useState("all");

  const filteredSubjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    return subjects.filter((subject) => {
      const matchesTerm =
        !term || `${subject.code} ${subject.name}`.toLowerCase().includes(term);
      const matchesDept = dept === "all" || subject.dept === dept;
      const matchesSem = sem === "all" || String(subject.sem) === sem;
      return matchesTerm && matchesDept && matchesSem;
    });
  }, [subjects, query, dept, sem]);

  return (
    <section className="section" id="notes">
      <div className="container">
        <SectionHead
          eyebrow="Notes and Past Papers Bank"
          title="Study Resources for Every Semester"
          description="Explore notes and past papers organized by department, semester, and course to help you prepare with confidence."
        />

        <div className="toolbar">
          <div className="search-box">
            <Search size={16} />
            <input
              type="search"
              placeholder="Search by course code or name"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search subjects"
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
          <select className="filter-select" value={sem} onChange={(event) => setSem(event.target.value)} aria-label="Filter by semester">
            <option value="all">All Semesters</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                Semester {n}
              </option>
            ))}
          </select>
        </div>

        {filteredSubjects.length === 0 ? (
          <div className="empty-state">
            <FileSearch size={30} />
            <p>No subjects match those filters. Try a broader search.</p>
          </div>
        ) : (
          <motion.div
            className="subject-grid"
            variants={staggerContainer(0.04)}
            initial="hidden"
            animate="show"
          >
            {filteredSubjects.map((subject) => (
              <motion.div className="card subject-card" key={subject.code} variants={fadeUp} whileHover={{ y: -5 }}>
                <div className="subject-card-top">
                  <span className="subject-card-icon">
                    <BookMarked size={18} />
                  </span>
                  <span className="subject-card-code">{subject.code}</span>
                </div>
                <h4>{subject.name}</h4>
                <div className="subject-card-meta">
                  <span className="tag">{subject.dept}</span>
                  <span className="tag">Semester {subject.sem}</span>
                </div>
                <div className="subject-card-actions">
                  <Button variant="ghost" size="sm">
                    <FileStack size={15} />
                    Notes
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileSearch size={15} />
                    Past Papers
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
