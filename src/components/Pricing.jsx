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
        image: "https://images.unsplash.com/photo-1554224311-beee415c15cb",
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

            {/* ================= SKEW CARDS WITH BUTTONS ================= */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Strengths
                </h2>

                <div className="flex flex-wrap justify-center gap-12 px-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 hover:-translate-x-6 hover:translate-y-6"
                        >
                            <div className="relative rounded-2xl w-72 h-auto bg-gradient-to-br from-green-400 to-green-700 text-white flex flex-col justify-center items-center text-center px-4 py-6 gap-3
                before:content-[''] before:absolute before:bg-green-800 before:right-3 before:top-0 before:w-72 before:h-full before:-z-10 
                before:rounded-2xl before:-skew-x-12 before:duration-500
                group-hover:before:-right-3 group-hover:before:skew-x-12 duration-500">

                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-xs text-gray-200">{item.desc}</p>
                                <button
                                    onClick={() => setSelectedCard(index)}
                                    className="mt-4 px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
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

                                    {/* Benefits */}
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Expert consultation tailored to your needs",
                                            "Proven track record of successful outcomes",
                                            "Comprehensive support throughout your journey",
                                            "Transparent and professional service delivery",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-green-600 font-bold">✓</span>
                                                <p className="text-gray-700">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
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
