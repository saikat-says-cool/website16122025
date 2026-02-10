import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AgenticSymbiosis } from '../components/Infographics';

const Identity = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1, position: 'relative' }}>

                {/* Title Block with Lines and Grid */}
                <section className="reveal tech-grid" style={{
                    padding: '5rem 6rem 6rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    position: 'relative'
                }}>
                    <div className="tech-line-v desktop-only" style={{ left: '60px' }}></div>

                    <div className="mobile-text-center" style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                        <div className="section-tag">Core Definition</div>
                        <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.4em', marginBottom: '2rem', color: '#111', textTransform: 'uppercase' }}>Manifesto I</span>
                        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 10vw)', fontWeight: 300, lineHeight: 0.8, letterSpacing: '-0.06em', margin: 0, color: '#000' }}>
                            Identity.
                        </h1>
                    </div>
                    <div className="desktop-only" style={{ fontSize: '15rem', lineHeight: 0.8, fontWeight: 100, color: '#f7f7f7', position: 'relative', zIndex: 1 }}>I</div>
                </section>

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 25%) 1fr', position: 'relative' }}>

                    <div className="tech-line-v desktop-only" style={{ left: '25%', background: '#f5f5f5' }}></div>

                    {/* Sidebar / Tenets */}
                    <aside className="mobile-padding-tight" style={{
                        borderRight: '1px solid #f0f0f0',
                        padding: '6rem 4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div className="corner-mark top-right" style={{ borderTop: 0, borderRight: 0, borderLeft: '1px solid #eee', borderBottom: '1px solid #eee', width: '20px', height: '20px' }}></div>

                        <div style={{ marginBottom: '4rem' }}>
                            <AgenticSymbiosis />
                        </div>

                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '4rem', color: '#000' }}>Core Tenets</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                { title: 'Rigorous Development', desc: 'Engineering over hype.' },
                                { title: 'Specialized Mastery', desc: 'Depth over breadth.' },
                                { title: 'Agentic Workflows', desc: 'Action over conversation.' },
                                { title: 'Deterministic Logic', desc: 'Truth over probability.' }
                            ].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '3.5rem',
                                    position: 'relative',
                                    paddingLeft: '1.5rem',
                                    borderLeft: '1px solid #000'
                                }}>
                                    <span style={{ position: 'absolute', top: 0, right: 0, fontSize: '0.6rem', color: '#ccc' }}>0{i + 1}</span>
                                    <span style={{ display: 'block', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</span>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#666' }}>{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content Article */}
                    <article className="mobile-padding-tight" style={{ padding: '8rem 10rem', maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
                        <div className="reveal" style={{ position: 'relative', marginBottom: '6rem' }}>
                            <div className="corner-mark top-left"></div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '4rem', lineHeight: 1.1, padding: '1rem 0' }}>We define the <br /> infrastructure of intent.</h2>
                            <p style={{ fontSize: '1.6rem', lineHeight: 1.4, fontWeight: 300, color: '#111', maxWidth: '800px' }}>
                                Artificialyze is more than a company; it is a repository of specialized intelligence. We exist to solve the "generalist problem."
                            </p>
                        </div>

                        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8rem' }}>
                            {[
                                { title: 'The Transition', content: 'Our identity is built on the transition from "approximate conversation" to "precise execution." We fundamentally reject the generalist paradigm. True power lies in constraints.' },
                                { title: 'The Specialized Paradox', content: 'Specialized AI requires a deeper understanding of domain logic and a far more uncompromising approach to error rates. We do not hide behind "vibes"; we stand behind performance.' },
                                { title: 'Architects of the Vertical', content: 'We are architects, not artists. Our work is structural. We construct the cognitive engines that power industry, governance, and research. Depth is our distinction.' }
                            ].map((section, idx) => (
                                <div key={idx} style={{
                                    border: '1px solid #f0f0f0',
                                    padding: '4rem',
                                    position: 'relative',
                                    backgroundColor: '#fff'
                                }}>
                                    <div className="corner-label top-right">VERIFIED</div>
                                    <div style={{ width: '30px', height: '1px', background: '#000', marginBottom: '2rem' }}></div>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '2rem', color: '#111' }}>{section.title}</h4>
                                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }}>
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Engineering Ethos with Geometric Grid */}
                        <div className="reveal tech-grid" style={{ marginTop: '10rem', padding: '6rem', backgroundColor: '#fafafa', border: '1px solid #f0f0f0', position: 'relative' }}>
                            <div className="tech-line-h" style={{ top: '0', opacity: 0.8 }}></div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '3rem' }}>The Engineering Ethos</h3>
                            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                                <div>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                        Performance requirements at the edge of possibility require a different kind of engineering. We prioritize small, curated datasets over massive, unvetted pools.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '1px solid #eee', paddingLeft: '3rem' }}>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                        Our developers operate under the "Rule of Three": specialized domain problem, verifiable reasoning, and augmentation of human agency.
                                    </p>
                                </div>
                            </div>
                            <div className="corner-mark bottom-right"></div>
                        </div>
                    </article>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Identity;
