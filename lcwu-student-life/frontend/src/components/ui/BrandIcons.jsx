function IconBase({ size = 18, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.25-1.5 1.55-1.5H16.6V4.3C16.2 4.24 15.1 4.14 13.8 4.14c-2.7 0-4.55 1.6-4.55 4.6v2.55H6.6v3h2.65V21h4.25Z" />
    </IconBase>
  );
}

export function InstagramIcon(props) {
  return (
    <IconBase {...props} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function XIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 4l7 8.2L4.4 20h1.9l6-6.9 4.7 6.9H20l-7.3-8.6L19.9 4H18l-5.6 6.4L8 4H4Zm2.9 1.4h1.8l9.3 13.2h-1.8L6.9 5.4Z" />
    </IconBase>
  );
}

export function LinkedinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4.98 3.5a2.02 2.02 0 1 0 0 4.04 2.02 2.02 0 0 0 0-4.04ZM3.4 9.2h3.16v11.3H3.4V9.2Zm6.3 0h3.03v1.55h.04c.42-.8 1.46-1.65 3-1.65 3.2 0 3.8 2.1 3.8 4.85v6.55h-3.16v-5.8c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.06v5.9H9.7V9.2Z" />
    </IconBase>
  );
}
