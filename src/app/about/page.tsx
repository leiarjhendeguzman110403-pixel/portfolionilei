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

const containerVariants: Variants = {
  offscreen: { opacity: 1 }, 
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1,   
    },
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
    <div className="min-h-screen bg-[#050505]">
      <Navbar /> 
      
      <div className="w-full max-w-[1000px] mx-auto px-4 pb-12 pt-32 relative z-10">
        
        <motion.div 
          className="mb-8 pl-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">About Me.</h1>
          <p className="font-mono text-xs tracking-widest text-white/40 uppercase">System Architecture</p>
        </motion.div>

        {/* THIS IS YOUR WORKING 4-COLUMN GRID. 
          I ONLY CHANGED gap-4 TO gap-6. 
        */}
        <motion.div 
          className="grid grid-cols-4 auto-rows-[60px] gap-6"
          variants={containerVariants}
          initial={isMobile ? "onscreen" : "offscreen"}
          whileInView="onscreen"
          viewport={{ once: true, margin: "-20px" }}
        >

          {/* CARD 1: PROFILE PICTURE */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-5">
            <BentoCard className="w-full h-full p-0 overflow-hidden relative group">
              <Image 
                src="/gradpic/profile.JPG" 
                alt="Paul John Punzal" 
                fill
                priority
                sizes="25vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="font-mono text-[9px] text-accent font-medium tracking-[1.8px] uppercase bg-black/60 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 hidden sm:block">
                  PJ Punzal
                </span>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 2: ABOUT ME */}
          <motion.div variants={itemVariants} className="col-span-3 row-span-3">
            <BentoCard className="w-full h-full p-5 lg:p-6 flex flex-col justify-center relative">
              <h2 className="font-syne text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                A Bit About Me
              </h2>
              <p className="font-inter text-xs md:text-sm text-white/60 leading-relaxed font-light">
                I'm a Full-Stack and Mobile Developer who loves turning ideas into working systems. My coding journey started out of pure curiosity, but everything clicked when I began connecting digital code with physical hardware.
              </p>
            </BentoCard>
          </motion.div>

          {/* CARD 3: ACADEMIC BACKGROUND */}
          <motion.div variants={itemVariants} className="col-span-3 row-span-2 z-20">
            <BentoCard className="w-full h-full flex flex-col justify-center p-5 lg:px-6 relative">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-2">
                Academic Background
              </span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-sm md:text-base text-white leading-tight mb-1">BS Information Technology</h3>
                  <p className="font-inter text-[9px] md:text-[10px] text-white/50">Pambayang Dalubhasaan ng Marilao</p>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 4: LANGUAGES & TOOLS */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-4">
            <BentoCard className="w-full h-full flex flex-col justify-center p-5 lg:px-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-4 h-4 text-white/50" />
                <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
                  Languages & Toolbelt
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-syne font-bold text-white/80 w-full">Core Languages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["TypeScript", "PHP", "Python", "Dart", "C#", "SQL"].map((lang) => (
                      <span key={lang} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-white/60 font-mono text-[9px] md:text-[10px] tracking-wide hover:bg-white/10 transition-colors cursor-default">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-syne font-bold text-white/80 w-full">Tools & Platforms</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Git", "Figma", "Docker", "Postman", "Linux", "Ollama"].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-white/60 font-mono text-[9px] md:text-[10px] tracking-wide hover:bg-white/10 transition-colors cursor-default">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 5: AI EXPLORATION */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-4">
            <BentoCard className="w-full h-full flex flex-col justify-center p-4" >
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-2">
                <BrainCircuit className="w-4 h-4 text-purple-400/80" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-syne text-[11px] md:text-xs font-bold text-white mb-1">AI & Automation</h3>
                <p className="font-inter text-[9px] md:text-[10px] text-white/50 leading-relaxed">
                  Locally-hosted LLMs & YOLO object detection.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 6: DATABASE & API */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-4">
            <BentoCard className="w-full h-full flex flex-col justify-center p-4">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                <Database className="w-4 h-4 text-white/60" />
              </div>
              <div>
                <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-accent mb-1 block">
                  The Engine Room
                </span>
                <h3 className="font-syne text-[11px] md:text-xs font-bold text-white mb-1">Database & API</h3>
                <p className="font-inter text-[9px] md:text-[10px] text-white/60 leading-relaxed">
                  Scalable RESTful APIs and strict database schemas.
                </p>
              </div>
            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}