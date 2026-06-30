"use client";

import Navbar from "@/components/navbar";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans } from "next/font/google";

const vinaSans = Vina_Sans({ 
  weight: "400",
  subsets: ["latin"] 
});

export default function ProjectsPage() {
  
  // --- ADJUSTMENT SECTION ---
  const CONFIG = {
    // Settings for the H1 text
    h1: {
      marginTop: "-10px", 
      paddingLeft: "0px",
      fontSize: "clamp(40px, 8vw, 80px)",
    },
    // Settings for the P text
    p: {
      marginTop: "-55px", 
      paddingLeft: "3px",
      fontSize: "clamp(20px, 4vw, 40px)",
    },
    // Card settings 
    smallCards: { 
      marginTop: "-30px", 
      width: "500px", 
      height: "90px", 
      gap: "20px", 
      padding: "16px" 
    },
    bigCard: { 
      marginTop: "-30px", 
      minHeight: "540px", 
      padding: "32px" 
    },
    gridGap: "20px"
  };

  const projects = [
    { id: 1, title: "LITTLE LIONS SPED SCHOOL" },
    { id: 2, title: "PCCI VALENZUELA" },
    { id: 3, title: "8CON ACADEMY" },
    { id: 4, title: "PROJECT ALPHA" },
    { id: 5, title: "PROJECT BETA" },
  ];

  return (
    <>
      {/* --- BULLETPROOF NATIVE CSS ANIMATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes movingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          /* A 400% size gradient using your dark gray, purple, and yellow */
          background: linear-gradient(-45deg, #1e1e1e, #2c2e45, #1e1e1e, #2d2e1b);
          background-size: 400% 400%;
          animation: movingGradient 15s ease infinite;
        }
      `}} />

      {/* Applied the 'animated-bg' class directly to the main wrapper */}
      <div className="relative min-h-screen animated-bg text-white overflow-hidden z-0">
        
        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10">
          <Navbar />

          <main className="max-w-[1200px] mx-auto px-4 pt-[100px] pb-24">
            
            {/* TITLES WITH SEPARATE ADJUSTMENTS */}
            <div className="flex flex-col mb-10">
              <h1 
                className={`${vinaSans.className} text-[#E6FF2B] uppercase tracking-tight`}
                style={{ 
                  marginTop: CONFIG.h1.marginTop, 
                  paddingLeft: CONFIG.h1.paddingLeft,
                  fontSize: CONFIG.h1.fontSize,
                  lineHeight: '0.85'
                }}
              >
                CREATIVE GALLERY.
              </h1>
              
              <p 
                className={`${vinaSans.className} text-[#FFFFFF] uppercase tracking-tight`}
                style={{ 
                  marginTop: CONFIG.p.marginTop, 
                  paddingLeft: CONFIG.p.paddingLeft,
                  fontSize: CONFIG.p.fontSize,
                }}
              >
                MY PROJECTS
              </p>
            </div>

            {/* --- GRID LAYOUT --- */}
            <div 
              className="flex flex-row" 
              style={{ gap: CONFIG.gridGap }}
            >
              
              {/* LEFT SIDE: 5 SMALL CARDS */}
              <div 
                className="flex flex-col" 
                style={{ 
                  gap: CONFIG.smallCards.gap,
                  width: CONFIG.smallCards.width,
                  marginTop: CONFIG.smallCards.marginTop 
                }}
              >
                {projects.map((proj) => (
                  <BentoCard 
                    key={proj.id} 
                    className="border border-[#4d4d4d] bg-[#2a2a2a]/50 flex items-center hover:border-[#8593F0] transition-colors cursor-pointer"
                    style={{ 
                      height: CONFIG.smallCards.height,
                      padding: CONFIG.smallCards.padding
                    }}
                  >
                    <h2 className="text-sm font-medium truncate">{proj.title}</h2>
                  </BentoCard>
                ))}
              </div>

              {/* RIGHT SIDE: 1 BIG CARD */}
              <div 
                className="flex-grow"
                style={{ marginTop: CONFIG.bigCard.marginTop }} 
              >
                <BentoCard 
                  className="border border-[#4d4d4d] bg-[#2a2a2a]/50 flex flex-col"
                  style={{ 
                    minHeight: CONFIG.bigCard.minHeight,
                    padding: CONFIG.bigCard.padding
                  }}
                >
                  <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
                  <div className="w-full flex-grow bg-[#333] rounded-lg mb-6 border border-[#4d4d4d]" />
                  <p className="text-gray-400">Project description goes here...</p>
                </BentoCard>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}