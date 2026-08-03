"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
    gridGap: "20px",
    tiktokProfile: {
      imageMaxWidth: "610px",
      imageBottomMargin: "15px",
      buttonBottomMargin: "10px",
      buttonPaddingRight: "9px"
    },
    videoGrid: {
      columnGap: "7px",
      rowGap: "15px"
    }
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
      description: "Developed the front-end of a comprehensive business membership platform for the Philippine Chamber of Commerce and Industry (Valenzuela Chapter). Built responsive, user-friendly interfaces and integrated APIs to deliver a seamless user experience. The platform utilizes a headless architecture, decoupling the frontend from the backend to improve scalability, flexibility, and maintainability.",
      images: [
        "/images/about/basta1.png", "/images/about/basta2.png", "/images/about/basta3.png",
        "/images/about/basta4.png", "/images/about/basta5.png", "/images/about/basta6.png",
        "/images/about/basta7.png", "/images/about/basta8.png", "/images/about/basta9.png",
        "/images/about/basta10.png"
      ],
      contributions: [
        "Developed responsive and user-friendly web pages using Laravel, Blade, CSS, and JavaScript.",
        "Built the website based on the client's preferred layout and design, ensuring the final result matched their vision.",
        "Integrated frontend pages with backend functionality to display dynamic content smoothly.",
        "Maintained a clean, consistent, and easy-to-use interface across different pages and devices.",
      ],
      techStack: ["LARAVEL", "BOOTSTRAP", "PHP", "REST APIS", "MIDDLEWARE", "RBAC", "VS CODE", "FIGMA"]
    },
    { 
      id: 3, 
      title: "8CON ACADEMY WEBSITE", 
      category: "INTERN - FRONT-END",
      demoLink: "https://8con-academy-website-batch6.vercel.app/",
      description: "Developed the front-end of a corporate website for 8Con Academy, a Forex trading company, during my On-the-Job Training. Built responsive and user-friendly interfaces using React and Vite, creating a modern platform that showcases the company's services, internship opportunities, and student registration process.",
      images: [
        "/images/about/PCCI1.png", "/images/about/PCCI2.png", "/images/about/PCCI3.png",
        "/images/about/PCCI4.png", "/images/about/PCCI5.png", "/images/about/PCCI6.png",
        "/images/about/PCCI7.png", "/images/about/PCCI8.png", "/images/about/PCCI9.png",
        "/images/about/PCCI10.png", "/images/about/PCCI11.png", "/images/about/PCCI12.png",
        "/images/about/PCCI13.png", "/images/about/PCCI14.png", "/images/about/PCCI15.png"
      ],
      contributions: [
        "Developed responsive and user-friendly frontend interfaces using React, Vite, CSS, and JavaScript.",
        "Redesigned the UI of individual sub-brand pages, and the student registration page to create a more modern and intuitive user experience.",
        "Implemented a carousel feature to showcase the company's sub-brands, enhancing the visual appeal and interactivity of the website.",
        "Built pages that showcased the company's brand, services, internship programs, and career opportunities.",
        "Worked closely with the design and development team to ensure responsive layouts, consistent design, and smooth frontend functionality across different devices."
      ],
      techStack: ["REACT", "VITE", "JAVASCRIPT", "CSS", "VS CODE", "FIGMA"]
    },
    { 
      id: 4, 
      title: "GRAPHIC DESIGNS", 
      category: "GRAPHIC DESIGNER - FREELANCE",
      description: "Designed a wide range of creative visual materials for freelance clients, personal projects, and relatives, including logos, posters, brochures, invitations, social media graphics, and web UI designs. Focused on creating visually appealing, purpose-driven designs tailored to each project's goals while maintaining consistency, creativity, and attention to detail.",
      images: [
        "/images/about/alicia.png", "/images/about/bro1.png", "/images/about/bro2.png",
        "/images/about/Cali.png", "/images/about/CYPRIAN.png", "/images/about/ESCAPEROOM.png",
        "/images/about/fatima.png", "/images/about/Join1.png", "/images/about/join2.png",
        "/images/about/logo1.png", "/images/about/logo2.png", "/images/about/logo3.png",
        "/images/about/logo4.png", "/images/about/logo5.png",
        "/images/about/solar1.png", "/images/about/solar2.png", "/images/about/solar3.png",
        "/images/about/solar4.png", "/images/about/solar5.png", "/images/about/solar6.png",
        "/images/about/solar7.png", "/images/about/solar8.png", "/images/about/solar9.png",
        "/images/about/solar10.png", "/images/about/solar11.png", "/images/about/solar12.png",
        "/images/about/solar13.png", "/images/about/solar14.png",
        "/images/about/story1.png", "/images/about/story2.png", "/images/about/story3.png",
        "/images/about/story4.png", "/images/about/story5.png", "/images/about/story6.png",
        "/images/about/story7.png", "/images/about/story8.png", "/images/about/story9.png",
        "/images/about/story10.png", "/images/about/story11.png",
        "/images/about/workshop.png",
        "/images/about/zayn1.png", "/images/about/zayn2.png"
      ],
    },
    { 
      id: 5, 
      title: "VIDEO EDITS", 
      category: "VIDEO EDITOR - PERSONAL/SCHOOL PROJECT",
      description: "Edited high-quality videos for personal, academic, and freelance projects, adapting each edit to its intended audience and objective. Produced short-form promotional videos for TikTok Shop affiliate marketing, using creative editing techniques and attention-grabbing visuals to attract target audiences, showcase products effectively, and drive viewer interest.",
      profileImage: "/images/about/tiktok.png",
      profileLink: "https://www.tiktok.com/@leiarjhen_",
      images: [
        "/videos/promo1.mov", "/videos/promo2.mov", "/videos/promo3.mov",
        "/videos/promo4.mov", "/videos/promo5.mov", "/videos/promo6.mov"
      ],
    },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [collageGroupIndex, setCollageGroupIndex] = useState<Record<string, number>>({ solar: 0, story: 0 });
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  // Video grid interaction state: which item (by key) is currently hovered/playing
  const [hoveredVideoKey, setHoveredVideoKey] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleVideoMouseEnter = (key: string) => {
    setHoveredVideoKey(key);
    const vid = videoRefs.current[key];
    if (vid) {
      vid.muted = false; // play with sound on hover
      vid.currentTime = 0;
      // Some browsers block unmuted autoplay unless the user has already interacted
      // with the page (a hover alone doesn't always count). If it's blocked, fall
      // back to muted playback so the preview still moves instead of throwing.
      vid.play().catch(() => {
        vid.muted = true;
        vid.play().catch(() => {});
      });
    }
  };

  const handleVideoMouseLeave = (key: string) => {
    setHoveredVideoKey(null);
    const vid = videoRefs.current[key];
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
      vid.muted = true;
    }
  };

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  // Portals need document.body, which only exists client-side after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeLightbox = () => setLightbox(null);

  const showPrevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : prev);
  };

  const showNextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev);
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const isDetailedLayout = selectedProject.id <= 3;
  const isCollageLayout = selectedProject.id === 4 || selectedProject.id === 5;

  // Groups consecutive series (solar1..N, story1..N) into single clickable stacked tiles
  type CollageItem = { key: string; type: "group" | "single"; images: string[] };

  const getCollageItems = (images: string[]): CollageItem[] => {
    const solarRegex = /solar(\d+)\.png$/i;
    const storyRegex = /story(\d+)\.png$/i;

    const sortByNumber = (arr: string[], regex: RegExp): string[] => 
      [...arr].sort((a, b) => {
        const numA = parseInt(a.match(regex)?.[1] ?? "0", 10);
        const numB = parseInt(b.match(regex)?.[1] ?? "0", 10);
        return numA - numB;
      });

    const solarImgs = sortByNumber(images.filter(img => solarRegex.test(img)), solarRegex);
    const storyImgs = sortByNumber(images.filter(img => storyRegex.test(img)), storyRegex);

    const items: CollageItem[] = [];
    let solarAdded = false;
    let storyAdded = false;

    images.forEach(img => {
      if (solarRegex.test(img)) {
        if (!solarAdded) {
          items.push({ key: "solar", type: "group", images: solarImgs });
          solarAdded = true;
        }
        return;
      }
      if (storyRegex.test(img)) {
        if (!storyAdded) {
          items.push({ key: "story", type: "group", images: storyImgs });
          storyAdded = true;
        }
        return;
      }
      items.push({ key: img, type: "single", images: [img] });
    });

    return items;
  };

  const collageItems = isCollageLayout ? getCollageItems(selectedProject.images) : [];

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

        @keyframes cardFadeInUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .card-entrance {
          opacity: 0;
          animation: cardFadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes bigCardSwitch {
          0% { opacity: 0; transform: translateY(10px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .big-card-switch {
          animation: bigCardSwitch 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes lightboxBackdropIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes lightboxZoomIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }

        .lightbox-backdrop {
          animation: lightboxBackdropIn 0.25s ease-out;
        }

        .lightbox-image-zoom {
          animation: lightboxZoomIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
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
                      className={`card-entrance bg-[#202020] flex items-center transition-all duration-300 cursor-pointer group border-[3px] hover:-translate-y-[3px] active:translate-y-0 active:scale-[0.98] ${
                        isSelected 
                          ? 'border-[#8593F0]/50' 
                          : 'border-[#4d4d4d] hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]'
                      }`}
                      style={{ 
                        height: CONFIG.smallCards.height,
                        padding: CONFIG.smallCards.padding,
                        borderRadius: "10px",
                        animationDelay: `${index * 80}ms`,
                        boxShadow: isSelected
                          ? "inset 2px 2px 5px rgba(0,0,0,0.6), inset -2px -2px 5px rgba(255,255,255,0.05), 0 0 20px rgba(133,147,240,0.25)"
                          : "inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px rgba(255,255,255,0.08), 0 3px 6px rgba(0,0,0,0.35)"
                      }}
                    >
                      <div className="flex flex-row items-center w-full gap-4">
                        
                        <div 
                          className={`${vinaSans.className} transition-colors block ${isSelected ? 'text-[#8593F0]' : 'text-[#4d4d4d] group-hover:text-white'}`}
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
                            className={`${alata.className} tracking-[0.2em] uppercase block transition-colors text-white`}
                            style={{ 
                              fontSize: CONFIG.smallCardText.categoryFontSize,
                              paddingLeft: CONFIG.smallCardText.categoryPaddingLeft,
                              marginTop: CONFIG.smallCardText.categoryPaddingTop
                            }}
                          >
                            {proj.category}
                          </div>
                          <div 
                            className={`${delaGothic.className} truncate block transition-colors text-white`}
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
                  key={selectedProject.id}
                  className="big-card-switch bg-[#202020] border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)] flex flex-col"
                  style={{ 
                    height: CONFIG.bigCard.height,
                    minHeight: CONFIG.bigCard.minHeight,
                    padding: CONFIG.bigCard.padding,
                    borderRadius: "10px",
                    boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px rgba(255,255,255,0.08), 0 3px 6px rgba(0,0,0,0.35)"
                  }}
                >
                  
                  <div className="flex justify-between items-start mb-6 shrink-0 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className={`${alata.className} text-[#8593F0] tracking-[0.2em] uppercase text-xs block`}>
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
                        className={`${alata.className} shrink-0 bg-[#202020] text-[#8593F0] mt-1 rounded-[6px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border border-[#8593F0] hover:shadow-[0_0_15px_rgba(133,147,240,0.4)] flex items-center justify-center gap-2`}
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
                  
                  {/* SECTION 1: PROJECT OVERVIEW */}
                  <div className="mb-8 shrink-0">
                    <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-2 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Project Overview</h3>
                    <p className={`${alata.className} text-white/80 text-sm leading-relaxed text-justify mt-2`}>
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* SECTION 2: PROJECT GALLERY */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="relative z-20 flex flex-col w-full mb-8 shrink-0 group">
                      <h3 className={`${alata.className} text-[#898A8D] text-[11px] tracking-[0.15em] uppercase mb-4 border-b border-[#4d4d4d] pb-2 inline-block w-full`}>Project Gallery</h3>

                      {isCollageLayout ? (
                        /* Collage Layout — grows with content, page scrolls (no inner scroll container) */
                        <div className="w-full">
                          {selectedProject.profileImage && (
                            <div className="w-full mx-auto" style={{ maxWidth: CONFIG.tiktokProfile.imageMaxWidth, marginBottom: CONFIG.tiktokProfile.imageBottomMargin }}>
                              {selectedProject.profileLink && (
                                <div className="flex justify-end" style={{ marginBottom: CONFIG.tiktokProfile.buttonBottomMargin, paddingRight: CONFIG.tiktokProfile.buttonPaddingRight }}>
                                  <a
                                    href={selectedProject.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${alata.className} flex items-center justify-center gap-2 w-fit rounded-[6px] bg-[#202020] text-[#8593F0] font-bold tracking-[0.15em] uppercase text-xs transition-all duration-300 border border-[#8593F0] hover:shadow-[0_0_15px_rgba(133,147,240,0.4)]`}
                                    style={{ padding: "8px 16px" }}
                                  >
                                    View TikTok Profile
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"></path>
                                    </svg>
                                  </a>
                                </div>
                              )}

                              <button
                                type="button"
                                onClick={() => openLightbox([selectedProject.profileImage!], 0)}
                                className="appearance-none block w-full text-left p-0 m-0 border-0 bg-transparent rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                              >
                                <Image
                                  src={selectedProject.profileImage}
                                  alt={`${selectedProject.title} TikTok profile`}
                                  width={800}
                                  height={800}
                                  sizes="(max-width: 640px) 90vw, 610px"
                                  className="w-full h-auto object-contain rounded-xl pointer-events-none"
                                  style={{ borderRadius: "12px" }}
                                />
                              </button>
                            </div>
                          )}

                          <div className="columns-2 sm:columns-3" style={{ columnGap: CONFIG.videoGrid.columnGap }}>
                            {collageItems.map((item) => {
                              const isGroup = item.type === "group";
                              const activeIdx = isGroup ? (collageGroupIndex[item.key] ?? 0) : 0;
                              const currentImg = item.images[activeIdx];
                              const fixedImgSrc = currentImg.startsWith('/') ? currentImg : `/${currentImg}`;
                              const isImage = currentImg.toLowerCase().match(/\.(png|jpe?g|gif|webp|svg)$/);
                              const isVideo = currentImg.toLowerCase().match(/\.(mp4|webm|mov|ogv|ogg)$/);

                              return (
                                <button
                                  key={item.key}
                                  type="button"
                                  onClick={() => openLightbox(item.images, activeIdx)}
                                  onMouseEnter={() => isVideo && handleVideoMouseEnter(item.key)}
                                  onMouseLeave={() => isVideo && handleVideoMouseLeave(item.key)}
                                  className="appearance-none block w-full text-left p-0 m-0 border-0 bg-transparent break-inside-avoid rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.07] cursor-pointer relative"
                                  style={{ marginBottom: CONFIG.videoGrid.rowGap }}
                                >
                                  {isImage ? (
                                    <Image 
                                      src={fixedImgSrc} 
                                      alt={`${selectedProject.title} artwork ${item.key}`} 
                                      width={400}
                                      height={400}
                                      sizes="(max-width: 640px) 50vw, 33vw"
                                      className="w-full h-auto object-cover rounded-xl pointer-events-none"
                                      style={{ borderRadius: "12px" }}
                                    />
                                  ) : isVideo ? (
                                    <div className="relative w-full aspect-square">
                                      <video
                                        ref={(el) => { videoRefs.current[item.key] = el; }}
                                        src={fixedImgSrc}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover rounded-xl pointer-events-none"
                                        style={{ borderRadius: "12px" }}
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm">
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex items-center justify-center w-full aspect-square pointer-events-none">
                                      <span className={`${alata.className} text-[#4d4d4d] text-xs tracking-widest uppercase`}>{currentImg} Placeholder</span>
                                    </div>
                                  )}

                                  {isGroup && (
                                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-0.5 pointer-events-none">
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8593F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="13" height="13" rx="2"></rect>
                                        <path d="M8 8h13v13H8z"></path>
                                      </svg>
                                      <span className={`${alata.className} text-white text-[10px]`}>{activeIdx + 1}/{item.images.length}</span>
                                    </div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <>
                      {/* Image Viewer Container */}
                      <div 
                        className="relative w-full rounded-lg overflow-hidden border-[0.1px] border-[#2a2a2a] bg-[#1a1a1a]" 
                        style={{ height: CONFIG.bigCard.carouselMaxHeight }}
                      >
                        {selectedProject.images.map((img, i) => {
                          const fixedImgSrc = img.startsWith('/') ? img : `/${img}`;
                          const isImage = img.toLowerCase().match(/\.(png|jpe?g|gif|webp|svg)$/);

                          const offset = i - carouselIndex;
                          const isCenter = offset === 0;
                          const isAdjacent = Math.abs(offset) === 1;
                          const scale = isCenter ? 1 : isAdjacent ? 0.8 : 0.65;
                          const blur = isCenter ? 0 : isAdjacent ? 6 : 12;
                          const opacity = isCenter ? 1 : isAdjacent ? 0.4 : 0;
                          const zIndex = isCenter ? 20 : isAdjacent ? 10 : 0;

                          return (
                            <div 
                              key={i} 
                              onClick={isCenter ? () => openLightbox(selectedProject.images, i) : undefined}
                              className={`absolute top-0 left-1/2 h-full w-full flex justify-center items-center p-4 transition-all duration-500 ease-in-out ${isCenter ? 'cursor-pointer' : ''}`}
                              style={{
                                transform: `translateX(-50%) translateX(${offset * 62}%) scale(${scale})`,
                                filter: `blur(${blur}px)`,
                                opacity,
                                zIndex: isCenter ? Math.max(zIndex, 30) : zIndex,
                                pointerEvents: isCenter ? "auto" : "none",
                              }}
                            >
                              {isImage ? (
                                <div className="relative w-full h-full">
                                  <Image 
                                    src={fixedImgSrc} 
                                    alt={`${selectedProject.title} screenshot ${i + 1}`} 
                                    fill
                                    sizes="(max-width: 1200px) 100vw, 800px"
                                    className="object-contain drop-shadow-xl rounded-lg pointer-events-none"
                                  />
                                </div>
                              ) : (
                                <div className="flex items-center justify-center w-full h-full pointer-events-none">
                                  <span className={`${alata.className} text-[#4d4d4d] tracking-widest uppercase`}>{img} Placeholder</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Controls */}
                      {selectedProject.images.length > 1 && (
                        <div className="relative flex items-center justify-between w-full" style={{ marginTop: "10px" }}>
                          <button 
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.max(0, prev - 1)); }}
                            className="group/btn relative z-10 flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-[#202020] text-[#8593F0] border-2 border-[#8593F0]/70 transition-all duration-300 hover:bg-[#8593F0] hover:text-[#202020] hover:border-[#8593F0] hover:shadow-[0_0_25px_rgba(133,147,240,0.6)] hover:scale-110 active:scale-90 disabled:opacity-20 disabled:pointer-events-none cursor-pointer mt-3"
                            style={{ boxShadow: "0 0 12px rgba(133,147,240,0.25), inset 1px 1px 3px rgba(0,0,0,0.4)" }}
                            disabled={carouselIndex === 0}
                            aria-label="Previous image"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:-translate-x-0.5">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                          </button>
                          
                          {/* Dot Indicators — sliding carousel window */}
                          {(() => {
                            const DOT_STEP = 22;    // px between dot centers
                            const MAX_VISIBLE = 7;   // how many dots show at once
                            const total = selectedProject.images.length;
                            const containerWidth = Math.min(total, MAX_VISIBLE) * DOT_STEP;
                            const trackWidth = total * DOT_STEP;
                            const centerOffset = Math.floor(MAX_VISIBLE / 2) * DOT_STEP;
                            const rawTranslate = carouselIndex * DOT_STEP - centerOffset;
                            const maxTranslate = Math.max(0, trackWidth - containerWidth);
                            const translate = Math.max(0, Math.min(rawTranslate, maxTranslate));
                            const needsFade = total > MAX_VISIBLE;
                            const fadeMask = "linear-gradient(to right, transparent 0, black 12px, black calc(100% - 12px), transparent 100%)";

                            return (
                              <div
                                className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
                                style={{
                                  width: `${containerWidth}px`,
                                  maskImage: needsFade ? fadeMask : undefined,
                                  WebkitMaskImage: needsFade ? fadeMask : undefined,
                                }}
                              >
                                <div
                                  className="flex items-center transition-transform duration-300 ease-out"
                                  style={{ transform: `translateX(-${translate}px)`, width: `${trackWidth}px` }}
                                >
                                  {selectedProject.images.map((_, i) => {
                                    const isActiveDot = i === carouselIndex;
                                    return (
                                      <button
                                        key={i}
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); setCarouselIndex(i); }}
                                        aria-label={`Go to image ${i + 1}`}
                                        className="appearance-none bg-transparent border-none outline-none p-0 m-0 cursor-pointer group/dot flex items-center justify-center shrink-0"
                                        style={{ width: `${DOT_STEP}px`, height: "20px" }}
                                      >
                                        <span 
                                          className="transition-all duration-300 group-hover/dot:bg-[#8593F0]/60"
                                          style={{
                                            display: "block",
                                            borderRadius: "50%",
                                            width: isActiveDot ? "10px" : "8px",
                                            height: isActiveDot ? "10px" : "8px",
                                            backgroundColor: isActiveDot ? "#8593F0" : "#4d4d4d",
                                            boxShadow: isActiveDot ? "0 0 8px rgba(133,147,240,0.8)" : "none",
                                          }}
                                        />
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}
                          
                          <button 
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(prev => Math.min(selectedProject.images.length - 1, prev + 1)); }}
                            className="group/btn relative z-10 flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-[#202020] text-[#8593F0] border-2 border-[#8593F0]/70 transition-all duration-300 hover:bg-[#8593F0] hover:text-[#202020] hover:border-[#8593F0] hover:shadow-[0_0_25px_rgba(133,147,240,0.6)] hover:scale-110 active:scale-90 disabled:opacity-20 disabled:pointer-events-none cursor-pointer mt-3"
                            style={{ boxShadow: "0 0 12px rgba(133,147,240,0.25), inset 1px 1px 3px rgba(0,0,0,0.4)" }}
                            disabled={carouselIndex === selectedProject.images.length - 1}
                            aria-label="Next image"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                        </div>
                      )}
                        </>
                      )}
                    </div>
                  )}
                  
                  {isDetailedLayout && (
                    <div className="flex flex-col gap-8 shrink-0">
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
                                className="rounded-[7px] bg-[#2a2a2a] text-[#8593F0] transition-all duration-300 border-[0.5px] border-[#8593F0] hover:shadow-[0_0_15px_rgba(133,147,240,0.4)] flex items-center justify-center cursor-default"
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

      {/* Lightbox — enlarged image view, with nav buttons when viewing a group */}
      {/* Rendered via portal into document.body so it can never get trapped by an
          ancestor's transform/filter (e.g. a page-transition wrapper in layout.tsx),
          which is what breaks `position: fixed` and makes the overlay invisible. */}
      {lightbox && mounted && createPortal(
        <div 
          className="lightbox-backdrop"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            padding: "16px",
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute", top: "16px", right: "16px", zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "40px", height: "40px", borderRadius: "9999px",
              backgroundColor: "#202020", color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
            }}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {lightbox.images.length > 1 && (
            <button
              onClick={showPrevLightboxImage}
              style={{
                position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", zIndex: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "48px", height: "48px", borderRadius: "9999px",
                backgroundColor: "#202020", color: "#8593F0",
                border: "2px solid rgba(133,147,240,0.7)", cursor: "pointer",
              }}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* CAROUSEL STRIP */}
          <div
            style={{
              position: "relative",
              width: "90vw",
              maxWidth: "900px",
              height: "85vh",
              overflow: "hidden",
              borderRadius: "12px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                transform: `translateX(-${lightbox.index * 100}%)`,
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {lightbox.images.map((src, i) => {
                const fixedSrc = src.startsWith("/") ? src : `/${src}`;
                const isVideo = fixedSrc.toLowerCase().match(/\.(mp4|webm|mov|ogv|ogg)$/);

                return (
                  <div
                    key={i}
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isVideo ? (
                      <video
                        key={fixedSrc}
                        src={fixedSrc}
                        controls={i === lightbox.index}
                        autoPlay={i === lightbox.index}
                        playsInline
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px" }}
                      />
                    ) : (
                      <img
                        src={fixedSrc}
                        alt="Enlarged view"
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {lightbox.images.length > 1 && (
            <button
              onClick={showNextLightboxImage}
              style={{
                position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", zIndex: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "48px", height: "48px", borderRadius: "9999px",
                backgroundColor: "#202020", color: "#8593F0",
                border: "2px solid rgba(133,147,240,0.7)", cursor: "pointer",
              }}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {lightbox.images.length > 1 && (
            <div
              style={{
                position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)",
                backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
                borderRadius: "9999px", padding: "4px 12px",
              }}
            >
              <span className={`${alata.className} text-white text-xs tracking-wide`}>
                {lightbox.index + 1} / {lightbox.images.length}
              </span>
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}