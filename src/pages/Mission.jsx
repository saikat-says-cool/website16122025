import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { VerticalExcellenceChart } from '../components/Infographics';

const Mission = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Header with technical lines */}
                <section className="reveal tech-grid" style={{
                    padding: '5rem 2rem 8rem 2rem',
                    borderBottom: '1px solid #f0f0f0',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <div className="tech-line-v desktop-only" style={{ left: '15%' }}></div>
                    <div className="tech-line-v desktop-only" style={{ right: '15%' }}></div>

                    <div className="section-tag">Mission Core</div>
                    <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '3rem', color: '#666' }}>The Goal</span>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', fontWeight: 300, marginBottom: '4rem', letterSpacing: '-0.04em', position: 'relative', zIndex: 2 }}>
                        Mission Statement.
                    </h1>
                    <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                        <div className="corner-mark top-left"></div>
                        <div className="corner-mark bottom-right"></div>
                        <p style={{ fontSize: '2rem', lineHeight: 1.4, fontWeight: 300, color: '#000', padding: '2rem' }}>
                            "We make <span style={{ textDecoration: 'underline' }}>specialized AI tools</span> and agentic applications that help humanity across specialized fields."
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '6rem auto 0 auto', opacity: 0.8 }}>
                        <VerticalExcellenceChart />
                    </div>
                </section>

                {/* Pillars with structured layout */}
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #f0f0f0' }}>
                    {[
                        {
                            id: '01',
                            title: 'Vertical Specialization',
                            desc: 'General AI is an wide ocean with an inch of depth. We choose to build wells of knowledge. For high-stakes environments, shallow knowledge is dangerous.'
                        },
                        {
                            id: '02',
                            title: 'Agentic Framework',
                            desc: 'A chat box is a limited interface for intelligence. We believe the future is agentic. Our tools are not passive responders; they are proactive participants.'
                        },
                        {
                            id: '03',
                            title: 'Deterministic Reasoning',
                            desc: 'Probability is the enemy of trust. While mass-market models are optimized for creativity, our systems are optimized for deterministic logic.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="reveal nav-card" style={{
                            borderRight: i !== 2 ? '1px solid #f0f0f0' : 'none',
                            padding: '6rem 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            transition: 'all 0.4s ease'
                        }}>
                            <div className="corner-mark top-right" style={{ width: '15px', height: '15px' }}></div>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '4rem', display: 'block', color: '#111' }}>Pillar // {item.id}</span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.1 }}>{item.title}</h3>
                            <div style={{ width: '40px', height: '1px', background: '#000', marginBottom: '3rem' }}></div>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333', marginTop: 'auto' }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Humanitarian Metric with structured grid and accents */}
                <section style={{ padding: '10rem 4rem', backgroundColor: '#fff', position: 'relative' }} className="mobile-padding-tight reveal">
                    <div className="tech-line-h" style={{ top: '0', background: '#eee' }}></div>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }} className="mobile-grid-1">
                        <div>
                            <div className="section-tag">Performance Target</div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '3rem', letterSpacing: '-0.04em' }}>The Humanitarian <br /> Metric.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111', marginBottom: '2rem' }}>
                                We measure our success not in shareholder value, but in the "Dilation of Capability." How much more can an expert achieve because of our infrastructure?
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="glass-card" style={{ padding: '3rem', position: 'relative' }}>
                                <div className="corner-mark bottom-left"></div>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#000' }}>Accuracy over Empathy</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                    We do not build AI to "feel" human. We build it to be right. In our mission, factual correctness is the ultimate form of empathy for the end-user.
                                </p>
                            </div>
                            <div className="glass-card" style={{ padding: '3rem', position: 'relative' }}>
                                <div className="corner-mark bottom-right"></div>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#000' }}>Trust through Transparency</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                    We provide white-box insights into our black-box models. Trust is earned through verifiable reasoning and consistent performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ borderTop: '1px solid #f0f0f0', padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#fafafa', position: 'relative' }}>
                    <div className="tech-grid" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.4 }}></div>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', color: '#000', fontWeight: 300, lineHeight: 1.6 }}>
                            Artificialyze is the conduit through which advanced computation meets tangible human need. We turn complex cognitive tasks into workflows.
                        </p>
                        <div style={{ marginTop: '4rem' }}>
                            <a href="/identity" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000' }}>Learn about our Identity</a>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Mission;
