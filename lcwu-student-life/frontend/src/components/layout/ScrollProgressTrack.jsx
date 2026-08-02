import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgressTrack() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-track" aria-hidden="true">
      <div className="scroll-track-fill" style={{ height: `${progress}%` }} />
      <div className="scroll-track-dot" style={{ top: `${progress}%` }} />
    </div>
  );
}
