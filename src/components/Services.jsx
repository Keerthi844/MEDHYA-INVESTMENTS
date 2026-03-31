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
                img: "https://cdn.prod.website-files.com/63d90fe29e8bf43980780590/65e19ac840e75505ca576f60_Teal.jpg",
                points: [
                 "Incubation & Idea Validation focuses on transforming early-stage ideas into practical and scalable business ventures. We begin by evaluating the feasibility and uniqueness of your concept to ensure it addresses a real problem. Our team conducts in-depth market research to identify demand, target audience, and competitive landscape. Through structured validation techniques, we test assumptions and refine your value proposition. We support the development of a Minimum Viable Product (MVP) to bring your idea to life quickly and efficiently. User feedback is collected and analyzed to improve functionality and usability. We help in shaping a strong problem-solution fit that aligns with market needs. Our experts guide you in building a sustainable and scalable business model. Risk factors are identified early and mitigated through data-driven insights.",

                ],
              },
              {
                title: "Valuation",
                desc: "Accurate valuation services for startups and businesses.",
                img: "https://images.presentationgo.com/2025/06/financial-analyst-reviewing-data.jpg",
                points: [
                  "Valuation is the process of determining the true economic worth of a business or startup. We provide accurate and reliable valuation services using industry-standard methodologies. Our approach considers financial performance, market conditions, and growth potential. We analyze key factors such as revenue, profitability, and future projections. Both qualitative and quantitative aspects are evaluated for a comprehensive assessment. We support startups and established businesses across various stages of growth. Our valuation models are tailored to suit specific business needs and industries. We also assist in valuations for mergers, acquisitions, and fundraising activities. Regulatory and compliance requirements are carefully addressed during the process. Transparent reporting ensures clarity and builds investor confidence. We help businesses understand their value and make informed strategic decisions."
                ],
              },
              {
                title: "Transaction Advisory",
                desc: "Support for fundraising and deal execution.",
                img: "https://png.pngtree.com/background/20250126/original/pngtree-a-professional-businessman-seals-the-deal-signing-investment-contract-in-a-picture-image_14177048.jpg",
                points: [
                  "Transaction Advisory provides strategic support to businesses during critical financial transactions such as mergers, acquisitions, and fundraising. We guide organizations through every stage of the deal lifecycle, ensuring smooth and efficient execution. Our team conducts detailed due diligence to identify potential risks and uncover opportunities. We analyze financial, operational, and market data to support informed decision-making. Valuation insights are provided to ensure fair and competitive deal pricing. We assist in structuring transactions to maximize value and minimize risks. Our experts offer negotiation support to help achieve favorable terms and outcomes. We ensure compliance with legal and regulatory requirements throughout the process. Clear documentation and reporting enhance transparency for all stakeholders. We also support exit strategy planning for founders and investors."
                ],
              },
              {
                title: "Management Consulting",
                desc: "Strategic support for scalable growth.",
                img: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/private-business/images/ey-business-group-meeting-discussion.jpg",
                points: [
                  "Management Consulting focuses on helping businesses improve performance, solve complex challenges, and achieve sustainable growth. We work closely with organizations to understand their goals, operations, and market position. Our approach involves analyzing current processes to identify gaps and opportunities for improvement. We provide strategic guidance on business planning, expansion, and competitive positioning. Organizational structure and governance frameworks are optimized for better efficiency and control. We support decision-making through data-driven insights and performance analysis. Our team assists in developing scalable strategies aligned with long-term objectives. We help streamline operations, reduce costs, and enhance productivity. Change management support ensures smooth implementation of new initiatives. We also offer advisory on corporate restructuring and transformation."
                ],
              },
              {
                title: "Outsourcing Services",
                desc: "Complete compliance and financial support.",
                img: "https://virtualnexgen.com/assets/uploads/aboutus/39995.jpg",
                points: [
                  "Outsourcing Services enable businesses to streamline operations by delegating key functions to experienced professionals. We provide end-to-end support across accounting, compliance, and administrative activities. Our services help reduce operational costs while maintaining high-quality standards. We manage financial reporting, bookkeeping, and tax-related requirements efficiently. Compliance with statutory and regulatory obligations is ensured through timely filings and documentation. Our team supports company incorporation and ongoing legal processes. We help businesses focus on core activities by handling routine and complex back-office tasks. Technology-driven solutions improve accuracy, speed, and transparency. Customized outsourcing models are designed based on business needs and scale."
                ],
              },
              {
                title: "Company Management/Virtual CFO",
                desc: "Expert financial leadership for businesses.",
                img: "https://static.wixstatic.com/media/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png/v1/fill/w_1000%2Ch_558%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png",
                points: [
                  "Company Management / Virtual CFO services provide businesses with strategic financial leadership without the need for a full-time CFO. We support organizations in managing their financial operations with expertise and precision. Our services include financial planning, budgeting, and forecasting to ensure sustainable growth. We analyze financial performance and provide actionable insights for better decision-making. Cash flow management is optimized to maintain liquidity and operational stability. We establish strong financial controls and reporting systems for transparency. Our team assists in setting financial goals and tracking key performance indicators. We support fundraising activities and maintain investor relations effectively. Compliance with financial regulations and standards is ensured at all times. We also help in cost optimization and improving overall profitability"
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
                  "Valuation is the process of determining the true financial worth of a business or startup. We provide accurate and reliable valuation services using globally accepted methodologies. Our approach considers financial performance, market trends, and future growth potential. We analyze key factors such as revenue, profitability, assets, and risk profile. Both qualitative and quantitative aspects are evaluated for a well-rounded assessment. We support startups, growing companies, and established businesses across different stages. Our valuation models are customized to suit industry and business-specific requirements. We assist in valuations for fundraising, mergers, acquisitions, and strategic decisions. Compliance with regulatory and legal standards is ensured throughout the process. Transparent reporting helps build trust with investors and stakeholders. We provide clear insights to support informed decision-making."
                ],
              },
              {
                title: "Due Diligence",
                desc: "Thorough analysis to assess risks and opportunities.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                points: [
                  "Due Diligence is a critical process of evaluating a business before making investment or transaction decisions. We conduct comprehensive assessments of financial, legal, and operational aspects to uncover potential risks and opportunities. Our team reviews financial statements, contracts, and compliance records in detail. We analyze business performance, revenue streams, and cost structures for accuracy and sustainability. Legal due diligence ensures that all regulatory requirements and obligations are met. Operational reviews help identify inefficiencies and areas for improvement. We also assess market position, competitive landscape, and growth potential. Our process ensures transparency and reliability in all findings. We provide clear and structured reports for informed decision-making. Risk factors are highlighted along with actionable recommendations. Our due diligence support helps investors and stakeholders make confident decisions"
                ],
              },
              {
                title: "M&A Support",
                desc: "End-to-end support for mergers, acquisitions, and deals.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                points: [
                  "M&A Support (Mergers & Acquisitions) helps businesses navigate complex transactions with confidence and strategic clarity. We assist organizations throughout the entire M&A lifecycle, from initial planning to final execution. Our team conducts thorough financial and operational analysis to identify opportunities and risks. We provide valuation insights to determine fair deal structures and pricing. Due diligence is carried out to ensure transparency and informed decision-making. We support in structuring deals to maximize value and minimize potential risks. Our experts guide negotiation processes to achieve favorable outcomes for all parties. We ensure compliance with legal, regulatory, and financial requirements. Integration planning is provided to ensure a smooth transition post-transaction. We help align business objectives and operational strategies during mergers or acquisitions"
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-100 rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-900 hover:to-green-700 hover:text-white hover:shadow-2xl hover:-translate-y-2 active:scale-95"
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 group-hover:text-gray-200">
                  {item.desc}
                </p>

                {/* Image */}
                <div className="relative rounded-xl overflow-hidden h-[200px] sm:h-auto">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Arrow Button */}
                  <button
                    onClick={() => setSelected(item)}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-400 flex items-center justify-center text-white text-lg sm:text-xl shadow-lg cursor-pointer hover:scale-110 active:scale-95 group-hover:bg-white group-hover:text-green-700 transition duration-300 z-10"
                  >
                    →
                  </button>
                </div>
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
                  "We provide strategic financial guidance to support business growth and stabilityFocus is placed on profitability, sustainability, and risk mitigation.Tailored solutions are designed based on your business goals Our advisors help in decision-making, capital structuring, and investment planning.We analyze financial health and identify improvement opportunities.Financial Advisory provides strategic guidance to help businesses manage their finances effectively and achieve sustainable growth. We analyze financial performance, identify opportunities, and offer data-driven insights for better decision-making. Our services include planning, budgeting, and optimizing cash flow to improve overall efficiency."
                ]
              },
              {
                id: "service2",
                title: "Financial Projections",
                icon: "📈",
                desc: "Accurate financial forecasting and modeling",
                items: [
                  "We prepare detailed financial forecasts based on historical and market data. These projections include revenue, expenses, and profitability over time, helping businesses plan investments and funding requirements effectively. They are highly useful for pitching to investors and stakeholders, ensuring a clear financial roadmap. Our approach ensures realistic and data-driven financial planning for sustainable growth.Financial Projections provide a forward-looking view of a business’s financial performance based on realistic assumptions and data analysis. We prepare detailed forecasts covering revenue, expenses, cash flow, and profitability. Our projections support strategic planning, budgeting, and investor presentations. They help businesses make informed decisions and plan for sustainable growth and financial stability.",
                 
                ]
              },
              {
                id: "service3",
                title: "Cash Flow Projections",
                icon: "💰",
                desc: "Strategic cash flow management",
                items: [
                  "We estimate cash inflows and outflows to maintain optimal liquidity and ensure smooth business operations. Our approach helps avoid cash shortages while identifying seasonal fluctuations and working capital requirements. It supports better planning of payments and expenses, enabling businesses to stay financially organized. Overall, this leads to improved financial stability, control, and long-term sustainability.Cash Flow Projections help businesses anticipate inflows and outflows to maintain financial stability. We forecast cash movements to ensure sufficient liquidity for operations. Our analysis helps identify potential shortfalls and plan corrective actions. This enables better financial control and uninterrupted business functioning.",
                 
                ]
              },
              {
                id: "service4",
                title: "Budgeting",
                icon: "📊",
                desc: "Comprehensive budgeting solutions",
                items: [
                  "We create structured budgets aligned with business objectives to ensure effective financial planning and control. Our approach helps allocate resources efficiently across departments while tracking actual performance against planned targets. This enables the identification of cost-saving opportunities and areas for improvement. Overall, it ensures disciplined financial management and supports sustainable business growth.Budgeting provides a structured plan for managing income and expenses effectively. We create detailed budgets aligned with business goals and growth strategies. Our approach ensures optimal resource allocation and cost control. It helps track performance and supports informed financial decision-making.",
                  
                ]
              },
              {
                id: "service5",
                title: "Cost Management",
                icon: "💳",
                desc: "Effective cost control strategies",
                items: [
                  "We analyze cost structures to improve operational efficiency and financial performance. Our process identifies unnecessary expenses and reduces wastage while optimizing both operational and production costs. This helps enhance profitability without compromising quality. We also implement effective cost control strategies that deliver long-term financial benefits and stability.Cost Management focuses on controlling expenses while maintaining efficiency and quality. We analyze cost structures to identify savings and optimization opportunities. Our strategies help reduce unnecessary spending and improve profitability. This ensures sustainable operations and better financial performance.",
                  
                ]
              },
              {
                id: "service6",
                title: "Audit Support",
                icon: "✔️",
                desc: "Comprehensive audit assistance",
                items: [
                  "We assist organizations during both internal and external audits by ensuring proper documentation and compliance readiness. Our team helps resolve audit queries and address discrepancies efficiently, minimizing delays and risks. This process strengthens financial transparency and improves the accuracy of records. Overall, we help businesses maintain full regulatory compliance with confidence.Audit Support ensures smooth and efficient audit processes with complete accuracy and transparency. We assist in preparing financial records, documentation, and reconciliations. Our team coordinates with auditors to address queries and ensure compliance. This helps reduce risks and ensures a hassle-free audit experience.",
                  
                ]
              },
              {
                id: "service7",
                title: "Corporate Governance",
                icon: "⚖️",
                desc: "Strategic governance framework",
                items: [
                  "We establish strong corporate governance frameworks that promote transparency, accountability, and ethical business practices. Our approach ensures that operations are aligned with regulatory standards and industry expectations. This enhances stakeholder confidence and builds long-term trust. Ultimately, it supports sustainable growth and responsible business management.Corporate Governance focuses on establishing strong policies, ethics, and accountability within an organization. We help design frameworks that ensure transparency and effective decision-making. Our approach strengthens stakeholder trust and regulatory compliance. This leads to improved organizational performance and long-term sustainability.",
                  
                ]
              },
              {
                id: "service8",
                title: "Risk Assessment",
                icon: "⚠️",
                desc: "Identify and mitigate business risks",
                items: [
                  "We identify financial and operational risks and analyze their potential impact and likelihood. Our approach includes developing effective strategies to mitigate and manage these risks, ensuring business continuity and stability. By promoting proactive risk management practices, we help organizations stay prepared and resilient in a dynamic business environment.Risk Assessment identifies potential threats that could impact business operations and growth. We evaluate financial, operational, and strategic risks systematically. Our insights help in developing effective mitigation strategies. This enables businesses to operate with confidence and stability.",
                  
                ]
              },
              {
                id: "service9",
                title: "Compliances of the Various Acts Applicable",
                icon: "📋",
                desc: "Regulatory compliance management",
                items: [
                  "We ensure adherence to all relevant laws and regulations by managing filings, documentation, and statutory requirements efficiently. Our services help reduce the risk of penalties and legal issues while keeping your business updated with regulatory changes. This ensures smooth, compliant, and hassle-free operations.Compliances of the Various Acts Applicable ensure that businesses adhere to all legal and regulatory requirements. We manage filings, documentation, and statutory obligations accurately and on time. Our services help avoid penalties and legal complications. This ensures smooth and compliant business operations.",
                 
                ]
              },
              {
                id: "service10",
                title: "Internal Controls",
                icon: "🔒",
                desc: "Robust internal control systems",
                items: [
                  "We implement robust systems and controls to prevent errors and fraud while ensuring the accuracy and reliability of financial data. Our approach strengthens operational efficiency and accountability by continuously monitoring processes and compliance. This helps build a strong and secure financial control environment.Internal Controls are essential for maintaining accuracy, efficiency, and accountability in business processes. We design and implement control systems to prevent errors and fraud. Our approach improves operational efficiency and financial reliability. This strengthens overall governance and business performance.",
                 
                ]
              },
              {
                id: "service11",
                title: "Accounting Policies and Procedures",
                icon: "📄",
                desc: "Standardized accounting practices",
                items: [
                  "We define standardized accounting policies and procedures to ensure consistency in financial reporting. Our framework aligns with industry standards and regulatory requirements, improving clarity and transparency in financial records. This supports better financial analysis and informed decision-making.Accounting Policies and Procedures establish a structured framework for consistent and accurate financial reporting. We help define clear guidelines aligned with regulatory standards and business needs. Our approach ensures transparency, uniformity, and compliance across all financial activities. This strengthens financial discipline and supports reliable decision-making.",
                
                ]
              },
              {
                id: "service12",
                title: "Setting up an Accounting System",
                icon: "🖥️",
                desc: "Implementation of accounting systems",
                items: [
                  "We assist in setting up efficient accounting systems and software tailored to your business needs. Our approach ensures proper recording and tracking of transactions while automating processes for improved accuracy and efficiency. This enables real-time financial insights and better control over operations.Setting up an Accounting System ensures a strong financial foundation for efficient operations. We design and implement systems tailored to your business size and requirements. Our solutions improve accuracy, automation, and real-time financial tracking. This enables better control and streamlined financial management.",
                
                ]
              },
              {
                id: "service13",
                title: "MIS Reporting",
                icon: "📊",
                desc: "Management information systems",
                items: [
                  "We generate comprehensive management information system (MIS) reports that provide valuable insights into business performance, trends, and key metrics. These reports enable data-driven decision-making and improve monitoring of financial and operational activities. This ensures timely and informed business strategies.MIS Reporting provides timely and structured financial insights for effective decision-making. We create customized reports that track performance, trends, and key metrics. Our reports help management monitor operations and identify improvement areas. This ensures better planning, control, and strategic growth.",
                
                ]
              },
              {
                id: "service14",
                title: "Year End Accounts Closure and Filing",
                icon: "🎯",
                desc: "Year-end financial closing process",
                items: [
                  "We manage year-end financial closing activities by ensuring accurate preparation of financial statements and proper reconciliation of accounts. Our team assists with tax filings and statutory submissions while maintaining full compliance with legal requirements. This ensures a smooth, timely, and error-free closure process.Year End Accounts Closure and Filing ensures accurate finalization of financial statements and compliance with regulations. We handle reconciliations, adjustments, and preparation of annual reports. Our team ensures timely filing with relevant authorities to avoid penalties. This guarantees a smooth and compliant year-end process.",
                 
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

          <div className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden my-8">


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


                  <ul className="space-y-3">
                    {selected.points && selected.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                      
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