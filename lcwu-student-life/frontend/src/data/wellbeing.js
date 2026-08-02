// Static content for the Wellbeing and Study Hacks section.
// This copy changes rarely, so it lives in the frontend rather
// than being served from the backend.

import {
  Frown,
  Hourglass,
  Zap,
  CalendarCheck,
  BatteryLow,
  HeartPulse,
  Flower2,
  Scale
} from "lucide-react";

export const WELLBEING_CARDS = [
  {
    icon: Frown,
    title: "Managing Exam Stress",
    desc: "Break revision into 45 minute focus blocks and let go of the all or nothing mindset."
  },
  {
    icon: Hourglass,
    title: "Time Management",
    desc: "A weekly planner beats a daily to do list. Plan around your energy, not just your deadlines."
  },
  {
    icon: Zap,
    title: "Productivity Tips",
    desc: "Batch similar tasks together and protect one block free of distractions every day."
  },
  {
    icon: CalendarCheck,
    title: "Healthy Study Routine",
    desc: "Same start time, regular breaks, and a hard stop each night. Routine does the heavy lifting."
  },
  {
    icon: BatteryLow,
    title: "Avoiding Burnout",
    desc: "Rest is not a reward for finishing. Schedule it in before you are running on empty."
  },
  {
    icon: HeartPulse,
    title: "Campus Counseling Services",
    desc: "Free, confidential sessions with campus counselors. No referral needed, just book a slot."
  },
  {
    icon: Flower2,
    title: "Meditation and Wellness",
    desc: "Drop in mindfulness sessions run twice a week in the Student Center quiet room."
  },
  {
    icon: Scale,
    title: "Balancing Work and Life",
    desc: "Your GPA matters, but so does the friend you have not called in three weeks."
  }
];

export const WELLBEING_CALLOUT = {
  title: "Talk to someone, any time this week",
  desc: "Campus Counseling Services is free, confidential, and walk ins are welcome on weekdays."
};
