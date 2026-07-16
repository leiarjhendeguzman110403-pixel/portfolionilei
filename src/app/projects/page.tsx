"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // <-- Added Next.js Image component
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans, Dela_Gothic_One, Alata } from "next/font/google";

const vinaSans = Vina_Sans({ 
  weight: "400",
  subsets: ["latin"] 
});

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"]
});

export default function ProjectsPage() {
  
  // --- ADJUSTMENT SECTION ---
  const CONFIG = {
    h1: {
      marginTop: "-10px", 
      paddingLeft: "0px",
      fontSize: "clamp(40px, 8vw, 80px)",
    },
    p: {
      marginTop: "-55px", 
      paddingLeft: "3px",
      fontSize: "clamp(20px, 4vw, 40px)",
    },
    smallCardText: {
      numberFontSize: "75px",
      numberPaddingLeft: "0px",
      numberPaddingTop: "-18px", 
      
      categoryFontSize: "10px",
      categoryPaddingLeft: "5px",
      categoryPaddingTop: "10px",
      
      titleFontSize: "20px", 
      titlePaddingLeft: "5px",
      titlePaddingTop: "2px",
    },
    smallCards: { 
      marginTop: "-30px", 
      width: "500px", 
      height: "70px", 
      gap: "12px", 
      padding: "16px" 
    },
    bigCard: { 
      marginTop: "-30px", 
      height: "auto",
      minHeight: "600px",
      padding: "32px",
      demoButtonFontSize: "12px",
      demoButtonPadding: "8px 16px",
      techStackPadding: "6px 12px",
      techStackGap: "12px",
      carouselMaxHeight: "300px"
    },
    gridGap: "20px"
  };

  const projects = [
    { 
      id: 1, 
      title: "LITTLE-LIONS MONITORING SYSTEM", 
      category: "INTERN - FRONT-END",
      demoLink: "https://little-lion.pages.dev/",
      description: "A specialized administrative platform for a Special Education school — covering full requirements gathering, architecture, and delivery. Built five tailored portals for distinct stakeholder groups with an emphasis on accessibility and clarity. The user interface was engineered using React and polished with responsive CSS within VS Code, ensuring a clean, real-time dashboard for monitoring access logs across various screen sizes.",
      images: [
        "/images/about/little1.png", "/images/about/little2.png", "/images/about/little3.png", 
        "/images/about/little4.png", "/images/about/little5.png", "/images/about/little6.png", 
        "/images/about/little7.png", "/images/about/little8.png", "/images/about/little9.png", 
        "/images/about/little10.png", "/images/about/little11.png", "/images/about/little12.png", 
        "/images/about/little13.png", "/images/about/little14.png", "/images/about/little15.png", 
        "/images/about/little16.png", "/images/about/little17.png", "/images/about/little18.png", 
        "/images/about/little19.png", "/images/about/little20.png"
      ],
      contributions: [
        "Designed accessible, calming frontend interfaces using intentional color palettes (greens and whites) and clear information hierarchies for users including parents with varying technical literacy.",
        "The layout of the website was completely driven by the client's preferences. I made sure to follow their exact requirements and ideas to give them the final look they expected.",
        "Used React, CSS, and VS Code to build and design the website. I made sure all layouts matched exactly what the client wanted and followed their specific vision.",
      ],
      techStack: ["REACT", "FIREBASE FIRESTORE", "FIREBASE AUTH", "JAVA SCRIPT", "CSS", "RBAC", "VS CODE", "FIGMA"]
    },
    { 
      id: 2, 
      title: "PCCI VALENZUELA WEBSITE", 
      category: "INTERN - FRONT-END",
      demoLink: "https://pcci-valenzuela.onrender.com/",
      description: "Worked on the frontend development of a comprehensive membership platform for the Philippine Chamber of Commerce and Industry (PCCI) – Valenzuela Chapter. The platform was built on a headless architecture.",
      images: ["Media 1 (Landing Page)", "Media 2 (Events Page)"],
      contributions: [
        "Developed the frontend for the Contact Us and Events pages.",
        "Implemented responsive, pixel-perfect layouts based on the provided UI/UX designs."
      ],
      techStack: ["NEXT.JS", "TAILWIND CSS", "HEADLESS CMS"]
    },
    { 
      id: 3, 
      title: "8CON ACADEMY WEBSITE", 
      category: "INTERN - FRONT-END",
      demoLink: "https://8con-academy-website-batch6.vercel.app/",
      description: "Contributed to the frontend development of the marketing website for 8Con Academy, a Philippine-based forex trading education company.",
      images: ["Media 1 (Workshops)", "Media 2 (Sub-brands Carousel)"],
      contributions: [
        "Redesigned the workshop registration page based on finalized UI/UX.",
        "Implemented an interactive carousel to highlight sub-brands."
      ],
      techStack: ["REACT", "TAILWIND CSS", "FIGMA", "FRAMER MOTION"]
    },
    { 
      id: 4, 
      title: "GRAPHIC DESIGNS", 
      category: "GRAPHIC DESIGNER - FREELANCE",
      description: "Created visual designs that help clients communicate their ideas and strengthen their brand identity. Designed posters, banners, logos, and custom graphics.",
      images: ["Graphic 1", "Graphic 2"],
    },
    { 
      id: 5, 
      title: "VIDEO EDITS", 
      category: "VIDEO EDITOR - PERSONAL/SCHOOL PROJECT",
      description: "Edited engaging videos for school presentations, academic projects, and promotional social media content. Added smooth transitions and visual effects to enhance quality.",
      images: ["Video Thumbnail 1"],
    },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const isDetailedLayout = selectedProject.id <= 3;

  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedProjectId]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
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

      <div className="relative min-h-screen animated-bg-container text-white overflow-clip z-0">
        
        <div className="relative z-10">
          <Navbar />

          <main className="max-w-[1200px] mx-auto px-4 pt-[100px] pb-24">
            
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

            <div 
              className="flex flex-row items-start relative" 
              style={{ gap: CONFIG.gridGap }}
            >
              
              <div 
                className="flex flex-col sticky top-[120px] z-10 self-start" 
                style={{ 
                  gap: CONFIG.smallCards.gap,
                  width: CONFIG.smallCards.width,
                  marginTop: CONFIG.smallCards.marginTop 
                }}
              >
                {projects.map((proj, index) => {
                  const displayNum = String(index + 1).padStart(2, '0');
                  const isSelected = selectedProjectId === proj.id;
                  
                  return (
                    <BentoCard 
                      key={proj.id} 
                      onClick={() => setSelectedProjectId(proj.id)}
                      className={`bg-[#202020] flex items-center transition-all duration-300 cursor-pointer group border-[0.1px] ${
                        isSelected 
                          ? 'border-[#8593F0] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.03)]' 
                          : 'border-[#2a2a2a] hover:border-white/20 shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.04)] hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.06)]'
                      }`}
                      style={{ 
                        height: CONFIG.smallCards.height,
                        padding: CONFIG.smallCards.padding
                      }}
                    >
                      <div className="flex flex-row items-center w-full gap-4">
                        
                        <div 
                          className={`${vinaSans.className} transition-colors block ${isSelected ? 'text-[#8593F0]' : 'text-[#4d4d4d] group-hover:text-[#E6FF2B]'}`}
                          style={{ 
                            fontSize: CONFIG.smallCardText.numberFontSize,
                            paddingLeft: CONFIG.smallCardText.numberPaddingLeft,
                            marginTop: CONFIG.smallCardText.numberPaddingTop,
                            lineHeight: '0.8'
                          }}
                        >
                          {displayNum}
                        </div>
                        
                        <div className="flex flex-col overflow-hidden w-full">
                          <div 
                            className={`${alata.className} tracking-[0.2em] uppercase block transition-colors ${isSelected ? 'text-[#E6FF2B]' : 'text-[#8593F0]'}`}
                            style={{ 
                              fontSize: CONFIG.smallCardText.categoryFontSize,
                              paddingLeft: CONFIG.smallCardText.categoryPaddingLeft,
                              marginTop: CONFIG.smallCardText.categoryPaddingTop
                            }}
                          >
                            {proj.category}
                          </div>
                          <div 
                            className={`${delaGothic.className} text-white truncate block`}
                            style={{ 
                              fontSize: CONFIG.smallCardText.titleFontSize,
                              paddingLeft: CONFIG.smallCardText.titlePaddingLeft,
                              marginTop: CONFIG.smallCardText.titlePaddingTop
                            }}
                          >
                            {proj.title}
                          </div>
                        </div>
                      </div>
                    </BentoCard>
                  );
                })}
              </div>

              {/* --- RIGHT SIDE: BIG CARD --- */}
              <div 
                className="flex-grow w-full"
                style={{ marginTop: CONFIG.bigCard.marginTop }} 
              >
                <BentoCard 
                  className="bg-[#202020] border-[0.1px] border-[#2a2a2a] shadow-[10px_10px_25px_rgba(0,0,0,0.6),-10px_-10px_25px_rgba(255,255,255,0.03)] flex flex-col animate-in fade-in zoom-in-95 duration-300"
                  style={{ 
                    height: CONFIG.bigCard.height,
                    minHeight: CONFIG.bigCard.minHeight,
                    padding: CONFIG.bigCard.padding
                  }}
                >
                  
                  <div className="flex justify-between items-start mb-6 shrink-0 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className={`${alata.className} text-[#E6FF2B] tracking-[0.2em] uppercase text-xs block`}>
                        {selectedProject.category}
                      </span>
                      <h2 className={`${delaGothic.className} text-2xl md:text-3xl text-white uppercase`}>
                        {selectedProject.title}
                      </h2>
                    </div>

                    {selectedProject.id <= 3 && selectedProject.demoLink && (
                      <a 
                        href={selectedProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${alata.className} shrink-0 bg-[#202020] text-[#ffffff] mt-1 rounded-[6px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border border-[#898A8D] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2`}
                        style={{ 
                          fontSize: CONFIG.bigCard.demoButtonFontSize,
                          padding: CONFIG.bigCard.demoButtonPadding
                        }}
                      >
                        Live Demo
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  {/* SECTION 1: MEDIA CAROUSEL */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="flex flex-col w-full mb-8 shrink-0 group">
                      
                      {/* Image Viewer Container */}
                      <div 
                        className="relative w-full rounded-lg overflow-hidden border-[0.1px] border-[#2a2a2a] bg-[#1a1a1a]" 
                        style={{ height: CONFIG.bigCard.carouselMaxHeight }}
                      >
                        <div 
                          className="flex h-full w-full transition-transform duration-500 ease-in-out" 
                          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                        >
                          {selectedProject.images.map((img, i) => {
                            const fixedImgSrc = img.startsWith('/') ? img : `/${img}`;
                            const isImage = img.toLowerCase().match(/\.(png|jpe?g|gif|webp|svg)$/);

                            return (
                              <div key={i} className="relative w-full h-full shrink-0 flex justify-center items-center p-4">
                                {isImage ? (
                                  <div className="relative w-full h-full">
                                    <Image 
                                      src={fixedImgSrc} 
                                      alt={`${selectedProject.title} screenshot ${i + 1}`} 
                                      fill
                                      sizes="(max-width: 1200px) 100vw, 800px"
                                      className="object-contain pointer-events-none drop-shadow-xl"
                                    />
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center w-full h-full">
                                    <span className={`${alata.className} text-[#4d4d4d] tracking-widest uppercase`}>{img} Placeholder</span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Controls */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-center items-center gap-8 mt-5">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.max(0, prev - 1)); }}
                            className="bg-[#2a2a2a] p-2.5 rounded-full text-[#898A8D] hover:text-[#E6FF2B] hover:border-white transition-all duration-300 border-[0.5px] border-[#4d4d4d] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] disabled:opacity-30 disabled:hover:text-[#898A8D] disabled:hover:border-[#4d4d4d] disabled:hover:shadow-none cursor-pointer"
                            disabled={carouselIndex === 0}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                          </button>
                          
                          <span className={`${alata.className} text-[12px] text-white tracking-[0.2em] font-bold w-12 text-center`}>
                            {carouselIndex + 1} / {selectedProject.images.length}
                          </span>
                          
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.min(selectedProject.images.length - 1, prev + 1)); }}
                            className="bg-[#2a2a2a] p-2.5 rounded-full text-[#898A8D] hover:text-[#E6FF2B] hover:border-white transition-all duration-300 border-[0.5px] border-[#4d4d4d] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] disabled:opacity-30 disabled:hover:text-[#898A8D] disabled:hover:border-[#4d4d4d] disabled:hover:shadow-none cursor-pointer"
                            disabled={carouselIndex === selectedProject.images.length - 1}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {isDetailedLayout ? (
                    <div className="flex flex-col gap-8 shrink-0">
                      <div>
                        <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-2 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Project Overview</h3>
                        <p className={`${alata.className} text-white/80 text-sm leading-relaxed text-justify mt-2`}>
                          {selectedProject.description}
                        </p>
                      </div>

                      {selectedProject.contributions && (
                        <div>
                          <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-4 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Key Contributions</h3>
                          <ul className="flex flex-col" style={{ gap: "15px" }}>
                            {selectedProject.contributions.map((cont, i) => (
                              <li key={i} className="flex items-start">
                                <span 
                                  className={`${vinaSans.className} text-[#8593F0] shrink-0 mt-[2px] text-lg tracking-wider`}
                                  style={{ minWidth: "30px" }}
                                >
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className={`${alata.className} text-white/80 text-sm leading-relaxed`}>{cont}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* SECTION 4: TECH STACK */}
                      {selectedProject.techStack && (
                        <div>
                          <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-4 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Tech Stack & Tools</h3>
                          
                          <div className="flex flex-wrap" style={{ gap: CONFIG.bigCard.techStackGap }}>
                            {selectedProject.techStack.map((tech, i) => (
                              <div 
                                key={i} 
                                className="rounded-[7px] bg-[#2a2a2a] text-[#898A8D] transition-all duration-300 border-[0.5px] border-[#4d4d4d] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center justify-center cursor-default"
                                style={{ padding: CONFIG.bigCard.techStackPadding }}
                              >
                                <span className={`${alata.className} text-[12px] font-bold tracking-[0.15em] uppercase`}>
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="shrink-0">
                      <p className={`${alata.className} text-white/80 text-sm leading-relaxed text-justify mt-2`}>
                        {selectedProject.description}
                      </p>
                    </div>
                  )}

                </BentoCard>
              </div>

            </div>
          </main>

          {/* Spacer to keep the Footer from touching the cards above it */}
          <div className="w-full h-[60px] md:h-[80px]" />

          <Footer />
        </div>
      </div>
    </>
  );
}