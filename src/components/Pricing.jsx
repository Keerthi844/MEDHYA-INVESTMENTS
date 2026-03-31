import React, { useState } from "react";

const features = [
    {
        title: "Multi-Disciplinary Expertise",
        desc: "Integrated expertise across finance, legal, and management domains.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        content: "Our team brings together experts from Chartered Accountancy, Company Secretarial, CPA, Banking, Management, and Legal domains. This integrated approach ensures comprehensive decision-making rather than fragmented advice. We combine financial acumen with legal expertise to provide holistic solutions tailored to your organization's unique needs."
    },
    {
        title: "End-to-End Financial Solutions",
        desc: "From ideation to IPO readiness and wealth creation.",
        image: "https://st5.depositphotos.com/18719442/65097/i/450/depositphotos_650976462-stock-photo-businesspeople-working-documents-office-table.jpg",
        content: "We support you at every stage of your financial journey. Starting from initial ideation and business planning through capital raising, we guide you with strategic financial planning. Our services extend to IPO readiness and long-term wealth creation strategies, ensuring sustainable growth and success at every milestone."
    },
    {
        title: "Deep Transaction Expertise",
        desc: "Strong support in valuation, M&A, and deal structuring.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        content: "Our transaction expertise spans valuation analysis, mergers and acquisitions, and complex deal structuring. We bring precision and strategic insight to every transaction, ensuring proper due diligence, fair valuations, and optimized deal structures that maximize value for all stakeholders involved."
    },
    {
        title: "Founder & Investor Alignment",
        desc: "Bridging capital and execution with structured advisory.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        content: "We bridge the critical gap between founder vision and investor expectations through structured advisory. By aligning goals, refining financial narratives, and ensuring transparent communication, we help build trust between founders and investors, resulting in deals that drive meaningful outcomes."
    },
    {
        title: "Process-Driven Approach",
        desc: "Scalable systems focused on clarity and returns.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        content: "Our process-driven methodology ensures consistency, clarity, and measurable results. We implement scalable systems and frameworks that provide transparency throughout your journey. Every process is optimized for efficiency, making it easier to track progress, achieve milestones, and maximize returns."
    },
];

export default function WhyChooseUs() {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* ================= HERO ================= */}
            <div className="relative max-w-6xl mx-auto mt-6 rounded-xl overflow-hidden">
                <img
                    src="https://www.stratnavapp.com/content/images/blog/BusinessStrategyConsultant.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-semibold text-green-300">Why Choose Us</h1>
                    <p className="text-sm mt-2">
                        Discover what makes us the preferred choice for financial advisory services.
                    </p>
                </div>
            </div>

            {/* ================= GRADIENT CARDS WITH EXPANDING CORNER ================= */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Our Strengths
                </h2>

                <style>{`
                    .card-container {
                        position: relative;
                        max-width: 350px;
                        background: linear-gradient(to bottom, #e1e9e1, #ffffff);
                        border-radius: 10px;
                        padding: 2em 1.2em;
                        margin: 12px;
                        text-decoration: none;
                        z-index: 0;
                        overflow: hidden;
                        font-family: Arial, Helvetica, sans-serif;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        min-height: 270px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .card-container:before {
                        content: '';
                        position: absolute;
                        z-index: -1;
                        top: -16px;
                        right: -16px;
                        background: linear-gradient(135deg, #059669, #10b981);
                        height: 32px;
                        width: 32px;
                        border-radius: 32px;
                        transform: scale(1);
                        transform-origin: 50% 50%;
                        transition: transform 0.35s ease-out;
                    }

                    .card-container:hover:before {
                        transform: scale(28);
                    }

                    .card-title {
                        color: #262626;
                        font-size: 1.5em;
                        line-height: normal;
                        font-weight: 700;
                        margin-bottom: 0.5em;
                        transition: all 0.5s ease-out;
                    }

                    .card-container:hover .card-title {
                        color: #ffffff;
                    }

                    .small-desc {
                        font-size: 1em;
                        font-weight: 400;
                        line-height: 1.5em;
                        color: #452c2c;
                        transition: all 0.5s ease-out;
                    }

                    .card-container:hover .small-desc {
                        color: rgba(255, 255, 255, 0.8);
                    }

                    .go-corner {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        width: 2em;
                        height: 2em;
                        overflow: hidden;
                        top: 0;
                        right: 0;
                        background: linear-gradient(135deg, #34d399, #10b981);
                        border-radius: 0 4px 0 32px;
                        z-index: 10;
                    }

                    .go-arrow {
                        margin-top: -4px;
                        margin-right: -4px;
                        color: white;
                        font-family: courier, sans;
                        font-weight: bold;
                    }
                `}</style>

                <div className="flex flex-wrap justify-center gap-8 px-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="card-container group"
                            onClick={() => setSelectedCard(index)}
                        >
                            {/* CORNER ELEMENT */}
                            <div className="go-corner">
                                <div className="go-arrow">→</div>
                            </div>

                            {/* CARD CONTENT */}
                            <div>
                                <p className="card-title">{item.title}</p>
                                <p className="small-desc">{item.desc}</p>
                            </div>

                            {/* BUTTON */}
                            <button 
                                onClick={() => setSelectedCard(index)}
                                className="mt-4 px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= MODAL ================= */}
            {selectedCard !== null && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[80vh] overflow-hidden relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCard(null)}
                            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-gray-700 hover:bg-white shadow"
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <div className="grid md:grid-cols-2 h-full">

                            {/* LEFT - IMAGE */}
                            <div className="h-full">
                                <img
                                    src={features[selectedCard].image}
                                    alt={features[selectedCard].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* RIGHT - CONTENT */}
                            <div className="p-6 flex flex-col justify-between overflow-y-auto">

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                        {features[selectedCard].title}
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {features[selectedCard].content}
                                    </p>

                                    {/* Additional Context */}
                                    <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h3 className="text-sm font-semibold text-green-900 mb-2">Why This Matters</h3>
                                        <p className="text-xs text-green-800 leading-relaxed">
                                            In today's competitive financial landscape, having access to specialized expertise can be the difference between stagnation and exponential growth. Our approach ensures you're equipped with market-proven strategies and insights.
                                        </p>
                                    </div>

                                    {/* Key Highlights */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Highlights</h3>
                                    <ul className="space-y-2 text-sm mb-6">
                                        {[
                                            "Expert consultation tailored to your needs",
                                            "Proven track record of successful outcomes",
                                            "Comprehensive support throughout your journey",
                                            "Transparent and professional service delivery",
                                            "Industry-leading best practices and frameworks",
                                            "Measurable results and continuous improvement"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-green-600 font-bold">✓</span>
                                                <p className="text-gray-700">{item}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Additional Info */}
                                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">What You Get</h4>
                                        <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                            Access to a team of certified professionals with decades of combined experience across finance, legal, and strategic domains. We provide not just solutions, but partners who understand your vision and work towards your success.
                                        </p>
                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            Our structured approach ensures consistency in service delivery while maintaining flexibility to adapt to your unique business requirements and challenges.
                                        </p>
                                    </div>

                                    {/* CTA */}
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start px-4">

          <div>
            <img
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d"
              className="rounded-xl shadow-md w-full"
            />
          </div>

          <div className="text-gray-700 leading-relaxed">
            <p>
              Our team brings expertise across multiple financial and strategic domains, enabling integrated decision-making and long-term value creation. We focus on building strong financial foundations, aligning stakeholders, and executing transactions with precision and clarity.We have experience across finance, legal, and business areas, allowing us to provide complete and well-rounded solutions for your needs.We support you at every stage of your journey, from planning and fundraising to growth and long-term success.We guide you through important financial transactions with proper support in valuation, due diligence, and deal structuring.We help founders and investors stay aligned, ensuring better communication, clear expectations, and smooth execution.We follow structured processes and systems to ensure consistency, efficiency, and reliable results.We provide the right guidance and strategies to help your business grow steadily and achieve long-term goals.
            </p>
          </div>

        </div>
      </section>
        </div>
        
    );
}
