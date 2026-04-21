import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaLightbulb, FaBullseye, FaChartBar, FaChartLine, FaUserTie, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'


// Hero Section
function Hero() {
    const navigate = useNavigate()
    return (
        <section className="py-16 bg-gradient-to-br from-navy-600 to-navy-700 text-white relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-700 -z-10"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl"></div>

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >

                    {/* TAG */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 border border-white px-4 py-2 rounded-full mb-6 bg-white/20 shadow-sm"
                    >
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="text-white text-sm font-bold">
                            Investment Advisory
                        </span>
                    </motion.div>

                    {/* HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6"
                    >
                        <span className="text-white">WHERE CAPITAL</span>
                        <br />
                        <span className="text-white">MEETS CLARITY</span>
                    </motion.h1>

                    {/* TAGLINE */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white italic text-base sm:text-lg mb-4"
                    >
                        Empowering Wealth. Enabling Growth.
                    </motion.p>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-white/90 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-6 font-bold"
                    >
                        Medhya Investment Advisors delivers end-to-end financial solutions guiding startups through fund-raising and IPOs while empowering individuals with strategic wealth creation, tax efficiency, and financial independence.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white hover:bg-gray-100 text-navy-600 px-6 py-3 rounded-full font-semibold"
                        >
                            I'm a Startup →
                        </button>

                        <button
                            onClick={() => navigate('/contact')}
                            className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10"
                        >
                            I'm an Investor
                        </button>
                    </motion.div>

                </motion.div>


                {/* RIGHT CARD */}
                <div className="bg-white border border-navy-100 rounded-2xl p-5 sm:p-6 shadow-md">

                    <h3 className="text-navy-700  font-bold tracking-wider mb-4">
                        STARTUP JOURNEY
                    </h3>

                    {/* LIFECYCLE */}
                    <div className="mb-6">
                        <p className="text-navy-600  mb-3 font-bold">Lifecycle Stages</p>

                        <div className="flex flex-wrap justify-center items-center gap-3">

                            {[1, 2, 3, 4, 5].map((num, i) => (
                                <React.Fragment key={i}>

                                    {/* STEP */}
                                    <div className="flex flex-col items-center">

                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border
            ${num === 1 || num === 5
                                                    ? 'bg-navy-600 text-white'
                                                    : 'border-navy-300 text-navy-600'
                                                }`}
                                        >
                                            {num}
                                        </motion.div>

                                        <p className="text-[10px] text-gray-600 mt-1 text-center font-bold">
                                            {['Ideation', 'Product dev', 'Go-To-Market', 'Scaling', 'Maturity'][i]}
                                        </p>
                                    </div>

                                    {/* ARROW */}
                                    {i !== 4 && (
                                        <motion.span
                                            className="text-navy-400 text-lg hidden sm:inline"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    )}

                                </React.Fragment>
                            ))}

                        </div>
                    </div>
                    {/* FUNDING */}
                    <div>
                        <p className="text-navy-600  mb-3 font-bold">Funding Stages</p>

                        <div className="flex flex-wrap justify-center items-center gap-2 font-semibold">

                            {['Friends & Family', 'Seed Capital', 'Venture Funding', 'Growth', 'IPO'].map((label, i) => (
                                <React.Fragment key={i}>

                                    {/* STEP */}
                                    <div className="flex flex-col items-center">

                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border
            ${i === 4
                                                    ? 'bg-navy-600 text-white'
                                                    : 'border-navy-300 text-navy-600'
                                                }`}
                                        >
                                            ₹
                                        </motion.div>

                                        <p className="text-[10px] text-gray-600 mt-1 text-center font-bold">
                                            {label}
                                        </p>
                                    </div>

                                    {/* ARROW */}
                                    {i !== 4 && (
                                        <motion.span
                                            className="text-navy-200 text-lg hidden sm:inline"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    )}

                                </React.Fragment>
                            ))}

                        </div>
                    </div><div className="flex justify-between items-center mt-6 ">
                        <span className="text-navy-600 font-bold">From idea to IPO</span>
                        <span className="text-navy-600 font-bold">
                            End-to-End Support
                        </span>
                    </div>

                </div>


            </div>
        </section>
    )
}
// Credibility Section
function Credibility() {

    const tags = [
        "Chartered Accountants",
        "Company Secretaries",
        "Certified Public Accountants",
        "Banking",
        "Management",
        "Legal",
        "CPAs",
        "Ex-Bankers"
    ]

    return (
        <section className="py-16 bg-white relative overflow-hidden">

            {/* SAME HERO BACKGROUND STYLE */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-100 -z-10"></div>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

            {/* HEADING */}
            <div className="text-center mb-12">
                <h2 className="text-xl md:text-xl font-bold text-navy-600 mb-2">
                    BUILT BY EXPERTS WHO UNDERSTAND FINANCE END-TO-END
                </h2>

            </div>

            {/* TAGS / CHIPS */}
            {/* DESKTOP */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white shadow-sm hover:bg-emerald-100 hover:border-emerald-300 transition text-sm font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* MOBILE (LIKE IMAGE) */}
            <div className="md:hidden flex flex-col items-center gap-5">

                <span className="px-6 py-2 rounded-full border border-navy-300 text-black bg-white text-center w-full max-w-xs shadow-sm">
                    Chartered Accountants
                </span>

                <span className="px-6 py-2 rounded-full border border-navy-300 text-black bg-white text-center w-full max-w-xs shadow-sm">
                    Company Secretaries
                </span>

                <span className="px-6 py-2 rounded-full border border-navy-300 text-black bg-white text-center w-full max-w-xs shadow-sm">
                    Certified Public Accountants
                </span>

                <div className="flex gap-4 justify-center w-full">
                    <span className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white text-center flex-1 max-w-[140px] shadow-sm">
                        Banking
                    </span>
                    <span className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white text-center flex-1 max-w-[140px] shadow-sm">
                        Management
                    </span>
                </div>

                <div className="flex gap-4 justify-center w-full">
                    <span className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white text-center flex-1 max-w-[140px] shadow-sm">
                        Legal
                    </span>
                    <span className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white text-center flex-1 max-w-[140px] shadow-sm">
                        CPAs
                    </span>
                </div>
                <span className="px-5 py-2 rounded-full border border-navy-300 text-black bg-white text-center max-w-[140px] shadow-sm">
                    Ex-Bankers
                </span>

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

    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-50 -z-10"></div>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4">

                {/* HEADING */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                    From Idea to Capital
                    <span className="text-navy-600"> We Support the Entire Journey</span>
                </h2>
                <p className="text-lg text-gray-600 mb-12 text-center">
                    End-to-end strategic support for startups and investors
                </p>

                {/* GRID (2 CARDS CENTERED) */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {[
                        { title: "For Startups", items: startupItems },
                        { title: "For Investors", items: investorItems }
                    ].map((card, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >

                            {/* CARD */}
                            <div className="bg-white border border-navy-100 rounded-2xl p-8 h-full shadow-md 
    hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2 
    transition-all duration-300">

                                {/* TITLE */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition">
                                    {card.title}
                                </h3>

                                {/* LIST */}
                                <ul className="space-y-4 mb-6">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start">

                                            <div className="w-5 h-5 rounded-full border border-navy-600 flex items-center justify-center text-navy-600 group-hover:border-emerald-600 group-hover:text-emerald-600 transition">
                                                ✓
                                            </div>

                                            <span className="text-gray-600 group-hover:text-gray-800">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* BUTTON */}
                                <button
                                    onClick={() => {
                                        const tab =
                                            card.title === "For Startups"
                                                ? "startups"
                                                : "investor"

                                        navigate(`/services?tab=${tab}`)
                                    }}
                                    className="mt-auto bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md"
                                >
                                    Explore Services →
                                </button>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}

// Value Proposition
function ValueProposition() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <FaBullseye />,
            title: "Idea Validation",
            step: "Step 1",
        },
        {
            icon: <FaChartBar />,
            title: "Financial Structuring",
            step: "Step 2",
        },
        {
            icon: <FaChartLine />,
            title: "Transaction Execution",
            step: "Step 3",
        }
    ]

    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-50 -z-10"></div>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-gray-800">
                            We Don't Just Advise
                        </span>
                        <br />
                        <span className="text-navy-700">
                            We Make Businesses Investable
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
                        We act as long-term partners, walking alongside you at every stage of your journey.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-8">

                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >

                            <div className="bg-white border border-navy-100 rounded-2xl p-10 
                                shadow-md hover:shadow-xl hover:-translate-y-2 
                                hover:border-navy-400 hover:bg-navy-50 transition-all duration-300">

                                {/* ICON */}
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                                    rounded-full bg-navy-100 text-navy-700 text-3xl font-bold
                                    group-hover:bg-navy-700 group-hover:text-white transition">

                                    {feature.icon}
                                </div>

                                {/* TITLE */}
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 
                                    group-hover:text-navy-700 transition">
                                    {feature.title}
                                </h3>

                                {/* STEP */}
                                <p className="text-gray-500 group-hover:text-gray-700">
                                    {feature.step}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

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
        <section className="py-20 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADING */}
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    How It Works
                </h2>

                <div className="relative">

                    {/* LINE */}
                    <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gray-300 z-0"></div>

                    {/* STEPS */}
                    <div className="grid md:grid-cols-5 gap-6 relative z-10">

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group"
                            >

                                {/* NAVY CIRCLE */}
                                <motion.div
                                    className="bg-navy-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        boxShadow: [
                                            "0 0 0px rgba(30,64,175,0.4)",
                                            "0 0 20px rgba(30,64,175,0.7)",
                                            "0 0 0px rgba(30,64,175,0.4)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2
                                    }}
                                >
                                    {step.num}
                                </motion.div>

                                {/* TITLE */}
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-navy-700 transition">
                                    {step.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-gray-500 text-sm max-w-[180px]">
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
        { number: 200, suffix: "+", label: "Opportunities Evaluated" },
        { number: 40, suffix: "+", label: "High-Potential Startups Engaged" },
        { number: 20, suffix: "+", label: "Live Fundraising Processes" },
        { number: 120, suffix: "+", label: "Investor Touchpoints" }
    ];

    function Counter({ end, suffix }) {
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
            let start = 0;
            const duration = 1500;
            const increment = end / (duration / 16);

            const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(counter);
        }, [end]);

        return (
            <span>
                {count}{suffix}
            </span>
        );
    }

    return (
       <section className="py-16 bg-white relative">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {metrics.map((metric, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl 
                    bg-navy-700 text-white 
                    shadow-xl hover:shadow-2xl 
                    hover:-translate-y-2 transition-all duration-300"
                >

                    {/* NUMBER */}
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">
                        <Counter end={metric.number} suffix={metric.suffix} />
                    </h3>

                    {/* LABEL */}
                    <p className="text-white/80 text-sm md:text-base">
                        {metric.label}
                    </p>

                </motion.div>
            ))}

        </div>

    </div>
</section>
    );
}

function ServiceSnapshot() {
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate();

    const services = [
        {
            title: "Incubation & Idea Validation",
            desc: "From ideation to scalable concept, we validate and nurture growth potential.",
            icon: <FaBullseye />
        },
        {
            title: "Valuation & Financial Modeling",
            desc: "Precise startup, M&A, and ESOP valuations backed by financial models.",
            icon: <FaChartBar />
        },
        {
            title: "Transaction Advisory",
            desc: "Expert fundraising advisory, deal structuring, and exit planning support.",
            icon: <FaChartLine />
        },
        {
            title: "Virtual CFO Services",
            desc: "Strategic financial leadership — from cash flow to board representation.",
            icon: <FaUserTie />
        },
        {
            title: "Risk & IT Advisory",
            desc: "Governance, risk assessment, compliance frameworks, and controls.",
            icon: <FaShieldAlt />
        },
        {
            title: "Management Consultancy",
            desc: "Business strategy, restructuring, and investor access support.",
            icon: <FaCheckCircle />
        },
    ]

    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* SKY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-50 -z-10"></div>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-navy-300/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4">

                {/* HEADING */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600">
                        Comprehensive advisory across the investment lifecycle.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-8">

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >

                            <div className="bg-white border border-navy-100 rounded-2xl p-8 
                shadow-md hover:shadow-xl hover:-translate-y-2 
                hover:bg-navy-50 hover:border-navy-400 transition-all duration-300">

                                {/* ICON */}
                                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-700 
                    flex items-center justify-center mb-6 text-xl
                    group-hover:bg-navy-700 group-hover:text-white transition">
                                    {service.icon}
                                </div>

                                {/* TITLE */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 
                    group-hover:text-navy-700 transition">
                                    {service.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

                {/* BUTTON */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/services')}
                        className="border border-navy-600 text-navy-700 px-6 py-3 rounded-full 
        hover:bg-navy-700 hover:text-white transition font-semibold"
                    >
                        View All Services →
                    </button>
                </div>

                
            </div>
        </section>
    )
}
// CTA Block
function CTABlock() {
    const navigate = useNavigate()

    return (
    <section className="py-28 bg-white relative">

    <motion.div
        className="max-w-5xl mx-auto px-10 py-16 rounded-3xl 
        border-2 border-navy-300 bg-navy-50 
        shadow-xl hover:shadow-2xl 
        hover:-translate-y-2 hover:scale-[1.01]
        transition-all duration-300 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
            Raising Capital or Looking to Invest?
        </h2>

        <p className="text-gray-600 mb-10 text-lg">
            Let's build something meaningful together.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

            <button
                onClick={() => navigate('/contact')}
                className="bg-navy-700 hover:bg-navy-800 text-white px-10 py-4 rounded-full 
                font-semibold transition shadow-md hover:shadow-lg"
            >
                Submit Your Startup
            </button>

            <button
                onClick={() => navigate('/contact')}
                className="border-2 border-navy-400 text-navy-700 px-10 py-4 rounded-full 
                font-semibold transition hover:bg-navy-100"
            >
                Join Investor Network
            </button>

        </div>

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

            <WhatWeDo />
            <ValueProposition />
            <HowItWorks />
            <Metrics />
            <ServiceSnapshot />
            <CTABlock />
        </div>
    )
}
