import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CommonQuestions() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const questionsRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      // হেডিং অ্যানিমেশন
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // প্রতিটি প্রশ্ন এবং উত্তর একে একে নিচ থেকে আসবে (Staggered Animation)
      gsap.fromTo(
        questionsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // বাটনের অ্যানিমেশন
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.5)",
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

  const faqData = [
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
    },
    {
      question: "Can I pay for a whole year?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
    },
    {
      question: "What if I need help?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto my-16 px-6 md:px-12 py-12 bg-white font-sans"
    >
      {/* Section Title */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-12 tracking-tight"
      >
        Common Questions
      </h2>

      {/* FAQ List Wrapper */}
      <div ref={questionsRef} className="space-y-10 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="flex flex-col space-y-3">
            {/* Question */}
            <h3 className="text-base md:text-lg font-bold text-[#0F172A] tracking-wide">
              {faq.question}
            </h3>
            {/* Answer */}
            <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed max-w-4xl">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* "More Questions" Button */}
      <div ref={buttonRef}>
        <button className="inline-block bg-white hover:bg-sky-50 text-[#1E3A8A] font-bold text-sm px-6 py-4 rounded-xl border border-sky-300 transition-all duration-200 shadow-sm">
          More Questions
        </button>
      </div>
    </div>
  );
}
