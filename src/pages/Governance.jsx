import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Governance = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1, padding: '4rem 1.5rem', position: 'relative' }}>

                {/* Background Grid Lines */}
                <div className="tech-line-v desktop-only" style={{ left: '15%', opacity: 0.3 }}></div>
                <div className="tech-line-v desktop-only" style={{ right: '15%', opacity: 0.3 }}></div>

                <section className="reveal" style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '8rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <div className="section-tag">Constitutional Framework</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, letterSpacing: '-0.04em', color: '#000', marginBottom: '3rem' }}>Governing Intelligence.</h1>
                    <p style={{ fontSize: '1.4rem', color: '#333', maxWidth: '800px', margin: '0 auto', lineHeight: 1.5, fontWeight: 300 }}>
                        Powerful technology requires even more powerful governance. Our charter defines the boundaries of specialized progress.
                    </p>
                </section>

                <div className="reveal tech-grid" style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    border: '1px solid #000',
                    padding: '8rem 6rem',
                    backgroundColor: '#fff',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.05)',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {/* Architectural Stamping */}
                    <div style={{
                        position: 'absolute',
                        top: '4rem',
                        right: '4rem',
                        fontSize: '0.65rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5em',
                        color: '#ddd',
                        border: '1px solid #eee',
                        padding: '1.2rem',
                        transform: 'rotate(15deg)',
                        fontWeight: 600
                    }}>
                        Document // Ref 001.X
                    </div>

                    <div className="corner-mark top-left" style={{ width: '40px', height: '40px', borderColor: '#000' }}></div>
                    <div className="corner-mark top-right" style={{ width: '40px', height: '40px', borderColor: '#000' }}></div>
                    <div className="corner-mark bottom-left" style={{ width: '40px', height: '40px', borderColor: '#000' }}></div>
                    <div className="corner-mark bottom-right" style={{ width: '40px', height: '40px', borderColor: '#000' }}></div>

                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.5rem', color: '#333' }}>Supreme Document</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0, color: '#000' }}>The Charter</h2>
                        <div style={{ width: '80px', height: '1px', background: '#000', margin: '3rem auto' }}></div>
                    </div>

                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div className="corner-label top-left" style={{ padding: 0, top: '-2rem' }}>Preamble</div>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', color: '#111' }}>
                                The Artificialyze Charter is the supreme governing document of our organization. It outlines the technical and operational boundaries within which our projects operate.
                            </p>
                        </div>
                        <div style={{ borderLeft: '1px solid #eee', paddingLeft: '4rem', position: 'relative' }} className="mobile-padding-tight">
                            <div className="corner-label top-left" style={{ padding: 0, top: '-2rem', left: '4rem' }}>The Mandate</div>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#111' }}>
                                Every sub-organization remains strictly subordinate to this mission of vertical excellence. We reject feature bloat and the pursuit of mass-market distraction.
                            </p>
                        </div>
                    </div>

                    {/* Articles Section with highly structured boxes */}
                    <div style={{ marginBottom: '8rem' }}>
                        {[
                            {
                                id: 'I',
                                title: 'Primacy of Focus',
                                desc: 'Artificialyze will never develop generalized tools. Every project must have a clearly defined vertical domain. Mastery is absolute.'
                            },
                            {
                                id: 'II',
                                title: 'Data Sovereignty',
                                desc: 'Quality of data is superior to quantity. All sets used for training must be vetted for domain-specific accuracy. Scraping is secondary to curated selection.'
                            },
                            {
                                id: 'III',
                                title: 'Adversarial Governance',
                                desc: 'All tools must undergo continuous adversarial testing. Our goal is the relentless minimization of hallucinations through deterministic chains.'
                            }
                        ].map((article, i) => (
                            <div key={i} style={{
                                borderTop: '1px solid #eee',
                                padding: '4rem 0',
                                display: 'grid',
                                gridTemplateColumns: '80px 1fr',
                                gap: '2rem'
                            }} className="mobile-grid-1">
                                <span style={{ fontSize: '1.2rem', fontWeight: 200, color: '#ccc' }}>[{article.id}]</span>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '1.5rem', color: '#000' }}>Article: {article.title}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', maxWidth: '800px' }}>
                                        {article.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card" style={{ padding: '6rem 4rem', textAlign: 'center', border: '1px solid #000' }}>
                        <div className="corner-mark top-left" style={{ width: '10px', height: '10px' }}></div>
                        <h2 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#333', marginBottom: '3rem' }}>The Promise</h2>
                        <p style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2, color: '#000' }}>
                            We do not build chatbots. <br />
                            We build <span style={{ textDecoration: 'underline' }}>specialized infrastructure</span> for a smarter future.
                        </p>
                        <div className="corner-mark bottom-right" style={{ width: '10px', height: '10px' }}></div>
                    </div>

                    <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '3rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }} className="mobile-grid-1 mobile-text-center">
                        <div style={{ borderLeft: '1px solid #000', paddingLeft: '1rem' }}>
                            <span style={{ opacity: 0.5 }}>Authorized by</span> <br />
                            <span style={{ fontWeight: 500 }}>The Directorate</span>
                        </div>
                        <div style={{ borderLeft: '1px solid #000', paddingLeft: '1rem' }}>
                            <span style={{ opacity: 0.5 }}>Effective Date</span> <br />
                            <span style={{ fontWeight: 500 }}>January 12, 2026</span>
                        </div>
                        <div style={{ borderLeft: '1px solid #000', paddingLeft: '1rem' }}>
                            <span style={{ opacity: 0.5 }}>Revision Status</span> <br />
                            <span style={{ fontWeight: 500 }}>V.1.04 Specialized</span>
                        </div>
                    </div>

                </div>

                {/* Accountability block with decorative background */}
                <section style={{ maxWidth: '800px', margin: '10rem auto 4rem auto', textAlign: 'center', position: 'relative' }} className="reveal">
                    <div className="tech-line-h" style={{ top: '-4rem', width: '60px', left: '50%', transform: 'translateX(-50%)', background: '#000' }}></div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '2rem' }}>Audit & Accountability.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#444', marginBottom: '3rem' }}>
                        Compliance with the Charter is non-negotiable. We maintain internal audit trails for all workflows to ensure the standards of tangible utility are upheld.
                    </p>
                    <div className="section-tag" style={{ margin: 0 }}>End of Document</div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Governance;
