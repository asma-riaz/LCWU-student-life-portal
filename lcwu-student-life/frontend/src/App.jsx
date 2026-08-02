import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Loader } from "./components/layout/Loader";
import { SkipLink } from "./components/layout/SkipLink";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgressTrack } from "./components/layout/ScrollProgressTrack";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/layout/BackToTop";
import { CompassDock } from "./components/layout/CompassDock";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Loader />
        <SkipLink />
        <ScrollProgressTrack />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <CompassDock />
      </BrowserRouter>
    </ThemeProvider>
  );
}
