import { useEffect, useState } from "react";
import { cx } from "../../lib/cx";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cx("loader", hidden && "loader-hidden")} aria-hidden={hidden}>
      <div className="loader-mark">
        <div className="loader-ring" />
        <div className="loader-dot"></div>
      </div>
    </div>
  );
}
