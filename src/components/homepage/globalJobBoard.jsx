import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import backgourndImg from "../../assets/e7843951ef2e446c079c88628a046de593aca411.png";
import RR from "../../assets/RR.jpg";

export default function GlobalJobBoard() {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        leftSideRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        rightSideRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto my-12 p-6 md:p-12 bg-white rounded-3xl font-sans overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div ref={leftSideRef} className="flex flex-col space-y-6">
          <div>
            <span className="inline-block bg-[#E0F2FE] text-[#0369A1] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm border border-[#BAE6FD]">
              Global Reach
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            The First Fully Global Job Board, Anywhere, Ever
          </h1>

          <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-xl">
            RemoteRecruit connects candidates with opportunities around the
            world. With today's remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </p>
        </div>

        {/* Right Column: Image Layout Layer */}
        <div
          ref={rightSideRef}
          className="relative w-full flex justify-center items-center min-h-[400px] md:min-h-[480px]"
        >
          {/* 1. Main Background App Screenshot Image */}
          <div className="w-full h-full max-w-[500px]">
            <img
              src={backgourndImg}
              loading="lazy"
              alt="Dashboard Mockup"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
            />
          </div>

          {/* 2. Floating Candidate Card 1 (Felonious Gru) */}
          <div className="absolute bottom-34 left-2 sm:-left-6 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-100/80 p-2 pl-2 pr-8 flex items-center space-x-3 transition-transform hover:scale-105 duration-300 max-w-[240px]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-200 shrink-0">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                alt="Felonious Gru"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="truncate">
              <p className="text-[10px] font-semibold text-blue-600 tracking-wide uppercase">
                Python Developer
              </p>
              <h4 className="text-sm font-bold text-slate-800 truncate">
                Felonious Gru
              </h4>
            </div>
          </div>

          {/* 3. Floating Candidate Card 2 (Mel Muselphiem) */}
          <div className="absolute bottom-5 right-4 sm:right-8 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-100/80 p-2 pl-2 pr-8 flex items-center space-x-3 transition-transform hover:scale-105 duration-300 max-w-[240px]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-200 shrink-0">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
                alt="Mel Muselphiem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="truncate">
              <p className="text-[10px] font-semibold text-cyan-600 tracking-wide uppercase">
                Front End Wizard
              </p>
              <h4 className="text-sm font-bold text-slate-800 truncate">
                Mel Muselphiem
              </h4>
            </div>
          </div>

          {/* 4. Floating RR Logo Badge Image */}
          <div className="absolute right-5 top-[30%] -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md transition-transform hover:rotate-6 duration-300">
            <img
              src={RR}
              loading="lazy"
              alt="RemoteRecruit Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
