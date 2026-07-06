"use client";

import Navbar from "@/components/navbar";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans, Dela_Gothic_One, Alata } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"] });
const delaGothic = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const alata = Alata({ weight: "400", subsets: ["latin"] });

// ==========================================
// --- GLOBAL LAYOUT CONTROLS ---
// ==========================================
const CONFIG = {
  textMarginTop: "-70px", 
  subtitleMarginTop: "-50px",
  gridMarginTop: "10px",
  cardGap: "20px",
};

export default function ContactsPage() {
  
  // ==========================================
  // --- CARD-BY-CARD CONTROLS ---
  // Use "mt-[...]" for Top Margin. (E.g., "mt-[10px]" to push down, "mt-[-5px]" to pull UP!)
  // Use "ml-[...]" for Left Margin. (E.g., "ml-[20px]" to push right).
  // ==========================================
  const contactLinks = [
    // --- CARD 1: CURRENT STATUS ---
    { 
      title: "CURRENT STATUS", 
      value: "AVAILABLE FOR WORK", 
      subtitle: "Entry to Mid-Level UI/UX Designer | Graphic Designer | Video Editor",
      // Briefcase Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      iconPosition: "absolute-right", // Places it on the right side
      link: "", 
      gridClass: "col-span-4 row-span-1", 
      titleFont: alata.className, 
      valueFont: vinaSans.className,
      
      // ICON ADJUSTMENTS (Right Side)
      iconSize: "w-[80px] h-[80px] md:w-[110px] md:h-[110px]",
      iconMarginTop: "mt-[20px]", 
      iconMarginRight: "mr-[30px]", // Use Right Margin to push inwards

      // TITLE ADJUSTMENTS
      titleSize: "text-[15px] md:text-[14px]", 
      titleMarginTop: "mt-[18px]", 
      titleMarginLeft: "ml-[37px]",

      // VALUE ADJUSTMENTS
      valueSize: "text-[80px] md:text-[24px]", 
      valueMarginTop: "mt-[-35px]",
      valueMarginLeft: "ml-[30px]",

      // SUBTITLE ADJUSTMENTS
      subtitleSize: "text-[15px] md:text-[13px]",
      subtitleMarginTop: "mt-[-85px]",
      subtitleMarginLeft: "ml-[32px]",
    },

    // --- CARD 2: EMAIL ADDRESS ---
    { 
      title: "EMAIL ADDRESS", 
      value: "LEIARJHENDEGUZMAN110403@GMAIL.COM", 
      subtitle: "",
      // Envelope Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      iconPosition: "top", // Places it above the text
      link: "mailto:LEIARJHENDEGUZMAN110403@GMAIL.COM",
      gridClass: "col-span-2 row-span-1", 
      titleFont: alata.className, 
      valueFont: vinaSans.className,
      valueColor: "text-[#ffffff]",
      
      // ICON ADJUSTMENTS
      iconSize: "w-[30px] h-[30px] md:w-[35px] md:h-[35px]",
      iconMarginTop: "mt-[24px]", 
      iconMarginLeft: "ml-[24px]", 

      titleSize: "text-[15px] md:text-[14px]",
      titleMarginTop: "mt-[10px]", 
      titleMarginLeft: "ml-[24px]",

      valueSize: "text-[40px] md:text-[24px]",
      valueMarginTop: "mt-[-25px]",
      valueMarginLeft: "ml-[24px]",

      subtitleSize: "", subtitleMarginTop: "", subtitleMarginLeft: "",
    },

    // --- CARD 3: MOBILE NUMBER ---
    { 
      title: "MOBILE NUMBER", 
      value: "+63 9318652170",
      subtitle: "", 
      // Phone Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      iconPosition: "top", // Places it above the text
      link: "", 
      gridClass: "col-span-2 row-span-1", 
      titleFont: alata.className, 
      valueFont: vinaSans.className,
      
      // ICON ADJUSTMENTS
      iconSize: "w-[30px] h-[30px] md:w-[35px] md:h-[35px]",
      iconMarginTop: "mt-[24px]", 
      iconMarginLeft: "ml-[24px]", 

      titleSize: "text-[15px] md:text-[14px]",
      titleMarginTop: "mt-[10px]", 
      titleMarginLeft: "ml-[24px]",

      valueSize: "text-[40px] md:text-[24px]", 
      valueMarginTop: "mt-[-25px]",
      valueMarginLeft: "ml-[24px]",

      subtitleSize: "", subtitleMarginTop: "", subtitleMarginLeft: "",
    },

    // --- CARD 4: CURRENT LOCATION ---
    { 
      title: "CURRENT LOCATION", 
      value: "PANTOC, MEYCAUAYAN, BULACAN", 
      subtitle: "",
      // Map Pin Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      iconPosition: "absolute-right", // Places it on the right side
      link: "", 
      gridClass: "col-span-4 row-span-1", 
      titleFont: alata.className, 
      valueFont: vinaSans.className,
      
      // ICON ADJUSTMENTS (Right Side)
      iconSize: "w-[80px] h-[80px] md:w-[100px] md:h-[100px]",
      iconMarginTop: "mt-[20px]", 
      iconMarginRight: "mr-[30px]", // Use Right Margin to push inwards

      titleSize: "text-[15px] md:text-[14px]",
      titleMarginTop: "mt-[24px]", 
      titleMarginLeft: "ml-[30px]",

      valueSize: "text-[70px] md:text-[24px]", 
      valueMarginTop: "mt-[-25px]",
      valueMarginLeft: "ml-[30px]",

      subtitleSize: "", subtitleMarginTop: "", subtitleMarginLeft: "",
    },

    // ========================================================
    // --- CARDS 5 TO 8 (Auto-Centered with Icon Adjustments) ---
    // ========================================================

    // --- CARD 5: FACEBOOK ---
    { 
      title: "FACEBOOK", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      link: "#", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: vinaSans.className,
      valueFont: alata.className,

      // ICON ADJUSTMENTS
      iconSize: "w-[70px] h-[70px] md:w-[50px] md:h-[50px]",
      iconMarginTop: "mt-[45px]", 
      iconMarginLeft: "ml-[0px]", 

      // TITLE ADJUSTMENTS
      titleSize: "text-[40px] md:text-[18px]",
      titleMarginTop: "mt-[5px]", 
    },

    // --- CARD 6: INSTAGRAM ---
    { 
      title: "INSTAGRAM", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ),
      link: "#", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: vinaSans.className,
      valueFont: alata.className,

      // ICON ADJUSTMENTS
      iconSize: "w-[70px] h-[70px] md:w-[50px] md:h-[50px]",
      iconMarginTop: "mt-[45px]", 
      iconMarginLeft: "ml-[0px]", 

      // TITLE ADJUSTMENTS
      titleSize: "text-[40px] md:text-[18px]",
      titleMarginTop: "mt-[5px]", 
    },

    // --- CARD 7: GITHUB ---
    { 
      title: "GITHUB", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "#", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: vinaSans.className,
      valueFont: alata.className,

      // ICON ADJUSTMENTS
      iconSize: "w-[70px] h-[70px] md:w-[50px] md:h-[50px]",
      iconMarginTop: "mt-[45px]", 
      iconMarginLeft: "ml-[0px]", 

      // TITLE ADJUSTMENTS
      titleSize: "text-[40px] md:text-[18px]",
      titleMarginTop: "mt-[5px]", 
    },

    // --- CARD 8: LINKEDIN ---
    { 
      title: "LINKEDIN", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      link: "#", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: vinaSans.className,
      valueFont: alata.className,

      // ICON ADJUSTMENTS
      iconSize: "w-[70px] h-[70px] md:w-[50px] md:h-[50px]",
      iconMarginTop: "mt-[45px]", 
      iconMarginLeft: "ml-[0px]", 

      // TITLE ADJUSTMENTS
      titleSize: "text-[40px] md:text-[18px]",
      titleMarginTop: "mt-[5px]", 
    },
  ];

  return (
    <div className="relative min-h-screen animated-bg-container text-white pb-24">
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
          className="md:w-5/12 self-start flex flex-col" 
          style={{ marginTop: CONFIG.textMarginTop }}
        >
          <h1 
            className={`${vinaSans.className} text-[#E6FF2B] uppercase tracking-tight`}
            style={{ 
              fontSize: "clamp(60px, 9vw, 90px)", 
              lineHeight: "0.85" 
            }}
          >
            LET'S CONNECT.
          </h1>
          
          <p 
            className={`${alata.className} text-[#ffffff] uppercase tracking-widest`}
            style={{ 
              fontSize: "clamp(12px, 2vw, 16px)", 
              lineHeight: "1.5", 
              marginTop: CONFIG.subtitleMarginTop 
            }}
          >
            Available for New Projects and Career Opportunities.
          </p>
        </div>

        {/* RIGHT SIDE: 8 CARDS GRID */}
        <div 
          className="md:w-7/12 grid grid-cols-4 auto-rows-[150px]" 
          style={{ 
            marginTop: CONFIG.gridMarginTop,
            gap: CONFIG.cardGap
          }}
        >
          {contactLinks.map((item, i) => {
            
            const isTopIcon = item.icon && item.iconPosition === "top";
            const isRightIcon = item.icon && item.iconPosition === "absolute-right";
            
            // If the card doesn't have a titleMarginLeft adjustment, it's treated as an auto-center card (like the social media cards)
            const isAutoCenter = !item.titleMarginLeft;

            const CardContent = (
              <BentoCard 
                className={`bg-[#2a2a2a]/90 backdrop-blur-md border border-[#4d4d4d] group-hover:border-[#8593F0] w-full h-full flex flex-col transition-colors duration-300 overflow-hidden relative ${isAutoCenter ? 'items-center justify-center p-4' : ''}`}
              >
                {/* 1A. Icon (Top Position) */}
                {isTopIcon && (
                  <div className={`w-full flex justify-start ${item.iconMarginTop} ${item.iconMarginLeft} ${item.link ? 'text-white group-hover:text-[#E6FF2B]' : 'text-[#8593F0]'} transition-colors duration-300`}>
                    <div className={item.iconSize}>{item.icon}</div>
                  </div>
                )}

                {/* 1B. Icon (Right Position - For custom cards only) */}
                {isRightIcon && (
                  <div className={`absolute right-0 top-0 ${item.iconMarginTop} ${item.iconMarginRight} ${item.link ? 'text-white group-hover:text-[#E6FF2B]' : 'text-[#8593F0]'} transition-colors duration-300`}>
                    <div className={item.iconSize}>{item.icon}</div>
                  </div>
                )}

                {/* 1C. Icon (Auto Center for last 4 cards) */}
                {item.icon && !isTopIcon && !isRightIcon && (
                  // I've added the iconMarginTop and iconMarginLeft here so they apply!
                  <div className={`w-full flex justify-center mb-2 ${item.iconMarginTop || ''} ${item.iconMarginLeft || ''} ${item.link ? 'text-white group-hover:text-[#E6FF2B]' : 'text-[#8593F0]'} transition-colors duration-300`}>
                    <div className={item.iconSize}>{item.icon}</div>
                  </div>
                )}

                {/* 2. Title */}
                {item.title && (
                  <h3 className={`${item.titleFont} ${item.titleSize} ${item.titleMarginTop || ''} ${item.titleMarginLeft || ''} text-[#8593F0] tracking-widest uppercase break-words w-full ${isAutoCenter ? 'text-center' : 'text-left relative z-10'}`}>
                    {item.title}
                  </h3>
                )}
                
                {/* 3. Value */}
                {item.value && (
                  <p className={`${item.valueFont} ${item.valueSize} ${item.valueColor || (item.link ? 'text-white group-hover:text-[#E6FF2B]' : 'text-white')} ${item.valueMarginTop || ''} ${item.valueMarginLeft || ''} tracking-wide break-words leading-tight transition-colors duration-300 w-full ${isAutoCenter ? 'text-center' : 'text-left relative z-10'}`}>
                    {item.value}
                  </p>
                )}

                {/* 4. Subtitle */}
                {item.subtitle && (
                  <p className={`${alata.className} text-[#a1a1aa] ${item.subtitleSize} ${item.subtitleMarginTop || ''} ${item.subtitleMarginLeft || ''} tracking-wide break-words whitespace-normal leading-tight w-[70%] text-left relative z-10`}>
                    {item.subtitle}
                  </p>
                )}
              </BentoCard>
            );

            return (
              <div key={i} className={`${item.gridClass} hover:z-50`}>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-full cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="block w-full h-full group hover:scale-[1.02] transition-transform duration-300">
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}