import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-40 px-4">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-5xl flex flex-col items-center text-center mt-10">
        
        {/* Top Text Layer (Behind Image) */}
        <h1 className="text-[12vw] md:text-[8rem] font-black text-[#f55b14] leading-none z-10 tracking-tighter">
          THINK DESIGN.
        </h1>

        {/* Portrait Container - Requires an image with a transparent background (.png) */}
        <div className="relative z-20 mt-[-20px] md:mt-[-50px] w-[250px] h-[350px] md:w-[400px] md:h-[500px]">
          <Image
            src="/images/about/portrait.png" /* Make sure to add your cutout photo here! */
            alt="Lei Arjhen"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Bottom Text Layer (Outlined, Front of Image) */}
        <h1 className="text-[14vw] md:text-[10rem] font-black text-outline absolute top-24 md:top-36 z-30 tracking-tighter pointer-events-none">
          DEVELOP.
        </h1>
        
      </section>

      {/* CREATIVE CAPABILITIES TEASER */}
      <section className="mt-32 w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-12">
          Creative Capabilities
        </h2>
        
        {/* Placeholder for the Masonry Grid */}
        <div className="w-full h-64 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500">
          [ Capabilities Grid Component Will Go Here ]
        </div>
      </section>

    </div>
  );
}