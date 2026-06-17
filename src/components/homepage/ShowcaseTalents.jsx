import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import backgourndImg from "../../assets/e7843951ef2e446c079c88628a046de593aca411.png";
import { useRef } from "react";

export default function ShowcaseTalents() {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightMockupRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        leftTextRef.current,
        { opacity: 0, x: -60 },
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
        rightMockupRef.current.children,
        { opacity: 0, y: 50 },
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

  const skills = [
    { name: "Python Dev", bg: "bg-indigo-50", text: "text-indigo-700" },
    { name: "Javascript", bg: "bg-blue-50", text: "text-blue-700" },
    { name: "Front End", bg: "bg-sky-50", text: "text-sky-700" },
    { name: "Back End", bg: "bg-slate-100", text: "text-slate-700" },
    { name: "IOS Development", bg: "bg-violet-50", text: "text-violet-700" },
    { name: "+12", bg: "bg-gray-100", text: "text-gray-600 font-bold" },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto my-16 p-6 md:p-12 bg-white font-sans overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div ref={leftTextRef} className="flex flex-col space-y-6">
          <div>
            <span className="inline-block bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-4 py-2 rounded-full shadow-sm border border-[#BAE6FD]">
              Custom Profile
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Showcase Your Talents
          </h1>

          <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-xl">
            Personalize your profile with everything that makes you unique. Add
            an introductory video and other media for a personal touch that
            stands out to employers and candidates.
          </p>
        </div>

        {/* Right Column: Interactive Mockup Graphics layer */}
        <div
          ref={rightMockupRef}
          className="relative w-full flex justify-center items-center min-h-[440px] md:min-h-[500px]"
        >
          {/* 1. Main Profile Dashboard Screenshot */}
          <div className="w-full h-full max-w-[480px]">
            <img
              src={backgourndImg}
              loading="lazy"
              alt="Profile Showcase Mockup"
              className="w-full h-auto object-contain rounded-3xl drop-shadow-2xl border border-slate-100"
            />
          </div>

          {/* 2. Floating Recruiter Card Image (Unsplash Real Image Used) */}
          <div className="absolute top-[35%] -right-2 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[6px] border-white shadow-xl overflow-hidden z-20 transition-transform hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              loading="lazy"
              alt="Recruiter Professional Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3. Floating Past Client Feedback Badge */}
          <div className="absolute bottom-[28%] -left-4 sm:-left-12 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 p-2 pl-2 pr-10 flex items-center space-x-3 z-30 max-w-[280px]">
            {/* Feedback Mini Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-100 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                loading="lazy"
                alt="Client Feedback Owner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="truncate">
              <p className="text-[10px] font-bold text-blue-600 tracking-wide uppercase">
                Past Client Feedback
              </p>
              <h4 className="text-sm font-extrabold text-slate-800 truncate">
                Best Developer Ever!
              </h4>
            </div>
          </div>

          {/* 4. Skills Tag Cloud Wrapper (Positions dynamically at the bottom right) */}
          <div className="absolute bottom-6 right-2 sm:right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-md max-w-[280px] flex flex-wrap gap-2 z-20">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-sm ${skill.bg} ${skill.text}`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Background Decorative Small Blue Dot */}
          <div className="absolute top-16 left-6 w-5 h-5 rounded-full bg-blue-500/80 blur-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
}
