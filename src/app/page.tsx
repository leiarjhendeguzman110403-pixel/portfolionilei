"use client";

import Image from "next/image";
import { Vina_Sans, Rubik_Mono_One } from "next/font/google";
import Navbar from "@/components/navbar";
import BentoCard from "@/components/ui/BentoCard";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
const rubikMonoOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"], display: "swap" });

// Animation Variants matching your About page
const containerVariants: Variants = {
  offscreen: { opacity: 1 }, 
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  offscreen: { opacity: 0, y: 40, scale: 0.96 }, 
  onscreen: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      {/* Light Sweep CSS matching your About page */}
      <style>{`
        @keyframes glassSweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .glass-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          transform: skewX(-25deg);
          animation: glassSweep 8s linear infinite; 
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

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
        <div className="w-full max-w-[1000px] mx-auto px-4 mt-20 mb-20 relative z-10">
          
          <div style={{ marginTop: '-30px', paddingLeft: '220px', marginBottom: '40px' }}>
            <h2 className={`text-white text-[5rem] md:text-[4rem] tracking-wider ${vinaSans.className}`}>
              CREATIVE CAPABILITIES
            </h2>
          </div>

          <motion.div 
            /* CHANGED to grid-cols-3 and slightly taller rows to balance the layout */
            className="grid grid-cols-3 auto-rows-[90px] grid-flow-dense"
            style={{ gap: '10px' }}
            variants={containerVariants}
            initial={isMobile ? "onscreen" : "offscreen"}
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* CARD 1: GRAPHIC DESIGN (1 Column, 2 Rows) */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 1 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[2px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={180} height={180}` below to make it bigger or smaller.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[82px]">
                  <Image src="/images/about/graphic.png" alt="Graphic Design" width={180} height={180} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>01</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <h3 className={`text-white text-[15px] md:text-lg uppercase tracking-wide leading-tight ${rubikMonoOne.className}`}>GRAPHIC <br/> DESIGN</h3>
                </div>
              </BentoCard>
            </motion.div>

            {/* CARD 2: WEB DESIGNER (1 Column, 2 Rows) */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 2 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[-15px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={130} height={130}` below.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[-74px]">
                  <Image src="/images/about/webdesign.png" alt="Web Designer" width={180} height={180} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>02</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '15px' }}>
                  <h3 className={`text-white text-[15px] md:text-lg uppercase tracking-wide leading-tight ${rubikMonoOne.className}`}>WEB <br/> DESIGNER</h3>
                </div>
              </BentoCard>
            </motion.div>

            {/* CARD 3: UI/UX DESIGNER (1 Column, 4 Rows) */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-4 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 3 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[-15px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={160} height={160}` below.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-80px] ml-[0px]">
                  <Image src="/images/about/uiux.png" alt="UI/UX Designer" width={330} height={330} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>03</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '15px' }}>
                  <h3 className={`text-white text-[15px] md:text-lg uppercase tracking-wide leading-tight ${rubikMonoOne.className}`}>UI/UX <br/> DESIGNER</h3>
                </div>
              </BentoCard>
            </motion.div>

            {/* CARD 4: SOCIAL MEDIA MANAGER (2 Columns, 2 Rows) */}
            <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 4 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[-15px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={180} height={180}` below.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-41px] ml-[0px]">
                  <Image src="/images/about/smm.png" alt="Social Media Manager" width={665} height={665} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '20px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>04</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <h3 className={`text-white text-lg md:text-xl uppercase tracking-wide ${rubikMonoOne.className}`}>SOCIAL MEDIA MANAGER</h3>
                </div>
              </BentoCard>
            </motion.div>

            {/* CARD 5: VIDEO EDITOR (1 Column, 2 Rows) */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 5 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[-15px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={130} height={130}` below.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[-65px]">
                  <Image src="/images/about/videditing.png" alt="Video Editor" width={183} height={183} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>05</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <h3 className={`text-white text-[15px] md:text-lg uppercase tracking-wide leading-tight ${rubikMonoOne.className}`}>VIDEO <br/> EDITOR</h3>
                </div>
              </BentoCard>
            </motion.div>

            {/* CARD 6: FRONT-END DEVELOPER (2 Columns, 2 Rows) */}
            <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
              <BentoCard 
                style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
                className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#F25623]/50 hover:shadow-[0_0_30px_rgba(242,86,35,0.2)]"
              >
                <div className="glass-sweep z-30" />
                
                {/* 🛠️ ADJUST IMAGE 6 HERE 🛠️
                  1. VERTICAL (Up/Down): Change `mt-[-15px]` (Negative is up, Positive is down).
                  2. HORIZONTAL (Left/Right): Change `ml-[0px]` (Negative is left, Positive is right).
                  3. SIZE: Change `width={180} height={180}` below.
                */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-0px] ml-[0px]">
                  <Image src="/images/about/frontend.png" alt="Front End Developer" width={180} height={180} className="object-contain opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="z-20" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <span className={`text-[#F25623] text-[12px] tracking-[2px] uppercase ${rubikMonoOne.className}`}>06</span>
                </div>
                <div className="z-20" style={{ position: 'absolute', bottom: '20px', left: '15px' }}>
                  <h3 className={`text-white text-lg md:text-xl uppercase tracking-wide ${rubikMonoOne.className}`}>FRONT-END DEVELOPER</h3>
                </div>
              </BentoCard>
            </motion.div>

          </motion.div>

          {/* DEDICATED SPACER TO FORCE SCROLL HEIGHT */}
          <div className="w-full h-[150px] md:h-[250px] pointer-events-none shrink-0"></div>

        </div>
      </section>
    </div>
  );
}