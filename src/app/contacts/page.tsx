"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans, Dela_Gothic_One, Alata } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"] });
const delaGothic = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const alata = Alata({ weight: "400", subsets: ["latin"] });

// ==========================================
// --- GLOBAL LAYOUT CONTROLS ---
// ==========================================
const CONFIG = {
  // Push the "LET'S / CONNECT." text block down (increase to move it further down)
  textPaddingTop: "0px",
  // Push the "LET'S / CONNECT." text block left/right (increase to move it right)
  textPaddingLeft: "30px",
  subtitleMarginTop: "-50px",

  // Push the entire cards grid down (increase to move it further down)
  cardsPaddingTop: "50px",
  // Push the entire cards grid in from the right edge (increase to move it left)
  cardsPaddingRight: "30px",

  cardGap: "16px",
  // Row heights: balanced against the heading size so both columns end near the same line
  gridTemplateRows: "108px 116px 64px 88px",

  // Horizontal gap between the "LET'S / CONNECT." text column and the cards grid
  // (decrease to bring them closer together, increase to push them apart)
  textToCardsGap: "0px",

  // --- "LET'S" TEXT CONTROLS (adjust independently of "CONNECT.") ---
  // NOTE: these are now plain pixel values (not clamp()), so changing the
  // number always changes the rendered size — clamp() was capping it before.
  letsSize: "280px",
  letsMarginTop: "0px",
  letsMarginLeft: "0px",
  letsColor: "#F25623",

  // --- "CONNECT." TEXT CONTROLS (adjust independently of "LET'S") ---
  connectSize: "160px",
  connectMarginTop: "0px",
  connectMarginLeft: "0px",
  connectColor: "#ffffff",
};

export default function ContactsPage() {
  
  // ==========================================
  // --- CARD-BY-CARD CONTROLS ---
  // ==========================================
  const contactLinks = [
    // --- CARD 1: CURRENT STATUS ---
    { 
      title: "CURRENT STATUS", 
      value: "AVAILABLE FOR WORK", 
      subtitle: "Entry to Mid-Level UI/UX Designer | Graphic Designer | Video Editor",
      // Briefcase Icon 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[55%] h-[55%] opacity-80 drop-shadow-[0_0_12px_currentColor]">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      iconPosition: "absolute-right",
      link: "", 
      gridClass: "col-span-4 row-span-1", 
      titleFont: alata.className, 
      valueFont: delaGothic.className, 
      
      // CIRCLE CONTROLS
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[48px] md:h-[48px]",
      iconMarginTop: "mt-[35px]", 
      iconMarginLeft: "ml-[calc(100%-62px)]", 

      // TITLE ADJUSTMENTS
      titleSize: "text-[12px] md:text-[12px]", 
      titleMarginTop: "mt-[25px]", 
      titleMarginLeft: "ml-[22px]",

      // VALUE ADJUSTMENTS
      valueSize: "text-[26px] md:text-[24px]", 
      valueMarginTop: "mt-[-12px]",
      valueMarginLeft: "ml-[21px]",

      // SUBTITLE ADJUSTMENTS
      subtitleSize: "text-[12px] md:text-[11px]",
      subtitleMarginTop: "mt-[-30px]",
      subtitleMarginLeft: "ml-[22px]",
    },

    // --- CARD 2: CURRENT LOCATION (moved here from Card 4 so EMAIL can have the wider box) ---
    { 
      title: "CURRENT LOCATION", 
      value: "PANTOC, MEYCAUAYAN", 
      subtitle: "Bulacan, Philippines",
      topRightText: "", 
      // Map Pin Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[55%] h-[55%] opacity-90 drop-shadow-[0_0_12px_currentColor]">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      iconPosition: "top",
      link: "https://www.google.com/maps/search/?api=1&query=Pantoc,+Meycauayan,+Bulacan,+Philippines",
      gridClass: "col-span-2 row-span-1", 
      titleFont: alata.className, 
      valueFont: delaGothic.className, 
      valueColor: "!text-white group-hover:!text-white",
      
      // CIRCLE CONTROLS
      hasCircle: true,

      iconSize: "w-[32px] h-[32px] md:w-[32px] md:h-[32px]", 
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[18px]", 

      titleSize: "text-[11px] md:text-[11px]",
      titleMarginTop: "mt-[15px]", 
      titleMarginLeft: "ml-[18px]",

      valueSize: "text-[16px] md:text-[16px]",
      valueMarginTop: "mt-[-12px]",
      valueMarginLeft: "ml-[18px]",

      subtitleSize: "text-[10px]", subtitleMarginTop: "mt-[-20px]", subtitleMarginLeft: "ml-[18px]",
    },

    // --- CARD 3: MOBILE NUMBER ---
    { 
      title: "MOBILE NUMBER", 
      value: "+63 9318652170",
      subtitle: "", 
      topRightText: "", 
      // Phone Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      iconPosition: "top",
      link: "", 
      gridClass: "col-span-2 row-span-1", 
      titleFont: alata.className, 
      valueFont: delaGothic.className, 
      
      // CIRCLE CONTROLS
      hasCircle: true,

      iconSize: "w-[32px] h-[32px] md:w-[32px] md:h-[32px]", 
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[18px]", 

      titleSize: "text-[11px] md:text-[11px]",
      titleMarginTop: "mt-[15px]", 
      titleMarginLeft: "ml-[18px]",

      valueSize: "text-[18px] md:text-[17px]", 
      valueMarginTop: "mt-[-12px]",
      valueMarginLeft: "ml-[18px]",

      subtitleSize: "", subtitleMarginTop: "", subtitleMarginLeft: "",
    },

    // --- CARD 4: EMAIL ADDRESS (moved here from Card 2 for the extra width) ---
    { 
      title: "EMAIL ADDRESS", 
      value: "LEIARJHENDEGUZMAN110403@GMAIL.COM", 
      subtitle: "", 
      // Envelope Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      iconPosition: "absolute-right",
      link: "mailto:LEIARJHENDEGUZMAN110403@GMAIL.COM", 
      gridClass: "col-span-4 row-span-1", 
      titleFont: alata.className, 
      valueFont: delaGothic.className, 
      
      valueColor: "text-[#ffffff]", 

      // CIRCLE CONTROLS
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[48px] md:h-[48px]",
      iconMarginTop: "mt-[14px]", 
      iconMarginLeft: "ml-[calc(100%-62px)]",

      titleSize: "text-[11px] md:text-[11px]",
      titleMarginTop: "mt-[15px]", 
      titleMarginLeft: "ml-[22px]",

      valueSize: "text-[18px] md:text-[11px]", 
      valueMarginTop: "mt-[-10px]",
      valueMarginLeft: "ml-[21px]",

      subtitleSize: "", subtitleMarginTop: "", subtitleMarginLeft: "",
    },

    // ========================================================
    // --- CARDS 5 TO 8 (Auto-Centered with Circles added!) ---
    // ========================================================

    // --- CARD 5: FACEBOOK ---
    { 
      title: "FACEBOOK", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      link: "https://www.facebook.com/leiarjhen.deguzman", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: delaGothic.className,
      valueFont: delaGothic.className, 
      
      titleColor: "text-[#ffffff]",
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[36px] md:h-[36px]",
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[-48px]", 

      titleSize: "text-[14px] md:text-[13px]",
      titleMarginTop: "mt-[6px]", 
      titleMarginLeft: "ml-[11px]", 
    },

    // --- CARD 6: INSTAGRAM ---
    { 
      title: "INSTAGRAM", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ),
      link: "https://www.instagram.com/leideguzman_/", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: delaGothic.className,
      valueFont: delaGothic.className,
      
      titleColor: "text-[#ffffff]",
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[36px] md:h-[36px]",
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[-48px]", 

      titleSize: "text-[14px] md:text-[13px]",
      titleMarginTop: "mt-[6px]", 
      titleMarginLeft: "ml-[11px]", 
    },

    // --- CARD 7: GITHUB ---
    { 
      title: "GITHUB", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "https://github.com/leiarjhendeguzman110403-pixel", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: delaGothic.className,
      valueFont: delaGothic.className,
      
      titleColor: "text-[#ffffff]",
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[36px] md:h-[36px]",
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[-48px]", 

      titleSize: "text-[14px] md:text-[13px]",
      titleMarginTop: "mt-[6px]", 
      titleMarginLeft: "ml-[11px]", 
    },

    // --- CARD 8: LINKEDIN ---
    { 
      title: "LINKEDIN", 
      value: "", 
      subtitle: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[55%] h-[55%] drop-shadow-[0_0_12px_currentColor]">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      link: "https://www.linkedin.com/in/lei-de-guzman-1ba84039b/", 
      gridClass: "col-span-1 row-span-1", 
      titleFont: delaGothic.className,
      valueFont: delaGothic.className,
      
      titleColor: "text-[#ffffff]",
      hasCircle: true,

      iconSize: "w-[36px] h-[36px] md:w-[36px] md:h-[36px]",
      iconMarginTop: "mt-[13px]", 
      iconMarginLeft: "ml-[-48px]", 

      titleSize: "text-[14px] md:text-[13px]",
      titleMarginTop: "mt-[6px]", 
      titleMarginLeft: "ml-[11px]", 
    },
  ];

  return (
    <div className="relative min-h-screen animated-bg-container text-white">
      <Navbar />
      
      {/* --- UPDATED STYLE BLOCK TO MATCH OTHER PAGES --- */}
      <style dangerouslySetInnerHTML={{__html: `
        /* --- Sweep Animation for Cards --- */
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

        /* --- DUAL SWEEPING GRID ANIMATIONS (20px SIZE) --- */
        @keyframes panGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 20px 20px; }
        }
        
        @keyframes maskSweep {
          0% { 
            -webkit-mask-position: 0 -50vh, -50vw 0; 
            mask-position: 0 -50vh, -50vw 0; 
          }
          100% { 
            -webkit-mask-position: 0 150vh, 150vw 0; 
            mask-position: 0 150vh, 150vw 0; 
          }
        }

        .animated-bg-container {
          background-color: #121212;
          position: relative;
        }

        /* Base Faint Grid */
        .animated-bg-container::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: panGrid 4s linear infinite;
          z-index: 0;
          pointer-events: none;
        }

        /* Sweeping Glow Grid */
        .animated-bg-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(133, 147, 240, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(133, 147, 240, 0.4) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 0;
          pointer-events: none;
          
          -webkit-mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 50%, transparent 100%),
            linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, transparent 100%);
          mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 50%, transparent 100%),
            linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, transparent 100%);
            
          -webkit-mask-size: 100% 40vh, 40vw 100%;
          mask-size: 100% 40vh, 40vw 100%;
          
          -webkit-mask-repeat: no-repeat, no-repeat;
          mask-repeat: no-repeat, no-repeat;
          
          animation: panGrid 4s linear infinite, maskSweep 6s linear infinite;
        }
      `}} />

      <main
        className="max-w-[1200px] mx-auto px-4 pt-[100px] pb-16 grid relative z-10"
        style={{
          gridTemplateColumns: "500px 1fr",
          columnGap: CONFIG.textToCardsGap,
          alignItems: "start",
        }}
      >
        
        {/* LEFT SIDE: BIG TEXT */}
        <div 
          className="self-start flex flex-col" 
          style={{ paddingTop: CONFIG.textPaddingTop, paddingLeft: CONFIG.textPaddingLeft }}
        >
          <h1 
            className={`${vinaSans.className} uppercase tracking-tight`}
            style={{ lineHeight: "0.85" }}
          >
            <span
              style={{
                display: "block",
                fontSize: CONFIG.letsSize,
                marginTop: CONFIG.letsMarginTop,
                marginLeft: CONFIG.letsMarginLeft,
                color: CONFIG.letsColor,
              }}
            >
              LET'S
            </span>
            <span
              style={{
                display: "block",
                fontSize: CONFIG.connectSize,
                marginTop: CONFIG.connectMarginTop,
                marginLeft: CONFIG.connectMarginLeft,
                color: CONFIG.connectColor,
              }}
            >
              CONNECT.
            </span>
          </h1>

          {/* Accent bar, matching the reference layout */}
          <div className="w-full max-w-[460px] h-[44px] bg-[#E6FF2B] mt-10 rounded-[2px]" />
        </div>

        {/* RIGHT SIDE: 8 CARDS GRID */}
        <div 
          className="grid grid-cols-4" 
          style={{ 
            paddingTop: CONFIG.cardsPaddingTop,
            paddingRight: CONFIG.cardsPaddingRight,
            gap: CONFIG.cardGap,
            gridTemplateRows: CONFIG.gridTemplateRows,
          }}
        >
          {contactLinks.map((item, i) => {
            
            const isTopIcon = item.icon && item.iconPosition === "top";
            const isRightIcon = item.icon && item.iconPosition === "absolute-right";
            
            const isAutoCenter = !item.titleMarginLeft;
            
            const circleClasses = item.hasCircle 
              ? `rounded-full bg-[#8593F0]/10 border border-[#8593F0]/30 flex items-center justify-center group-hover:border-[#8593F0] group-hover:bg-[#8593F0]/20 transition-all duration-300 shadow-md` 
              : "";
              
            const iconColorClass = item.hasCircle 
              ? "text-[#8593F0]" 
              : (item.link ? "text-white group-hover:text-[#8593F0]" : "text-[#8593F0]");

            const CardContent = (
              <BentoCard 
                className={`bg-[#2a2a2a]/90 backdrop-blur-md border border-[#4d4d4d] group-hover:border-[#8593F0] w-full h-full flex flex-col transition-colors duration-300 overflow-hidden relative ${isAutoCenter ? 'items-center justify-center p-4' : ''}`}
              >
                <div className="glass-sweep" />

                {item.topRightText && (
                  <div className={`absolute top-[20px] right-[24px] text-[#a1a1aa] tracking-widest text-[10px] md:text-[12px] uppercase ${alata.className}`}>
                    {item.topRightText}
                  </div>
                )}

                {/* 1A. Icon (Top Position) */}
                {isTopIcon && (
                  <div className={`w-full flex justify-start ${item.iconMarginTop} ${item.iconMarginLeft} ${iconColorClass} transition-colors duration-300 relative z-10`}>
                    <div className={`${item.iconSize} ${circleClasses}`}>{item.icon}</div>
                  </div>
                )}

                {/* 1B. Icon (Right Position) */}
                {isRightIcon && (
                  <div className={`absolute left-0 top-0 ${item.iconMarginTop} ${item.iconMarginLeft} ${iconColorClass} transition-colors duration-300 z-10`}>
                    <div className={`${item.iconSize} ${circleClasses}`}>{item.icon}</div>
                  </div>
                )}

                {/* 1C. Icon (Auto Center for last 4 cards) */}
                {item.icon && !isTopIcon && !isRightIcon && (
                  <div className={`w-full flex justify-center mb-2 ${item.iconMarginTop || ''} ${item.iconMarginLeft || ''} ${iconColorClass} transition-colors duration-300 relative z-10`}>
                    <div className={`${item.iconSize} ${circleClasses}`}>{item.icon}</div>
                  </div>
                )}

                {/* 2. Title */}
                {item.title && (
                  <h3 className={`${item.titleFont} ${item.titleSize} ${item.titleColor || 'text-[#8593F0]'} ${item.titleMarginTop || ''} ${item.titleMarginLeft || ''} tracking-widest uppercase break-words w-full [text-shadow:0_0_10px_currentColor] no-underline ${isAutoCenter ? 'text-center' : 'text-left relative z-10'}`}>
                    {item.title}
                  </h3>
                )}
                
                {/* 3. Value */}
                {item.value && (
                  <p 
                    className={`${item.valueFont} ${item.valueSize} ${item.valueColor || (item.link ? 'text-white group-hover:text-[#8593F0]' : 'text-white')} ${item.valueMarginTop || ''} ${item.valueMarginLeft || ''} tracking-wide break-words leading-tight transition-colors duration-300 w-full no-underline ${isAutoCenter ? 'text-center' : 'text-left relative z-10'}`}
                    style={item.title === "CURRENT LOCATION" ? { color: 'white' } : undefined}
                  >
                    {item.value}
                  </p>
                )}

                {/* 4. Subtitle */}
                {item.subtitle && (
                  <p className={`${alata.className} text-[#a1a1aa] ${item.subtitleSize} ${item.subtitleMarginTop || ''} ${item.subtitleMarginLeft || ''} tracking-wide break-words whitespace-normal leading-tight w-[70%] text-left relative z-10 no-underline`}>
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
                    className="block w-full h-full cursor-pointer group hover:scale-[1.02] transition-transform duration-300 no-underline hover:no-underline focus:outline-none"
                    style={{ textDecoration: 'none', color: 'inherit' }}
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

      {/* Spacer to keep the Footer from touching the cards above it */}
      <div className="w-full h-[60px] md:h-[80px]" />

      <Footer />
    </div>
  );
}