"use client";

import Navbar from "@/components/navbar";
import BentoCard from "@/components/ui/BentoCard";
import { Vina_Sans, Dela_Gothic_One, Alata } from "next/font/google";

const vinaSans = Vina_Sans({ weight: "400", subsets: ["latin"] });
const delaGothic = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const alata = Alata({ weight: "400", subsets: ["latin"] });

export default function ContactsPage() {
  
  // --- ADJUSTMENT SECTION ---
  // Adjust the width and height by changing the gridClass!
  // Width: "col-span-1" (half width) vs "col-span-2" (full width)
  // Height: "row-span-1" (normal height) vs "row-span-2" (double height)
  const contactLinks = [
    { 
      title: "EMAIL", value: "lejden@gmail.com", link: "mailto:lejden@gmail.com",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "LINKEDIN", value: "linkedin.com/in/pjpunzal", link: "https://linkedin.com/in/pjpunzal",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "GITHUB", value: "github.com/lejden", link: "https://github.com/lejden",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "BEHANCE", value: "behance.net/pjpunzal", link: "https://behance.net/pjpunzal",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "INSTAGRAM", value: "@pjpunzal", link: "https://instagram.com/pjpunzal",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "TWITTER", value: "@pjpunzal", link: "https://twitter.com/pjpunzal",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "UPWORK", value: "upwork.com/freelancers/pj", link: "https://upwork.com/freelancers/pj",
      gridClass: "col-span-1 row-span-1" 
    },
    { 
      title: "RESUME", value: "Download PDF", link: "#",
      gridClass: "col-span-1 row-span-1" 
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
        <div className="md:w-5/12 sticky top-[120px] self-start">
          <h1 
            className={`${vinaSans.className} text-[#E6FF2B] uppercase tracking-tight`}
            style={{ 
              fontSize: "clamp(60px, 9vw, 110px)", 
              lineHeight: "0.85" 
            }}
          >
            LET'S <br/> CONNECT.
          </h1>
          <p className={`${alata.className} mt-6 text-[#898A8D] text-sm uppercase tracking-widest`}>
            Open for collaborations and opportunities.
          </p>
        </div>

        {/* RIGHT SIDE: 8 CARDS GRID */}
        {/* grid-cols-2 ensures 2 columns. auto-rows-[120px] sets the base height of row-span-1 */}
        <div className="md:w-7/12 grid grid-cols-2 auto-rows-[120px] gap-5">
          {contactLinks.map((item, i) => (
            
            <div key={i} className={`${item.gridClass} hover:z-50`}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full h-full cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
              >
                <BentoCard 
                  className="bg-[#2a2a2a]/90 backdrop-blur-md border border-[#4d4d4d] group-hover:border-[#8593F0] w-full h-full flex flex-col justify-center transition-colors duration-300 overflow-hidden p-6"
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