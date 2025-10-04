'use client';

import GlassFilter from "../components/GlassFilter";
import NavBar from "../components/NavBar";
import { LetterCollision } from '../components/LetterCollision';
import AboutSection from '../components/About';


export default function HomePage() {
  return (
    <div className="App overflow-x-hidden flex flex-col">
      <GlassFilter />

      {/* NavBar */}
      <section className="w-full flex justify-center z-10 relative">
        <NavBar />
      </section>

      {/* Hero section with letters */}
      <LetterCollision />

      <section className="relative h-[50vh] flex items-center justify-center">
      </section>

      <AboutSection />

    </div>
  );
}
