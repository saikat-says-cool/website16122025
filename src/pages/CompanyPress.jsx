import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ───────────────────────────────────────────────
   PRESS RELEASES — repurposed research as press blog
   ─────────────────────────────────────────────── */
const pressReleases = [
    {
        id: 'thinking-orchestrator',
        title: 'Artificialyze Announces Dual-Mode Reasoning Architecture for DeepEx',
        date: 'February 10, 2026',
        category: 'Engineering',
        excerpt: 'The DeepEx Thinking Orchestrator introduces a dual-mode pipeline — Deep Mode for structured speed, Ultra-Deep Mode for maximum correctness — with automatic escalation and parallel adversarial solvers.',
        content: () => (
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Artificialyze today unveiled the architecture of the DeepEx Thinking Orchestrator — a dual-mode multi-layer reasoning pipeline that represents a fundamental departure from single-pass AI generation.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The system introduces two distinct operational modes: <strong>Deep Mode</strong>, optimized for fast structured intelligence with a 1–3 second response window, and <strong>Ultra-Deep Mode</strong>, engineered for maximum correctness with a 5–20 second processing time. The system autonomously selects which mode to deploy based on real-time confidence analysis.
                </p>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Deep Mode Pipeline</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Deep Mode runs on LongCat Flash and processes every query through five sequential layers:
                </p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', margin: '2rem 0' }}>
                    {[
                        { n: '0', t: 'Input Normalization', d: 'Creates user_query, timestamp, and session_id.' },
                        { n: '1', t: 'Problem Decomposition', d: 'Produces problem_map with known facts, intent, constraints, unknowns.' },
                        { n: '2', t: 'Primary Solver', d: 'Generates reasoning chain and draft answer.' },
                        { n: '3', t: 'Fast Critic', d: 'Identifies logical gaps, weak assumptions, missing angles.' },
                        { n: '4', t: 'Refiner', d: 'Improves solution using critic feedback.' },
                        { n: '5', t: 'Confidence Estimator', d: 'Rates confidence 0–100 and lists key assumptions.' }
                    ].map(item => (
                        <div key={item.n} style={{ padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '1rem' }}>
                            <span style={{ color: '#ccc', fontWeight: 600, minWidth: '30px' }}>L{item.n}</span>
                            <div><strong>{item.t}</strong> — {item.d}</div>
                        </div>
                    ))}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Automatic Escalation</h3>
                <p style={{ marginBottom: '2rem' }}>
                    A Decision Gate evaluates the Deep Mode output against three criteria: confidence score below 70, presence of missing analytical angles, and detection of internal contradictions. If any condition triggers, the system automatically escalates to Ultra-Deep Mode without user intervention.
                </p>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Ultra-Deep Mode: Parallel Adversarial Architecture</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Ultra-Deep Mode resets context and runs on LongCat Flash Thinking. Its core innovation is the deployment of three parallel solvers:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: '#eee', margin: '2rem 0', fontFamily: 'sans-serif' }}>
                    {[
                        { t: 'Solver A', s: 'Standard Reasoner', d: 'Normal solution path' },
                        { t: 'Solver B', s: 'Pessimist', d: 'Edge cases & failure modes' },
                        { t: 'Solver C', s: 'Creative', d: 'Unconventional approaches' }
                    ].map((c, i) => (
                        <div key={i} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.65rem', color: '#c00', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{c.t}</div>
                            <strong style={{ fontSize: '0.95rem' }}>{c.s}</strong><br />
                            <span style={{ color: '#888', fontSize: '0.8rem' }}>{c.d}</span>
                        </div>
                    ))}
                </div>
                <p style={{ marginBottom: '2rem' }}>
                    Solutions from all three solvers are then processed through a Skeptic Agent (attacks contradictions), a Verifier Agent (step-by-step logical validation), a Synthesizer (merges best elements), and a Meta-Critic (final completeness check). The Meta-Critic may loop back to the Synthesizer exactly once to address any remaining gaps.
                </p>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Industry Implications</h3>
                <p style={{ marginBottom: '2rem' }}>
                    The architecture achieves research-grade reasoning through orchestration rather than model training. By externalizing the cognitive process into explicit layers — decomposition, adversarial critique, verification, synthesis, and escalation — DeepEx operates entirely outside the limitations of single-pass generation.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Every response is packaged with a confidence score, explicit assumptions, and uncertainty notes — providing full transparency into the system's reasoning.
                </p>
            </div>
        )
    },
    {
        id: 'taxonomy-release',
        title: 'Artificialyze Unveils 14-Dimensional Reasoning Taxonomy',
        date: 'February 10, 2026',
        category: 'Research',
        excerpt: 'The DeepEx Research Division has published a comprehensive framework that decomposes intelligence into 14 mechanically distinct reasoning categories — a fundamental departure from subject-based AI architecture.',
        content: () => (
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Artificialyze today announced the publication of its most significant research finding to date: a 14-category taxonomy of reasoning that fundamentally re-architects how artificial intelligence systems process complex tasks.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The framework, developed by the DeepEx Research Division, breaks away from the industry convention of organizing AI training around subjects (mathematics, coding, history) and replaces it with a system based on <strong>reasoning modes</strong> — the underlying cognitive mechanics that humans use across all domains.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    A brilliant doctor and a brilliant detective are both using abductive reasoning. The substrate is different, but the shape of the thinking is identical. We believe this insight is the key to eliminating hallucination at its root.
                </p>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>The 14 Reasoning Sectors</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    The taxonomy identifies the following categories, each requiring a mechanically distinct cognitive approach:
                </p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', margin: '2rem 0', columns: '2', columnGap: '2rem' }}>
                    {[
                        'Formal Logic & Symbolic Reasoning',
                        'Mathematics & Structured Abstraction',
                        'Algorithms & Procedural Thinking',
                        'Probability & Uncertainty',
                        'Optimization & Decision Theory',
                        'Causal Reasoning',
                        'Systems Thinking',
                        'Forecasting & Temporal Reasoning',
                        'Strategic & Recursive Reasoning',
                        'Philosophical & Meta-Reasoning',
                        'Abductive Reasoning (Best Explanation)',
                        'Analogical & Transfer Reasoning',
                        'Creative Synthesis',
                        'Human & Social Reasoning'
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0', breakInside: 'avoid' }}>
                            <span style={{ color: '#ccc', marginRight: '0.75rem', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                            {item}
                        </div>
                    ))}
                </div>

                <p style={{ marginBottom: '2rem' }}>
                    Each category maps to a distinct set of cognitive demands. Formal Logic requires binary truth verification; Causal Reasoning requires mechanistic counterfactual simulation; Strategic Reasoning requires recursive modeling of other agents' intentions.
                </p>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Implications for the Industry</h3>
                <p style={{ marginBottom: '2rem' }}>
                    The research suggests that the current approach to AI benchmarking — testing models on subjects — may fundamentally misrepresent their capabilities. A model that achieves high scores on a math benchmark may still fail at the formal logic required for contract analysis, despite both tasks relying on the same underlying reasoning mode.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The taxonomy forms the architectural foundation of the forthcoming DeepEx release, which uses pre-inference mode classification to route queries through specialized reasoning pathways.
                </p>
            </div>
        )
    },
    {
        id: 'seven-modes',
        title: 'DeepEx to Ship with 7-Mode Reasoning Architecture',
        date: 'February 10, 2026',
        category: 'Product',
        excerpt: 'The next release of DeepEx will route every query through a pre-inference classification layer that selects from seven distinct reasoning modes before generating a single token.',
        content: () => (
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Artificialyze has confirmed that the next major release of DeepEx will feature a novel 7-mode reasoning architecture, derived from the company's recently published 14-category thinking taxonomy.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The architecture collapses 14 categories of cognitive tasks into seven operational reasoning modes, each representing a fundamentally different way of processing information:
                </p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.95rem', margin: '2rem 0' }}>
                    {[
                        { mode: 'Symbolic', glyph: '∀', desc: 'Formal logic, proofs, and rule-based deduction.' },
                        { mode: 'Probabilistic', glyph: '𝑃', desc: 'Bayesian reasoning and uncertainty quantification.' },
                        { mode: 'Causal', glyph: '→', desc: 'Root cause inference and counterfactual simulation.' },
                        { mode: 'Strategic', glyph: '⊛', desc: 'Multi-agent planning and game theory.' },
                        { mode: 'Temporal', glyph: '∂', desc: 'Forecasting, trend analysis, and time-series modeling.' },
                        { mode: 'Social', glyph: '⊕', desc: 'Theory-of-mind and human behavior prediction.' },
                        { mode: 'Meta', glyph: 'Ω', desc: 'Self-monitoring, error detection, and confidence calibration.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                            <span style={{ fontSize: '1.4rem', width: '40px', textAlign: 'center', fontFamily: 'serif' }}>{item.glyph}</span>
                            <div>
                                <strong>{item.mode}</strong>
                                <span style={{ color: '#888', marginLeft: '0.5rem' }}>— {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p style={{ marginBottom: '2rem' }}>
                    By routing queries through the correct reasoning mode before inference begins, DeepEx doesn't guess a math proof — it constructs one. It doesn't predict a strategy — it simulates one.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The pre-inference classification layer is a departure from the industry norm, where models select their approach during generation.
                </p>
            </div>
        )
    },
    {
        id: 'superclasses',
        title: '"Five Ways to Think" — The Universal Super-Classes of Cognition',
        date: 'February 10, 2026',
        category: 'Research',
        excerpt: 'All intellectual tasks fall into five universal categories: Deduction, Induction, Abduction, Optimization, and Generation.',
        content: () => (
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                <p style={{ marginBottom: '2rem' }}>
                    In a companion paper to its 14-dimensional reasoning taxonomy, the Artificialyze Research Division has identified five "super-classes" that encompass all deep intellectual tasks.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#eee', margin: '2rem 0', fontFamily: 'sans-serif' }}>
                    {[
                        { t: 'Deduction', s: 'To Prove' },
                        { t: 'Induction', s: 'To Generalize' },
                        { t: 'Abduction', s: 'To Explain' },
                        { t: 'Optimization', s: 'To Choose' },
                        { t: 'Generation', s: 'To Create' }
                    ].map((c, i) => (
                        <div key={i} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
                            <strong style={{ fontSize: '1.1rem' }}>{c.t}</strong><br />
                            <span style={{ color: '#999', fontSize: '0.85rem' }}>{c.s}</span>
                        </div>
                    ))}
                </div>
                <p style={{ marginBottom: '2rem' }}>
                    "When you zoom out far enough," the paper states, "almost every deep thinking problem in the universe falls into one of these five. Everything else is flavor."
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The paper has implications for AI evaluation, arguing that current benchmarks conflate reasoning modes and surface domains, making it impossible to isolate where a model's reasoning capability truly excels or fails.
                </p>
            </div>
        )
    },
    {
        id: 'meta-cognition',
        title: 'Artificialyze Introduces Meta-Cognitive Self-Correction Layer',
        date: 'February 10, 2026',
        category: 'Technical',
        excerpt: 'A new self-monitoring layer enables DeepEx to detect and correct its own reasoning errors mid-inference, addressing the root cause of AI hallucination.',
        content: () => (
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Artificialyze has announced the development of a meta-cognitive self-correction layer — a subsystem that enables DeepEx to monitor, evaluate, and correct its own reasoning in real-time.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The system implements three core mechanisms:
                </p>
                <ul style={{ padding: 0, listStyle: 'none', fontFamily: 'sans-serif', fontSize: '1rem' }}>
                    <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                        <strong>Error Detection</strong> — Continuously validates the current reasoning chain against known valid logical patterns.
                    </li>
                    <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                        <strong>Confidence Calibration</strong> — Assigns probabilistic confidence scores to intermediate conclusions, not just final outputs.
                    </li>
                    <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                        <strong>Dynamic Mode Switching</strong> — Re-classifies a query's reasoning requirements when the initial classification proves insufficient.
                    </li>
                </ul>
                <p style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    Hallucination is not a knowledge problem — it is a self-awareness problem. Without meta-cognition, an AI will confidently march down the wrong reasoning path and produce a beautifully formatted wrong answer.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    The meta-cognitive layer is one of four "cross-cutting operators" identified in the company's research, alongside First-Principles Reasoning, Constraint Reasoning, and Value Alignment.
                </p>
            </div>
        )
    }
];


/* ───────────────────────────────────────────────
   EXPANDED PRESS RELEASE VIEW
   ─────────────────────────────────────────────── */
const ExpandedRelease = ({ post, onClose }) => (
    <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#fff', zIndex: 999, overflowY: 'auto',
        animation: 'pressFadeIn 0.4s ease forwards'
    }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem 8rem 2rem' }}>
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid #eee'
            }}>
                <button onClick={onClose} style={{
                    background: 'none', border: '1px solid #eee', padding: '0.5rem 1.5rem',
                    cursor: 'pointer', fontSize: '0.8rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', transition: 'all 0.3s ease'
                }}
                    onMouseEnter={e => { e.target.style.borderColor = '#000'; }}
                    onMouseLeave={e => { e.target.style.borderColor = '#eee'; }}
                >← Back to Press</button>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #eee', letterSpacing: '0.1em', color: '#888' }}>{post.category}</span>
            </div>

            <span style={{ display: 'block', fontSize: '0.8rem', color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {post.date}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                {post.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#888', marginBottom: '4rem', lineHeight: 1.5, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                {post.excerpt}
            </p>
            <div style={{ width: '60px', height: '1px', background: '#000', marginBottom: '4rem' }}></div>

            {post.content()}
        </div>
    </div>
);


/* ───────────────────────────────────────────────
   MAIN COMPANY PRESS COMPONENT
   ─────────────────────────────────────────────── */
const CompanyPress = () => {
    const [expandedRelease, setExpandedRelease] = useState(null);

    const openRelease = (r) => {
        setExpandedRelease(r);
        document.body.style.overflow = 'hidden';
    };

    const closeRelease = () => {
        setExpandedRelease(null);
        document.body.style.overflow = '';
    };

    // Common card style
    const cardBase = {
        background: '#fff', color: '#000', border: '1px solid #eee',
        cursor: 'pointer', position: 'relative',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease'
    };

    const onEnter = (e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)'; };
    const onLeave = (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Hero */}
                <section className="reveal tech-grid" style={{
                    padding: '5rem 6rem 6rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    backgroundColor: '#fff',
                    position: 'relative'
                }}>
                    <div className="section-tag">Newsroom // Public Ledger</div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 10vw)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.05em', margin: '2rem 0', color: '#000' }}>
                        Company <br /> Press.
                    </h1>
                    <p style={{ fontSize: '1.2rem', fontWeight: 300, maxWidth: '600px', lineHeight: 1.6, color: '#444' }}>
                        Official releases and research announcements from the Artificialyze Directorate.
                    </p>
                </section>

                {/* Creative Card Grid */}
                <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '6rem 2rem' }}>

                    {/* Row 1: Hero Card */}
                    <div onClick={() => openRelease(pressReleases[0])} style={{ ...cardBase, padding: 'clamp(3rem, 5vw, 6rem)', marginBottom: '2rem', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}
                        onMouseEnter={onEnter} onMouseLeave={onLeave}
                    >
                        <div style={{ position: 'absolute', top: '2rem', right: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#bbb' }}>Featured Release</span>
                            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', padding: '0.25rem 0.6rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{pressReleases[0].category}</span>
                        </div>

                        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '1.5rem' }}>
                            {pressReleases[0].date}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: '700px' }}>
                            {pressReleases[0].title}
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#888', maxWidth: '600px', lineHeight: 1.5 }}>
                            {pressReleases[0].excerpt}
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.3rem', color: '#555' }}>
                                Read Release →
                            </span>
                        </div>
                    </div>

                    {/* Row 2: Wide + Standard */}
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div onClick={() => openRelease(pressReleases[1])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{pressReleases[1].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>{pressReleases[1].title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.6 }}>{pressReleases[1].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{pressReleases[1].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>

                        <div onClick={() => openRelease(pressReleases[2])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{pressReleases[2].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{pressReleases[2].title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{pressReleases[2].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{pressReleases[2].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Two equal cards */}
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div onClick={() => openRelease(pressReleases[3])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{pressReleases[3].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{pressReleases[3].title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{pressReleases[3].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{pressReleases[3].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>

                        <div onClick={() => openRelease(pressReleases[4])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{pressReleases[4].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{pressReleases[4].title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{pressReleases[4].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{pressReleases[4].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <Footer />

            {expandedRelease && <ExpandedRelease post={expandedRelease} onClose={closeRelease} />}

            <style>{`
                @keyframes pressFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default CompanyPress;
