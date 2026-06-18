"use client";

import Image from "next/image";
import { useState } from "react";
import { Vina_Sans, Special_Gothic_Expanded_One, Rubik_Mono_One } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
const specialGothic = Special_Gothic_Expanded_One({ weight: "400", subsets: ["latin"], display: "swap" });
const rubikOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Home() {
  const [activeTab, setActiveTab] = useState("HOME");

  const getLinkStyle = (tabName: string, isContact: boolean = false) => {
    const isActive = activeTab === tabName;
    
    return {
      textDecoration: 'none',
      backgroundColor: isContact 
        ? '#f55b14' 
        : (isActive ? 'rgba(255, 255, 255, 0.3)' : 'transparent'),
      color: 'white',
      border: isContact ? 'none' : (isActive ? '2px solid rgba(255, 255, 255, 0.4)' : '2px solid transparent'),
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      padding: isContact ? '12px 20px' : '8px 25px', 
      margin: '0', 
      borderRadius: '9999px',
      fontSize: isContact ? '11px' : '10px',
      letterSpacing: '0px',
      transition: 'all 0.3s ease', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: isActive ? 10 : 1,
      cursor: 'pointer',
      outline: 'none',
    };
  };

  return (
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      {/* Restored Header without the pointer-events traps */}
      <header className="fixed top-0 left-0 w-full flex items-center px-6 py-6 md:px-10 md:py-8 z-[99999]">
        
        <div className="flex items-center gap-4 md:gap-6">
          <Image src="/images/about/lalogo.png" alt="Logo" width={90} height={90} className="object-contain" priority />
          <div className="leading-none flex flex-col items-start justify-center mt-1">
            <span className={`text-white tracking-widest text-[40px] md:text-[50px] ${specialGothic.className}`}>LEI</span>
            <span className={`text-[#f55b14] tracking-wider text-[30px] md:text-[50px] mt-[-5px] md:mt-[-10px] ${vinaSans.className}`}>ARJHEN</span>
          </div>
        </div>

        {/* CENTER: NAV BAR */}
        <nav 
          style={{ 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px', 
            backgroundColor: 'rgba(137, 138, 141, 0.4)', 
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '5px 8px', 
            borderRadius: '9999px', 
            minWidth: '550px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }}
        >
          <button type="button" onClick={() => setActiveTab("HOME")} className={rubikOne.className} style={getLinkStyle("HOME")}>HOME</button>
          <button type="button" onClick={() => setActiveTab("ABOUT")} className={rubikOne.className} style={getLinkStyle("ABOUT")}>ABOUT</button>
          <button type="button" onClick={() => setActiveTab("PROJECTS")} className={rubikOne.className} style={getLinkStyle("PROJECTS")}>PROJECTS</button>
          <button type="button" onClick={() => setActiveTab("CONTACT")} className={rubikOne.className} style={getLinkStyle("CONTACT", true)}>CONTACT ME</button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl flex flex-col items-center justify-center text-center mt-12 pointer-events-none">
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
    </div>
  );
}