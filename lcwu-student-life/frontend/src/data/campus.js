// Static content for the Campus Survival part of the Campus and Food section.

import { BookOpen, Monitor, Coffee, MoonStar, ParkingSquare, Stethoscope } from "lucide-react";

export const CAMPUS_SPOTS = [
  {
    icon: BookOpen,
    title: "Central Library",
    desc: "Open 8am to 10pm on weekdays, with a 24 hour reading room during finals."
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    desc: "Blocks C and D, badge access, free printing quota each semester."
  },
  {
    icon: Coffee,
    title: "Student Center",
    desc: "Lounge seating, microwaves, and the hub for most club meetings."
  },
  {
    icon: MoonStar,
    title: "Prayer Area",
    desc: "Separate spaces on the ground floor of Block A, open during campus hours."
  },
  {
    icon: ParkingSquare,
    title: "Parking",
    desc: "Student lots at Gate 2 and Gate 4. Gate 2 fills up fastest before 9am."
  },
  {
    icon: Stethoscope,
    title: "Medical Center",
    desc: "First aid and a resident nurse on weekdays, ask the front desk for a referral."
  }
];
