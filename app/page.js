import Image from "next/image";
import Navbar from "./components/Nabbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    </main>
  );
}
