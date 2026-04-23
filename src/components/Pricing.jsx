import React, { useEffect } from "react";
import { FaUsers, FaChartLine, FaExchangeAlt, FaHandshake, FaCogs } from "react-icons/fa";
import pricingBanner from "../assets/images/pricing.png";

function WhyChoose() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      icon: <FaUsers />,
      title: "Multi-Disciplinary Expertise",
      desc: "Our team is a rare confluence of Chartered Accountants, Company Secretaries, CPAs, ex-Bankers, Management graduates, and Legal experts — delivering 360° financial intelligence under one roof.",
      points: [
        "CA, CS, CPA certified professionals",
        "Ex-banking and legal domain experts",
        "Management graduates with strategic vision"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "End-to-End Financial Solutions",
      desc: "From the spark of an idea to a successful exit — Medhya is your lifelong financial partner across every milestone.",
      points: [
        "From ideation to IPO/acquisition",
        "All services under one platform",
        "Seamless cross-functional coordination"
      ]
    },
    {
      icon: <FaExchangeAlt />,
      title: "Deep Transaction Expertise",
      desc: "Structuring complex deals and executing M&A transactions requires precision — we bring real-world experience to every deal.",
      points: [
        "M&A structuring & execution",
        "Multi-stage fundraising",
        "Cross-border transaction advisory"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "Founder & Investor Alignment",
      desc: "We understand both sides — enabling better decision-making and stronger partnerships.",
      points: [
        "Balanced founder-investor perspective",
        "Conflict resolution & alignment",
        "Long-term relationship building"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Process-Driven Approach",
      desc: "Our structured frameworks ensure consistency, transparency, and measurable outcomes.",
      points: [
        "Proprietary valuation frameworks",
        "Transparent processes",
        "Data-driven decision making"
      ]
    }
  ];

  return (
    <>
      {/* BANNER SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <img
          src={pricingBanner}
          alt="Pricing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why Choose <span className="text-white">Medhya</span>
          </h2>
          <p className="text-white/90 mt-3 text-sm sm:text-base">
            Five pillars that define our commitment to excellence.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="pt-20 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* CARDS */}
        <div className="space-y-4 sm:space-y-6 mt-20">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-navy-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md 
              hover:shadow-xl hover:-translate-y-1 hover:bg-navy-150 hover:border-black-300 transition-all duration-300"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">

                {/* LEFT */}
                <div className="flex gap-3 sm:gap-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
  bg-navy-700 text-white rounded-lg sm:rounded-xl text-xl sm:text-2xl font-bold flex-shrink-0">
  {item.icon}
</div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-navy-500 flex-shrink-0">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
      </section>
    </>
  );
}

export default WhyChoose;