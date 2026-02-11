import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { VerticalExcellenceChart } from '../components/Infographics';
import DeepExLogo from '../components/DeepExLogo';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Hero Section with Grid and Lines */}
                <section className="reveal tech-grid" style={{
                    padding: '6rem 2rem 8rem 2rem',
                    textAlign: 'center',
                    maxWidth: '100%',
                    margin: '0 auto',
                    position: 'relative',
                    borderBottom: '1px solid #f0f0f0'
                }}>
                    <div className="tech-line-v desktop-only" style={{ left: '10%' }}></div>
                    <div className="tech-line-v desktop-only" style={{ right: '10%' }}></div>

                    <div className="section-tag">System Initialization</div>

                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 10rem)',
                        fontWeight: 300,
                        lineHeight: 0.95,
                        marginBottom: '4rem',
                        letterSpacing: '-0.05em',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        Specialized AI <br />
                        <span style={{ display: 'block' }}>for humanity.</span>
                    </h1>

                    <div style={{ maxWidth: '1000px', margin: '0 auto 6rem auto', opacity: 0.8 }}>
                        <VerticalExcellenceChart />
                    </div>

                    <div className="mobile-grid-1" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6rem',
                        textAlign: 'left',
                        maxWidth: '1000px',
                        margin: '4rem auto 0 auto',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div style={{ position: 'relative' }}>
                            <div className="corner-mark top-left"></div>
                            <div className="corner-mark bottom-right"></div>
                            <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: '#000', fontWeight: 300, marginBottom: '2rem', padding: '1rem' }}>
                                Welcome to Artificialyze. We represent the next evolutionary step in cognitive infrastructure.
                            </p>
                        </div>
                        <div style={{ borderLeft: '1px solid #eee', paddingLeft: '3rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', marginBottom: '2rem' }}>
                                Our mandate is to empower humanity by building tools that are not just conversational, but strictly functional. We champion the philosophy of <strong>vertical excellence</strong>.
                            </p>
                            <div style={{ width: '60px', height: '1px', background: '#000' }}></div>
                        </div>
                    </div>

                    <div style={{ marginTop: '6rem', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                        <a href="https://deepex.artificialyze.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                            padding: '1.4rem 4rem',
                            backgroundColor: '#000',
                            color: '#fff',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid #000'
                        }}>
                            <DeepExLogo size={20} color="#fff" />
                            Try DeepEx
                        </a>
                        <Link to="/deepex" style={{
                            padding: '1.4rem 4rem',
                            backgroundColor: '#fff',
                            color: '#000',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ddd'
                        }}>
                            Learn More
                        </Link>
                    </div>
                </section>

                {/* Information Tier with Architectural Borders */}
                <section style={{ padding: '8rem 0', position: 'relative' }}>
                    <div className="tech-line-h" style={{ top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}></div>

                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', padding: '0 2rem' }} className="mobile-grid-1">
                        <article className="glass-card" style={{ padding: '4rem', position: 'relative' }}>
                            <div className="corner-label top-left" style={{ color: '#000' }}>[ Pillar 01 ]</div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>The Vertical <br /> Advantage.</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                                Generalized models dilute capability. We choose the well of depth over the ocean of shallow knowledge. Our architectures are constrained to dominate single domains.
                            </p>
                        </article>

                        <article className="glass-card" style={{ padding: '4rem', position: 'relative' }}>
                            <div className="corner-label top-left" style={{ color: '#000' }}>[ Pillar 02 ]</div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Agentic <br /> Framework.</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                                Moving beyond chatbots. We build autonomous agents that plan, reason, and execute. The future of AI is not talking; it is doing.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Large Text Block with Decorative Elements */}
                <section style={{ backgroundColor: '#000', color: '#fff', padding: '10rem 4rem', position: 'relative', overflow: 'hidden' }} className="mobile-padding-tight">
                    <div className="tech-line-v" style={{ left: '50%', background: 'rgba(255,255,255,0.1)' }}></div>

                    <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                        <div className="section-tag" style={{ color: '#aaa', borderColor: 'rgba(255,255,255,0.2)' }}>Strategic Directive</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '4rem', lineHeight: 1.1 }}>
                            The era of the "average" AI is ending. We are building the peaks.
                        </h2>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                            <p style={{ color: '#aaa', lineHeight: 1.7 }}>
                                Every sub-organization under Artificialyze is governed by a strict mandate of vertical mastery. We do not drift into consumer distraction.
                            </p>
                            <p style={{ color: '#aaa', lineHeight: 1.7 }}>
                                By curating high-signal datasets and implementing adversarial reasoning chains, we provide a standard of truth that is rare in the generative age.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sub-Brand Navigation with Geometric Accents */}
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    borderTop: '1px solid #f0f0f0',
                    maxWidth: '100%',
                    backgroundColor: '#fff'
                }} className="mobile-grid-1">
                    {[
                        { num: '01', title: 'Identity', link: '/identity' },
                        { num: '02', title: 'Mission', link: '/mission' },
                        { num: '03', title: 'Reasoning', link: '/deepex', isDeepEx: true },
                        { num: '04', title: 'Governance', link: '/governance' }
                    ].map((item, i) => (
                        <Link to={item.link} key={i} className="nav-card" style={{
                            padding: '6rem 2rem',
                            borderRight: i !== 3 ? '1px solid #f0f0f0' : 'none',
                            textAlign: 'center',
                            display: 'block',
                            position: 'relative'
                        }}>
                            <div className="corner-mark top-left" style={{ width: '5px', height: '5px' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', minHeight: '3.6rem', alignItems: 'center' }}>
                                {item.isDeepEx ? (
                                    <DeepExLogo size={60} color="#ddd" style={{ transition: 'color 0.3s' }} />
                                ) : (
                                    <span style={{ display: 'block', fontSize: '3rem', marginBottom: '1rem', fontWeight: 200, color: '#eee', transition: 'color 0.3s' }}>{item.num}</span>
                                )}
                            </div>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.25em', fontWeight: 500, color: '#000' }}>{item.title}</span>
                            <div className="corner-mark bottom-right" style={{ width: '5px', height: '5px' }}></div>
                        </Link>
                    ))}
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Home;
