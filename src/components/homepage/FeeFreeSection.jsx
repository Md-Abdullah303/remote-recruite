"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import RRLogo from "../../assets/RR.jpg";
import PayPalLogo from "../../assets/payple.png";
import { useRef } from "react";

export default function FeeFreeSection() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightTextRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        rightTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const features = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers",
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto my-16 p-6 md:p-12 bg-white font-sans overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center flex-col-reverse lg:flex-row">
        <div
          ref={leftCardRef}
          className="relative w-full flex justify-center items-center min-h-[460px] md:min-h-[520px]"
        >
          <div className="w-full max-w-[340px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-8 pt-10 pb-16 space-y-6 relative z-10">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Your Membership Tier
              </p>
              <h2 className="text-2xl font-extrabold text-[#2563EB]">
                Premium
              </h2>
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Features
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    {/* Blue Check Icon */}
                    <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-600 tracking-wide">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm rounded-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 p-3 pl-3 pr-10 flex items-center space-x-4 z-20 max-w-[260px]">
            <div className="w-12 h-12 rounded-[18px] bg-[#EEF2FF] flex items-center justify-center shrink-0">
              <img
                src={
                  PayPalLogo ||
                  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                }
                alt="PayPal"
                loading="lazy"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#1E3A8A]/60 whitespace-nowrap">
                Upcoming Payment In...
              </p>
              <h4 className="text-base font-extrabold text-[#1E3A8A] whitespace-nowrap">
                14 Days - $79.99
              </h4>
            </div>
          </div>

          <div className="absolute right-4 sm:right-12 top-1/4 z-20 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_10px_20px_rgba(37,99,235,0.15)] transition-transform hover:scale-105 duration-300">
            <img
              src={RRLogo}
              loading="lazy"
              alt="RemoteRecruit Badge"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute top-12 left-8 w-5 h-5 rounded-full bg-blue-500/80 blur-[0.5px]"></div>
        </div>

        <div ref={rightTextRef} className="flex flex-col space-y-6 lg:pl-8">
          <div>
            <span className="inline-block bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-4 py-2 rounded-full shadow-sm border border-[#BAE6FD]">
              Actually Fee Free
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Fee-Free Forever
          </h1>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed max-w-xl">
            We don’t charge you fees and we don’t put up paywalls. We’re the
            bridge that connects job opportunities with the best candidates,
            with no middleman involved.
          </p>
        </div>
      </div>
    </div>
  );
}
