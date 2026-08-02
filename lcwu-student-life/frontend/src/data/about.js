// Static content for the About section.

import { BookOpenCheck, HeartPulse, Users2, Briefcase, MessagesSquare } from "lucide-react";

export const ABOUT_PARAGRAPHS = [
  "LCWU Student Life started as a simple question from the Student Affairs office: why do students have to check six different places to find a past paper, a counseling slot, and the cricket tournament schedule? This portal is the answer, a single, centralized hub built around what students actually ask for.",
  "Whether you are prepping for finals, joining your first society, or just trying to find a quiet place to eat lunch between classes, Student Life is designed to meet you where you are in the semester."
];

export const ABOUT_STATS = [
  { value: 98, suffix: "%", label: "Say it saves them time" },
  { value: 40, suffix: "+", label: "Departments and offices linked" }
];

export const ABOUT_FEATURES = [
  {
    icon: BookOpenCheck,
    title: "Academic Resources",
    desc: "Notes, past papers, and course guides organized by department and semester."
  },
  {
    icon: HeartPulse,
    title: "Student Wellbeing",
    desc: "Practical study hacks alongside real counseling and wellness support."
  },
  {
    icon: Users2,
    title: "Campus Activities",
    desc: "Every club, event, and competition in one calendar instead of ten posters."
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    desc: "Final year projects, portfolios, and pathways from classroom to career."
  }
];

export const ABOUT_FEATURE_WIDE = {
  icon: MessagesSquare,
  title: "Student Community",
  desc: "Real reviews, real questions, and a FAQ run by the students who use it every day."
};
