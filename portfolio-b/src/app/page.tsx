import NavBar from "@/components/NavBar";
import TitleSection from "@/components/Title";
import GlassFilter from "@/components/GlassFilter";

export default function HomePage() {
  return (
    <div className="App">
      <GlassFilter />
      <NavBar />
      <TitleSection />
    </div>
  );
}
