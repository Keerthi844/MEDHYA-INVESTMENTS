import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get("tab") || "startups";
  
  const [activeTab, setActiveTab] = useState(tabParam);
  const [selected, setSelected] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  // Create refs for each section
  const startupsRef = useRef(null);
  const investorRef = useRef(null);
  const extendedRef = useRef(null);

  // Always use activeTab for display
  const displayTab = activeTab;

  // Scroll to section when tab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeTab === "startups" && startupsRef.current) {
        startupsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "investor" && investorRef.current) {
        investorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "extended" && extendedRef.current) {
        extendedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/63d90fe29e8bf43980780590/65e19ac840e75505ca576f60_Teal.jpg"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-300">Our Services</h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Comprehensive financial advisory solutions for startups, investors, and enterprises.
          </p>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 text-center">
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {["startups", "investor", "extended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300 text-sm sm:text-base ${
                displayTab === tab
                  ? "bg-green-600 text-white border-green-600 shadow-lg"
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


      {/* ================= STARTUPS ================= */}
      {/* ================= STARTUPS ================= */}
      {displayTab === "startups" && (
        <section ref={startupsRef} className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 scroll-mt-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Incubation & Idea Validation",
                desc: "Helping startups validate ideas and build strong foundations.",
                icon: `<svg viewBox="0 0 24 24"><path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path></svg>`,
                points: [
                  "Pre-startup advisory (Ideation & Conceptualization)",
                  "MVP, pitch, and incubation support",
                  "Growth mentorship & expansion strategy",
                  "Market research and competitor analysis",
                  "Product scalability & milestone evaluation",
                ],
              },
              {
                title: "Valuation",
                desc: "Accurate valuation services for startups and businesses.",
                img: "https://images.presentationgo.com/2025/06/financial-analyst-reviewing-data.jpg",
                points: [
                  "Business & startup valuation",
                  "Financial model build and review",
                  "M&A and acquisition valuation",
                  "ESOP & sweat equity valuations",
                  "Regulatory and stock exchange valuations"
                ],
              },
              {
                title: "Transaction Advisory",
                desc: "Support for fundraising and deal execution.",
                img: "https://png.pngtree.com/background/20250126/original/pngtree-a-professional-businessman-seals-the-deal-signing-investment-contract-in-a-picture-image_14177048.jpg",
                points: [
                  "Revenue and financial modeling",
                  "Fundraising & investment advisory",
                  "Due diligence support",
                  "Agreement structuring & review",
                  "Exit strategy planning (M&A/Founders)"
                ],
              },
              {
                title: "Management Consulting",
                desc: "Strategic support for scalable growth.",
                img: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/private-business/images/ey-business-group-meeting-discussion.jpg",
                points: [
                  "Business development strategy",
                  "Corporate structuring & restructuring",
                  "Board advisory & performance reporting",
                  "Investor and network access (Angels/VC/PE)",
                  "Strategic valuation support"
                ],
              },
              {
                title: "Outsourcing Services",
                desc: "Complete compliance and financial support.",
                img: "https://virtualnexgen.com/assets/uploads/aboutus/39995.jpg",
                points: [
                  "Company incorporation & statutory compliance",
                  "Accounting and financial reporting",
                  "Direct and indirect taxation",
                  "Legal support (pre & post startup)",
                  "Banking and operational support"
                ],
              },
              {
                title: "Company Management/Virtual CFO",
                desc: "Expert financial leadership for businesses.",
                img: "https://static.wixstatic.com/media/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png/v1/fill/w_1000%2Ch_558%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png",
                points: [
                  "Interim CFO services",
                  "Financial strategy & cash flow management",
                  "Accounting policies & MIS reporting",
                  "Monthly performance reviews"
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-100 rounded-2xl p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-900 hover:to-green-700 hover:text-white hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 group-hover:text-gray-200">
                  {item.desc}
                </p>

                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-[200px] object-cover rounded-xl"
                  />

                  {/* CLICK ARROW */}
                  <div
                    onClick={() => setSelected(item)}
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-white text-xl shadow-lg cursor-pointer hover:scale-110 group-hover:bg-white group-hover:text-green-700 transition duration-300"
                  >
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ================= INVESTOR ================= */}
      {/* ================= INVESTOR ================= */}
      {displayTab === "investor" && (
        <section ref={investorRef} className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 scroll-mt-20">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
            Investor Advisory
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

            {[
              {
                title: "Valuation",
                desc: "Comprehensive valuation services for businesses and investments.",
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
                points: [
                  "Business Valuation",
                  "Intangible / Brand Valuations",
                  "M&A / Share Swap Valuations",
                  "Valuation for Acquisitions (Buy Side and Sell Side)",
                  "ESOP and Sweat Equity Valuation",
                  "FDI / ODI Valuations"
                ],
              },
              {
                title: "Due Diligence",
                desc: "Thorough analysis to assess risks and opportunities.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                points: [
                  "Corporate Due Diligence",
                  "Financial Due Diligence",
                  "Tax Due Diligence",
                  "Asset Purchase Due Diligence",
                  "Commercial Due Diligence",
                  "Investment Due Diligence",
                  "Business Due Diligence"
                ],
              },
              {
                title: "M&A Support",
                desc: "End-to-end support for mergers, acquisitions, and deals.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                points: [
                  "Identifying key targets locally and internationally",
                  "Valuation",
                  "Transaction structuring and negotiation",
                  "Advice on financing (debt, equity, or complex instruments)",
                  "Supervising due diligence, legal, and execution processes",
                  "Developed detailed plans for executing strategy through people, including assessment of employee leadership capabilities and identification of competencies",
                  "Staffing models, organizational structure, and detailed role profiling",
                  "Workforce planning and needs analysis",
                  "Change management",
                  "Culture visioning and transformation"
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-100 rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-900 hover:to-green-700 hover:text-white hover:shadow-2xl hover:-translate-y-2 active:scale-95"
              >
                {/* Title */}
                <h1 className="font-bold text-xl text-gray-900">{item.title}</h1>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-6">{item.desc}</p>

                {/* Click Button */}
                <button
                  onClick={() => setSelected(item)}
                  className="inline-flex items-center gap-2 mt-4 text-violet-500 font-semibold hover:text-violet-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}

          </div>

          {/* Highlight Box */}
          <div className="mt-10 bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-xl text-center">
            This is a premium advisory service designed specifically for investors.
          </div>

        </section>
      )}

      {/* ================= EXTENDED ================= */}
      {displayTab === "extended" && (
        <section ref={extendedRef} className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            Virtual CFO & Extended Services
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                id: "service1",
                title: "Financial Advisory",
                icon: "💼",
                desc: "Complete financial leadership and strategic guidance",
                items: [
                  "We provide strategic financial guidance to support business growth and stabilityFocus is placed on profitability, sustainability, and risk mitigation.Tailored solutions are designed based on your business goals Our advisors help in decision-making, capital structuring, and investment planning.We analyze financial health and identify improvement opportunities"
                ]
              },
              {
                id: "service2",
                title: "Financial Projections",
                icon: "📈",
                desc: "Accurate financial forecasting and modeling",
                items: [
                  "We prepare detailed financial forecasts based on historical and market data. These projections include revenue, expenses, and profitability over time, helping businesses plan investments and funding requirements effectively. They are highly useful for pitching to investors and stakeholders, ensuring a clear financial roadmap. Our approach ensures realistic and data-driven financial planning for sustainable growth.",
                 
                ]
              },
              {
                id: "service3",
                title: "Cash Flow Projections",
                icon: "💰",
                desc: "Strategic cash flow management",
                items: [
                  "We estimate cash inflows and outflows to maintain optimal liquidity and ensure smooth business operations. Our approach helps avoid cash shortages while identifying seasonal fluctuations and working capital requirements. It supports better planning of payments and expenses, enabling businesses to stay financially organized. Overall, this leads to improved financial stability, control, and long-term sustainability.",
                 
                ]
              },
              {
                id: "service4",
                title: "Budgeting",
                icon: "📊",
                desc: "Comprehensive budgeting solutions",
                items: [
                  "We create structured budgets aligned with business objectives to ensure effective financial planning and control. Our approach helps allocate resources efficiently across departments while tracking actual performance against planned targets. This enables the identification of cost-saving opportunities and areas for improvement. Overall, it ensures disciplined financial management and supports sustainable business growth.",
                  
                ]
              },
              {
                id: "service5",
                title: "Cost Management",
                icon: "💳",
                desc: "Effective cost control strategies",
                items: [
                  "We analyze cost structures to improve operational efficiency and financial performance. Our process identifies unnecessary expenses and reduces wastage while optimizing both operational and production costs. This helps enhance profitability without compromising quality. We also implement effective cost control strategies that deliver long-term financial benefits and stability.",
                  
                ]
              },
              {
                id: "service6",
                title: "Audit Support",
                icon: "✔️",
                desc: "Comprehensive audit assistance",
                items: [
                  "We assist organizations during both internal and external audits by ensuring proper documentation and compliance readiness. Our team helps resolve audit queries and address discrepancies efficiently, minimizing delays and risks. This process strengthens financial transparency and improves the accuracy of records. Overall, we help businesses maintain full regulatory compliance with confidence.",
                  
                ]
              },
              {
                id: "service7",
                title: "Corporate Governance",
                icon: "⚖️",
                desc: "Strategic governance framework",
                items: [
                  "We establish strong corporate governance frameworks that promote transparency, accountability, and ethical business practices. Our approach ensures that operations are aligned with regulatory standards and industry expectations. This enhances stakeholder confidence and builds long-term trust. Ultimately, it supports sustainable growth and responsible business management.",
                  
                ]
              },
              {
                id: "service8",
                title: "Risk Assessment",
                icon: "⚠️",
                desc: "Identify and mitigate business risks",
                items: [
                  "We identify financial and operational risks and analyze their potential impact and likelihood. Our approach includes developing effective strategies to mitigate and manage these risks, ensuring business continuity and stability. By promoting proactive risk management practices, we help organizations stay prepared and resilient in a dynamic business environment.",
                  
                ]
              },
              {
                id: "service9",
                title: "Compliances of the Various Acts Applicable",
                icon: "📋",
                desc: "Regulatory compliance management",
                items: [
                  "We ensure adherence to all relevant laws and regulations by managing filings, documentation, and statutory requirements efficiently. Our services help reduce the risk of penalties and legal issues while keeping your business updated with regulatory changes. This ensures smooth, compliant, and hassle-free operations.",
                 
                ]
              },
              {
                id: "service10",
                title: "Internal Controls",
                icon: "🔒",
                desc: "Robust internal control systems",
                items: [
                  "We implement robust systems and controls to prevent errors and fraud while ensuring the accuracy and reliability of financial data. Our approach strengthens operational efficiency and accountability by continuously monitoring processes and compliance. This helps build a strong and secure financial control environment.",
                 
                ]
              },
              {
                id: "service11",
                title: "Accounting Policies and Procedures",
                icon: "📄",
                desc: "Standardized accounting practices",
                items: [
                  "We define standardized accounting policies and procedures to ensure consistency in financial reporting. Our framework aligns with industry standards and regulatory requirements, improving clarity and transparency in financial records. This supports better financial analysis and informed decision-making.",
                
                ]
              },
              {
                id: "service12",
                title: "Setting up an Accounting System",
                icon: "🖥️",
                desc: "Implementation of accounting systems",
                items: [
                  "We assist in setting up efficient accounting systems and software tailored to your business needs. Our approach ensures proper recording and tracking of transactions while automating processes for improved accuracy and efficiency. This enables real-time financial insights and better control over operations.",
                
                ]
              },
              {
                id: "service13",
                title: "MIS Reporting",
                icon: "📊",
                desc: "Management information systems",
                items: [
                  "We generate comprehensive management information system (MIS) reports that provide valuable insights into business performance, trends, and key metrics. These reports enable data-driven decision-making and improve monitoring of financial and operational activities. This ensures timely and informed business strategies.",
                
                ]
              },
              {
                id: "service14",
                title: "Year End Accounts Closure and Filing",
                icon: "🎯",
                desc: "Year-end financial closing process",
                items: [
                  "We manage year-end financial closing activities by ensuring accurate preparation of financial statements and proper reconciliation of accounts. Our team assists with tax filings and statutory submissions while maintaining full compliance with legal requirements. This ensures a smooth, timely, and error-free closure process.",
                 
                ]
              },
            
            ].map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                {/* HEADER - CLICKABLE */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full bg-white hover:bg-gray-50 p-4 sm:p-6 flex items-start sm:items-center justify-between gap-3 transition-all duration-300"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-4 text-left flex-1 min-w-0">
                    <span className="text-2xl sm:text-4xl flex-shrink-0">{service.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 break-words">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 break-words">{service.desc}</p>
                    </div>
                  </div>
                  <div className={`text-xl sm:text-2xl text-green-600 transition-transform duration-300 flex-shrink-0 ${expandedService === service.id ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </button>

                {/* DROPDOWN CONTENT */}
                {expandedService === service.id && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200 p-4 sm:p-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-none">
                      {service.items.join(" • ")}
                    </p>

                    {/* FOOTER CTA */}
                  
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* INFO BOX */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg p-6 md:p-8">
            <h3 className="font-bold text-green-900 mb-2 text-lg">Why Choose Our Extended Services?</h3>
            <p className="text-green-800 text-sm md:text-base leading-relaxed">
              Our extended services are designed for businesses at any stage of growth. Whether you need interim CFO support, complete compliance management, or strategic financial guidance, we provide scalable solutions tailored to your business needs. Click on any service above to view detailed offerings.
            </p>
          </div>
        </section>
      )}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">

          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden my-8">

            {/* CLOSE BUTTON */}
            <div className="flex justify-end p-4 bg-gray-50 border-b">
              <button
                onClick={() => setSelected(null)}
                className="text-3xl font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* IMAGE */}
              <img
                src={selected.img}
                className="w-full h-[300px] md:h-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-green-900 to-green-700 text-white flex flex-col justify-between">

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {selected.title}
                  </h2>

                  <h3 className="text-lg font-semibold mb-4 text-green-200">
                    Key Features:
                  </h3>

                  <ul className="space-y-3">
                    {selected.points && selected.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-green-300 mt-1">✓</span>
                        <span className="text-gray-100 text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 bg-white text-green-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition w-full"
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
      {/* ================= CTA ================= */}
    <section className="py-12 sm:py-16 bg-gradient-to-r from-green-700 to-green-900 text-white text-center px-4 mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Let's Build Your Financial Future Together
        </h2>
       <Link
  to="/contact"
  className="inline-block mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-white text-green-700 rounded-full font-semibold hover:scale-105 transition text-sm sm:text-base"
>
  Contact Us →
</Link>
      </section>

    </div>
  );
}