import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DeepEx = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>

                    {/* Left Panel - Dark / Deep */}
                    <div className="mobile-padding-tight reveal" style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '10rem 6rem',
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Glow Effect Animation placeholder/style */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none'
                        }}></div>

                        <span style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '3rem', fontSize: '0.8rem' }}>Project Focus // 001</span>
                        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.8, fontWeight: 300, marginLeft: '-0.5rem', marginBottom: '6rem', letterSpacing: '-0.05em' }}>
                            Deep<br />Ex.
                        </h1>
                        <p style={{ fontSize: '1.8rem', fontWeight: 200, opacity: 0.9, maxWidth: '450px', lineHeight: 1.4, borderLeft: '1px solid #333', paddingLeft: '2.5rem', marginBottom: '4rem' }}>
                            The Vanguard of Reasoning. <br />
                            Minimizing Hallucinations. <br />
                            Maximizing Truth.
                        </p>

                        <div style={{ marginTop: '2rem', maxWidth: '400px' }}>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#666', marginBottom: '1.5rem' }}>DeepX Definition</h4>
                            <p style={{ fontSize: '1.2rem', color: '#eee', fontWeight: 300 }}>
                                DeepX means <span style={{ textDecoration: 'underline' }}>Deep Execution</span>. It is the tactical layer of our specialized models.
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Technical / Light */}
                    <div className="mobile-padding-tight reveal" style={{ padding: '10rem 8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <div style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '6rem', marginBottom: '6rem' }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 300, color: '#000', lineHeight: 1.1 }}>The Problem with Probability</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111', marginBottom: '2rem' }}>
                                In a market flooded with stochastic parrots that guess the next word based on mass probability, DeepEx is engineered for <span style={{ textDecoration: 'underline' }}>reasoning</span>.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                                We have fundamentally shifted the objective function from "likeliness" to "logic." DeepEx does not just predict; it verifies. By utilizing internal adversarial chains, our engine cross-references every output against domain-specific logical constraints before it ever reaches the user.
                            </p>
                        </div>

                        {/* Grid of Directives */}
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginBottom: '8rem' }}>
                            {[
                                { title: 'Directive', desc: 'To bridge the widening gap between raw AI capability and professional human reality through specialized alignment.' },
                                { title: 'Mandate', desc: 'The relentless minimization of error rates via continuous, multi-layered adversarial testing systems.' },
                                { title: 'Objective', desc: 'Transforming the inherently probabilistic nature of LLMs into a deterministic utility for critical workflows.' },
                                { title: 'Focus', desc: 'Cognitive load reduction for experts in highly technical domains like law, engineering, and science.' }
                            ].map((item, i) => (
                                <div key={i} style={{ borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', marginBottom: '1.5rem', color: '#000' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* New Section: Methodology Alpha */}
                        <div style={{ backgroundColor: '#fafafa', padding: '4rem', border: '1px solid #f0f0f0' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem' }}>Methodology Alpha</h3>
                            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444', marginBottom: '2rem' }}>
                                DeepEx utilizes a proprietary process we call "Alpha Reasoning." Unlike standard prompt engineering, Alpha Reasoning occurs at the inference level, where the model branches into multiple logical paths, evaluates them against a specialized knowledge base, and collapses back into a single, verified truth.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ height: '1px', flex: 1, background: '#ddd' }}></div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#999' }}>Version 0.9.1 Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Overview Section */}
                <section style={{ padding: '10rem 4rem', borderTop: '1px solid #f0f0f0' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem' }}>
                            <div>
                                <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>The Depth <br /> Advantage.</h2>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111', marginBottom: '2rem' }}>
                                    Generalized models are trained on the "average" of human knowledge. DeepEx is trained on the peaks. By curating high-signal data from specialized field journals, technical documentation, and expert case studies, we provide an intelligence that is vertically superior.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                {[
                                    { label: 'Latency', value: 'Optimized' },
                                    { label: 'Precision', value: 'Highest Tier' },
                                    { label: 'Mechanism', value: 'Adversarial Chains' }
                                ].map((spec, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666' }}>{spec.label}</span>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default DeepEx;
