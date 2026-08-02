// Demo data for the Social Life and Fun Zone section.
// In production the event list is served by GET /api/events.php,
// this file is the fallback used if that request fails.

import {
  Users as UsersIcon,
  Trophy,
  Drama,
  HandHeart,
  Award,
  GraduationCap,
  Camera,
  Code,
  Gavel
} from "lucide-react";

export const CHIPS = [
  { label: "Student Clubs", icon: UsersIcon },
  { label: "Sports Activities", icon: Trophy },
  { label: "Cultural Festivals", icon: Drama },
  { label: "Volunteer Programs", icon: HandHeart },
  { label: "Competitions", icon: Award },
  { label: "Workshops", icon: GraduationCap },
  { label: "Photography Club", icon: Camera },
  { label: "Programming Society", icon: Code },
  { label: "Debate Club", icon: Gavel }
];

export const EVENTS = [
  {
    id: 1,
    club: "Cultural Festival",
    title: "Founders Week Cultural Festival",
    venue: "Main Quadrangle",
    day: "14",
    month: "Sep",
    tag: "Open to all",
    desc: "Three days of food stalls, live music, and department showcases marking the university's founding.",
    image: "https://images.unsplash.com/photo-1682447404920-4be1294c2854?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    club: "Sports Activities",
    title: "Inter Department Sports Gala",
    venue: "Sports Complex",
    day: "02",
    month: "Oct",
    tag: "Teams of 8 or more",
    desc: "Basketball, volleyball, and athletics, every department fields a team and bragging rights are on the line.",
    image: "https://images.unsplash.com/photo-1538352886333-5233ad94cb8b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    club: "Programming Society",
    title: "CodeSprint, a 24 Hour Hackathon",
    venue: "Computer Labs, Block C",
    day: "18",
    month: "Oct",
    tag: "Beginners welcome",
    desc: "Build something in a day, working in teams of up to four, with mentors from the CS faculty dropping by.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    club: "Photography Club",
    title: "Lens and Light, a Golden Hour Walk",
    venue: "Meets at the Library steps",
    day: "25",
    month: "Oct",
    tag: "Bring any camera",
    desc: "A relaxed campus walk for anyone with a camera or just a phone, chasing the last light of the day.",
    image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    club: "Debate Club",
    title: "The Grand Debate, Finals Night",
    venue: "Auditorium, Block A",
    day: "08",
    month: "Nov",
    tag: "Free entry",
    desc: "The semester's best two teams face off in front of a live audience and a panel of faculty judges.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    club: "Volunteer Programs",
    title: "Community Cleanup Drive",
    venue: "Meets at Student Center",
    day: "16",
    month: "Nov",
    tag: "Volunteer hours count",
    desc: "A half day neighborhood cleanup with the Community Outreach society, gloves and transport provided.",
    image: "https://images.unsplash.com/photo-1619512673224-91cfb2688284?auto=format&fit=crop&w=700&q=80"
  }
];
