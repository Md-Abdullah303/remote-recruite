import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP প্লাগইন রেজিস্টার করা হলো
gsap.registerPlugin(ScrollTrigger);

// আপনার ইমেজগুলো এখানে ইম্পোর্ট করুন
import mainDashboardImg from "../../assets/e7843951ef2e446c079c88628a046de593aca411.png"; // বাম পাশের বড় ড্যাশবোর্ড ছবি
// import bgHalfCircle from "../../assets/Rectangle 87.png"; // ডান পাশের ব্যাকগ্রাউন্ড হাফ-সার্কেল শেপ

export default function HelpSection() {
  const containerRef = useRef(null);
  const leftMockupRef = useRef(null);
  const rightContentRef = useRef(null);

  useGSAP(
    () => {
      // বাম পাশের বড় ড্যাশবোর্ড ইমেজের অ্যানিমেশন (নিচ থেকে ওপরে স্মুথ রিভিল)
      gsap.fromTo(
        leftMockupRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // ডান পাশের টেক্সট ও বাটনের অ্যানিমেশন (স্ট্যাগার এফেক্ট সহ ডান থেকে বামে আসা)
      gsap.fromTo(
        rightContentRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
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
      className="relative w-full max-w-7xl mx-auto my-16 bg-[#EEF2FF]/40 rounded-[40px] font-sans overflow-hidden min-h-[550px] md:min-h-[620px] flex items-center"
    >
      {/* ১. ডান পাশের ব্যাকগ্রাউন্ড হাফ-সার্কেল ইমেজ লেয়ার */}
      {/* <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none z-0 hidden lg:block opacity-80">
        <img
          src={bgHalfCircle}
          alt="Background Circle Asset"
          className="w-full h-full object-cover object-right"
        />
      </div> */}

      {/* মূল কন্টেন্ট গ্রিড লেআউট */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 px-6 py-12 md:p-12 lg:p-0">
        {/* Left Column: Big App Dashboard Mockup (Takes 7 Cols on Desktop) */}
        <div
          ref={leftMockupRef}
          className="lg:col-span-7 w-full flex justify-start items-center overflow-hidden lg:-ml-6 xl:-ml-12"
        >
          <img
            src={mainDashboardImg}
            alt="Main Application Dashboard Screenshot"
            className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.06)] rounded-r-3xl md:rounded-r-[32px]"
          />
        </div>

        {/* Right Column: CTA Text Content (Takes 5 Cols on Desktop) */}
        <div
          ref={rightContentRef}
          className="lg:col-span-5 flex flex-col space-y-6 lg:pl-8 xl:pl-12"
        >
          <div>
            <span className="text-[#2563EB] text-sm font-extrabold tracking-wider uppercase">
              Are you ready?
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            Help is only a few clicks away!
          </h1>

          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-md">
            Click Below to get set up super quickly and find help now!
          </p>

          {/* Styled CTA Button matching the image with Arrow Icon wrapper */}
          <div className="pt-2">
            <button className="group flex items-center space-x-4 bg-[#DDBEEF]/20 hover:bg-[#DDBEEF]/40 border border-[#DDBEEF]/40 p-2 pr-8 rounded-full transition-all duration-300 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center shadow-md shadow-sky-200 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <span className="text-base font-bold text-[#1E3A8A]">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* অতিরিক্ত ডেকোরেটিভ ফ্লোটিং বল (ইমেজের ভেতরের হলুদ এবং নীল বৃত্তের রিপ্রেজেন্টেশন) */}
      <div className="absolute top-12 left-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 blur-[0.3px] hidden md:block"></div>
      <div className="absolute bottom-12 right-1/3 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 opacity-90 hidden lg:block"></div>
    </div>
  );
}
