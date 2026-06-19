"use client";

import { useEffect, useState} from "react";
import BentoCard from "@/components/ui/BentoCard";
import Navbar from "@/components/navbar"; 
import { 
  GraduationCap, 
  BrainCircuit, 
  Database,
  Terminal
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Vina_Sans, Alata } from "next/font/google"; 

const vinaSans = Vina_Sans({ 
  weight: "400",
  subsets: ["latin"] 
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"]
});

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

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <Navbar /> 
      
      {/* Master Style Block for all CSS Animations */}
      <style>{`
        /* 1. The Portrait Glow Animation */
        @keyframes customGlow {
          0% { filter: drop-shadow(0px 0px 15px rgba(133, 147, 240, 0.4)); }
          50% { filter: drop-shadow(0px 0px 40px rgba(133, 147, 240, 0.9)); }
          100% { filter: drop-shadow(0px 0px 15px rgba(133, 147, 240, 0.4)); }
        }
        .glowing-portrait {
          /* FIXED: Slowed down from 3s to 5s for a smoother pulse */
          animation: customGlow 5s ease-in-out infinite;
        }

        /* 2. The Continuous Light Sweep Animation for Cards */
        @keyframes glassSweep {
          /* FIXED: Removed the pause. It now sweeps continuously from 0% to 100% */
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
          /* FIXED: Set to a smooth, continuous 8-second linear loop */
          animation: glassSweep 8s linear infinite; 
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <div className="w-full max-w-[1000px] mx-auto px-4 pb-24 pt-[40px] relative z-10">
        
        <div className="pl-2 mb-0 flex flex-col">
          <h1 
            className={`${vinaSans.className} text-[#8593F0] uppercase tracking-tight`}
            style={{ 
              fontSize: 'clamp(70px, 10vw, 80px)',
              lineHeight: '0.85'
            }}
          >
            Behind the Pixels.
          </h1>
          
          <p 
            className={`${vinaSans.className} text-white/50 tracking-[0.2em] uppercase pl-2 relative z-20`}
            style={{ 
              fontSize: 'clamp(24px, 4vw, 40px)',
              marginTop: '-60px' 
            }}
          >
            About Me
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-4 auto-rows-[70px] grid-flow-dense -mt-[40px]"
          style={{ gap: '10px' }}
          variants={containerVariants}
          initial={isMobile ? "onscreen" : "offscreen"}
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* CARD 1: PROFILE PICTURE */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-5 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div 
                className="absolute top-0 right-0 z-20 text-left" 
                style={{ 
                  paddingTop: '40px', 
                  paddingRight: '25px', 
                  paddingLeft: '220px', 
                  boxSizing: 'border-box' 
                }}
              >
                {/* Name Header */}
                <h2 
                  className={`${alata.className} text-white font-bold uppercase tracking-wide`}
                  style={{ fontSize: '40px', lineHeight: '0.8' }} 
                >
                  <span style={{ fontSize: '46px', display: 'block', marginBottom: '5px' }}>LEI ARJHEN</span>
                  DE GUZMAN
                </h2>

                {/* Job Title */}
                <div style={{ marginTop: '-30px', paddingLeft: '2px' }}>
                  <span 
                    className={`${alata.className} block`} 
                    style={{ color: '#E6FF2B', fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    GRAPHIC DESIGNER | UI/UX DESIGNER
                  </span>
                </div>

                {/* Bio Section */}
                <div style={{ 
                  marginTop: '15px', 
                  borderLeft: '3px solid #8593F0', 
                  paddingLeft: '15px', 
                  maxWidth: '320px' 
                }}>
                  <p 
                    className={`${alata.className} text-white/70 leading-relaxed text-justify`} 
                    style={{ fontSize: '10px', color: '#898A8D' }}
                  >
                    Creative and detail-oriented Graphic Designer, UI/UX Specialist, and Digital Marketer with hands-on experience in educational design, user interface projects, and social media marketing. Skilled in developing engaging visuals, intuitive interfaces, and promotional content that boost audience engagement and brand visibility. Adept at designing educational materials, e-learning applications, and short-form digital content. Strong knowledge of branding, social media trends, and visual communication strategies.
                  </p>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                <Image 
                  src="/images/about/portrait.png" 
                  alt="Paul John Punzal" 
                  fill
                  priority
                  sizes="25vw"
                  style={{ objectPosition: '-60px bottom' }}
                  className="object-contain origin-bottom-left scale-[0.9] glowing-portrait"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className={`${alata.className} text-[9px] text-accent tracking-[1.8px] uppercase bg-black/60 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 hidden sm:block`}>
                  PJ Punzal
                </span>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 2: ACADEMIC BACKGROUND 1 */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div style={{ position: 'absolute', top: '0px', left: '20px', color: '#898A8D' }}>
                <h2 className={`${alata.className} text-[12px] text-[#898A8D] tracking-[1.5px] uppercase`}>
                  Academic Background
                </h2>
              </div>
              
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '30px', 
                  left: '15px', 
                  right: '15px', 
                  height: '3px', 
                  backgroundColor: '#898A8D',
                }} 
              />
              
              <div style={{ position: 'absolute', top: '30px', left: '15px' }}>
                <p 
                  className={`${alata.className} text-white font-bold uppercase leading-tight`}
                  style={{ fontSize: '26px' }}
                >
                  BS Information-Technology
                </p>
              </div>    

              <div style={{ position: 'absolute', top: '78px', left: '16px', color: '#898A8D' }}>
                <p 
                  className={`${alata.className} text-white/60 uppercase`}
                  style={{ fontSize: '11px', letterSpacing: '0.05em' }}
                >
                  PAMBAYANG DALUBHASAAN NG MARILAO | 2022 - PRESENT
                </p>
              </div>
              
            </BentoCard>
          </motion.div>

          {/* CARD 3: GET TO KNOW ME */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-4 z-20 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div style={{ position: 'absolute', top: '0px', left: '17px', right: '25px',  }}>
                <h3 className={`${alata.className} text-[12px] tracking-[1.8px] uppercase text-[#898A8D]`}>
                  GET TO KNOW ME
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '31px', 
                  left: '15px', 
                  right: '15px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '45px', left: '10px', right: '10px'}}>
                <p className={`${alata.className} text-[13px] md:text-xs text-white/70 leading-relaxed text-justify`}>
                  I am a graphic and UI/UX designer who loves turning abstract ideas into polished pixels. My creative process almost always begins the old-school way—with a blank piece of paper and a sharp pencil. Interestingly, my journey started with the goal of becoming a programmer. But along the way, I realized that true fulfillment comes from alignment, and I chose the path that genuinely makes me happy: shaping how people see and interact with the digital world.
                </p>
              </div>

            </BentoCard>
          </motion.div>

          {/* CARD 4: TECH & DESIGN STACK */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-1 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div style={{ position: 'absolute', top: '5px', left: '20px', color: '#898A8D' }}>
                <span className={`${alata.className} text-[12px] tracking-[1.8px] uppercase text-[#898A8D]`}>
                  TECH & DESIGN STACK
                </span>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '27px', 
                  left: '20px', 
                  right: '20px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '42px', 
                  left: '20px', 
                  right: '20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center', 
                  gap: '12px' 
                }}
              >
                {["FIGMA", "CAPCUT", "CANVA", "VS CODE"].map((tool) => (
                  <div 
                    key={tool} 
                    className="py-2 rounded-[10px] bg-[#4d4d4d] border border-[#4d4d4d] hover:bg-[#5a5a5a] transition-colors flex items-center justify-center cursor-default"
                    style={{ width: '90px', zIndex: 10 }} 
                  >
                    <span className={`${alata.className} text-[10px] text-white tracking-wide uppercase`}>
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 5: CURRENT RESIDENCE */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full flex flex-col p-5 lg:px-6 overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div style={{ position: 'absolute', top: '-1px', left: '14px' }}>
                <h3 className={`${alata.className} text-[13px] md:text-sm text-[#898A8D] uppercase`}>
                  CURRENT RESIDENCE
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '31px', 
                  left: '14px', 
                  right: '14px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '15px', left: '20px' }}>
                <p className={`${alata.className} text-[30px] md:text-[11px] text-white/50 leading-relaxed`}>
                  MEYCAUAYAN
                </p>
              </div>

              <div style={{ position: 'absolute', top: '20px', left: '17px' }}>
                <p className={`${alata.className} text-[45px] md:text-[11px] text-white/50 leading-relaxed`}>
                  BULACAN 
                </p>
              </div>

            </BentoCard>
          </motion.div>

          {/* CARD 6: CREATIVE CAPABILITIES */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:px-6 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> {/* Added Light Sweep */}

              <div style={{ position: 'absolute', top: '-1px', left: '13px' }}>
                <h3 className={`${alata.className} text-[13px] md:text-sm text-[#898A8D] uppercase`}>
                  CREATIVE CAPABILITIES
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '30px', 
                  left: '13px', 
                  right: '13px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '30px', left: '-20px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[
                    "VIDEO EDITOR",
                    "WEB DESIGNER",
                    "UI/UX DESIGNER",
                    "GRAPHIC DESIGNER",
                    "FRONT-END DEVELOPER",
                    "SOCIAL MEDIA MANAGER"
                  ].map((role) => (
                    <li key={role} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E6FF2B' }}></span>
                      <span className={`${alata.className} text-[9px] tracking-[1.8px] uppercase text-white/60 block`}>
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}