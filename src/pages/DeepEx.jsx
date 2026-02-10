import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlphaReasoningFlow } from '../components/Infographics';

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
                        <span style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '2rem', fontSize: '0.8rem' }}>Reasoning Engine</span>
                        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.8, fontWeight: 300, marginLeft: '-0.5rem', marginBottom: '6rem', letterSpacing: '-0.05em', position: 'relative' }}>
                            Deep<br />Ex.
                        </h1>
                        <p style={{ fontSize: '1.8rem', fontWeight: 200, opacity: 0.9, maxWidth: '450px', lineHeight: 1.4, borderLeft: '1px solid #333', paddingLeft: '2.5rem', marginBottom: '4rem' }}>
                            Bridging the gap between <br />
                            probability and truth.
                        </p>

                        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ height: '40px', width: '1px', background: '#fff' }}></div>
                                <p style={{ fontSize: '1.2rem', color: '#eee', fontWeight: 300, margin: 0 }}>
                                    Tactical execution layer for <br /> specialized infrastructures.
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
                                { title: 'Mandate', desc: 'The relentless minimization of error rates via continuous, multi-layered adversarial testing.' },
                                { title: 'Objective', desc: 'Transforming the inherently probabilistic nature of LLMs into a deterministic utility.' },
                                { title: 'Mechanism', desc: 'Alpha Reasoning occurring at the inference level with verified path collapse.' },
                                { title: 'Status', desc: 'In active development for specialized vertical deployment.' }
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
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem' }}>Laboratory Integration</h3>
                            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                DeepEx utilizes a proprietary process we call "Alpha Reasoning." Unlike standard prompt engineering, Alpha Reasoning occurs during the inference phase, where the model evaluates multiple logical branches.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Overview Section with Table-like Feel */}
                <section style={{ padding: '8rem 4rem', borderTop: '1px solid #f0f0f0', backgroundColor: '#fafafa' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="section-tag">System Parameters</div>
                                <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>The Depth <br /> Advantage.</h2>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111' }}>
                                    Generalized models are trained on the "average" of human knowledge. DeepEx is trained on the peaks. By curating high-signal data, we provide a vertically superior intelligence.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {[
                                    { label: 'Latency Profile', value: 'Optimized for Execution' },
                                    { label: 'Precision Goal', value: 'Domain-Leading Accuracy' },
                                    { label: 'Control Mechanism', value: 'Adversarial Chains' },
                                    { label: 'Data Strategy', value: 'Curated Vertical Sets' }
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

            </main>
            <Footer />
        </div>
    );
};

export default DeepEx;
