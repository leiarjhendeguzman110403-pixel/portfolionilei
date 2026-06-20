import Image from "next/image";
import { Vina_Sans, Rubik_Mono_One } from "next/font/google";
import Navbar from "@/components/navbar";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
const rubikMonoOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl flex flex-col items-center justify-center text-center mt-12 pointer-events-none shrink-0">
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

      {/* INFINITE MARQUEE SECTION */}
      <section className="relative w-full z-40 flex flex-col mb-24 mt-[-580px] md:mt-[-700px]">
        
        {/* Top Marquee */}
        <div className="relative z-10 w-[110vw] -left-[5vw] bg-[#171717] py-[10px] md:py-[50px] flex overflow-hidden whitespace-nowrap border-b-4 border-[#1e1e1e] rotate-[1deg]">
          <div className={`flex w-max animate-marquee-left items-center text-white text-[30px] md:text-[100px] tracking-widest uppercase ${rubikMonoOne.className}`}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-[50px] md:space-x-[120px] px-[25px] md:px-[60px]">
                <span>VIDEO EDITOR</span><span className="text-[#F25623]">•</span>
                <span>WEB DESIGNER</span><span className="text-[#F25623]">•</span>
                <span>UI/UX DESIGNER</span><span className="text-[#F25623]">•</span>
                <span>GRAPHIC DESIGNER</span><span className="text-[#F25623]">•</span>
                <span>FRONT-END DEVELOPER</span><span className="text-[#F25623]">•</span>
                <span>SOCIAL MEDIA MANAGER</span><span className="text-[#F25623]">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="relative w-[110vw] -left-[5vw] bg-[#4d4d4d] py-[15px] md:py-[50px] flex overflow-hidden whitespace-nowrap rotate-[1deg] -mt-[4px] md:-mt-[15px]">
          <div className={`flex w-max animate-marquee-right items-center text-[#FFFFFF] text-[30px] md:text-[100px] tracking-widest uppercase ${rubikMonoOne.className}`}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-[50px] md:space-x-[120px] px-[25px] md:px-[60px]">
                <span>VIDEO EDITOR</span><span className="text-white">•</span>
                <span>WEB DESIGNER</span><span className="text-white">•</span>
                <span>UI/UX DESIGNER</span><span className="text-white">•</span>
                <span>GRAPHIC DESIGNER</span><span className="text-white">•</span>
                <span>FRONT-END DEVELOPER</span><span className="text-white">•</span>
                <span>SOCIAL MEDIA MANAGER</span><span className="text-white">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* CREATIVE CAPABILITIES SECTION */}
        <div className="w-full max-w-[1000px] mx-auto px-4 mt-20 mb-20">
          
          <div style={{ marginTop: '-30px', paddingLeft: '220px', marginBottom: '40px' }}>
            <h2 className={`text-white text-[5rem] md:text-[4rem] tracking-wider ${vinaSans.className}`}>
              CREATIVE CAPABILITIES
            </h2>
          </div>

          {/* BENTO GRID (6 CARDS) */}
          <div className="grid grid-cols-4 auto-rows-[120px] gap-4">
            {[
              "VIDEO EDITOR",
              "WEB DESIGNER",
              "UI/UX DESIGNER",
              "GRAPHIC DESIGNER",
              "FRONT-END DEVELOPER",
              "SOCIAL MEDIA MANAGER"
            ].map((role, index) => (
              <div 
                key={role}
                className={`group relative overflow-hidden rounded-[10px] border-[3px] border-[#4d4d4d] bg-[rgba(77,77,77,0.3)] p-6 transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_20px_rgba(242,86,35,0.2)] ${
                  index % 3 === 0 ? "col-span-2" : "col-span-1" // Creates a varied, dynamic layout
                }`}
              >
                {/* Light Sweep Effect */}
                <div className="glass-sweep" /> 
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className={`text-[#F25623] text-[10px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-white text-lg md:text-xl uppercase tracking-wide ${rubikMonoOne.className}`}>
                    {role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        

      </section>
    </div>

    
  );
}