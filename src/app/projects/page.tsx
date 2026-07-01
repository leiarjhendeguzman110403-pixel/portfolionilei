"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
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
      height: "600px", // Fixed height to allow scrolling for the 4 sections
      padding: "32px" 
    },
    gridGap: "20px"
  };

  // Expanded projects array with Carousel Images, Contributions, and Tech Stack
  const projects = [
    { 
      id: 1, 
      title: "LITTLE-LIONS MONITORING SYSTEM", 
      category: "INTERN - FRONT-END",
      description: "Contributed to the frontend development of a monitoring platform for a Special Education (SPED) school. Designed to support school administration through tailored portals for Admins, Staff, Teachers, Therapists, and Parents.",
      images: ["Media 1 (Admin Portal)", "Media 2 (Teacher Portal)", "Media 3 (Dashboard)"],
      contributions: [
        "Developed the frontend for the Admin and Teacher portals.",
        "Collaborated on the UI design and implemented responsive interfaces using React and Vite."
      ],
      techStack: ["REACT", "VITE", "TAILWIND CSS", "FIGMA"]
    },
    { 
      id: 2, 
      title: "PCCI VALENZUELA WEBSITE", 
      category: "INTERN - FRONT-END",
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

  // State Management
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const isDetailedLayout = selectedProject.id <= 3; // Applies the 4-section layout to projects 1, 2, 3

  // Reset carousel index when switching projects
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

        /* Custom Scrollbar for Big Card */
        .big-card-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .big-card-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .big-card-scroll::-webkit-scrollbar-thumb {
          background-color: #4d4d4d;
          border-radius: 10px;
        }
        .big-card-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #8593F0;
        }
      `}} />

      <div className="relative min-h-screen animated-bg-container text-white overflow-hidden z-0">
        
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
              className="flex flex-row" 
              style={{ gap: CONFIG.gridGap }}
            >
              
              {/* --- LEFT SIDE: SMALL CARDS --- */}
              <div 
                className="flex flex-col" 
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
                      className={`bg-[#2a2a2a]/80 backdrop-blur-sm flex items-center transition-all duration-300 cursor-pointer group border-2 ${isSelected ? 'border-[#8593F0]' : 'border-[#4d4d4d] hover:border-[#8593F0]'}`}
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
                className="flex-grow"
                style={{ marginTop: CONFIG.bigCard.marginTop }} 
              >
                <BentoCard 
                  className="border-2 border-[#8593F0] bg-[#2a2a2a]/80 backdrop-blur-sm flex flex-col overflow-y-auto big-card-scroll animate-in fade-in zoom-in-95 duration-300"
                  style={{ 
                    height: CONFIG.bigCard.height,
                    padding: CONFIG.bigCard.padding
                  }}
                >
                  <div className="flex flex-col gap-1 mb-6 shrink-0">
                    <span className={`${alata.className} text-[#E6FF2B] tracking-[0.2em] uppercase text-xs block`}>
                      {selectedProject.category}
                    </span>
                    <h2 className={`${delaGothic.className} text-2xl md:text-3xl text-white uppercase`}>
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  {/* SECTION 1: MEDIA CAROUSEL */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="relative w-full h-[220px] bg-[#1a1a1a] rounded-lg mb-8 border border-[#4d4d4d] flex items-center justify-center overflow-hidden shrink-0 group">
                      
                      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                        {selectedProject.images.map((img, i) => (
                          <div key={i} className="w-full h-full shrink-0 flex items-center justify-center bg-[#1a1a1a]">
                            <span className={`${alata.className} text-[#4d4d4d] tracking-widest uppercase`}>{img} Placeholder</span>
                            {/* NOTE: You can replace the span above with an <Image /> component later! */}
                          </div>
                        ))}
                      </div>
                      
                      {/* Carousel Controls */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.max(0, prev - 1)); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden hover:bg-[#8593F0]"
                            disabled={carouselIndex === 0}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.min(selectedProject.images.length - 1, prev + 1)); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden hover:bg-[#8593F0]"
                            disabled={carouselIndex === selectedProject.images.length - 1}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          </button>
                          
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedProject.images.map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${carouselIndex === i ? 'bg-[#E6FF2B]' : 'bg-white/30'}`} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* DYNAMIC CONTENT SWITCH: 4-Sections vs Simple */}
                  {isDetailedLayout ? (
                    <div className="flex flex-col gap-8 shrink-0">
                      
                      {/* SECTION 2: DESCRIPTION */}
                      <div>
                        <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-2 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Project Overview</h3>
                        <p className={`${alata.className} text-white/80 text-sm leading-relaxed text-justify mt-2`}>
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* SECTION 3: KEY CONTRIBUTIONS */}
                      {selectedProject.contributions && (
                        <div>
                          <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-4 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Key Contributions</h3>
                          <ul className="flex flex-col gap-3">
                            {selectedProject.contributions.map((cont, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-[#8593F0] shrink-0 mt-[4px]">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
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
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.techStack.map((tech, i) => (
                              <div key={i} className="py-1.5 px-3 rounded-[6px] bg-[#4d4d4d]/40 border border-[#4d4d4d] flex items-center justify-center">
                                <span className={`${alata.className} text-[10px] text-white tracking-wide uppercase`}>
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  ) : (
                    /* SIMPLE LAYOUT (For Projects 4 & 5) */
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
        </div>
      </div>
    </>
  );
}