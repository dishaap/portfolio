'use client';

import AboutSection from "@/components/About";
import GlassFilter from "@/components/GlassFilter";
import { LetterCollision } from "@/components/LetterCollision";
import NavBar from "@/components/NavBar";



export default function HomePage() {
  return (
    <div className="App overflow-x-hidden flex flex-col">
      <GlassFilter />

      {/* NavBar */}
      <section className="w-full flex justify-center z-10 relative">
        <NavBar />
      </section>

      {/* Hero section with letters */}
      <div id="home"></div>
      <LetterCollision />

      <section className="relative h-[50vh] flex items-center justify-center">
      </section>

      <AboutSection />

    </div>
  );
}