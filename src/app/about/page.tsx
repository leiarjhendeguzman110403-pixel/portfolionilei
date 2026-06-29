"use client";

import { useEffect, useState } from "react";
import BentoCard from "@/components/ui/BentoCard";
import Navbar from "@/components/navbar"; 
import { 
  GraduationCap, 
  BrainCircuit, 
  Database,
  Terminal
} from "lucide-react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

/* --- IMPORTED FONTS --- */
import { Vina_Sans, Alata, Dela_Gothic_One, Albert_Sans } from "next/font/google"; 

const vinaSans = Vina_Sans({ 
  weight: "400",
  subsets: ["latin"] 
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"]
});

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
});

const albertSans = Albert_Sans({
  weight: ["400", "500"],
  subsets: ["latin"]
});

const containerVariants: Variants = {
  offscreen: { opacity: 1 }, 
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
  const [activeTab, setActiveTab] = useState("SEMINAR");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // MODAL STATE
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <Navbar /> 
      
      {/* Master Style Block for all CSS Animations */}
      <style>{`
        @keyframes customGlow {
          0% { filter: drop-shadow(0px 0px 15px rgba(133, 147, 240, 0.4)); }
          50% { filter: drop-shadow(0px 0px 40px rgba(133, 147, 240, 0.9)); }
          100% { filter: drop-shadow(0px 0px 15px rgba(133, 147, 240, 0.4)); }
        }
        .glowing-portrait {
          animation: customGlow 5s ease-in-out infinite;
        }

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
      `}</style>

      <div className="w-full max-w-[1000px] mx-auto px-4 pb-24 pt-[40px] relative z-10">
        
        <div className="pl-2 mb-0 flex flex-col">
          <h1 
            className={`${vinaSans.className} text-[#8593F0] uppercase tracking-tight`}
            style={{ 
              fontSize: 'clamp(70px, 10vw, 80px)',
              lineHeight: '0.85'
            }}
          >
            Behind the Pixels.
          </h1>
          
          <p 
            className={`${vinaSans.className} text-white/50 tracking-[0.2em] uppercase pl-2 relative z-20`}
            style={{ 
              fontSize: 'clamp(24px, 4vw, 40px)',
              marginTop: '-60px' 
            }}
          >
            About Me
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-4 auto-rows-[70px] grid-flow-dense -mt-[40px]"
          style={{ gap: '10px' }}
          variants={containerVariants}
          initial={isMobile ? "onscreen" : "offscreen"}
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* CARD 1: PROFILE PICTURE */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-5 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-0 overflow-hidden relative group border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div 
                className="absolute top-0 right-0 z-20 text-left" 
                style={{ 
                  paddingTop: '40px', 
                  paddingRight: '25px', 
                  paddingLeft: '220px', 
                  boxSizing: 'border-box' 
                }}
              >
                <h2 
                  className={`${alata.className} text-white font-bold uppercase tracking-wide`}
                  style={{ fontSize: '40px', lineHeight: '0.8' }} 
                >
                  <span style={{ fontSize: '46px', display: 'block', marginBottom: '5px' }}>LEI ARJHEN</span>
                  DE GUZMAN
                </h2>

                <div style={{ marginTop: '-30px', paddingLeft: '2px' }}>
                  <span 
                    className={`${alata.className} block`} 
                    style={{ color: '#E6FF2B', fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    GRAPHIC DESIGNER | UI/UX DESIGNER
                  </span>
                </div>

                <div style={{ 
                  marginTop: '15px', 
                  borderLeft: '3px solid #8593F0', 
                  paddingLeft: '15px', 
                  maxWidth: '320px' 
                }}>
                  <p 
                    className={`${alata.className} text-white/70 leading-relaxed text-justify`} 
                    style={{ fontSize: '10px', color: '#898A8D' }}
                  >
                    Creative and detail-oriented Graphic Designer, UI/UX Specialist, and Digital Marketer with hands-on experience in educational design, user interface projects, and social media marketing. Skilled in developing engaging visuals, intuitive interfaces, and promotional content that boost audience engagement and brand visibility. Adept at designing educational materials, e-learning applications, and short-form digital content. Strong knowledge of branding, social media trends, and visual communication strategies.
                  </p>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                <Image 
                  src="/images/about/portrait.png" 
                  alt="Paul John Punzal" 
                  fill
                  priority
                  sizes="25vw"
                  style={{ objectPosition: '-60px bottom' }}
                  className="object-contain origin-bottom-left scale-[0.9] glowing-portrait"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className={`${alata.className} text-[9px] text-accent tracking-[1.8px] uppercase bg-black/60 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 hidden sm:block`}>
                  PJ Punzal
                </span>
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 2: ACADEMIC BACKGROUND 1 */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div style={{ position: 'absolute', top: '0px', left: '20px', color: '#898A8D' }}>
                <h2 className={`${alata.className} text-[12px] text-[#898A8D] tracking-[1.5px] uppercase`}>
                  Academic Background
                </h2>
              </div>
              
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '30px', 
                  left: '15px', 
                  right: '15px', 
                  height: '3px', 
                  backgroundColor: '#898A8D',
                }} 
              />
              
              <div style={{ position: 'absolute', top: '30px', left: '15px' }}>
                <p 
                  className={`${alata.className} text-white font-bold uppercase leading-tight`}
                  style={{ fontSize: '26px' }}
                >
                  BS Information-Technology
                </p>
              </div>    

              <div style={{ position: 'absolute', top: '78px', left: '16px', color: '#898A8D' }}>
                <p 
                  className={`${alata.className} text-white/60 uppercase`}
                  style={{ fontSize: '11px', letterSpacing: '0.05em' }}
                >
                  PAMBAYANG DALUBHASAAN NG MARILAO | 2022 - PRESENT
                </p>
              </div>
              
            </BentoCard>
          </motion.div>

          {/* CARD 3: GET TO KNOW ME */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-4 z-20 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div style={{ position: 'absolute', top: '0px', left: '17px', right: '25px',  }}>
                <h3 className={`${alata.className} text-[12px] tracking-[1.8px] uppercase text-[#898A8D]`}>
                  GET TO KNOW ME
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '31px', 
                  left: '15px', 
                  right: '15px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '45px', left: '10px', right: '10px'}}>
                <p className={`${alata.className} text-[13px] md:text-xs text-white/70 leading-relaxed text-justify`}>
                  I am a graphic and UI/UX designer who loves turning abstract ideas into polished pixels. My creative process almost always begins the old-school way—with a blank piece of paper and a sharp pencil. Interestingly, my journey started with the goal of becoming a programmer. But along the way, I realized that true fulfillment comes from alignment, and I chose the path that genuinely makes me happy: shaping how people see and interact with the digital world.
                </p>
              </div>

            </BentoCard>
          </motion.div>

          {/* CARD 4: TECH & DESIGN STACK */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-1 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:p-8 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div style={{ position: 'absolute', top: '5px', left: '20px', color: '#898A8D' }}>
                <span className={`${alata.className} text-[12px] tracking-[1.8px] uppercase text-[#898A8D]`}>
                  TECH & DESIGN STACK
                </span>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '27px', 
                  left: '20px', 
                  right: '20px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '42px', 
                  left: '20px', 
                  right: '20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center', 
                  gap: '12px' 
                }}
              >
                {["FIGMA", "CAPCUT", "CANVA", "VS CODE"].map((tool) => (
                  <div 
                    key={tool} 
                    className="py-2 rounded-[10px] bg-[#4d4d4d] border border-[#4d4d4d] hover:bg-[#5a5a5a] transition-colors flex items-center justify-center cursor-default"
                    style={{ width: '90px', zIndex: 10 }} 
                  >
                    <span className={`${alata.className} text-[10px] text-white tracking-wide uppercase`}>
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* CARD 5: CURRENT RESIDENCE */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full flex flex-col p-5 lg:px-6 overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div style={{ position: 'absolute', top: '-1px', left: '14px' }}>
                <h3 className={`${alata.className} text-[13px] md:text-sm text-[#898A8D] uppercase`}>
                  CURRENT RESIDENCE
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '31px', 
                  left: '14px', 
                  right: '14px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '15px', left: '20px' }}>
                <p className={`${alata.className} text-[30px] md:text-[11px] text-white/50 leading-relaxed`}>
                  MEYCAUAYAN
                </p>
              </div>

              <div style={{ position: 'absolute', top: '20px', left: '17px' }}>
                <p className={`${alata.className} text-[45px] md:text-[11px] text-white/50 leading-relaxed`}>
                  BULACAN 
                </p>
              </div>

            </BentoCard>
          </motion.div>

          {/* CARD 6: CREATIVE CAPABILITIES */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 hover:z-50">
            <BentoCard 
              style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
              className="w-full h-full p-5 lg:px-6 flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
            >
              <div className="glass-sweep" /> 

              <div style={{ position: 'absolute', top: '-1px', left: '13px' }}>
                <h3 className={`${alata.className} text-[13px] md:text-sm text-[#898A8D] uppercase`}>
                  CREATIVE CAPABILITIES
                </h3>
              </div>

              <div 
                style={{ 
                  position: 'absolute', 
                  top: '30px', 
                  left: '13px', 
                  right: '13px', 
                  height: '2.5px', 
                  backgroundColor: '#898A8D', 
                }} 
              />

              <div style={{ position: 'absolute', top: '30px', left: '-20px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[
                    "VIDEO EDITOR",
                    "WEB DESIGNER",
                    "UI/UX DESIGNER",
                    "GRAPHIC DESIGNER",
                    "FRONT-END DEVELOPER",
                    "SOCIAL MEDIA MANAGER"
                  ].map((role) => (
                    <li key={role} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E6FF2B' }}></span>
                      <span className={`${alata.className} text-[9px] tracking-[1.8px] uppercase text-white/60 block`}>
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </BentoCard>
          </motion.div>
        </motion.div>

        {/* --- EXACT PERFECT UI (TOGGLE BUTTON) --- */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px', marginBottom: '32px', position: 'relative', zIndex: 9999 }}>
          <div style={{ 
            display: 'inline-flex', 
            position: 'relative', 
            alignItems: 'center', 
            padding: '4px', 
            borderRadius: '9999px', 
            border: '1px solid #334155', 
            backgroundColor: '#1e1e1e', 
            isolation: 'isolate' 
          }}>
            
            <div style={{
              position: 'absolute',
              top: '4px',
              bottom: '4px',
              left: activeTab === 'SEMINAR' ? '4px' : '144px',
              width: '140px',
              backgroundColor: '#e2e8f0', 
              borderRadius: '9999px',
              transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: -1, 
              pointerEvents: 'none' 
            }} />

            <button 
              type="button"
              onClickCapture={() => setActiveTab("SEMINAR")}
              className={alata.className}
              style={{ 
                position: 'relative', 
                zIndex: 10, 
                padding: '8px 24px', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                width: '140px', 
                textAlign: 'center', 
                color: activeTab === 'SEMINAR' ? '#0f172a' : '#94a3b8', 
                transition: 'color 0.3s ease', 
                outline: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              EXPERIENCES
            </button>

            <button 
              type="button"
              onClickCapture={() => setActiveTab("CERTIFICATES")}
              className={alata.className}
              style={{ 
                position: 'relative', 
                zIndex: 10, 
                padding: '8px 24px', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                width: '140px', 
                textAlign: 'center', 
                color: activeTab === 'CERTIFICATES' ? '#0f172a' : '#94a3b8', 
                transition: 'color 0.3s ease', 
                outline: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              CERTIFICATES
            </button>

          </div>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        <AnimatePresence mode="wait">
          
          {/* ========================================= */}
          {/* EXPERIENCES TAB               */}
          {/* ========================================= */}
          {activeTab === 'SEMINAR' && (
            <motion.div 
              key="experiences"
              className="flex flex-col max-w-[600px] mx-auto mt-8"
              variants={containerVariants}
              initial="offscreen"
              animate="onscreen"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              layout 
            >
              {[ 
                { 
                  title: "FRONT-END DEVELOPER", 
                  sub: "8Con Academy Website", 
                  date: "Mar 2026 - Apr 2026", 
                  tag: "INTERNSHIP",
                  desc: "Contributed to the frontend development of the marketing website for 8Con Academy, a Philippine-based forex trading education company.\n\n• Redesigned the workshop registration page based on the finalized UI/UX design.\n• Implemented an interactive carousel to highlight the company's sub-brands and enhance user exploration.\n• Redesigned individual sub-brand pages to improve visual consistency and user experience." 
                },
                { 
                  title: "FRONT-END DEVELOPER", 
                  sub: "PCCI Valenzuela Website", 
                  date: "Feb 2026 - Mar 2026", 
                  tag: "INTERNSHIP",
                  desc: "Worked on the frontend development of a comprehensive membership platform for the Philippine Chamber of Commerce and Industry (PCCI) – Valenzuela Chapter. The platform was built on a headless architecture, separating the frontend from the backend to improve scalability, maintainability, and data flow.\n\n• Developed the frontend for the Contact Us and Events pages.\n• Implemented responsive, pixel-perfect layouts based on the provided UI/UX designs." 
                },
                { 
                  title: "FRONT-END DEVELOPER", 
                  sub: "LITTLE-LIONS MONITORING SYSTEM", 
                  date: "Dec 2025 - Feb 2026", 
                  tag: "INTERNSHIP",
                  desc: "Contributed to the frontend development of a monitoring platform for a Special Education (SPED) school. The platform was built to support school administration through five tailored portals—Admin, Staff, Teachers, Therapists, and Parents—designed with accessibility, clarity, and ease of use in mind.\n\n• Developed the frontend for the Admin and Teacher portals.\n• Collaborated on the UI design and implemented responsive, user-friendly interfaces using React and Vite." 
                },
                { 
                  title: "VIDEO EDITOR", 
                  sub: "SCHOOL PROJECTS/PERSONAL PROJECTS", 
                  date: "Aug 2022 - Present", 
                  tag: "PROMOTION",
                  desc: "I have experience editing videos for school and personal projects, creating engaging and well-organized content. I enjoy turning raw footage into polished videos while paying attention to timing, transitions, and overall presentation.\n\n• Edited videos for school presentations, academic projects, and personal creative work.\n• Created promotional and social media content with engaging visuals and smooth transitions.\n• Edited workshop videos during my internship (OJT)." 
                },
                { 
                  title: "AFFILIATE MARKETER", 
                  sub: "Tiktok Affiliate", 
                  date: "May 2025 - Present", 
                  tag: "MARKETING",
                  desc: "I create promotional videos for products through affiliate marketing, producing engaging content that showcases product features in a clear and appealing way. From filming to editing, I create high-quality promotional videos and publish them across TikTok, Shopee, and Facebook to reach a wider audience and increase product visibility.\n\n• Filmed and edited high-quality promotional videos for various products.\n• Created engaging content tailored to current trends and audience preferences.\n• Added captions, transitions, music, and visual effects to enhance video quality.\n• Published and managed promotional content on TikTok, Shopee, and Facebook.\n• Optimized videos for better viewer engagement and product visibility." 
                },
                { 
                  title: "GRAPHIC DESIGNER", 
                  sub: "FREELANCE", 
                  date: "2021 - Present", 
                  tag: "FREELANCE",
                  desc: "I create visual designs that help clients communicate their ideas and strengthen their brand identity. Based on each client's requirements and design brief, I produce creative, high-quality graphics tailored to their needs while maintaining a clean and visually appealing style.\n\n• Designed posters, banners, invitations, logos, and other marketing materials.\n• Created custom graphics based on clients' requirements and design briefs.\n• Developed layouts that are visually appealing and aligned with the client's branding.\n• Designed intuitive UI/UX layouts for web applications and websites." 
                }
              ].map((card, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  layout 
                  className="w-full relative z-20" 
                  style={{ marginBottom: '10px' }}
                >
                  <div
                    onClick={() => {
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                    className="w-full cursor-pointer relative"
                    style={{ zIndex: expandedIndex === index ? 50 : 20 }}
                  >
                    <BentoCard 
                      style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)", padding: "12px 16px", height: "100px" }} 
                      className="w-full flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)]"
                    >
                      <div className="glass-sweep" /> 
                      
                      <div style={{ 
                        position: 'absolute', top: '12px', bottom: '12px', left: '16px', width: '3px', 
                        backgroundColor: expandedIndex === index ? '#E6FF2B' : '#8593F0', 
                        transition: 'background-color 0.3s ease' 
                      }} />
                      
                      <div style={{ position: 'relative', height: '100%', marginLeft: '14px', pointerEvents: 'none' }}>
                        
                        <div style={{ position: 'absolute', top: '-10px', left: '0px' }}>
                          <h2 className={`${delaGothic.className} text-white uppercase tracking-wider text-[26px] leading-none`}>{card.title}</h2>
                        </div>
                        <div style={{ position: 'absolute', top: '25px', left: '0px' }}>
                          <p className={`${delaGothic.className} text-[#8593F0] text-[16px] uppercase tracking-widest leading-none`}>{card.sub}</p>
                        </div>
                        <div style={{ position: 'absolute', top: '50px', left: '0px' }}>
                          <p className={`${albertSans.className} text-[#898A8D] text-[14px] leading-tight`}>{card.date}</p>
                        </div>

                        <div style={{ 
                          position: 'absolute', top: '27%', right: '0px', transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          height: '22px', padding: '0 10px'
                        }}>
                          <p className={`${delaGothic.className} text-white text-[10px] uppercase tracking-wider`}>
                            {card.tag}
                          </p>
                        </div>

                        <div style={{
                          position: 'absolute', bottom: '0px', right: '0px',
                          transition: 'transform 0.3s ease',
                          transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 6L8 11L13 6" stroke="#898A8D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>

                      </div>
                    </BentoCard>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.div
                        key="desc"
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          borderRadius: '10px',
                          backgroundColor: 'rgba(133, 147, 240, 0.06)',
                          border: '2px solid rgba(133, 147, 240, 0.2)',
                          padding: '16px 20px',
                          borderLeft: '3px solid #E6FF2B',
                        }}>
                          <div className={`${albertSans.className} text-[#898A8D] text-[14px] leading-relaxed text-justify`}>
                            {card.desc.split('\n').map((line, i) => {
                              
                              if (line.trim() === '') {
                                return <div key={i} style={{ height: '24px', width: '100%' }}></div>;
                              }
                              
                              if (line.trim().startsWith('•')) {
                                return (
                                  <div key={i} className="flex items-start gap-3 mt-2">
                                    <span className="text-[#8593F0] shrink-0 mt-[4px]">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                    </span>
                                    <span>{line.replace('•', '').trim()}</span>
                                  </div>
                                );
                              }
                              
                              return <div key={i}>{line}</div>;
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ========================================= */}
{/* CERTIFICATES TAB                          */}
{/* ========================================= */}
{activeTab === 'CERTIFICATES' && (
  <motion.div 
    key="certificates"
    variants={containerVariants}
    initial="offscreen"
    animate="onscreen"
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      columnGap: '24px', 
      rowGap: '16px',    
      width: '100%',
      maxWidth: '1200px',
      margin: '32px auto 0 auto'
    }}
  >
    {[
      { 
        title: "certificate of contribution", 
        issuer: "Little lions sped school monitoring system", 
        date: "2026",
        img: "/images/about/certificate4.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      },
      { 
        title: "certificate of contribution", 
        issuer: "PCCI Valenzuela Website", 
        date: "2026",
        img: "/images/about/certificate5.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      },
      { 
        title: "certificate of completion", 
        issuer: "8con academy", 
        date: "2026",
        img: "/images/about/certificate6.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      },
      { 
        title: "certificate of participation", 
        issuer: "Understanding Agile Development", 
        date: "2024",
        img: "/images/about/certificate1.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      },
      { 
        title: "certificate of participation", 
        issuer: "Beyond Coding: Business & Product Roles in Tech", 
        date: "2024",
        img: "/images/about/certificate2.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      },
      { 
        title: "certificate of participation", 
        issuer: "Intelligent Design: Converging Architecture, Security & AI", 
        date: "2024",
        img: "/images/about/certificate3.png",
        customStyles: { titleSize: "14px", titlePt: "15px", titlePl: "0px", issuerSize: "10px", issuerPt: "-10px", issuerPl: "0px", dateSize: "11px", datePt: "8px", datePl: "0px" }
      }
    ].map((cert, index) => (
      <motion.div 
        key={index} 
        variants={itemVariants}
        style={{ width: 'calc(33.333% - 16px)', minWidth: '280px', height: '270px' }}
      >
        <BentoCard 
          style={{ borderRadius: "10px", backgroundColor: "rgba(77, 77, 77, 0.3)" }} 
          className="w-[330px] h-[270px] flex flex-col overflow-hidden relative border-[3px] border-[#4d4d4d] transition-all duration-300 hover:border-[#8593F0]/50 hover:shadow-[0_0_30px_rgba(133,147,240,0.3)] group"
        >
          {/* THE CLICK CATCHER */}
          <button
            type="button"
            className="absolute inset-0 z-[100] cursor-pointer opacity-0"
            onClick={() => cert.img && setExpandedImage(cert.img)}
            aria-label="Expand certificate"
          />

          <div className="glass-sweep" /> 

          {/* Expand Icon */}
          <div className="absolute top-3 right-3 z-[50] bg-black/60 p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E6FF2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </div>
          
          {/* Image */}
          <div className="relative w-full shrink-0 bg-[#1a1a1a] border-b-[3px] border-[#4d4d4d] flex items-center justify-center overflow-hidden z-10 pointer-events-none" style={{ height: '180px' }}>
            <Image src={cert.img} alt={cert.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="330px" />
          </div>

          {/* Text */}
          <div className="flex flex-col text-center items-center flex-grow p-2 z-10 relative pointer-events-none">
            <h3 className={`${delaGothic.className} text-white uppercase tracking-wide leading-tight`} style={{ fontSize: cert.customStyles.titleSize, marginTop: cert.customStyles.titlePt, paddingLeft: cert.customStyles.titlePl }}>{cert.title}</h3>
            <p className={`${alata.className} text-[#8593F0] uppercase tracking-widest`} style={{ fontSize: cert.customStyles.issuerSize, marginTop: cert.customStyles.issuerPt, paddingLeft: cert.customStyles.issuerPl }}>{cert.issuer}</p>
            <div className="mt-auto flex justify-center w-full">
              <p className={`${alata.className} text-[#898A8D]`} style={{ fontSize: cert.customStyles.dateSize, marginTop: cert.customStyles.datePt, paddingLeft: cert.customStyles.datePl }}>{cert.date}</p>
            </div>
          </div>
        </BentoCard>
      </motion.div>
    ))}
  </motion.div>
)}
        </AnimatePresence>

      </div>

      {/* --- EXPANDED IMAGE MODAL --- */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999999 }}
            className="flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#1a1a1a] rounded-lg overflow-hidden border-[3px] border-[#4d4d4d] shadow-2xl cursor-default flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 border-b border-[#4d4d4d] bg-[#121212] flex justify-between items-center">
                <h3 className={`${delaGothic.className} text-white text-[12px] uppercase tracking-wide`}>
                  {/* Logic: Find the title in the same array structure */}
                  {[
                    { title: "CERTIFICATE OF CONTRIBUTION", img: "/images/about/certificate4.png" },
                    { title: "CERTIFICATE OF CONTRIBUTION", img: "/images/about/certificate5.png" },
                    { title: "CERTIFICATE OF COMPLETION", img: "/images/about/certificate6.png" },
                    { title: "CERTIFICATE OF PARTICIPATION", img: "/images/about/certificate1.png" },
                    { title: "CERTIFICATE OF PARTICIPATION", img: "/images/about/certificate2.png" },
                    { title: "CERTIFICATE OF PARTICIPATION", img: "/images/about/certificate3.png" }
                  ].find(c => c.img === expandedImage)?.title || "Certificate"}
                </h3>
                <button onClick={() => setExpandedImage(null)} className="text-white/60 hover:text-white">✕</button>
              </div>
              <div className="relative w-full aspect-[4/3] bg-black">
                <Image src={expandedImage} alt="Expanded" fill className="object-contain p-2" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}