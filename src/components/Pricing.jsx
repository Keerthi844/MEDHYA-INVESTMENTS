import React from "react";
import { FaUsers, FaChartLine, FaExchangeAlt, FaHandshake, FaCogs } from "react-icons/fa";

function WhyChoose() {

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
    <section className="pt-28 pb-20 bg-white relative overflow-hidden">
    {/* SKY BACKGROUND */}
    <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 z-0"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-300/40 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-12 px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-sky-600">Medhya</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Five pillars that define our commitment to excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-6 mt-20">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-sky-100 rounded-2xl p-6 shadow-md 
              hover:shadow-xl hover:-translate-y-1 hover:bg-sky-100 transition-all duration-300"
            >

              <div className="grid md:grid-cols-2 gap-6 items-start">

                {/* LEFT */}
                <div className="flex gap-4">

                  <div className="w-12 h-12 flex items-center justify-center 
                    bg-sky-100 text-sky-600 rounded-xl text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-sky-500">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;