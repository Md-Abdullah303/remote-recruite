import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// আপনার প্রোজেক্টের অ্যাসেট ফাইলগুলো এখানে সঠিকভাবে বসিয়ে নিন
import RRLogo from "../../assets/RR.jpg";

export default function PricingAndFooter() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);

  useGSAP(
    () => {
      // প্রাইজ কার্ড দুটির স্ক্রোল অ্যানিমেশন
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 70, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // ফুটারের টেক্সট এবং সোশ্যাল লিংক অ্যানিমেশন
      gsap.fromTo(
        footerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
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
      className="w-full bg-white pt-12 font-sans relative overflow-hidden"
    >
      {/* ----------------- PRICING SECTION ----------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20 pb-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Help Is One Click Away
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch"
        >
          {/* Card 1: Free / Basic */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Left Badge */}
              <div className="bg-[#EFF6FF] rounded-2xl w-28 h-28 flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl font-black text-[#2563EB]">Free</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Basic
                </span>
              </div>
              {/* Right Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5 text-slate-600 text-sm font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>1 Active Job</span>
                </div>
                <div className="flex items-center space-x-2.5 text-slate-600 text-sm font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Basic List Placement</span>
                </div>
                <div className="flex items-center space-x-2.5 text-slate-400 text-sm font-medium line-through">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-400 font-bold text-[9px]">
                    ✕
                  </div>
                  <span>Unlimited Job Applicants</span>
                </div>
                <div className="flex items-center space-x-2.5 text-slate-400 text-sm font-medium line-through leading-tight">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-400 font-bold text-[9px]">
                    ✕
                  </div>
                  <span>Invite Anyone to Apply to Your Jobs</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="w-full py-3.5 border-2 border-[#1E3A8A] text-[#1E3A8A] text-base font-extrabold rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2: Premium */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_25px_50px_rgba(37,99,235,0.04)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Left Badge */}
              <div className="bg-[#EFF6FF] rounded-2xl w-28 h-28 flex flex-col items-center justify-center shrink-0 relative border border-blue-100">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CFFAFE] text-[#0E7490] text-[9px] font-black px-2.5 py-0.5 rounded-md border border-white tracking-wider uppercase">
                  Premium
                </div>
                <span className="text-xl font-black text-[#1E3A8A]">
                  $79.99
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Per Month
                </span>
              </div>
              {/* Right Features */}
              <div className="space-y-3">
                {[
                  "Unlimited Job Posts",
                  "Instant Job Post Approval",
                  "Premium List Placement",
                  "Unlimited Job Applicants",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2.5 text-slate-600 text-sm font-semibold"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <button className="w-full py-4 text-white text-base font-extrabold rounded-2xl bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] hover:from-[#1d3da3] hover:to-[#172e6e] transition-all duration-200 shadow-lg shadow-blue-100">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- DESIGN FOOTER WITH WAVE ----------------- */}
      <div
        className="relative w-full bg-[#1E40AF] pt-32 pb-12 mt-[-60px] z-10"
        style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div
          ref={footerRef}
          className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col space-y-12"
        >
          {/* Top Row: Logo & Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-b border-white/10 pb-8">
            {/* Left side Brand Header styling layout */}
            <div className="flex items-center space-x-2 text-white">
              <span className="text-2xl font-black tracking-tight flex items-center">
                Remote<span className="text-[#38BDF8]">Recruit</span>
              </span>
            </div>

            {/* Right side Social Badges */}
            <div className="flex items-center space-x-3.5">
              {["facebook", "instagram", "twitter", "linkedin", "snapchat"].map(
                (social, idx) => (
                  <a
                    key={idx}
                    href={`#${social}`}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-white/80 hover:text-white border border-white/5 shadow-sm"
                  >
                    {social === "facebook" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.4 0-4 1.2-4 3v3z" />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg
                        className="w-4 h-4 stroke-current fill-none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                      </svg>
                    )}
                    {social === "twitter" && (
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social === "snapchat" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.79-2.79C10.09 18.64 11.03 19 12 19s1.91-.36 2.45-.98l2.79 2.79c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.62-2.78C19.26 15.07 20 13.12 20 11c0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                      </svg>
                    )}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Bottom Row: Micro Double-R Icon Centered */}
          <div className="flex justify-center items-center pt-2">
            <div className="w-10 h-10 transition-transform hover:scale-110 duration-300">
              <img
                src={RRLogo}
                loading="lazy"
                alt="RemoteRecruit Mini Icon"
                className="w-full h-full object-contain brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
