import { forwardRef } from "react";
import { cx } from "../../lib/cx";

const VARIANTS = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  gold: "btn-gold"
};

export const Button = forwardRef(function Button(
  { variant = "primary", size, className, href, children, ...props },
  ref
) {
  const classes = cx("btn", VARIANTS[variant], size === "sm" && "btn-sm", className);

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});
