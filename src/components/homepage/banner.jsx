import { useEffect, useRef } from "react";
import gsap from "gsap";

const BannerSection = () => {
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // টেক্সট ও ব্যাকগ্রাউন্ড শেপগুলোর একসাথেই এন্ট্রি অ্যানিমেশন
    tl.fromTo(
      shapesRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", stagger: 0.2 },
    );

    tl.fromTo(
      h1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1",
    );

    tl.fromTo(
      pRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6",
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[600px] md:h-[85vh] bg-[#1E40AF] flex items-center justify-center px-6 overflow-hidden"
      style={{
        clipPath: "ellipse(140% 100% at 50% 0%)",
      }}
    >
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -bottom-10 -left-20 w-72 h-72 rounded-full bg-[#38BDF8]/30 blur-sm"></div>

        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-white/5"></div>
      </div>

      <div className="relative z-10 text-white text-center max-w-4xl mx-auto space-y-6 pt-12 pb-24">
        {/* Heading */}
        <h1
          ref={h1Ref}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white opacity-0"
        >
          RemoteRecruit’s Difference
        </h1>

        {/* Paragraph Description */}
        <p
          ref={pRef}
          className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto px-2 opacity-0"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there’s nothing but you, your talents, and the next step
          in your career.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
