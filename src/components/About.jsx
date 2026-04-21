import React, { useEffect } from "react";
import { motion } from "framer-motion";

function AboutSection() {

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { initials: "DK", name: "Devender Kodam", role: "Managing Director" },
    { initials: "SS", name: "Sri Swathi", role: "Financial Advisory" },
    { initials: "SR", name: "Sri Rakesh", role: "Transaction Advisory" },
    { initials: "YU", name: "Yugendar", role: "Investment Strategy" },
    { initials: "JR", name: "Jaipal Reddy Naidi", role: "Legal & Compliance" },
  ];

  const tags = [
    "Chartered Accountants",
    "Company Secretaries",
    "CPAs",
    "Ex-Bankers",
    "Management Graduates",
    "Legal Experts"
  ];

  const cards = [
    {
      title: "VISION",
      text: "To be India’s most trusted financial partner delivering clarity, confidence, and long-term value in complex capital markets."
    },
    {
      title: "MISSION",
      text: "To provide transparent, end-to-end financial solutions that empower startups, investors, and businesses to grow sustainably."
    },
    {
      title: "PHILOSOPHY",
      text: "We operate at the intersection of Capital, Clarity, and Conviction where disciplined strategy meets long-term value creation."
    }
  ];

  return (
    <section className="pt-0 pb-20 bg-white relative overflow-hidden">

      {/* SKY BACKGROUND (NO GAP + 260 HEIGHT) */}
      <div className="absolute top-0 left-0 w-full h-[260px] 
        bg-gradient-to-r from-navy-700 via-navy-700 to-navy-700 z-0">
      </div>

      {/* FLOATING SHAPES */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* ✅ PERFECT CENTERED HERO */}
        <div className="h-[260px] flex flex-col justify-center items-center text-center px-6 space-y-4">

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About <span className="text-emerald-300">Medhya</span>
          </h2>

          <p className="text-white/90 max-w-2xl">
            Medhya Investment Advisors delivers end-to-end financial solutions
            from startup fundraising to individual wealth creation, guided by clarity and conviction.
          </p>

        </div>

        {/* WHITE CONTENT CARD */}
        <div className="px-4 py-10 mt-6">

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-2 
                hover:bg-navy-100 hover:border-emerald-300 transition-all duration-300 group"
              >
                <span className="text-xs px-3 py-1 rounded-full bg-navy-100 text-emerald-600 font-semibold
                group-hover:bg-emerald-500 group-hover:text-white transition">
                  {item.title}
                </span>

                <p className="text-gray-600 text-sm mt-4 group-hover:text-gray-800 transition">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

          {/* TEAM BACKGROUND */}
          <motion.div
            className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl font-bold text-center mb-6">
              Team <span className="text-navy-700">Background</span>
            </h2>

            {/* DESKTOP */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full hover:bg-emerald-100 hover:border-emerald-300 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* MOBILE (EXACT IMAGE LAYOUT) */}
            <div className="md:hidden flex flex-col items-center gap-4">

              <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center w-full max-w-xs">
                Chartered Accountants
              </span>

              <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center w-full max-w-xs">
                Company Secretaries
              </span>

              <div className="flex gap-3 justify-center w-full">
                <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center flex-1 max-w-[140px]">
                  CPAs
                </span>
                <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center flex-1 max-w-[140px]">
                  Ex-Bankers
                </span>
              </div>

              <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center w-full max-w-xs">
                Management Graduates
              </span>

              <span className="px-4 py-2 text-sm border border-navy-300 text-black rounded-full text-center w-full max-w-xs">
                Legal Experts
              </span>

            </div>

          </motion.div>

          {/* TEAM */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The <span className="text-navy-700">Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-navy-100 rounded-2xl p-6 text-center 
      shadow-md hover:shadow-xl hover:-translate-y-2 transition w-full max-w-[220px] mx-auto"
              >

                {/* CIRCLE */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full 
      flex items-center justify-center text-emerald-600 font-bold text-lg
      border-2 border-navy-300 bg-navy-50
      hover:bg-navy-500 hover:text-white transition">
                  {member.initials}
                </div>

                {/* NAME */}
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                  {member.name}
                </h4>

                {/* ROLE */}
                <p className="text-xs text-gray-500 mt-1">
                  {member.role}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;