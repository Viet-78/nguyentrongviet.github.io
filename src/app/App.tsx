import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { YouTube } from "./components/YouTube";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B0D10] antialiased">
      <CursorGlow />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <YouTube />
      <Contact />
    </div>
  );
}