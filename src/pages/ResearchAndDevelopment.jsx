import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlphaReasoningFlow } from '../components/Infographics';

const ResearchAndDevelopment = () => {
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

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 30%) 1fr' }}>

                    {/* Left Sidebar - Research Pillars */}
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
                                    marginBottom: '2rem',
                                    fontSize: '0.9rem',
                                    borderBottom: '1px solid #eee',
                                    paddingBottom: '1rem',
                                    color: '#555',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <span>{item}</span>
                                    <span style={{ fontSize: '0.7rem', color: '#bbb' }}>[0{i + 1}]</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content Area */}
                    <article className="mobile-padding-tight" style={{ padding: '8rem 10rem', maxWidth: '1200px' }}>

                        <div className="reveal" style={{ marginBottom: '8rem' }}>
                            <div className="section-tag">Current Focus</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>The Collapse of Hallucination.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', marginBottom: '4rem' }}>
                                Our primary research objective for Phase 4 is the total elimination of probabilistic error in vertical domains. By utilizing adversarial reasoning layers, we force the model to cross-reference its own logic against verified truth markers before output generation.
                            </p>
                            <div style={{ padding: '4rem', border: '1px solid #000', position: 'relative' }}>
                                <div className="corner-mark top-right" style={{ borderColor: '#000' }}></div>
                                <AlphaReasoningFlow />
                                <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem', color: '#888', letterSpacing: '0.1em' }}>FIG 4.2: TRUTH ANCHORING MECHANISM</p>
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

                {/* Lab stats / Technical Table */}
                <section style={{ backgroundColor: '#000', color: '#fff', padding: '10rem 6rem' }} className="mobile-padding-tight">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="section-tag" style={{ color: '#aaa', borderColor: '#333' }}>Laboratory Metrics</div>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '6rem' }}>Quantifiably Deep.</h2>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', borderTop: '1px solid #222', paddingTop: '4rem' }}>
                            {[
                                { label: 'Active Inquiry Nodes', value: '42 Vertical Units' },
                                { label: 'Precision Baseline', value: '99.998%' },
                                { label: 'Compute Allocation', value: 'Dedicated H100 Cluster' }
                            ].map((stat, i) => (
                                <div key={i} style={{ position: 'relative' }}>
                                    <div className="corner-mark top-left" style={{ width: '4px', height: '4px', borderColor: '#444' }}></div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>{stat.label}</span>
                                    <span style={{ fontSize: '1.8rem', fontWeight: 200 }}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default ResearchAndDevelopment;
