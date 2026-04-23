import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import servicesBanner from "../assets/images/service.png";

const SERVICES_DATA = {
  startups: [
    {
      title: "Incubation & Idea Validation",
      desc: "Helping startups validate ideas and build strong foundations.",
      img: "https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg",
      points: [
        "Ideation & conceptualization",
        "MVP & pitch support",
        "Growth mentorship",
        "Market research",
        "Scalability evaluation",
      ],
    },
    {
      title: "Valuation",
      points: [
        "Startup valuation",
        "Financial modeling",
        "M&A valuation",
        "ESOP valuation",
        "Regulatory valuation",
      ],
    },
    {
      title: "Transaction Advisory",
      points: [
        "Revenue modeling",
        "Fundraising advisory",
        "Due diligence",
        "Agreement structuring",
        "Exit planning",
      ],
    },
    {
      title: "Management Consultancy",
      points: [
        "Business strategy",
        "Corporate restructuring",
        "Board advisory",
        "Investor access",
        "Strategic valuation",
      ],
    },
    {
      title: "Outsourcing Services",
      points: [
        "Company incorporation",
        "Accounting",
        "Taxation",
        "Legal support",
        "Banking support",
      ],
    },
    {
      title: "Virtual CFO",
      points: [
        "Financial strategy",
        "Cash flow management",
        "MIS reporting",
        "Monthly reviews",
        "Board representation",
      ],
    },
  ],

  investor: [
    {
      title: "Valuation",
      points: [
        "Business valuation",
        "Brand valuation",
        "M&A valuations",
        "Acquisition valuations",
        "ESOP valuation",
      ],
    },
    {
      title: "Due Diligence",
      points: [
        "Corporate",
        "Financial",
        "Tax",
        "Commercial",
        "Investment",
      ],
    },
    {
      title: "M&A Support",
      points: [
        "Target identification",
        "Deal structuring",
        "Financing advisory",
        "Workforce planning",
        "Change management",
      ],
    },
  ],

  extended: [
    {
      title: "Compliance & Legal",
      points: [
        "Regulatory filings",
        "Corporate compliance",
        "Legal advisory",
      ],
    },
    {
      title: "Tax Advisory",
      points: [
        "Direct & indirect taxation",
        "Tax planning",
        "GST advisory",
      ],
    },
  ],
};

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get("tab") || "startups";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };

  const cards = SERVICES_DATA[activeTab] || [];

  return (
    <div className="bg-white">

      {/* ===== HERO ===== */}
      <section className="relative h-[400px] md:h-[500px]">
        <img
          src={servicesBanner}
          alt="Services"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-white/80 mt-3 max-w-xl">
            Financial advisory across every stage of your business lifecycle.
          </p>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4 flex-wrap">
          {["startups", "investor", "extended"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-600 text-white border-green-600"
                  : "border-green-600 text-green-600 hover:bg-green-50"
              }`}
            >
              {tab === "startups"
                ? "For Startups"
                : tab === "investor"
                ? "Investor Advisory"
                : "Extended Services"}
            </button>
          ))}
        </div>
      </section>

      {/* ===== CARDS ===== */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>

              {card.desc && (
                <p className="text-sm text-gray-600 mb-4">
                  {card.desc}
                </p>
              )}

              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[180px] object-cover rounded-xl mb-4"
                />
              )}

              <ul className="space-y-2 text-sm text-gray-700">
                {card.points?.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedCard(card)}
                className="mt-4 text-green-600 font-semibold hover:underline"
              >
                View Details →
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">
              {selectedCard.title}
            </h2>

            <ul className="space-y-2 text-gray-700">
              {selectedCard.points?.map((p, i) => (
                <li key={i}>✔ {p}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedCard(null)}
              className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}