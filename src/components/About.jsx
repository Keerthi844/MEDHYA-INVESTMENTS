import React from "react";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

export default function AboutPage() {
    const data = [
        {
            icon: <FaEye size={40} />,
            title: "Vision",
            desc: "To be India's most trusted financial partner — serving businesses of every scale and supporting stakeholders at every stage of life with clarity and confidence.",
        },
        {
            icon: <FaBullseye size={40} />,
            title: "Mission",
            desc: "To deliver integrated, transparent, and results-driven financial solutions that create long-term value and empower clients to achieve their financial goals.",
        },
        {
            icon: <FaGem size={40} />,
            title: "Philosophy",
            desc: "We operate at the intersection of capital, clarity, and conviction — bringing structure, discipline, and insight so businesses grow with focus and investors act with confidence.",
        },
    ];

    const teamMembers = [
        {
            name: "Hanna Richard",
            role: "Credit Analyst",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
        },
        {
            name: "Adam Lewis",
            role: "Financial Analyst",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
        },
        {
            name: "Roberto Clark",
            role: "Tax Specialist",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop"
        },
        {
            name: "Diana Queen",
            role: "Cost Accountant",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop"
        },
        {
            name: "Michael Johnson",
            role: "Investment Manager",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop"
        },
        {
            name: "Sarah Parker",
            role: "Portfolio Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
        },
    ];

    return (
        
       
        <div className="bg-gray-50">

            {/* ================= HERO ================= */}
            <div className="relative max-w-6xl mx-auto mt-6 rounded-2xl overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    alt="about"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-green-300">
                        About Us
                    </h1>

                    {/* Breadcrumb */}
                    <p className="text-sm md:text-base text-gray-200">
                      We empower businesses with strategic financial guidance to drive sustainable growth.
                    </p>

                </div>
            </div>
            {/* ================= ABOUT CONTENT ================= */}
            <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        About Medhya Investment Advisors
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        Medhya Investment Advisors Private Limited delivers end-to-end financial
                        solutions — from guiding startups through fund-raising and IPOs to
                        empowering individuals with strategic wealth creation, tax efficiency,
                        and financial independence.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Our team comprises dynamic professionals including Chartered
                        Accountants, Company Secretaries, CPAs, Ex-Bankers, Management
                        Graduates, and Legal experts, ensuring a well-rounded advisory approach.
                    </p>
                </div>

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        className="rounded-2xl shadow-lg w-full"
                    />
                </div>

            </section>

            {/* ================= OBJECTIVE ================= */}
            <section className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16">
                <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                        WE ARE BUILT ON A COMMON OBJECTIVE TO PROVIDE THE BEST ADVISORY IN THE MARKET TO BUILD WORLD CLASS COMPANIES.
                    </h3>
                </div>
            </section>

            {/* ================= VISION / MISSION / PHILOSOPHY ================= */}
            <section className="py-12 sm:py-20 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16">
                        Our Vision, Mission & Philosophy
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-green-400 via-green-600 to-green-800 hover:scale-105 transition duration-300"
                            >
                                {/* Inner Card */}
                                <div className="bg-white rounded-2xl p-8 h-full shadow-md group-hover:shadow-2xl transition">

                                    {/* Icon Circle */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full 
                bg-gradient-to-br from-green-400 to-green-700 text-white 
                shadow-lg group-hover:scale-110 transition">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        {item.title}
                                    </h3>

                                    {/* Content */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 bg-green-500 transition"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= TEAM CAROUSEL ================= */}
           <section className="py-12 sm:py-20 bg-white px-4 sm:px-0">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* LEFT SIDE - CAROUSEL */}
    <div className="relative overflow-hidden w-full">

      <style>{`
        @keyframes scroll-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: scroll-carousel 40s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden w-full bg-gray-50 rounded-xl p-4">
        <div className="flex gap-4 animate-carousel w-max">

          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div key={i} className="group flex-shrink-0">
              
              <div className="relative rounded-lg overflow-hidden shadow-md h-[280px] w-[180px] sm:h-[320px] sm:w-[220px]">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

                {/* Text */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3 text-white">
                  <p className="font-semibold text-sm sm:text-base truncate">{member.name}</p>
                  <p className="text-xs text-gray-200 truncate">{member.role}</p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div>
      <span className="border border-green-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm text-green-700 inline-block mb-4">
        Our Team
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Building Wealth Through Strategic Investments
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Our team of experienced professionals is dedicated to delivering
        strategic financial solutions that drive sustainable growth. We
        combine expertise, innovation, and personalized guidance to help
        you achieve long-term success.
      </p>

     
    </div>

  </div>
</section>

            {/* ================= SCROLLING TEXT STRIP ================= */}
            <section className="relative overflow-hidden py-8 sm:py-16 bg-white mt-2">

  {/* Wrapper for cross effect */}
  <div className="relative h-12 sm:h-16">

    <style>{`
      @keyframes scroll-left {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      @keyframes scroll-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      .scroll-left {
        animation: scroll-left 25s linear infinite;
      }

      .scroll-right {
        animation: scroll-right 25s linear infinite;
      }
    `}</style>

    {/* TOP STRIP (LEFT) */}
    <div className="absolute w-full -rotate-3 top-1 sm:top-2 bg-gradient-to-r from-green-800 via-green-700 to-green-600 py-2 sm:py-3 shadow-lg">
      <div className="scroll-left whitespace-nowrap flex gap-6 sm:gap-12 px-4 sm:px-6">
        {Array(10).fill("Medhya Investments").map((text, i) => (
          <span key={i} className="text-xs sm:text-lg md:text-xl font-semibold text-white">
            {text}
          </span>
        ))}
      </div>
    </div>

    {/* BOTTOM STRIP (RIGHT) */}
    <div className="absolute w-full rotate-3 bottom-1 sm:bottom-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-2 sm:py-3 shadow-lg">
      <div className="scroll-right whitespace-nowrap flex gap-6 sm:gap-12 px-4 sm:px-6">
        {Array(10).fill("Medhya Investments").map((text, i) => (
          <span key={i} className="text-xs sm:text-lg md:text-xl font-semibold text-white">
            {text}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

        </div>
    );
}