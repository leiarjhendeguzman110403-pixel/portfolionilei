"use client";

import Navbar from "@/components/navbar";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans, Dela_Gothic_One, Alata } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"] });
const delaGothic = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const alata = Alata({ weight: "400", subsets: ["latin"] });

export default function ContactsPage() {
  
  // ==========================================
  // --- MASTER ADJUSTMENT SECTION ---
  // ==========================================
  
  // 1. ALIGNMENT & OFFSETS (Use "px", "rem", or "%")
  const textOffsetTop = "105px";     // Adjust text vertical position
  const textOffsetLeft = "0px";      // Adjust text horizontal position

  const gridOffsetTop = "-280px";    // Adjust grid vertical position
  const gridOffsetLeft = "550px";    // Adjust grid horizontal position

  // 2. CARD SPACING (GAP)
  // FORCED GAP: Using inline styles guarantees this works without needing a server restart!
  // Change "20px" to whatever size you want (e.g., "16px", "30px").
  const cardGap = "10px";

  // 3. ENTIRE GRID SIZING & POSITION
  // Removed the Tailwind gap classes here to rely purely on the bulletproof inline style
  const rightSideContainerClass = "md:w-6/12 ml-auto grid grid-cols-4 sticky self-start";

  // 4. BASE HEIGHT
  const baseCardHeight = "90px"; 

  // 5. INDIVIDUAL CARDS (gridSlot locks the layout, paddingClass adjusts text spacing)
  const contactLinks = [
    { 
      title: "EMAIL", value: "lejden@gmail.com", link: "mailto:lejden@gmail.com",
      gridSlot: "col-span-4 row-span-1", 
      paddingClass: "p-6 md:p-8" 
    },
    { 
      title: "LINKEDIN", value: "linkedin.com/in/pjpunzal", link: "https://linkedin.com/in/pjpunzal",
      gridSlot: "col-span-2 row-span-1", 
      paddingClass: "p-5 md:p-6" 
    },
    { 
      title: "GITHUB", value: "github.com/lejden", link: "https://github.com/lejden",
      gridSlot: "col-span-2 row-span-1",
      paddingClass: "p-5 md:p-6" 
    },
    { 
      title: "BEHANCE", value: "behance.net/pjpunzal", link: "https://behance.net/pjpunzal",
      gridSlot: "col-span-4 row-span-1",
      paddingClass: "p-6 md:p-8" 
    },
    { 
      title: "INSTAGRAM", value: "@pjpunzal", link: "https://instagram.com/pjpunzal",
      gridSlot: "col-span-1 row-span-1", 
      paddingClass: "p-3 md:p-4" 
    },
    { 
      title: "TWITTER", value: "@pjpunzal", link: "https://twitter.com/pjpunzal",
      gridSlot: "col-span-1 row-span-1",
      paddingClass: "p-3 md:p-4" 
    },
    { 
      title: "UPWORK", value: "upwork.com/freelancers/pj", link: "https://upwork.com/freelancers/pj",
      gridSlot: "col-span-1 row-span-1", 
      paddingClass: "p-3 md:p-4" 
    },
    { 
      title: "RESUME", value: "Download PDF", link: "#",
      gridSlot: "col-span-1 row-span-1",
      paddingClass: "p-3 md:p-4" 
    },
  ];

  return (
    <div className="relative min-h-screen animated-bg-container text-white">
      <Navbar />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes panGrid { 0% { background-position: 0px 0px; } 100% { background-position: 20px 20px; } }
        .animated-bg-container { background-color: #121212; position: relative; }
        .animated-bg-container::before {
          content: ""; position: absolute; inset: 0;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px; animation: panGrid 4s linear infinite; z-index: 0; pointer-events: none;
        }
      `}} />

      <main className="max-w-[1200px] mx-auto px-4 pt-[100px] md:pt-[140px] flex flex-col md:flex-row gap-10 md:gap-16 relative z-10">
        
        {/* LEFT SIDE: BIG TEXT */}
        <div 
          className="md:w-5/12 sticky self-start"
          style={{ 
            top: `calc(120px + ${textOffsetTop})`,
            left: textOffsetLeft,
            position: 'sticky'
          }}
        >
          <h1 className={`${vinaSans.className} text-[#E6FF2B] uppercase tracking-tight flex flex-col`}>
            
            <span 
              className="block"
              style={{ 
                fontSize: "clamp(80px, 12vw, 300px)",
                lineHeight: "0.85" 
              }}
            >
              LET'S
            </span>

            <span 
              className="block"
              style={{ 
                fontSize: "clamp(80px, 12vw, 150px)",
                lineHeight: "0.85" 
              }}
            >
              CONNECT.
            </span>

          </h1>

          <p className={`${alata.className} mt-8 text-[#898A8D] text-sm uppercase tracking-widest`}>
            Available for New Projects and Career Opportunities.
          </p>
        </div>

        {/* RIGHT SIDE: CARDS GRID */}
        <div 
          className={rightSideContainerClass}
          style={{ 
            gridAutoRows: baseCardHeight,
            gap: cardGap,                // <--- BULLETPROOF GAP FIX IS HERE
            top: "120px",                
            marginTop: gridOffsetTop,    
            marginLeft: gridOffsetLeft
          }}
        >
          {contactLinks.map((item, i) => (
            
            <div key={i} className={`${item.gridSlot} relative`}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full h-full cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
              >
                <BentoCard 
                  className={`bg-[#2a2a2a]/90 backdrop-blur-md border border-[#4d4d4d] group-hover:border-[#8593F0] w-full h-full flex flex-col justify-center transition-colors duration-300 overflow-hidden ${item.paddingClass}`}
                >
                  <h3 className={`${delaGothic.className} text-[#8593F0] text-[10px] tracking-widest uppercase mb-1`}>
                    {item.title}
                  </h3>
                  <p className={`${alata.className} text-white text-[14px] md:text-[16px] tracking-wide truncate group-hover:text-[#E6FF2B] transition-colors duration-300`}>
                    {item.value}
                  </p>
                </BentoCard>
              </a>
            </div>

          ))}
        </div>

      </main>
    </div>
  );
}