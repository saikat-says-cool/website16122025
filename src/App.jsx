import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  ShieldCheck,
  Zap,
  Target,
  Layers,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Search,
  Globe,
  Cpu,
  Building2,
  Users
} from 'lucide-react';

import ProfessionalServices from './pages/ProfessionalServices';
import EnterpriseTechnology from './pages/EnterpriseTechnology';
import Industrial from './pages/Industrial';
import EngineeringFirms from './pages/EngineeringFirms';
import FinancialOperations from './pages/FinancialOperations';
import Workflow from './pages/Workflow';
import Consultation from './pages/Consultation';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground, { GlobeElement, SectionGrid, GridFloor } from './components/DecorativeElements';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const niches = [
    { title: "Professional Services", icons: <Users className="w-5 h-5" />, items: ["Management Consulting", "Compliance & Audit Firms", "Executive Search"], link: "/professional-services" },
    { title: "Enterprise Technology", icons: <Cpu className="w-5 h-5" />, items: ["Cybersecurity (MSSP/Pentest)", "SaaS / Enterprise Software", "Cybersecurity Consultancies"], link: "/enterprise-technology" },
    { title: "Engineering Firms", icons: <Layers className="w-5 h-5" />, items: ["Mechanical & Industrial", "Electrical & Electronics", "Chemical & Process"], link: "/engineering-firms" },
    { title: "Industrial & Built Environment", icons: <Building2 className="w-5 h-5" />, items: ["Architecture & Planning", "Renewables / CapEx", "Logistics & Supply Chain"], link: "/industrial" },
    { title: "Financial Operations", icons: <ShieldCheck className="w-5 h-5" />, items: ["Investment Banking", "VC / Private Equity", "Commercial Real Estate"], link: "/financial-operations" }
  ];

  const frameworkSteps = [
    {
      layer: "Layer 1",
      title: "System Health",
      time: "Days 1-21",
      desc: "Foundational stability. We focus on technical infrastructure, reputation protection, and 100% deliverability standards.",
      metric: "Technical Stability & Reach"
    },
    {
      layer: "Layer 2",
      title: "Engagement Quality",
      time: "Days 21-45",
      desc: "Market resonance. Validating messaging through interaction rates and qualitative feedback loops.",
      metric: "Market-Message Fit"
    },
    {
      layer: "Layer 3",
      title: "Pipeline Impact",
      time: "Day 60+",
      desc: "Direct revenue contribution. Transitioning from engagement to high-probability sales conversations.",
      metric: "Qualified Conversions"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Helmet>
        <title>Artificialyze | Outbound Engineering & Pipeline Machines for B2B</title>
        <meta name="description" content="Strategic outbound systems and pipeline engineering for high-stakes B2B firms. We build autonomous machines that generate qualified meetings for deals over $20,000." />
        <meta name="keywords" content="outbound engineering, pipeline engineering, B2B lead generation, sales infrastructure, enterprise outreach, account based marketing, private equity origination" />
        <meta property="og:title" content="Artificialyze | Outbound Engineering & Pipeline Machines" />
        <meta property="og:description" content="We build the machine. You close the deals. High-fidelity outbound infrastructure for enterprise growth." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Artificialyze",
              "description": "Strategic outbound systems and pipeline engineering for high-stakes B2B firms.",
              "url": "https://artificialyze.com",
              "potentialAction": {
                "@type": "ReserveAction",
                "target": "https://artificialyze.com/consultation",
                "name": "Schedule Briefing"
              },
              "areaServed": "Global"
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <GridBackground />
        <GlobeElement />
        <GridFloor />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Enterprise-Grade Infrastructure
          </div>
          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
            WE BUILD THE MACHINE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              YOU CLOSE THE DEALS.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Strategic outbound systems for high-stakes B2B firms with deal values exceeding $20,000. No noise. No spam. Just qualified pipeline.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/workflow" className="w-full md:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-light rounded-sm transition-all flex items-center justify-center gap-3 group">
              VIEW THE WORKFLOW
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="text-sm text-zinc-500 px-4 font-light">
              Validated Technical Health & Delivery
            </div>
          </div>

          {/* AI Partner Logos */}
          <div className="mt-24 pt-12 border-t border-zinc-900">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12 font-light">Leveraging Deep Strategic Partnerships With</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
              <div className="text-xl font-light tracking-widest hover:opacity-100 cursor-default">ANTHROPIC</div>
              <div className="text-xl font-light tracking-widest hover:opacity-100 cursor-default">PERPLEXITY</div>
              <div className="text-xl font-light tracking-widest hover:opacity-100 cursor-default">GOOGLE</div>
              <div className="text-xl font-light tracking-widest hover:opacity-100 cursor-default">OPENAI</div>
              <div className="text-xl font-light tracking-widest hover:opacity-100 cursor-default">xAI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logic / Intro Section */}
      <section className="py-24 px-6 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
        <SectionGrid />
        <div className="max-w-7xl mx-auto grid md:grid-rows-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-light mb-6 italic text-emerald-500">The "Burn-In" Logic</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Most outbound fails because it optimizes for vanity metrics. We optimize for the long-tail sales cycle. High-ticket sales require a "burn-in" period-a time to filter for market resonance before pushing for volume.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-1 bg-zinc-800 rounded border border-zinc-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                <div><span className="text-zinc-100 font-light block">Honesty Exclusion</span> <span className="text-sm text-zinc-500">We don't measure automated noise. Only meaningful engagement counts.</span></div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-1 bg-zinc-800 rounded border border-zinc-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                <div><span className="text-zinc-100 font-light block">Qualitative Prioritization</span> <span className="text-sm text-zinc-500">Bespoke messaging that protects your brand's enterprise reputation.</span></div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 p-8 border border-zinc-800 rounded-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BarChart3 className="w-32 h-32 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">Verbatim Positioning</p>
            <blockquote className="text-2xl font-light text-zinc-200 leading-tight border-l-2 border-emerald-500 pl-6 py-2">
              "We measure success in three stages: first, the technical health of the system; second, the quality of market engagement; and finally, the generation of qualified sales conversations."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Three Layer Framework */}
      <section id="framework" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Success Framework</p>
              <h2 className="text-4xl md:text-6xl font-light">PROGRESSION <br />OF MILESTONES</h2>
            </div>
            <p className="text-zinc-500 max-w-sm">
              Reducing friction by providing technical and engagement wins before the final ROI is realized.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {frameworkSteps.map((step, idx) => (
              <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all group rounded-sm">
                <div className="text-emerald-500 font-mono text-xs mb-4">{step.layer} - {step.time}</div>
                <h3 className="text-2xl font-light mb-4 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                <p className="text-zinc-400 mb-8 text-sm leading-relaxed font-light">{step.desc}</p>
                <div className="pt-6 border-t border-zinc-800">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Primary Metric</span>
                  <span className="font-light text-sm">{step.metric}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/workflow" className="inline-flex items-center gap-2 text-emerald-500 uppercase tracking-[0.2em] text-xs font-bold hover:gap-4 transition-all">
              Explore the technical breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative overflow-hidden border-y border-zinc-900 bg-zinc-950/50">
        <SectionGrid />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Market Impact</p>
              <h2 className="text-4xl md:text-5xl font-light mb-8">VOICES FROM <br />THE FRONTLINE</h2>
              <p className="text-zinc-500 font-light max-w-md">
                We don't just provide software. We provide the infrastructure that changes how businesses perceive growth.
              </p>
            </div>
            <div className="space-y-12">
              <div className="relative">
                <div className="text-emerald-500/10 text-9xl font-serif absolute -top-12 -left-8">“</div>
                <blockquote className="text-xl text-zinc-300 font-light relative z-10 italic">
                  "Artificialyze didn't just give us leads; they gave us a scalable acquisition methodology. Our deal flow is now a predictable line item rather than a monthly anxiety."
                </blockquote>
                <div className="mt-6">
                  <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Marcus V. Sterling</p>
                  <p className="text-zinc-600 text-xs uppercase tracking-widest">Managing Partner, Sterling & Associates</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-emerald-500/10 text-9xl font-serif absolute -top-12 -left-8">“</div>
                <blockquote className="text-xl text-zinc-300 font-light relative z-10 italic">
                  "The 'Burn-In' logic saved us months of wasted outreach. We entered our target market with precision, hitting CISOs who were actually ready to talk. The technical setup is peerless."
                </blockquote>
                <div className="mt-6">
                  <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Sarah Chen</p>
                  <p className="text-zinc-600 text-xs uppercase tracking-widest">Head of Sales, Veritas Cybersecurity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Phases */}
      <section id="structure" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 uppercase">Strategic Structure</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Decoupling the labor of construction from the expectation of immediate results through two distinct phases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
            <div className="bg-zinc-950 p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
                  <ShieldCheck className="text-emerald-500 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-tight">Phase I: Infrastructure</h3>
              </div>
              <p className="text-zinc-500 text-sm mb-8 italic">One-Time Fixed Fee. "Building the Machine."</p>
              <ul className="space-y-4 mb-10 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Technical infrastructure configuration (16+ Domains)
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Strategic alignment & target market definition
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Data sourcing & system validation
                </li>
              </ul>
            </div>
            <div className="bg-zinc-950 p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
                  <Zap className="text-emerald-500 w-5 h-5 fill-current" />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-tight">Phase II: Execution</h3>
              </div>
              <p className="text-zinc-500 text-sm mb-8 italic">Recurring Monthly Retainer. "Running the Engine."</p>
              <ul className="space-y-4 mb-10 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Ongoing campaign execution & volume management
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Lead qualification & initial scheduling
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" />
                  Technical monitoring & deliverability maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Niches / Verticals */}
      <section id="sectors" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-light">TARGET <br />VERTICALS</h2>
            <div className="text-zinc-500 uppercase text-xs tracking-[0.3em] font-light">
              Specialized for High-Value B2B Only
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {niches.map((niche, idx) => (
              <Link to={niche.link} key={idx} className="block p-6 border border-zinc-900 bg-zinc-950 hover:border-emerald-500/50 transition-all group">
                <div className="mb-6 text-emerald-500 group-hover:scale-110 transition-transform origin-left">{niche.icons}</div>
                <h4 className="font-light text-lg mb-4 text-white uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">{niche.title}</h4>
                <div className="space-y-2">
                  {niche.items.map((item, i) => (
                    <div key={i} className="text-xs text-zinc-500 py-1 border-b border-zinc-900">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-xs text-emerald-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/professional-services" element={<ProfessionalServices />} />
              <Route path="/enterprise-technology" element={<EnterpriseTechnology />} />
              <Route path="/engineering-firms" element={<EngineeringFirms />} />
              <Route path="/industrial" element={<Industrial />} />
              <Route path="/financial-operations" element={<FinancialOperations />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
