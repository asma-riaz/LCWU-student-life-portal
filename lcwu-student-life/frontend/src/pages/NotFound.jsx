import { Compass } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="section"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
    >
      <div>
        <Compass size={40} color="var(--color-primary)" style={{ marginInline: "auto", marginBottom: 20 }} />
        <h2 style={{ marginBottom: 10 }}>Page not found</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>
          The page you are looking for does not exist. Head back to the student portal home page.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
