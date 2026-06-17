import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../../assets/Bottom Elipses.png";

const BannerSection = () => {
  // GSAP এর জন্য reference তৈরি করা হলো
  const bannerRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // একটি timeline তৈরি করা হলো যাতে একটার পর আরেকটা অ্যানিমেশন হয়
    const tl = gsap.timeline();

    // H1 এর অ্যানিমেশন
    tl.fromTo(
      h1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Paragraph এর অ্যানিমেশন (H1 এর একটু পর শুরু হবে)
    tl.fromTo(
      pRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5", // এটি আগের অ্যানিমেশন শেষ হওয়ার ০.৫ সেকেন্ড আগে শুরু হবে
    );
  }, []);

  return (
    // overflow-hidden দেওয়া হয়েছে যাতে কোন ইমেজ স্ক্রিনের বাইরে গিয়ে স্ক্রলবার না তৈরি করে
    <div
      ref={bannerRef}
      className="h-screen bg-linear-to-r from-[#1E3E85] to-[#336DA6] relative flex items-center justify-center px-4 overflow-hidden"
    >
      {/* 1. Top Left Ellipse Image */}
      <div className="absolute top-0 left-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none opacity-50">
        <img
          src={img}
          alt="Top Left Ellipse"
          className="w-full h-auto rotate-180"
        />
        {/* rotate-180 দেওয়া হয়েছে যাতে কোণায় সুন্দরভাবে মিলে যায় */}
      </div>

      {/* 2. Bottom Right Ellipse Image */}
      <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none opacity-50">
        <img src={img} alt="Bottom Right Ellipse" className="w-full h-auto" />
      </div>

      {/* Content Area */}
      <div className="z-40 text-white text-center max-w-5xl md:w-[90%] mx-auto space-y-5">
        <h1
          ref={h1Ref}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold opacity-0"
        >
          RemoteRecruit’s Difference
        </h1>

        <p
          ref={pRef}
          className="px-5 text-[16px] sm:text-lg md:text-2xl text-gray-300 opacity-0"
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
