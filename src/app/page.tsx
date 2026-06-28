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
    <>
    <Navbar />
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4">
      
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
      <div className="w-full flex flex-col items-center overflow-x-hidden">
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
                  style={{ borderRadius: "10px", backgroundColor: "#171717" }} 
                  /* 🛠️ BRIGHT WHITE GLOW APPLIED HERE */
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[82px]">
                    <Image src="/images/about/graphic.png" alt="Graphic Design" width={180} height={180} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '1px', 
                      left: '3px',
                      transform: 'scaleY(1.6)', 
                      transformOrigin: 'bottom left' 
                    }}
                  >
                    <h3 
                    className={`text-white text-[61px] md:text-[60px] uppercase tracking-wide leading-tight ${vinaSans.className}`}
                    style={{ color: '#E6FF2B' }}
                    >
                      GRAPHIC
                    </h3>
                  </div>

                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-170px', 
                      left: '3px',
                      transform: 'scaleY(2)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[75px] md:text-[60px] uppercase tracking-wide leading-tight ${vinaSans.className}`}>
                      DESIGN
                    </h3>
                  </div>
                </BentoCard>
              </motion.div>

              {/* CARD 2: WEB DESIGNER (1 Column, 2 Rows) */}
              <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
                <BentoCard 
                  style={{ borderRadius: "10px", backgroundColor: "#4d4d4d" }} 
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[-74px]">
                    <Image src="/images/about/webdesign.png" alt="Web Designer" width={180} height={180} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-50px', 
                      left: '176px',
                      transform: 'scaleY(1)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 
                    className={`text-white text-[125px] md:text-lg uppercase tracking-wide leading-tight ${vinaSans.className}`}
                    style={{ color: '#F25623' }}
                    >
                      WEB
                    </h3>
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-140px', 
                      left: '178px',
                      transform: 'scale(1.35, 2.5)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[50px] md:text-lg uppercase tracking-wide leading-tight ${vinaSans.className}`}>
                      DESIGN
                    </h3>
                  </div>
                </BentoCard>
              </motion.div>

              {/* CARD 3: UI/UX DESIGNER (1 Column, 4 Rows) */}
              <motion.div variants={itemVariants} className="col-span-1 row-span-4 hover:z-50">
                <BentoCard 
                  style={{ borderRadius: "10px", backgroundColor: "#171717" }} 
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-80px] ml-[0px]">
                    <Image src="/images/about/uiux.png" alt="UI/UX Designer" width={330} height={330} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '55px', 
                      left: '5px',
                      transform: 'scale(1.7, 1.5)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[39px] md:text-lg uppercase tracking-wide leading-tight ${vinaSans.className}`}>
                      USER INTERFACE
                    </h3>
                  </div>

                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '17px', 
                      left: '5px',
                      transform: 'scale(1.68, 1.5)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[36px] md:text-lg uppercase tracking-wide leading-tight ${vinaSans.className}`}>
                      USER EXPERIENCE
                    </h3>
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-105px', 
                      left: '2px',
                      transform: 'scale(2.49, 1.6)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[60px] md:text-lg uppercase tracking-wide leading-tight ${vinaSans.className}`}>
                      DESIGN
                    </h3>
                  </div>
                </BentoCard>
              </motion.div>

              {/* CARD 4: SOCIAL MEDIA MANAGER (2 Columns, 2 Rows) */}
              <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
                <BentoCard 
                  style={{ borderRadius: "10px", backgroundColor: "#ffffff" }} 
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-41px] ml-[0px]">
                    <Image src="/images/about/smm.png" alt="Social Media Manager" width={665} height={665} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-120px', 
                      left: '3px',
                      transform: 'scale(1.31, 1.8)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 
                      className={`text-[60px] md:text-xl uppercase tracking-wide ${vinaSans.className}`}
                      style={{ color: '#000000' }}
                    >
                      SOCIAL MEDIA MANAGEMENT
                    </h3>
                  </div>
                </BentoCard>
              </motion.div>

              {/* CARD 5: VIDEO EDITOR (1 Column, 2 Rows) */}
              <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
                <BentoCard 
                  style={{ borderRadius: "10px", backgroundColor: "#1e1e1e" }} 
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[-67px]">
                    <Image src="/images/about/videditing.png" alt="Video Editor" width={183} height={183} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-44px', 
                      left: '190px',
                      transform: 'scale(1.2, 2)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 className={`text-white text-[65px] md:text-lg uppercase tracking-wide leading-none ${vinaSans.className}`}>VIDEO</h3>
                  </div>

                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-122px', 
                      left: '191px',
                      transform: 'scale(1.2, 2.6)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 
                    className={`text-white text-[46px] md:text-lg uppercase tracking-wide leading-none ${vinaSans.className}`}
                    style={{ color: '#8593F0' }}
                    >
                      EDITING</h3>
                  </div>
                </BentoCard>
              </motion.div>

              {/* CARD 6: FRONT-END DEVELOPER (2 Columns, 2 Rows) */}
              <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
                <BentoCard 
                  style={{ borderRadius: "10px", backgroundColor: "#d9d9d9" }} 
                  className="w-full h-full p-0 overflow-hidden relative group transition-all duration-300 scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <div className="glass-sweep z-30" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[2px] ml-[150px]">
                    <Image src="/images/about/frontend.png" alt="Front End Developer" width={370} height={370} className="object-contain" />
                  </div>
                  
                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-10px', 
                      left: '2px',
                      transform: 'scale(1.2, 1.5)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 
                      className={`text-white text-[74px] md:text-xl uppercase tracking-wide leading-none ${vinaSans.className}`}
                      style={{ color: '#000000' }} 
                    >
                      FRONT-END
                    </h3>
                  </div>

                  <div 
                    className="z-20" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-148px', 
                      left: '2px',
                      transform: 'scale(1.2, 1.9)', 
                      transformOrigin: 'bottom left'
                    }}
                  >
                    <h3 
                      className={`text-white text-[75px] md:text-xl uppercase tracking-wide leading-none ${vinaSans.className}`}
                      style={{ color: '#000000' }} 
                    >
                      DEVELOPER
                    </h3>
                  </div>
                </BentoCard>
              </motion.div>
            </motion.div>

            {/* DEDICATED SPACER TO FORCE SCROLL HEIGHT */}
            <div className="w-full h-[150px] md:h-[250px] pointer-events-none shrink-0"></div>

          </div>
        </section>
      </div>
    </div>
    </>
  );
}