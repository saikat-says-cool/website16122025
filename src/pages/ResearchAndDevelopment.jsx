import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlphaReasoningFlow } from '../components/Infographics';

/* ───────────────────────────────────────────────
   R&D RESEARCH FINDINGS — Card Data
   ─────────────────────────────────────────────── */
const researchFindings = [
    {
        id: 'taxonomy-14',
        title: 'Taxonomy of Deep Thinking: The 14-Dimensional Framework',
        date: 'February 10, 2026',
        tag: 'Memorandum 001',
        excerpt: 'A complete deconstruction of cognitive tasks into 14 mechanically distinct reasoning categories — the foundational architecture of the DeepEx Cognitive Model.',
        content: () => (
            <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
                    To engineer a true reasoning engine, we must first dismantle the concept of "thought" into its constituent mechanical processes. We have identified 14 distinct categories of reasoning that serve as the foundational architecture for the DeepEx Cognitive Model.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { id: '01', title: 'Formal Logic & Symbolic Reasoning', desc: 'Processing binary correctness through deductive logic (if A then B), syllogisms, and constraint satisfaction.', tags: ['SAT/SMT', 'Inference', 'Contradiction Detection'] },
                        { id: '02', title: 'Mathematics & Structured Abstraction', desc: 'Pure reasoning under axioms. Covers algebra, calculus, and discrete math. Solving equations, constructing proofs, and finding extrema.', tags: ['Axioms', 'Optimization', 'Number Theory'] },
                        { id: '03', title: 'Algorithms & Procedural Thinking', desc: 'The logic of processes and state. Complexity analysis, debugging, and program synthesis with step-by-step execution.', tags: ['State Tracking', 'Complexity', 'Design'] },
                        { id: '04', title: 'Probability & Uncertainty', desc: 'Reasoning under incomplete information using Bayesian inference and risk analysis. Maximizing expected returns in stochastic environments.', tags: ['Bayesian', 'Risk', 'Statistical Modeling'] },
                        { id: '05', title: 'Optimization & Decision Theory', desc: 'Goal-directed reasoning to choose the best action under constraints. Game theory, resource allocation, and multi-objective strategy.', tags: ['Game Theory', 'Path Finding', 'Tradeoffs'] },
                        { id: '06', title: 'Causal Reasoning', desc: 'Understanding "why" via root cause analysis and counterfactuals. Mechanistic thinking for predictive modeling of interventions.', tags: ['Root Cause', 'Counterfactuals', 'Graphs'] },
                        { id: '07', title: 'Systems Thinking', desc: 'Holistic reasoning about interacting components, feedback loops, and emergent behavior in complex non-linear systems.', tags: ['Feedback Loops', 'Emergence', 'Dynamics'] },
                        { id: '08', title: 'Forecasting & Temporal Reasoning', desc: 'Modeling future states through trend extrapolation and scenario planning. Time as a variable, not a constant.', tags: ['Extrapolation', 'Scenarios', 'Time-Series'] },
                        { id: '09', title: 'Strategic & Recursive Reasoning', desc: 'Multi-step planning involving adversaries ("I think that you think..."). Negotiation, war-gaming, and competitive strategy.', tags: ['Recursion', 'Strategy', 'Negotiation'] },
                        { id: '10', title: 'Philosophical & Meta-Reasoning', desc: 'Reasoning about values, meaning, and foundations. Ontology, ethics, and defining the boundaries of intelligence.', tags: ['Epistemology', 'Ethics', 'Alignment'] },
                        { id: '11', title: 'Abductive Reasoning', desc: 'Hypothesis generation: inferring the best explanation from limited observations. The engine of diagnostics and discovery.', tags: ['Diagnostics', 'Hypothesis', 'Patterns'] },
                        { id: '12', title: 'Analogical Transfer', desc: 'Cross-domain abstraction. Mapping structural similarities from one field to solve problems in another.', tags: ['Mapping', 'Transfer', 'Synthesis'] },
                        { id: '13', title: 'Creative Synthesis', desc: 'Generative reasoning combining disparate ideas into novel structures. Design, architecture, and ideation.', tags: ['Design', 'Ideation', 'Novelty'] },
                        { id: '14', title: 'Human & Social Reasoning', desc: 'Theory-of-mind reasoning modeling incentives, group dynamics, and persuasion.', tags: ['Psychology', 'Incentives', 'UX'] }
                    ].map(item => (
                        <div key={item.id} style={{ border: '1px solid #eee', padding: '1.5rem', background: '#fff' }}>
                            <div style={{ color: '#bbb', fontSize: '0.75rem', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>SECTOR {item.id}</div>
                            <h4 style={{ color: '#000', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 500 }}>{item.title}</h4>
                            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>{item.desc}</p>
                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                {item.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.65rem', background: '#f5f5f5', color: '#888', padding: '0.15rem 0.4rem', borderRadius: '2px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'superclasses',
        title: 'The Five Cognitive Super-Classes',
        date: 'February 10, 2026',
        tag: 'Memorandum 002',
        excerpt: 'Almost every deep thinking problem falls into one of five universal super-classes: Deduction, Induction, Abduction, Optimization, Generation.',
        content: () => (
            <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
                    When you zoom out far enough from our 14-dimensional taxonomy, a beautiful simplicity emerges. We found that almost every deep intellectual task falls into one of five super-classes. Everything else is flavor.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: '#eee', marginBottom: '3rem' }}>
                    {[
                        { t: 'Deduction', s: 'To Prove', d: 'Deriving specific conclusions from general principles. The engine of proof and certainty.' },
                        { t: 'Induction', s: 'To Generalize', d: 'Building universal rules from specific observations. How science progresses.' },
                        { t: 'Abduction', s: 'To Explain', d: 'Finding the best explanation for observed evidence. The heart of diagnostics.' },
                        { t: 'Optimization', s: 'To Choose', d: 'Selecting the best action from constrained options. Strategy and resource allocation.' },
                        { t: 'Generation', s: 'To Create', d: 'Synthesizing something new from existing blocks. Where logic meets artistry.' }
                    ].map((cls, i) => (
                        <div key={i} style={{ background: '#fff', padding: '2rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.3rem', color: '#000', fontWeight: 500 }}>{cls.t}</div>
                            <div style={{ fontSize: '0.8rem', color: '#999', margin: '0.5rem 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cls.s}</div>
                            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>{cls.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'meta-operators',
        title: 'Cross-Domain Operators: The Four Meta-Lenses',
        date: 'February 10, 2026',
        tag: 'Memorandum 003',
        excerpt: 'First-Principles, Constraint Reasoning, Meta-Cognition, and Value Alignment — the operators that transcend any single reasoning category.',
        content: () => (
            <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    These four cognitive operators cut across all 14 sectors. They are not categories of problems, but lenses through which any problem can be approached.
                </p>
                {[
                    { id: 'A', title: 'First-Principles Reasoning', desc: 'The discipline of decomposing any problem to its most fundamental, irreducible truths before reasoning upward. It prevents inherited assumptions from poisoning the logic chain.' },
                    { id: 'B', title: 'Constraint Reasoning', desc: 'All real-world problems exist within boundaries—time, money, physics, regulations, compute. Constraint reasoning identifies which limits are hard and which are soft, then optimizes within the feasible space.' },
                    { id: 'C', title: 'Meta-Cognition', desc: 'Thinking about thinking. Monitoring one\'s own reasoning in real-time: detecting logical errors mid-chain, evaluating confidence levels, and dynamically choosing which reasoning mode to deploy.' },
                    { id: 'D', title: 'Value Alignment', desc: 'Optimizing for what actually matters, not just what is measurable. The most dangerous AI failure is not inaccuracy—it is optimizing the wrong objective with perfect precision.' }
                ].map(item => (
                    <div key={item.id} style={{ padding: '2rem', border: '1px solid #eee', marginBottom: '1rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '-0.6rem', left: '1.5rem', background: '#fff', padding: '0 0.5rem', color: '#bbb', fontSize: '0.7rem', letterSpacing: '0.15em' }}>OPERATOR {item.id}</span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: 'reasoning-modes',
        title: 'The 7 Reasoning Modes: Operational Architecture',
        date: 'February 10, 2026',
        tag: 'Memorandum 004',
        excerpt: 'Symbolic. Probabilistic. Causal. Strategic. Temporal. Social. Meta. The seven internal routing modes that power DeepEx inference.',
        content: () => (
            <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    The critical insight: <strong>do not organize intelligence by subjects. Organize it by reasoning modes.</strong> Subjects are arbitrary human boundaries. Reasoning modes map to how intelligence actually clusters.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem', color: '#666' }}>
                    DeepEx's architecture is organized around seven operational modes. Every incoming query is classified by mode before the engine begins inference.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: '#eee' }}>
                    {[
                        { mode: 'Symbolic', glyph: '∀', desc: 'Formal logic, proofs, and rule-based deduction.' },
                        { mode: 'Probabilistic', glyph: '𝑃', desc: 'Bayesian reasoning, uncertainty quantification.' },
                        { mode: 'Causal', glyph: '→', desc: 'Root cause inference, counterfactual simulation.' },
                        { mode: 'Strategic', glyph: '⊛', desc: 'Multi-agent planning, game theory.' },
                        { mode: 'Temporal', glyph: '∂', desc: 'Forecasting, trend analysis.' },
                        { mode: 'Social', glyph: '⊕', desc: 'Theory of mind, incentive modeling.' },
                        { mode: 'Meta', glyph: 'Ω', desc: 'Self-monitoring, error detection.' }
                    ].map((item, i) => (
                        <div key={i} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.8rem', color: '#000', marginBottom: '0.5rem', fontFamily: 'serif' }}>{item.glyph}</div>
                            <div style={{ fontSize: '0.8rem', color: '#000', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>{item.mode}</div>
                            <p style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];


/* ───────────────────────────────────────────────
   EXPANDED ARTICLE VIEW
   ─────────────────────────────────────────────── */
const ExpandedFinding = ({ post, onClose }) => (
    <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#fff', zIndex: 999, overflowY: 'auto',
        animation: 'rdFadeIn 0.4s ease forwards'
    }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem 2rem' }}>
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
                >← Back to R&D</button>
                <span style={{ fontSize: '0.7rem', color: '#999', letterSpacing: '0.15em' }}>{post.tag}</span>
            </div>

            <span style={{ display: 'block', fontSize: '0.75rem', color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {post.date}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                {post.title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '4rem', lineHeight: 1.5 }}>{post.excerpt}</p>
            <div style={{ width: '60px', height: '1px', background: '#000', marginBottom: '4rem' }}></div>

            {post.content()}
        </div>
    </div>
);


/* ───────────────────────────────────────────────
   MAIN R&D COMPONENT
   ─────────────────────────────────────────────── */
const ResearchAndDevelopment = () => {
    const [expandedFinding, setExpandedFinding] = useState(null);

    const openFinding = (f) => {
        setExpandedFinding(f);
        document.body.style.overflow = 'hidden';
    };

    const closeFinding = () => {
        setExpandedFinding(null);
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

                {/* Hero Section */}
                <section className="reveal tech-grid" style={{
                    padding: '5rem 6rem 8rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div className="tech-line-v desktop-only" style={{ left: '60px' }}></div>
                    <div className="tech-line-h desktop-only" style={{ top: '30%', opacity: 0.2 }}></div>

                    <div className="section-tag">Laboratory // R&D</div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 10vw)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.05em', margin: '2rem 0', color: '#000' }}>
                        Research & <br /> Development.
                    </h1>
                    <p style={{ fontSize: '1.4rem', fontWeight: 300, maxWidth: '800px', lineHeight: 1.5, color: '#333' }}>
                        At the edge of cognitive boundary, we don't just optimize; we redefine. Our R&D division focuses on the structural mechanics of specialized intelligence.
                    </p>
                </section>

                {/* Sidebar + Content Area */}
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 30%) 1fr' }}>

                    <aside className="mobile-padding-tight" style={{
                        borderRight: '1px solid #f0f0f0',
                        padding: '6rem 4rem',
                        backgroundColor: '#fafafa'
                    }}>
                        <div className="corner-mark top-left"></div>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '4rem', color: '#000' }}>Inquiry Domains</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                'Adversarial Logic',
                                'Sparse Weighting',
                                'Deterministic Chains',
                                'Agentic Orchestration',
                                'Vertical Knowledge Graph'
                            ].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '2rem', fontSize: '0.9rem',
                                    borderBottom: '1px solid #eee', paddingBottom: '1rem',
                                    color: '#555', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    <span>{item}</span>
                                    <span style={{ fontSize: '0.7rem', color: '#bbb' }}>[0{i + 1}]</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <article className="mobile-padding-tight" style={{ padding: '8rem 10rem', maxWidth: '1200px' }}>
                        <div className="reveal" style={{ marginBottom: '8rem' }}>
                            <div className="section-tag">Current Focus</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>The Collapse of Hallucination.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', marginBottom: '4rem' }}>
                                Our primary research objective is the elimination of probabilistic error in vertical domains. By utilizing adversarial reasoning layers, we force the model to cross-reference its own logic against verified truth markers before output generation.
                            </p>
                            <div style={{ padding: '4rem', border: '1px solid #000', position: 'relative' }}>
                                <div className="corner-mark top-right" style={{ borderColor: '#000' }}></div>
                                <AlphaReasoningFlow />
                                <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem', color: '#888', letterSpacing: '0.1em' }}>TRUTH ANCHORING MECHANISM</p>
                            </div>
                        </div>

                        <div className="reveal mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
                            <div>
                                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '2rem' }}>Synthetic Expertise</h4>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555' }}>
                                    We are developing methods to synthesize "High-Signal" datasets from first principles—mathematical proofs and peer-reviewed logic—rather than relying on the noisy web.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '2rem' }}>Agentic Latency</h4>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555' }}>
                                    Reducing the time between intent and execution. Our goal is sub-second planning for complex multi-step tasks within vertical industrial environments.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Research Findings — Card Blocks */}
                <section style={{ backgroundColor: '#fafafa', padding: '8rem 2rem', borderTop: '1px solid #eee' }} className="mobile-padding-tight">
                    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '5rem' }}>
                            <span style={{ color: '#999', fontSize: '0.75rem', letterSpacing: '0.3em', display: 'block', marginBottom: '1rem', textTransform: 'uppercase' }}>Published Findings</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#000', marginBottom: '1rem' }}>Research Memoranda.</h2>
                            <p style={{ color: '#666', maxWidth: '600px', lineHeight: 1.6, fontSize: '1rem' }}>Select a finding to read the full technical memorandum.</p>
                        </div>

                        {/* Row 1: Hero card */}
                        <div onClick={() => openFinding(researchFindings[0])} style={{ ...cardBase, padding: 'clamp(3rem, 5vw, 5rem)', marginBottom: '2rem', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#bbb' }}>Featured</div>
                            <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '1.5rem' }}>
                                {researchFindings[0].date}
                            </span>
                            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: '700px' }}>
                                {researchFindings[0].title}
                            </h3>
                            <p style={{ fontSize: '1rem', color: '#888', maxWidth: '600px', lineHeight: 1.5 }}>
                                {researchFindings[0].excerpt}
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.3rem', color: '#555' }}>
                                    Open Memorandum →
                                </span>
                            </div>
                        </div>

                        {/* Row 2: Wide + Standard */}
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div onClick={() => openFinding(researchFindings[1])} style={{ ...cardBase, padding: 'clamp(2rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                                onMouseEnter={onEnter} onMouseLeave={onLeave}
                            >
                                <div>
                                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{researchFindings[1].date}</span>
                                    <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{researchFindings[1].title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{researchFindings[1].excerpt}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                    <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', padding: '0.3rem 0.7rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{researchFindings[1].tag}</span>
                                    <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                                </div>
                            </div>

                            <div onClick={() => openFinding(researchFindings[2])} style={{ ...cardBase, padding: 'clamp(2rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                                onMouseEnter={onEnter} onMouseLeave={onLeave}
                            >
                                <div>
                                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{researchFindings[2].date}</span>
                                    <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{researchFindings[2].title}</h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                    <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', padding: '0.3rem 0.7rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{researchFindings[2].tag}</span>
                                    <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Full-width horizontal */}
                        <div onClick={() => openFinding(researchFindings[3])} style={{ ...cardBase, padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>
                                    {researchFindings[3].date} — {researchFindings[3].tag}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2, marginTop: '1rem', marginBottom: '0.5rem' }}>
                                    {researchFindings[3].title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5, margin: 0 }}>
                                    {researchFindings[3].excerpt}
                                </p>
                            </div>
                            <span style={{ fontSize: '2rem', color: '#ddd', fontWeight: 200 }}>→</span>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            {expandedFinding && <ExpandedFinding post={expandedFinding} onClose={closeFinding} />}

            <style>{`
                @keyframes rdFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default ResearchAndDevelopment;
