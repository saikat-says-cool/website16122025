import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ───────────────────────────────────────────────
   BLOG DATA — each entry is a "block"
   ─────────────────────────────────────────────── */
const blogPosts = [
    {
        id: 'thinking-orchestrator',
        title: 'The Thinking Orchestrator: How DeepEx Reasons in Two Modes',
        date: 'February 10, 2026',
        category: 'Architecture',
        excerpt: 'We built a dual-mode reasoning pipeline that decomposes, challenges, verifies, and assembles every answer — and automatically escalates when depth is needed.',
        content: () => (
            <div style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#333', fontFamily: 'Georgia, serif' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Most AI systems generate answers in a single pass. The prompt goes in, tokens come out, and the system has no mechanism to question, verify, or improve its own reasoning before you see the result. This is the fundamental architectural weakness we set out to solve with DeepEx.
                </p>

                <div style={{ background: '#f9f9f9', borderLeft: '4px solid #000', padding: '2rem', margin: '3rem 0', fontFamily: 'sans-serif', fontSize: '1rem' }}>
                    <strong>TL;DR:</strong> DeepEx uses a dual-mode "Thinking Orchestrator" — Deep Mode for fast structured reasoning (1–3s), and Ultra-Deep Mode for maximum correctness (5–20s) with 3 parallel solvers and adversarial verification. The system automatically escalates when it detects its own uncertainty.
                </div>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Problem with Single-Pass Generation</h3>
                <p style={{ marginBottom: '2rem' }}>
                    When a standard LLM receives a query, it begins generating tokens immediately. There is no decomposition phase, no internal critique, no verification step. The model's "confidence" isn't a measurement — it's a feeling baked into the probability of the next token. For casual queries, this works fine. For anything that matters, it's a structural failure.
                </p>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>Deep Mode — Structured Speed</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Deep Mode is the default. It runs in 1–3 seconds using LongCat Flash and follows a five-layer sequential pipeline:
                </p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.95rem', margin: '2rem 0' }}>
                    {[
                        { layer: 'Layer 0', title: 'Input Normalization', desc: 'Clean slate. Creates user_query, timestamp, and session_id.' },
                        { layer: 'Layer 1', title: 'Problem Decomposition', desc: 'Produces a problem_map — known facts, user intent, constraints, unknowns, required output format.' },
                        { layer: 'Layer 2', title: 'Primary Solver', desc: 'The first "rope strand." Generates a draft answer using the decomposition.' },
                        { layer: 'Layer 3', title: 'Fast Critic', desc: 'The internal skeptic. Identifies logical gaps, weak assumptions, and missing angles.' },
                        { layer: 'Layer 4', title: 'Refiner', desc: 'Improves the solution using the critic\'s feedback.' },
                        { layer: 'Layer 5', title: 'Confidence Estimator', desc: 'Rates confidence 0–100 and lists key assumptions.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '0.8rem 0', borderBottom: '1px solid #f0f0f0', alignItems: 'baseline' }}>
                            <span style={{ color: '#ccc', fontWeight: 600, minWidth: '60px', fontSize: '0.8rem' }}>{item.layer}</span>
                            <div>
                                <strong style={{ color: '#000' }}>{item.title}</strong>
                                <span style={{ color: '#888', marginLeft: '0.5rem' }}>— {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Decision Gate</h3>
                <p style={{ marginBottom: '2rem' }}>
                    After Deep Mode completes, the system evaluates itself. If <em>any</em> of the following conditions are true — confidence below 70, missing angles detected, contradictions found — the system automatically escalates to Ultra-Deep Mode. You don't rely on the user to know when depth is needed. The architecture decides.
                </p>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>Ultra-Deep Mode — Maximum Correctness</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Ultra-Deep Mode is the heavy artillery. It runs in 5–20 seconds using LongCat Flash Thinking and introduces the core innovation: three parallel solvers.
                </p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.95rem', margin: '2rem 0' }}>
                    {[
                        { id: 'Solver A', title: 'Standard Reasoner', desc: 'Solves normally using the deep problem map.' },
                        { id: 'Solver B', title: 'Pessimist / Failure Mode Thinker', desc: 'Assumes edge cases, failures, worst-case scenarios.' },
                        { id: 'Solver C', title: 'Creative / Alternative Thinker', desc: 'Uses unconventional, non-obvious approaches.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '0.8rem 0', borderBottom: '1px solid #f0f0f0', alignItems: 'baseline' }}>
                            <span style={{ color: '#c00', fontWeight: 600, minWidth: '70px', fontSize: '0.8rem' }}>{item.id}</span>
                            <div>
                                <strong style={{ color: '#000' }}>{item.title}</strong>
                                <span style={{ color: '#888', marginLeft: '0.5rem' }}>— {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p style={{ marginBottom: '2rem' }}>
                    These run <em>in parallel</em>. This is the "twenty thin strings" — three independent reasoning paths that create redundancy and diversity of thought. After the solvers finish, the Skeptic Agent attacks all solutions, the Verifier Agent checks logical validity step-by-step, the Synthesizer merges the best elements, and the Meta-Critic does one final check: does this fully answer the user?
                </p>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>Why Orchestration Beats Training</h3>
                <p style={{ marginBottom: '2rem' }}>
                    We didn't achieve this through model training. We achieved it through <em>orchestration</em>. The model is the muscle; the Thinking Orchestrator is the brain giving it instructions. Explicit branching, adversarial thinking, verification, synthesis, and escalation — this is externalized cognition. And it's what makes DeepEx fundamentally different from systems that live inside single-pass generation.
                </p>

                <div style={{ background: '#f0f0f0', padding: '2.5rem', margin: '3rem 0', fontFamily: 'sans-serif', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.3rem', color: '#000', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                        "When an AI can question itself before answering, it ceases to be a prediction engine and becomes a reasoning system."
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'taxonomy',
        title: 'Beyond Hallucination: A New Taxonomy of Thought',
        date: 'February 10, 2026',
        category: 'Architecture',
        excerpt: 'We identified 14 categories of "thinking problems," collapsed them into 7 operational reasoning modes, and built a new architecture around them.',
        content: () => (
            <div style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#333', fontFamily: 'Georgia, serif' }}>
                <p style={{ marginBottom: '2rem' }}>
                    If you ask a standard LLM to solve a logic puzzle, it often struggles not because it lacks the "knowledge," but because it tries to predict the answer rather than deduce it. For the last decade, AI development has been obsessed with valid output. At DeepEx, we are obsessed with valid process. The difference is not semantic—it is architectural.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Our latest research initiative is built on a simple but radical premise: <strong>Don't organize intelligence by subjects (Math, History, Coding). Organize it by reasoning modes.</strong>
                </p>

                <div style={{ background: '#f9f9f9', borderLeft: '4px solid #000', padding: '2rem', margin: '3rem 0', fontFamily: 'sans-serif', fontSize: '1rem' }}>
                    <strong>TL;DR:</strong> We identified 14 categories of "thinking problems," 4 cross-cutting meta-operators, and 5 universal super-classes. We then collapsed this into 7 operational reasoning modes that form the internal routing architecture of DeepEx.
                </div>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Flaw of Subjectivity</h3>
                <p style={{ marginBottom: '2rem' }}>
                    Human intelligence doesn't compartmentalize "thinking" into school subjects. The neural pathway used to debug a broken line of code—isolating variables, checking states, testing hypotheses—is remarkably similar to the pathway used to diagnose a medical condition. Both are instances of <em>Abductive Reasoning</em>: inferring the best explanation from incomplete data.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Yet the entire AI industry trains and benchmarks models by subject. This is a categorical error. A model trained to "do math" learns the surface patterns of mathematical notation, not the deep structure of logical deduction.
                </p>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The 14 Dimensions of Reason</h3>
                <p style={{ marginBottom: '1.5rem' }}>After extensive internal research, we identified 14 distinct categories of cognitive tasks:</p>

                {[
                    { n: '01', t: 'Formal Logic & Symbolic Reasoning', d: 'Binary correctness. Deductive logic (if A then B), syllogisms, and constraint satisfaction. Tests for consistency, valid inference, and contradiction detection.' },
                    { n: '02', t: 'Mathematics & Structured Abstraction', d: 'Pure reasoning under axioms. Spans algebra through optimization. The ability to manipulate symbols according to precise rules without losing semantic meaning.' },
                    { n: '03', t: 'Algorithms & Procedural Thinking', d: 'Reasoning about processes—step-by-step execution, edge case handling, complexity analysis, and state tracking.' },
                    { n: '04', t: 'Probability & Uncertainty', d: 'Reasoning under incomplete information using Bayesian inference and risk analysis. Reasoning about distributions, not point answers.' },
                    { n: '05', t: 'Optimization & Decision Theory', d: 'Goal-directed reasoning. Game theory, resource allocation, multi-objective strategy. Not "is this true?" but "what is best?"' },
                    { n: '06', t: 'Causal Reasoning', d: 'Understanding "why." Root cause analysis, counterfactual simulation. "If we change X, what happens to Y?" requires a mechanistic model.' },
                    { n: '07', t: 'Systems Thinking', d: 'Holistic reasoning about feedback loops, emergent behavior, and nonlinear dynamics. The whole ≠ sum of parts.' },
                    { n: '08', t: 'Forecasting & Temporal Reasoning', d: 'Modeling the future through trend extrapolation and scenario planning. Thinking about time as a variable.' },
                    { n: '09', t: 'Strategic & Recursive Reasoning', d: 'Multi-step planning with adversaries. "I think that you think that I think…" — recursive modeling of other minds.' },
                    { n: '10', t: 'Philosophical & Meta-Reasoning', d: 'Reasoning about values, meaning, foundations. Epistemology, ethics, and the definition of intelligence itself.' },
                    { n: '11', t: 'Abductive Reasoning', d: 'Hypothesis generation from observations. The engine of diagnostics, forensics, and scientific discovery.' },
                    { n: '12', t: 'Analogical Transfer', d: 'Cross-domain abstraction. Recognizing structural similarity between superficially different systems.' },
                    { n: '13', t: 'Creative Synthesis', d: 'Generative reasoning. Combining disparate ideas into novel structures—design, architecture, ideation.' },
                    { n: '14', t: 'Human & Social Reasoning', d: 'Theory-of-mind: simulating beliefs, desires, and intentions. Psychology, incentives, group dynamics.' }
                ].map(item => (
                    <div key={item.n} style={{ display: 'flex', gap: '1.5rem', padding: '1rem 0', borderBottom: '1px solid #f0f0f0', fontFamily: 'sans-serif', fontSize: '0.95rem' }}>
                        <span style={{ color: '#ccc', fontWeight: 600, minWidth: '30px' }}>{item.n}</span>
                        <div>
                            <strong style={{ color: '#000' }}>{item.t}</strong>
                            <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.d}</p>
                        </div>
                    </div>
                ))}

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Four Cross-Cutting Operators</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #000' }}><strong>First-Principles Reasoning:</strong> Breaking problems to irreducible truths before building back up.</li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #ddd' }}><strong>Constraint Reasoning:</strong> Working inside hard and soft limits—time, money, physics, compute.</li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #ddd' }}><strong>Meta-Cognition:</strong> Thinking about thinking. Error detection, confidence evaluation, mode selection.</li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #000' }}><strong>Value Alignment:</strong> Optimizing for what <em>actually matters</em>, not just what is measurable.</li>
                </ul>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Five Super-Classes</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontFamily: 'sans-serif', fontSize: '1rem', margin: '2rem 0' }}>
                    <div style={{ background: '#fafafa', padding: '1.5rem' }}><strong>Deduction</strong><br /><span style={{ color: '#666' }}>To Prove</span></div>
                    <div style={{ background: '#fafafa', padding: '1.5rem' }}><strong>Induction</strong><br /><span style={{ color: '#666' }}>To Generalize</span></div>
                    <div style={{ background: '#fafafa', padding: '1.5rem' }}><strong>Abduction</strong><br /><span style={{ color: '#666' }}>To Explain</span></div>
                    <div style={{ background: '#fafafa', padding: '1.5rem' }}><strong>Optimization</strong><br /><span style={{ color: '#666' }}>To Choose</span></div>
                    <div style={{ background: '#fafafa', padding: '1.5rem', gridColumn: '1 / -1' }}><strong>Generation</strong><br /><span style={{ color: '#666' }}>To Create</span></div>
                </div>

                <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Seven Reasoning Modes</h3>
                <p style={{ marginBottom: '1.5rem' }}>For DeepEx, we collapsed the taxonomy into seven operational reasoning modes—our actual routing categories:</p>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.95rem', margin: '2rem 0' }}>
                    {[
                        { mode: 'Symbolic', desc: 'Formal logic, proofs, and rule-based deduction.' },
                        { mode: 'Probabilistic', desc: 'Bayesian reasoning and uncertainty quantification.' },
                        { mode: 'Causal', desc: 'Root cause inference and counterfactual simulation.' },
                        { mode: 'Strategic', desc: 'Multi-agent planning and recursive adversarial reasoning.' },
                        { mode: 'Temporal', desc: 'Forecasting, trend analysis, and time-series modeling.' },
                        { mode: 'Social', desc: 'Theory of mind and human behavior prediction.' },
                        { mode: 'Meta', desc: 'Self-monitoring, error detection, and confidence calibration.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1rem 0', borderBottom: '1px solid #eee', alignItems: 'baseline' }}>
                            <span style={{ fontWeight: 700, minWidth: '120px', color: '#000' }}>{item.mode}</span>
                            <span style={{ color: '#555' }}>{item.desc}</span>
                        </div>
                    ))}
                </div>

                <div style={{ background: '#f0f0f0', padding: '2.5rem', margin: '3rem 0', fontFamily: 'sans-serif', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.3rem', color: '#000', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                        "When an AI understands <em>how</em> it is thinking, it ceases to be a mimic and begins to be a mind."
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'modes-primer',
        title: 'A Primer on Reasoning Modes: Why Subjects Are Dead',
        date: 'February 10, 2026',
        category: 'R&D',
        excerpt: 'The shift from subject-based to mode-based intelligence isn\'t incremental. It\'s a paradigm change that redefines how AI systems should be architected.',
        content: () => (
            <div style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#333', fontFamily: 'Georgia, serif' }}>
                <p style={{ marginBottom: '2rem' }}>
                    For over a decade, AI benchmarks have asked: "Can this model do math? Can it code? Can it write?" These are the wrong questions. They measure <em>output</em> within a domain instead of measuring the <em>reasoning process</em> that generates the output.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    A brilliant doctor, a brilliant detective, and a brilliant programmer are all using the same abductive circuitry. A chess grandmaster and a corporate strategist both employ recursive strategic reasoning. The substrate is different; the <em>shape of the thinking</em> is the same.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    DeepEx is built on this insight. Our seven reasoning modes—Symbolic, Probabilistic, Causal, Strategic, Temporal, Social, and Meta—are not academic labels. They are the actual internal routing categories. When a query hits our system, the first operation is mode classification. This happens <em>before a single output token is generated</em>.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    By routing through the correct mode, DeepEx doesn't "guess" a math proof—it <em>constructs</em> one. It doesn't "predict" a strategy—it <em>simulates</em> one. It doesn't "generate" a causal explanation—it <em>derives</em> one from a mechanistic model.
                </p>
            </div>
        )
    },
    {
        id: 'metacognition',
        title: 'Meta-Cognition: Teaching AI to Watch Itself Think',
        date: 'February 10, 2026',
        category: 'Deep Dive',
        excerpt: 'Without self-monitoring, an AI cannot self-correct. Meta-cognition is the operator that watches all other reasoning modes.',
        content: () => (
            <div style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#333', fontFamily: 'Georgia, serif' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Of all the cross-cutting operators we identified, Meta-Cognition is the most consequential. It is the difference between an AI that produces answers and one that <em>knows when it's wrong</em>.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Meta-cognition is thinking about thinking. In biological intelligence, this manifests as the nagging feeling that "something doesn't add up"—the ability to pause mid-reasoning and question your own logic. In DeepEx, we operationalize this through three mechanisms:
                </p>
                <ul style={{ fontFamily: 'sans-serif', fontSize: '1rem', margin: '2rem 0', padding: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #000' }}><strong>Error Detection:</strong> Continuously checking the current reasoning chain against known valid patterns.</li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #ddd' }}><strong>Confidence Calibration:</strong> Assigning probabilistic confidence scores to intermediate conclusions, not just final outputs.</li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', borderLeft: '3px solid #ddd' }}><strong>Mode Switching:</strong> Dynamically re-classifying a query's reasoning requirements when the initial classification proves insufficient.</li>
                </ul>
                <p style={{ marginBottom: '2rem' }}>
                    Without meta-cognition, an AI cannot self-correct. It will confidently march down the wrong reasoning path and produce a beautifully formatted wrong answer. This is the root cause of hallucination—not a lack of knowledge, but a lack of self-awareness.
                </p>
            </div>
        )
    },
    {
        id: 'superclasses',
        title: 'Five Ways to Think: The Universal Super-Classes',
        date: 'February 10, 2026',
        category: 'Framework',
        excerpt: 'Deduction, Induction, Abduction, Optimization, Generation. Almost every intellectual task falls into one of these five.',
        content: () => (
            <div style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#333', fontFamily: 'Georgia, serif' }}>
                <p style={{ marginBottom: '2rem' }}>
                    When you zoom out far enough from our 14-dimensional taxonomy, a beautiful simplicity emerges. Almost every deep thinking problem in the universe falls into one of five super-classes. Everything else is flavor.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Deduction</strong> — deriving specific conclusions from general principles. This is the engine of proof.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Induction</strong> — building universal rules from specific observations. Science lives here.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Abduction</strong> — finding the best explanation for observed evidence. Medicine, debugging, forensics.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Optimization</strong> — selecting the best action from constrained options. Strategy, scheduling, resource allocation.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Generation</strong> — synthesizing something new. Design, invention, creative writing. This is where intelligence goes beyond analysis into creation.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Understanding which super-class a problem belongs to determines the entire approach. Applying deductive methods to a generative problem will fail—and vice versa.
                </p>
            </div>
        )
    }
];


/* ───────────────────────────────────────────────
   EXPANDED ARTICLE VIEW
   ─────────────────────────────────────────────── */
const ExpandedArticle = ({ post, onClose }) => (
    <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#fff', zIndex: 999, overflowY: 'auto',
        animation: 'fadeSlideIn 0.4s ease forwards'
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
                >← Back to Journal</button>
                <span style={{ fontSize: '0.75rem', color: '#999', letterSpacing: '0.1em' }}>{post.category}</span>
            </div>

            <span style={{ display: 'block', fontSize: '0.8rem', color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {post.date}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                {post.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '4rem', lineHeight: 1.5, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                {post.excerpt}
            </p>
            <div style={{ width: '60px', height: '1px', background: '#000', marginBottom: '4rem' }}></div>

            {post.content()}
        </div>
    </div>
);


/* ───────────────────────────────────────────────
   MAIN BLOG COMPONENT
   ─────────────────────────────────────────────── */
const Blog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [expandedPost, setExpandedPost] = useState(null);

    // Sync state with URL param
    useEffect(() => {
        if (id) {
            const post = blogPosts.find(p => p.id === id);
            if (post) {
                setExpandedPost(post);
                document.body.style.overflow = 'hidden';
            } else {
                // If ID is invalid, clear it
                navigate('/blog', { replace: true });
            }
        } else {
            setExpandedPost(null);
            document.body.style.overflow = '';
        }
    }, [id, navigate]);

    const openPost = (post) => {
        navigate(`/blog/${post.id}`);
    };

    const closePost = () => {
        navigate('/blog');
    };

    // Common card style — white bg, black text, border, subtle lift on hover
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

                {/* Blog Header */}
                <section style={{ padding: '10rem 2rem 6rem 2rem', textAlign: 'center', borderBottom: '1px solid #eee' }}>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
                        DeepEx Journal.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto', fontFamily: 'serif', fontStyle: 'italic' }}>
                        Notes on synthetic intelligence, architecture, and the future of reasoning.
                    </p>
                </section>

                {/* Creative Card Grid */}
                <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '6rem 2rem' }}>

                    {/* Row 1: Hero card — full width, tall */}
                    <div onClick={() => openPost(blogPosts[0])} style={{ ...cardBase, padding: 'clamp(3rem, 5vw, 6rem)', marginBottom: '2rem', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}
                        onMouseEnter={onEnter} onMouseLeave={onLeave}
                    >
                        <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#bbb' }}>Featured</div>
                        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '1.5rem' }}>
                            {blogPosts[0].date} — {blogPosts[0].category}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: '700px' }}>
                            {blogPosts[0].title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '600px', lineHeight: 1.5 }}>
                            {blogPosts[0].excerpt}
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.3rem', color: '#555' }}>
                                Read Article →
                            </span>
                        </div>
                    </div>

                    {/* Row 2: Wide + Standard */}
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div onClick={() => openPost(blogPosts[1])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '320px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{blogPosts[1].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>{blogPosts[1].title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.6 }}>{blogPosts[1].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{blogPosts[1].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>

                        <div onClick={() => openPost(blogPosts[2])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '320px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{blogPosts[2].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{blogPosts[2].title}</h3>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{blogPosts[2].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Two equal cards */}
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div onClick={() => openPost(blogPosts[3])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{blogPosts[3].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{blogPosts[3].title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{blogPosts[3].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{blogPosts[3].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>

                        <div onClick={() => openPost(blogPosts[4])} style={{ ...cardBase, padding: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                        >
                            <div>
                                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{blogPosts[4].date}</span>
                                <div style={{ width: '30px', height: '2px', background: '#000', margin: '1.5rem 0' }}></div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '1rem' }}>{blogPosts[4].title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{blogPosts[4].excerpt}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #ddd', letterSpacing: '0.1em', color: '#888' }}>{blogPosts[4].category}</span>
                                <span style={{ fontSize: '0.75rem', color: '#bbb' }}>→</span>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <Footer />

            {expandedPost && <ExpandedArticle post={expandedPost} onClose={closePost} />}

            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Blog;
