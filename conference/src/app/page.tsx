import { Navbar } from "@/components/navbar/Navbar";
import { HomeContent } from "@/components/homeContent/HomeContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <HomeContent />
    </div>
  );
}
