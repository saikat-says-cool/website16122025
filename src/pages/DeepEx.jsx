import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlphaReasoningFlow, DeepExPipelineFlow } from '../components/Infographics';
import DeepExLogo from '../components/DeepExLogo';

const DeepEx = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(40%, 1.2fr) 1fr', position: 'relative' }}>

                    {/* Vertical Divider */}
                    <div className="tech-line-v desktop-only" style={{ left: '40%', zIndex: 5, background: 'rgba(255,255,255,0.1)' }}></div>

                    {/* Left Panel - Dark / Technical Research */}
                    <div className="mobile-padding-tight reveal tech-grid" style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '6rem 6rem',
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="corner-mark top-left" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>
                        <div className="corner-mark bottom-right" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>

                        <div className="section-tag" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '4rem' }}>System Model // 001</div>

                        <div style={{ marginBottom: '2rem' }}>
                            <DeepExLogo size={80} color="#fff" />
                        </div>

                        <span style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '2rem', fontSize: '0.8rem' }}>Reasoning Engine</span>
                        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.8, fontWeight: 300, marginLeft: '-0.5rem', marginBottom: '4rem', letterSpacing: '-0.05em', position: 'relative' }}>
                            Deep<br />Ex.
                        </h1>
                        <p style={{ fontSize: '1.8rem', fontWeight: 200, opacity: 0.9, maxWidth: '450px', lineHeight: 1.4, borderLeft: '1px solid #333', paddingLeft: '2.5rem', marginBottom: '2.5rem' }}>
                            Bridging the gap between <br />
                            probability and truth.
                        </p>
                        <p style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6, maxWidth: '450px', lineHeight: 1.6, paddingLeft: '2.5rem', marginBottom: '4rem' }}>
                            Dual-mode Thinking Orchestrator. Deep Mode for structured speed. Ultra-Deep Mode for maximum correctness. Automatic escalation when depth is needed.
                        </p>

                        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                            <a href="https://deepex.artificialyze.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                                width: '100%',
                                padding: '1.2rem',
                                backgroundColor: '#fff',
                                color: '#000',
                                fontSize: '0.9rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                display: 'block',
                                marginBottom: '3rem',
                                fontWeight: 600
                            }}>
                                Start Reasoning ->
                            </a>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ height: '40px', width: '1px', background: '#fff' }}></div>
                                <p style={{ fontSize: '1.2rem', color: '#eee', fontWeight: 300, margin: 0 }}>
                                    Externalized cognition via <br /> multi-layer adversarial orchestration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Technical Breakdown */}
                    <div className="mobile-padding-tight reveal" style={{ padding: '8rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                        <div className="tech-line-h" style={{ top: '10%', opacity: 0.4 }}></div>

                        <div style={{ marginBottom: '6rem', position: 'relative' }}>
                            <div className="section-tag">Logical Framework</div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 300, color: '#000', lineHeight: 1.1 }}>Reasoning <br /> vs. Probability</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111', marginBottom: '2rem' }}>
                                DeepEx is the response to stochastic dilution. In critical domains, a "likely" answer is a failure. Accuracy is the only permissible metric.
                            </p>
                            <div style={{ margin: '4rem 0' }}>
                                <AlphaReasoningFlow />
                            </div>
                        </div>

                        {/* Technical Grid of Directive Cards */}
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#eee', border: '1px solid #eee' }}>
                            {[
                                { title: 'Deep Mode', desc: 'Fast, structured intelligence in 1–3 seconds. Five-layer pipeline: Decompose → Solve → Critique → Refine → Confidence.' },
                                { title: 'Ultra-Deep Mode', desc: 'Maximum correctness in 5–20 seconds. Three parallel solvers with adversarial verification and meta-critique.' },
                                { title: 'Auto-Escalation', desc: 'Automatic routing to Ultra-Deep when confidence drops below 70%, missing angles are detected, or contradictions arise.' },
                                { title: 'Status', desc: 'Thinking Orchestrator architecture in active development for specialized vertical deployment.' }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    backgroundColor: '#fff',
                                    padding: '3rem',
                                    position: 'relative'
                                }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', marginBottom: '1.5rem', color: '#888' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#111', margin: 0 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Methodology Section with lines */}
                        <div style={{ marginTop: '6rem', padding: '4rem', border: '1px solid #f0f0f0', position: 'relative' }}>
                            <div className="corner-mark top-right"></div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem' }}>Thinking Orchestrator</h3>
                            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                DeepEx utilizes a proprietary process called the "Thinking Orchestrator" — a multi-layer reasoning pipeline with explicit branching, adversarial critique, verification, synthesis, and automatic escalation. Unlike standard prompt engineering, orchestration occurs at the inference level across multiple coordinated API calls.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Architecture Deep Dive */}
                <section style={{ padding: '8rem 4rem', borderTop: '1px solid #f0f0f0', backgroundColor: '#000', color: '#fff' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="section-tag" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>System Architecture // 002</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.05 }}>The Thinking <br />Orchestrator.</h2>
                        <p style={{ fontSize: '1.3rem', fontWeight: 200, maxWidth: '700px', lineHeight: 1.6, color: '#ccc', marginBottom: '5rem' }}>
                            Everything below lives inside one system. User input enters, structured reasoning exits. No single-pass generation. Every answer is decomposed, challenged, verified, and assembled.
                        </p>

                        {/* Top-Level System View */}
                        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', marginBottom: '5rem' }}>
                            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '2.5rem' }}>Top-Level System View</h4>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0' }}>
                                {[
                                    'User Input',
                                    'Mode Selector',
                                    'Thinking Orchestrator',
                                    'Multi-Layer Pipeline',
                                    'Confidence + Assumptions',
                                    'Final Response'
                                ].map((step, i) => (
                                    <React.Fragment key={i}>
                                        <div style={{
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            padding: '0.8rem 1.2rem',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: i === 2 ? '#fff' : '#aaa',
                                            background: i === 2 ? 'rgba(255,255,255,0.1)' : 'transparent',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {step}
                                        </div>
                                        {i < 5 && <div style={{ width: '16px', height: '1px', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }}></div>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Deep Mode Exploded */}
                        <div style={{ marginBottom: '6rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                                <div style={{ width: '12px', height: '12px', background: '#fff' }}></div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, margin: 0 }}>Deep Mode</h3>
                                <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em' }}>1–3 seconds · LongCat Flash</span>
                            </div>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#aaa', maxWidth: '700px', marginBottom: '3rem' }}>
                                Fast, structured intelligence. Your default mode. Five layers of sequential reasoning with a decision gate that automatically escalates to Ultra-Deep when depth is needed.
                            </p>

                            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
                                {[
                                    { layer: '0', title: 'Input Normalization', desc: 'Creates user_query, timestamp, session_id. Clean slate — no thinking yet.' },
                                    { layer: '1', title: 'Problem Decomposition', desc: 'Produces problem_map: known facts, user intent, constraints, unknowns, output format.' },
                                    { layer: '2', title: 'Primary Solver', desc: 'First solution strand. Produces reasoning chain and draft answer from problem_map.' },
                                    { layer: '3', title: 'Fast Critic', desc: 'Internal skeptic. Identifies logical gaps, weak assumptions, and missing considerations.' },
                                    { layer: '4', title: 'Refiner', desc: 'Improves solution using critic feedback. Produces refined_answer.' },
                                    { layer: '5', title: 'Confidence Estimator', desc: 'Rates confidence 0–100 and lists key assumptions.' }
                                ].map((item, i) => (
                                    <div key={i} style={{ background: 'rgba(0,0,0,0.8)', padding: '2rem' }}>
                                        <span style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.15em' }}>LAYER {item.layer}</span>
                                        <h4 style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', marginTop: '0.5rem', color: '#fff' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#888', margin: 0 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Decision Gate */}
                            <div style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem', color: '#fff' }}>Decision Gate — Automatic Escalation</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#999', lineHeight: 1.6, margin: 0 }}>
                                        Antigravity evaluates: confidence &lt; 70 · critic_report.missing_angles &gt; 0 · contradictions detected → Route to Ultra-Deep automatically. You don't rely on users to know when depth is needed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ultra-Deep Mode Exploded */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                                <div style={{ width: '12px', height: '12px', background: '#c00' }}></div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, margin: 0 }}>Ultra-Deep Mode</h3>
                                <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em' }}>5–20 seconds · LongCat Flash Thinking</span>
                            </div>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#aaa', maxWidth: '700px', marginBottom: '3rem' }}>
                                Maximum correctness. Heavy artillery. Context is reset — only user_query and problem_map carry forward. Everything else is discarded for fresh reasoning.
                            </p>

                            {/* Layer 1 */}
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', marginBottom: '1px' }}>
                                <span style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.15em' }}>LAYER 1</span>
                                <h4 style={{ fontSize: '0.85rem', fontWeight: 500, marginTop: '0.5rem', marginBottom: '0.75rem' }}>Deep Decomposition</h4>
                                <p style={{ fontSize: '0.8rem', color: '#888', margin: 0, lineHeight: 1.6 }}>Same as Deep Mode but with Thinking model. Produces deep_problem_map — more granular decomposition.</p>
                            </div>

                            {/* Layer 2: Parallel Solvers */}
                            <div style={{ marginBottom: '1px' }}>
                                <div style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.15em', padding: '2rem 2rem 0.5rem 2rem', background: 'rgba(255,255,255,0.05)' }}>LAYER 2 — PARALLEL SOLVERS (Core Innovation)</div>
                                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
                                    {[
                                        { id: 'A', title: 'Standard Reasoner', desc: 'Solve normally using deep_problem_map.' },
                                        { id: 'B', title: 'Pessimist / Failure Mode', desc: 'Solve assuming edge cases, failures, and worst-case scenarios.' },
                                        { id: 'C', title: 'Creative / Alternative', desc: 'Solve using unconventional or non-obvious approaches.' }
                                    ].map(s => (
                                        <div key={s.id} style={{ background: 'rgba(0,0,0,0.8)', padding: '2rem' }}>
                                            <div style={{ fontSize: '0.6rem', color: '#c00', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>SOLVER {s.id}</div>
                                            <h4 style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', color: '#fff' }}>{s.title}</h4>
                                            <p style={{ fontSize: '0.8rem', color: '#888', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ textAlign: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.6rem', color: '#666', letterSpacing: '0.2em' }}>
                                    RUNS IN PARALLEL — "TWENTY THIN STRINGS"
                                </div>
                            </div>

                            {/* Layers 3-7 */}
                            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '1px' }}>
                                {[
                                    { layer: '3', title: 'Skeptic Agent', desc: 'Attack all solutions. Find contradictions, weak logic, and conflicts between A, B, and C.' },
                                    { layer: '4', title: 'Verifier Agent', desc: 'Step-by-step verification of logical flow, assumptions, and internal consistency.' },
                                    { layer: '5', title: 'Synthesizer', desc: 'Merge best elements from all solutions into a single coherent answer.' },
                                    { layer: '6', title: 'Meta-Critic', desc: 'Final check: does this fully answer the user? If gaps found, loops back to Synthesizer once.' },
                                ].map((item, i) => (
                                    <div key={i} style={{ background: 'rgba(0,0,0,0.8)', padding: '2rem' }}>
                                        <span style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.15em' }}>LAYER {item.layer}</span>
                                        <h4 style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', marginTop: '0.5rem', color: '#fff' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#888', margin: 0 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', marginTop: '1px' }}>
                                <span style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.15em' }}>LAYER 7</span>
                                <h4 style={{ fontSize: '0.85rem', fontWeight: 500, marginTop: '0.5rem', marginBottom: '0.75rem' }}>Confidence + Assumptions</h4>
                                <p style={{ fontSize: '0.8rem', color: '#888', margin: 0, lineHeight: 1.6 }}>Strict confidence scoring. Produces confidence_score, assumptions[], and uncertainty_notes[].</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pipeline Infographic Section */}
                <section style={{ padding: '6rem 4rem', borderTop: '1px solid #f0f0f0', backgroundColor: '#fafafa' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="section-tag">Pipeline Diagram</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>Visual Flow.</h2>
                        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
                            Deep Mode runs top-down through 5 sequential layers. If the Decision Gate triggers, Ultra-Deep Mode activates with 3 parallel solvers and a full adversarial verification stack.
                        </p>
                        <div style={{ border: '1px solid #eee', background: '#fff' }}>
                            <DeepExPipelineFlow />
                        </div>
                    </div>
                </section>

                {/* Why This Architecture Section */}
                <section style={{ padding: '8rem 4rem', borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="section-tag">System Parameters</div>
                                <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>Why This <br />Architecture.</h2>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111' }}>
                                    Most AI systems never leave single-pass generation. DeepEx lives entirely outside that limitation. Explicit branching, adversarial thinking, verification, synthesis, and escalation — this is externalized cognition through orchestration, not model training.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {[
                                    { label: 'Deep Mode Latency', value: '1–3 seconds' },
                                    { label: 'Ultra-Deep Latency', value: '5–20 seconds' },
                                    { label: 'Parallel Solvers', value: '3 (Standard + Pessimist + Creative)' },
                                    { label: 'Confidence Threshold', value: '70 / 100' },
                                    { label: 'Verification Layers', value: 'Skeptic + Verifier + Meta-Critic' },
                                    { label: 'Control Mechanism', value: 'Adversarial Orchestration' }
                                ].map((spec, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        borderBottom: '1px solid #eee',
                                        padding: '1.5rem 0',
                                        position: 'relative'
                                    }}>
                                        <div className="corner-mark top-left" style={{ width: '4px', height: '4px', border: 0, borderLeft: '1px solid #ddd', borderTop: '1px solid #ddd' }}></div>
                                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888' }}>{spec.label}</span>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#000' }}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Output Assembly */}
                <section style={{ padding: '6rem 4rem', backgroundColor: '#000', color: '#fff', textAlign: 'center' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#888', marginBottom: '2rem' }}>Final Output Assembly</h3>
                        <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.3 }}>Answer · Confidence · Assumptions · Uncertainty Notes</h2>
                        <p style={{ fontSize: '1rem', color: '#888', lineHeight: 1.7, marginBottom: '3rem' }}>
                            Every response is packaged with full transparency. Not just the answer — but how confident the system is, what it assumed, and what remains uncertain.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                            {['Explicit Branching', 'Adversarial Thinking', 'Verification', 'Synthesis', 'Escalation'].map((item, i) => (
                                <span key={i} style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem', color: '#aaa' }}>
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                            <a href="https://deepex.artificialyze.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                                padding: '1.5rem 5rem',
                                backgroundColor: '#fff',
                                color: '#000',
                                fontSize: '1rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                fontWeight: 600
                            }}>
                                Try DeepEx Now
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default DeepEx;
