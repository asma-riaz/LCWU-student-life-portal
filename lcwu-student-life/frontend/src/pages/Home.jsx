import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Wellbeing } from "../components/sections/Wellbeing";
import { SocialLife } from "../components/sections/SocialLife";
import { CampusFood } from "../components/sections/CampusFood";
import { NotesBank } from "../components/sections/NotesBank";
import { FypVault } from "../components/sections/FypVault";
import { Gallery } from "../components/sections/Gallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Faq } from "../components/sections/Faq";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Wellbeing />
      <SocialLife />
      <CampusFood />
      <NotesBank />
      <FypVault />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
