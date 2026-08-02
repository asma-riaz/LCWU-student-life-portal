// Shared configuration used across the layout: navigation,
// footer links, contact details, hero stats, and the
// compass dock quick access menu.

import { FileText, MessageCircleHeart, Users2, TriangleAlert } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon, LinkedinIcon } from "../components/ui/BrandIcons";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#wellbeing", label: "Wellbeing" },
  { href: "#social", label: "Social Life" },
  { href: "#campus", label: "Campus and Food" },
  { href: "#notes", label: "Notes Bank" },
  { href: "#fyp", label: "FYP Vault" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export const HERO_STATS = [
  { value: 15000, suffix: "+", label: "Students" },
  { value: 25, suffix: "", label: "Departments" },
  { value: 120, suffix: "+", label: "Student Clubs" },
  { value: 500, suffix: "+", label: "Study Resources" }
];

export const SOCIAL_LINKS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X, formerly Twitter", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" }
];

export const CONTACT_INFO = {
  address: "Lahore College for Women University, Jail Road, Lahore, Pakistan",
  phone: "+92 3204301008",
  email: "studentaffairs@lcwu.edu.pk",
  hours: "Monday to Friday, 9:00 AM to 5:00 PM"
};

export const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Social Life", href: "#social" },
      { label: "Gallery", href: "#gallery" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Student Resources",
    links: [
      { label: "Notes Bank", href: "#notes" },
      { label: "FYP Vault", href: "#fyp" },
      { label: "Counseling", href: "#wellbeing" },
      { label: "Campus Guide", href: "#campus" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Contact", href: "#contact" }
    ]
  }
];

export const COMPASS_LINKS = [
  { icon: FileText, label: "Notes and Papers", href: "#notes" },
  { icon: MessageCircleHeart, label: "Talk to Someone", href: "#contact" },
  { icon: Users2, label: "Clubs Today", href: "#social" }
];

export const EMERGENCY_CONTACTS = [
  { label: "Campus Security", number: "+92 42 111 000 911" },
  { label: "Medical Center", number: "+92 42 111 000 222" },
  { label: "Counseling, urgent", number: "+92 42 111 000 333" }
];

export const EMERGENCY_ICON = TriangleAlert;
