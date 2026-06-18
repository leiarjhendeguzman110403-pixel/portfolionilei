import Navbar from "../../components/navbar";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start px-4 overflow-x-hidden">
      
      {/* Extracted Header / Navbar */}
      <Navbar />

      {/* ABOUT PAGE CONTENT */}
      <main className="mt-40 z-10 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-[#F25623]">
          ABOUT ME
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          This is where you can start adding your about page content!
        </p>
      </main>

    </div>
  );
}