import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get("tab") || "startups";

  const [activeTab, setActiveTab] = useState(tabParam);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* ===== HEADER ===== */}
      <section className="pt-28 pb-20 bg-white relative overflow-hidden">
        {/* SKY BACKGROUND */}
        <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-r from-navy-700 via-navy-700 to-navy-700 z-0"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-emerald-300">Services</span>
          </h1>
          <p className="text-white/90 mt-3 max-w-xl mx-auto">
            Comprehensive financial advisory tailored for every stage of the investment lifecycle.
          </p>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="py-8 text-center bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex border border-navy-200 rounded-full overflow-hidden">
          <button
            onClick={() => setActiveTab("startups")}
            className={`px-6 py-2 font-semibold transition ${
              activeTab === "startups"
                ? "bg-navy-600 text-white"
                : "text-emerald-600 hover:bg-navy-100"
            }`}
          >
            For Startups
          </button>

          <button
            onClick={() => setActiveTab("investor")}
            className={`px-6 py-2 font-semibold transition ${
              activeTab === "investor"
                ? "bg-navy-600 text-white"
                : "text-navy-600 hover:bg-navy-100"
            }`}
          >
            For Investors
          </button>
        </div>
        </div>
      </section>

      {/* ===== STARTUPS ===== */}
      {activeTab === "startups" && (
        <section className="bg-white pb-16">
          <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Incubation & Idea Validation",
                points: [
                  "Ideation & conceptualization",
                  "MVP & pitch support",
                  "Growth mentorship",
                  "Market research",
                  "Scalability evaluation"
                ]
              },
              {
                title: "Valuation",
                points: [
                  "Startup valuation",
                  "Financial modeling",
                  "M&A valuation",
                  "ESOP valuation",
                  "Regulatory valuation"
                ]
              },
              {
                title: "Transaction Advisory",
                points: [
                  "Revenue modeling",
                  "Fundraising advisory",
                  "Due diligence",
                  "Agreement structuring",
                  "Exit planning"
                ]
              },
              {
                title: "Management Consultancy",
                points: [
                  "Business development strategy",
                  "Corporate restructuring",
                  "Board advisory",
                  "Investor access",
                  "Strategic valuation"
                ]
              },
              {
                title: "Outsourcing Services",
                points: [
                  "Company incorporation",
                  "Accounting & reporting",
                  "Taxation",
                  "Legal support",
                  "Banking support"
                ]
              },
              {
                title: "Virtual CFO",
                points: [
                  "Financial strategy",
                  "Cash flow management",
                  "MIS reporting",
                  "Monthly reviews",
                  "Board representation"
                ]
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-2 hover:bg-emerald-50 hover:border-emerald-300
                transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-3">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-emerald-500">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
        </section>
      )}

      {/* ===== INVESTORS ===== */}
      {activeTab === "investor" && (
        <section className="bg-white pb-16">
          <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Valuation",
                points: [
                  "Business valuation",
                  "Brand valuation",
                  "M&A valuations",
                  "Acquisition valuations",
                  "ESOP valuation",
                  "FDI / ODI valuation"
                ]
              },
              {
                title: "Due Diligence",
                points: [
                  "Corporate",
                  "Financial",
                  "Tax",
                  "Asset purchase",
                  "Commercial",
                  "Investment",
                  "Business"
                ]
              },
              {
                title: "M&A Support",
                points: [
                  "Target identification",
                  "Valuation",
                  "Deal structuring",
                  "Financing advisory",
                  "Due diligence supervision",
                  "Workforce planning",
                  "Change management"
                ]
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-2 hover:bg-emerald-50 hover:border-emerald-300
                transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-3">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-emerald-500">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
        </section>
      )}

    </div>
  );
}