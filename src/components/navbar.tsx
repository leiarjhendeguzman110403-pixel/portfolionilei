"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Vina_Sans, Special_Gothic_Expanded_One, Rubik_Mono_One } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
const specialGothic = Special_Gothic_Expanded_One({ weight: "400", subsets: ["latin"], display: "swap" });
const rubikOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Navbar() {
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
    // 👇 Changed w-full to w-[100vw]. This locks it to the monitor's exact center forever!
    <header className="fixed top-0 left-0 w-[100vw] flex items-center px-6 py-6 md:px-10 md:py-8 z-[99999]">
      <div className="flex items-center gap-4 md:gap-6">
        <Image src="/images/about/lalogo.png" alt="Logo" width={90} height={90} className="object-contain" priority />
        <div className="leading-none flex flex-col items-start justify-center mt-1">
          <span className={`text-white tracking-widest text-[40px] md:text-[50px] ${specialGothic.className}`}>LEI</span>
          <span className={`text-[#f55b14] tracking-wider text-[30px] md:text-[50px] mt-[-5px] md:mt-[-10px] ${vinaSans.className}`}>ARJHEN</span>
        </div>
      </div>

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
        <Link href="/" onClick={() => setActiveTab("HOME")} className={rubikOne.className} style={getLinkStyle("HOME")}>HOME</Link>
        <Link href="/about" onClick={() => setActiveTab("ABOUT")} className={rubikOne.className} style={getLinkStyle("ABOUT")}>ABOUT</Link>
        <button type="button" onClick={() => setActiveTab("PROJECTS")} className={rubikOne.className} style={getLinkStyle("PROJECTS")}>PROJECTS</button>
        <button type="button" onClick={() => setActiveTab("CONTACT")} className={rubikOne.className} style={getLinkStyle("CONTACT", true)}>CONTACT ME</button>
      </nav>
    </header>
  );
}