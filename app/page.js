import Image from "next/image";
import Navbar from "./components/Nabbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
      </div>
      <Footer />
    </main>
  );
}
