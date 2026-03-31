import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaLightbulb, FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Hero Section
function Hero() {
    const navigate = useNavigate()
    return (
        <section className="relative py-16 overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <motion.div
                className="absolute inset-0"

                transition={{ duration: 0.8, ease: "easeOut" }}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
                    alt="finance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </motion.div>

            {/* CONTENT */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* LEFT CONTENT - STATIC TEXT */}
                    <div className="text-white">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            When Capital Flows Fairly,
                            <span className="text-green-400"> Prosperity Finds Growth</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-8">
                            Your trusted financial partner for startups, businesses, and investors.
                            Market-validated advisory backed by proven results — guiding ventures
                            to sustainable success.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
                            >
                                Get Started →
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="border border-white/40 hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition text-sm sm:text-base"
                            >
                                Schedule Consultation
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="mt-8 sm:mt-12 flex gap-4 sm:gap-8 flex-wrap">
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-green-400">20+</p>
                                <p className="text-gray-300 text-xs sm:text-sm">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-green-400">500+</p>
                                <p className="text-gray-300 text-xs sm:text-sm">Expert Team</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-green-400">98%</p>
                                <p className="text-gray-300 text-xs sm:text-sm">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - ANIMATED IMAGE */}
                    <motion.div
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full md:w-auto"
                    >
                        <img
                            src="https://cdn.dribbble.com/userupload/44349229/file/ea5c79e9724d77cf14ddebb6f29bf5da.png?format=webp&resize=400x300&vertical=center"
                            alt="Financial Advisory"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />

                        {/* Contact Button */}
                        <button
                            onClick={() => navigate('/contact')}
                            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg transition text-sm sm:text-base"
                        >
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// Credibility Section
function Credibility() {
    const items = [
        {
            icon: <FaAward />,
            title: "Industry-Recognized Expertise",
            desc: "Built by experts. Chartered Accountants, Company Secretaries, CPAs, Ex-Bankers, and Legal specialists with proven track records."
        },
        {
            icon: <FaShieldAlt />,
            title: "Certified & Compliant",
            desc: "We are built as a cornerstone solution — to deliver fit-for-purpose advisory in the market and build wealth-class companies."
        },
        {
            icon: <FaChartLine />,
            title: "Proven Results",
            desc: "Market-validated strategies backed by real returns. Our clients see measurable growth in capital, efficiency, and strategic advantage."
        }
    ]

    return (
        <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="text-green-600 text-3xl flex-shrink-0 mt-1">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// What We Do Section
function WhatWeDo() {
    const navigate = useNavigate()

    const startupItems = [
        "Fund-raising Clarity & Setup",
        "Business Planning & Tech Stack",
        "Investor Pitch Preparation",
        "Financial Analysis",
    ]

    const investorItems = [
        "Deal Sourcing & Structuring",
        "Due Diligence",
        "Valuation & Exit Strategy",
        "Portfolio Optimization",
    ]
    const extendedItems = [
        "End-to-End Business Support",
        "Compliance & Regulatory Services",
        "Operational & Process Optimization",
        "Technology & Digital Transformation",
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                    What We Do
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center mx-auto">
                    From idea to capital — we liquefy the journey
                </p>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* CARD COMPONENT */}
                    {[
                        { title: "For Startups", items: startupItems },
                        { title: "For Investors", items: investorItems },

                        { title: "Extended Services", items: extendedItems }
                    ].map((card, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative group w-full h-full"
                        >

                            {/* CARD */}
                            <div className="relative bg-white border-2 border-gray-300 rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:border-green-500 hover:shadow-xl hover:-translate-y-2">

                                <div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-6 group-hover:text-green-700">
                                        {card.title}
                                    </h3>

                                    <ul className="space-y-4">
                                        {card.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <FaCheckCircle className="text-green-500 mt-1 group-hover:text-green-600" />
                                                <span className="text-gray-700 group-hover:text-gray-900">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* BUTTON */}
                                <button
                                    onClick={() => {
                                        const tab = card.title === "For Startups" ? "startups" : "investor";
                                        navigate(`/services?tab=${tab}`);
                                    }}
                                    className="mt-8 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                                >
                                    Explore Services →
                                </button>

                            </div>
                        </motion.div>

                    ))}

                </div>

            </div>

            {/* CUSTOM ANIMATION */}
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 6s linear infinite;
                }
            `}</style>

        </section>
    )
}

// Service Snapshot Section
function ServiceSnapshot() {
    const [selected, setSelected] = useState(null)

    const services = [
        {
            title: "Incubation & Idea Validation",
            desc: "From ideation to fundraising, we guide your journey.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
            points: [
                "Incubation & Idea Validation is the process of transforming early-stage ideas into viable and scalable business opportunities. We assess the feasibility of your concept, identify real market needs, and validate your idea through in-depth research and customer insights. By developing and testing a Minimum Viable Product (MVP), we gather feedback to refine your solution and ensure strong problem-solution fit. Our approach focuses on building a sustainable business model, reducing risks, and making data-driven decisions. With continuous mentorship and strategic guidance, we help you move confidently from idea to execution, preparing your startup for growth, funding, and long-term success."
            ]
        },
        {
            title: "Valuation & Financial Modeling",
            desc: "Accurate business valuation for investments & exits.",
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            points: [
                "Valuation & Financial Modeling helps businesses understand their true worth and plan for sustainable growth. We analyze financial data to determine accurate business valuation using industry-standard methods. Our team builds detailed financial models that project revenue, costs, and profitability. We assess key drivers such as market conditions, growth potential, and risk factors. Scenario analysis is conducted to evaluate best-case and worst-case outcomes. These models support informed decision-making and strategic planning. We also assist in preparing financial forecasts for investors and stakeholders. Clear insights into cash flow and funding requirements are provided. Our approach ensures transparency, accuracy, and investor confidence. Ultimately, we help position your business for successful fundraising and long-term financial stability.",
            ]
        },
        {
            title: "Transaction Advisory",
            desc: "Expert support for M&A and fundraising deals.",
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
            points: [
                "Transaction Advisory supports businesses through critical financial transactions with strategic insight and expert guidance. We assist in mergers, acquisitions, and investment deals to ensure smooth execution. Our team conducts thorough due diligence to identify risks and opportunities. We provide valuation analysis to determine fair deal pricing. Financial and operational data are reviewed to support informed decision-making. We help structure transactions to maximize value and minimize risks. Negotiation support is offered to achieve favorable outcomes. Our advisory ensures compliance with legal and regulatory requirements. We streamline the transaction process to save time and resources. Ultimately, we enable confident, well-informed decisions for successful deal completion.",
            ]
        },
        {
            title: "Virtual CFO Services",
            desc: "Strategic guidance for scalable growth.",
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            points: [
                "Virtual CFO Services provide strategic financial leadership without the need for a full-time CFO. We manage financial planning, budgeting, and forecasting to support business growth. Our team analyzes financial performance and offers actionable insights. We help optimize cash flow and control costs effectively. Accurate financial reporting ensures transparency and informed decision-making. We assist in setting financial goals and tracking key performance indicators. Risk management strategies are implemented to safeguard business stability. We support fundraising, investor relations, and financial structuring. Compliance with financial regulations and standards is maintained. Ultimately, we act as your trusted financial partner, driving profitability and long-term success.",
            ]
        },
        {
            title: "Risk & IT Advisory",
            desc: "Complete compliance and financial support.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
            points: [
                "Risk & IT Advisory helps businesses identify, assess, and manage risks while strengthening their technology framework. We evaluate operational, financial, and compliance risks to ensure business stability. Our team designs risk mitigation strategies to minimize potential threats. We assess IT systems, infrastructure, and security to enhance performance and reliability. Cybersecurity measures are implemented to protect sensitive data and prevent breaches. We ensure compliance with industry standards and regulatory requirements. Our advisory includes IT governance and process optimization for efficiency. We help in implementing robust internal controls and monitoring systems. Technology risks are analyzed to support safe digital transformation. Ultimately, we enable organizations to operate securely, efficiently, and with confidence.",
            ]
        },
    ]

    return (
        <section className="py-8 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.div
                    className="mb-12 text-center"

                    transition={{ duration: 0.4 }}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Services snapshot
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive financial advisory tailored to your needs
                    </p>
                </motion.div>

              
                {/* FIRST ROW (3 cards) */}
                <div className="grid md:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full group rounded-2xl p-5 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-900 hover:to-green-700 hover:text-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2 border-gray-200 hover:border-green-700"
                            onClick={() => setSelected(service)}
                        >
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-200">
                                {service.desc}
                            </p>

                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={service.img}
                                    loading="lazy"
                                    className="w-full h-[140px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                                />

                                <div
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelected(service)
                                    }}
                                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-lg shadow-lg hover:scale-110 group-hover:bg-white group-hover:text-green-700 transition duration-300 cursor-pointer"
                                >
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SECOND ROW (2 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
                    {services.slice(3, 5).map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full group rounded-2xl p-5 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-900 hover:to-green-700 hover:text-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2 border-gray-200 hover:border-green-700"
                            onClick={() => setSelected(service)}
                        >
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-200">
                                {service.desc}
                            </p>

                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={service.img}
                                    loading="lazy"
                                    className="w-full h-[140px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                                />

                                <div
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelected(service)
                                    }}
                                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-lg shadow-lg hover:scale-110 group-hover:bg-white group-hover:text-green-700 transition duration-300 cursor-pointer"
                                >
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">


                    <button
                        onClick={() => setSelected(null)}
                        className="fixed top-4 right-4 z-[999] bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100"
                    >
                        ✕
                    </button>

                    <div className="bg-white rounded-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh] my-8">

                        {/* IMAGE ON TOP */}
                        <img
                            src={selected.img}
                            className="w-full h-[250px] md:h-[300px] object-cover"
                        />

                        {/* CONTENT BELOW */}
                        <div className="p-6 md:p-8 bg-gradient-to-br from-green-900 to-green-700 text-white">

                            <h2 className="text-xl md:text-2xl font-bold mb-3">
                                {selected.title}
                            </h2>

                            <p className="text-gray-200 mb-4 leading-relaxed text-sm md:text-base">
                                {selected.desc}
                            </p>


                            <ul className="space-y-2 mb-6">
                                {selected.points?.map((point, i) => (
                                    <li key={i} className="flex gap-2 items-start text-sm md:text-base">
                                        <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                                        <span className="text-gray-100">{point}</span>
                                    </li>
                                ))}
                            </ul>



                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

// Value Proposition
function ValueProposition() {
    const navigate = useNavigate();
    const features = [

    ]

    return (
        <section className="relative py-16 overflow-hidden min-h-[500px]">

            {/* BACKGROUND IMAGE */}
            <motion.div
                className="absolute inset-0 z-0 w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://i.pinimg.com/736x/17/f1/1f/17f11fc61f76924785dea504ebcf0a2d.jpg"
                    alt="finance background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </motion.div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block mb-3 px-3 py-1 bg-green-500/20 rounded-full border border-green-400/50">
                        <span className="text-green-400 font-semibold text-xs">
                            VALUE PROPOSITION
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        We Don't Just Advise — <br />
                        <span className="text-green-400">
                            We Make Businesses Investable
                        </span>
                    </h2>

                    <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
                        From early-stage idea validation to transaction execution and financial strategy,
                        we act as long-term partners in building scalable, structured, and fundable businesses.
                    </p>
                </motion.div>

                {/* FEATURES GRID */}
                <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 hover:border-green-400/50 transition duration-300"
                        >
                            {/* ICON */}
                            <div className="text-3xl text-green-400 mb-3">
                                {feature.icon}
                            </div>

                            {/* CONTENT */}
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-gray-300 leading-relaxed">
                                {feature.desc}
                            </p>

                            {/* BORDER ANIMATION */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold text-base transition transform hover:scale-105 shadow-lg"
                    >
                        Start Your Journey →
                    </button>
                </motion.div>

            </div>
        </section>
    )
}

// How It Works
function HowItWorks() {
    const steps = [
        { num: '1', title: 'Startup Applies', desc: 'Submit your pitch deck and application through our platform. Our team reviews every submission.' },
        { num: '2', title: 'Deal Screening', desc: 'Our investment committee reviews and scores each application rigorously across 6 key criteria.' },
        { num: '3', title: 'Syndicate Formed', desc: 'Qualified investors are invited to review the deal memo and commit capital within 30 days.' },
        { num: '4', title: 'Capital Deployed', desc: 'Funds are pooled and deployed via SPV with clear terms, legal structure, and investor protections.' },
        { num: '5', title: 'Post-Investment Support', desc: 'Ongoing support through our mentor network, portfolio community, and ecosystem resources.' }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    How It Works
                </h2>

                <div className="relative">
                    {/* Center Line connecting circles 1 to 5 */}
                    <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-green-500 z-0"></div>

                    <div className="grid md:grid-cols-5 gap-4 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Circle */}
                                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                                    {step.num}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Metrics Section
function Metrics() {
    const metrics = [
        { label: 'We assess potential investments to identify high-growth and low-risk opportunities.', value: '200+ Opportunities Evaluated' },
        { label: 'We engage with high-growth startups to support and accelerate their journey', value: '40+ High-Potential Startups Engaged' },
        { label: 'We manage active fundraising cycles, connecting startups with the right investors', value: '20+ Live Fundraising Processes' },
        { label: 'We maintain strong connections with investors through regular interactions and updates.', value: '120+ Investor Touchpoints' },
        { label: 'We ensure a consistent pipeline of well-organized investment opportunities across key industries.', value: 'Structured Deal Flow Across Key Sectors' },

    ];

    return (
        <section className="py-2 bg-green-50 border-y border-green-100 relative">

            <style>{`
    .coin-wrapper {
      perspective: 1000px;
    }

    .coin {
      width: 150px;
      height: 150px;
      position: relative;
      transform-style: preserve-3d;
      animation: spinCoin 12s linear infinite;
    }

    .coin-face {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(145deg, #4ade80, #166534);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      padding: 10px;
      backface-visibility: hidden;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.1);
    }

    .coin-face.back {
      transform: rotateY(180deg);
    }

    @keyframes spinCoin {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
  `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Metrics
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            className="text-center flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                        >

                            {/* 3D Coin */}
                            <div className="coin-wrapper mb-4">
                                <div className="coin">

                                    {/* Front */}
                                    <div className="coin-face">
                                        {metric.value}
                                    </div>

                                    {/* Back (same content) */}
                                    <div className="coin-face back">
                                        {metric.value}
                                    </div>

                                </div>
                            </div>

                            {/* Label */}
                            <p className="text-gray-700 text-sm leading-snug max-w-[150px]">
                                {metric.label}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// CTA Block
function CTABlock() {
    const navigate = useNavigate()

    return (
        <section className="py-10 mt-16 mb-16 bg-gradient-to-r from-green-600 to-green-800">
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-white mb-6">
                    Building Capital is Creating the Future
                </h2>
                <p className="text-xl text-green-100 mb-8">
                    Let's build something meaningful together
                </p>

                <motion.div
                    className="flex gap-4 flex-col sm:flex-row justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
                    >
                        Schedule Your Consultation
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="border-2 border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition"
                    >
                        CIO: Invest Your Portfolio | Find an Investor Network
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}

// Main Home Component
export function Home() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden">
            <Hero />
            <Credibility />
            <ServiceSnapshot />
            <WhatWeDo />
            <ValueProposition />
            <HowItWorks />
            <Metrics />
            <CTABlock />
        </div>
    )
}
