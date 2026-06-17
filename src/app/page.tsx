import Image from "next/image";
import { Vina_Sans, Special_Gothic_Expanded_One } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
const specialGothic = Special_Gothic_Expanded_One({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full flex justify-start items-center px-6 py-6 md:px-10 md:py-8 z-50 pointer-events-none gap-4 md:gap-6">
        <div className="pointer-events-auto">
          <Image src="/images/about/lalogo.png" alt="Logo" width={70} height={70} className="object-contain" priority />
        </div>
        <div className="pointer-events-auto leading-none flex flex-col items-start justify-center mt-1">
          <span className={`text-white tracking-widest text-[30px] md:text-[50px] ${specialGothic.className}`}>LEI</span>
          <span className={`text-[#f55b14] tracking-wider text-[30px] md:text-[50px] mt-[-5px] md:mt-[-10px] ${vinaSans.className}`}>ARJHEN</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl flex flex-col items-center justify-center text-center mt-12">
        
        <div className="relative flex flex-col items-center justify-center w-full">
          
          {/* --- LAYER 1: SOLID TEXT (BEHIND - z-10) --- */}
          {/* CHANGED: Swapped 'text-[#f55b14]' for 'text-[#F25623]' */}
          <div className="z-10 flex flex-col items-center">
            <h1 className={`relative top-[80px] md:top-[100px] text-[15vw] md:text-[10rem] text-[#F25623] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}>THINK. DESIGN.</h1>
            <h1 className={`relative top-[-360px] md:top-[80px] text-[25vw] md:text-[10rem] text-white leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}>DEVELOP.</h1>
          </div>

          {/* --- LAYER 2: PORTRAIT (z-20) --- */}
          <div className="absolute z-20 top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[1150px] pointer-events-none">
            <Image src="/images/about/portrait.png" alt="Portrait" fill className="object-cover object-top" priority />
          </div>

          {/* --- LAYER 3: OUTLINED TEXT (IN FRONT - z-30) --- */}
          <div className="absolute z-30 top-0 flex flex-col items-center w-full pointer-events-none">
            <h1 
              className={`relative top-[80px] md:top-[100px] text-[15vw] md:text-[10rem] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}
              style={{ WebkitTextStroke: "2px #F25623", color: "transparent" }}
            >
              THINK. DESIGN.
            </h1>
            <h1 
              className={`relative top-[-360px] md:top-[80px] text-[25vw] md:text-[10rem] leading-[0.8] tracking-tighter select-none whitespace-nowrap ${vinaSans.className}`}
              style={{ WebkitTextStroke: "2px #FFFFFF", color: "transparent" }}
            >
              DEVELOP.
            </h1>
          </div>
          
        </div>
      </section>
    </div>
  );
}