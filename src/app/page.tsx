import Image from "next/image";
import { Vina_Sans } from "next/font/google";
import Navbar from "@/components/navbar"; // Make sure to adjust the import path based on where you save Navbar.tsx

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      {/* Extracted Header / Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl flex flex-col items-center justify-center text-center mt-12 pointer-events-none">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="z-10 flex flex-col items-center">
            <h1 className={`relative top-[80px] md:top-[100px] text-[15vw] md:text-[10rem] text-[#F25623] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}>THINK. DESIGN.</h1>
            <h1 className={`relative top-[-360px] md:top-[80px] text-[25vw] md:text-[10rem] text-white leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}>DEVELOP.</h1>
          </div>
          <div className="absolute z-20 top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[1150px] pointer-events-none">
            <Image src="/images/about/portrait.png" alt="Portrait" fill className="object-cover object-top" priority />
          </div>
          <div className="absolute z-30 top-0 flex flex-col items-center w-full pointer-events-none">
            <h1 className={`relative top-[80px] md:top-[100px] text-[15vw] md:text-[10rem] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`} style={{ WebkitTextStroke: "2px #F25623", color: "transparent" }}>THINK. DESIGN.</h1>
            <h1 className={`relative top-[-360px] md:top-[80px] text-[25vw] md:text-[10rem] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`} style={{ WebkitTextStroke: "2px #FFFFFF", color: "transparent" }}>DEVELOP.</h1>
          </div>
        </div>
      </section>
    </div>
  );
}