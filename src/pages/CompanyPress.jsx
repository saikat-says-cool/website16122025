import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompanyPress = () => {
    const pressReleases = [
        { date: 'Jan 12, 2026', title: 'Artificialyze Achieves 99.9% Precision in Vertical Logistics Benchmarks', category: 'Technical' },
        { date: 'Dec 05, 2025', title: 'The Launch of DeepEx: Re-engineering the Reasoning Layer', category: 'Product' },
        { date: 'Oct 28, 2025', title: 'Artificialyze Charter Adopted: A New Standard for AI Governance', category: 'Governance' },
        { date: 'Sep 15, 2025', title: 'Strategic Partnership with Global Research Conglomerate Announced', category: 'Corporate' }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Newsroom Hero */}
                <section className="reveal tech-grid" style={{
                    padding: '5rem 6rem 6rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    backgroundColor: '#fff',
                    position: 'relative'
                }}>
                    <div className="section-tag">Newsroom // Public Ledger</div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 10vw)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.05em', margin: '2rem 0', color: '#000' }}>
                        Company <br /> Press.
                    </h1>
                    <p style={{ fontSize: '1.2rem', fontWeight: 300, maxWidth: '600px', lineHeight: 1.6, color: '#444' }}>
                        Authorized announcements and technical updates from the Artificialyze Directorate. For press inquiries, please refer to our Governance section.
                    </p>
                </section>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem' }}>
                    <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '4rem', color: '#111', textAlign: 'center' }}>Official Releases</h2>

                    <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: '#eee', border: '1px solid #eee' }}>
                        {pressReleases.map((release, i) => (
                            <div key={i} className="nav-card mobile-grid-1" style={{
                                backgroundColor: '#fff',
                                padding: '4rem',
                                display: 'grid',
                                gridTemplateColumns: '150px 1fr 150px',
                                alignItems: 'center',
                                gap: '2rem',
                                position: 'relative',
                                cursor: 'pointer'
                            }}>
                                <span style={{ fontSize: '0.75rem', color: '#888', letterSpacing: '0.1em' }}>{release.date}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, margin: 0, color: '#000' }}>{release.title}</h3>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.4rem 1rem', border: '1px solid #eee', color: '#666' }}>{release.category}</span>
                                </div>
                                <div className="corner-mark top-left" style={{ width: '6px', height: '6px' }}></div>
                            </div>
                        ))}
                    </div>

                    {/* Media Contact with structural line */}
                    <div className="reveal" style={{ marginTop: '10rem', textAlign: 'center', position: 'relative' }}>
                        <div className="tech-line-h" style={{ top: '-4rem', opacity: 0.2 }}></div>
                        <div className="section-tag">Direct Inquiry</div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '2rem' }}>Inquiry Management</h3>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            Working with the press is an essential part of our transparency mandate. We prioritize inquiries that focus on technical utility and societal impact.
                        </p>
                        <div style={{ marginTop: '3rem' }}>
                            <a href="mailto:press@artificialyze.ai" className="hover-underline" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>press@artificialyze.ai</a>
                        </div>
                    </div>
                </div>

                {/* Brand Kit / Downloads */}
                <section style={{ backgroundColor: '#fafafa', padding: '8rem 2rem', borderTop: '1px solid #f0f0f0' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }} className="mobile-grid-1">
                        <div style={{ padding: '4rem', border: '1px solid #eee', backgroundColor: '#fff', position: 'relative' }}>
                            <div className="corner-mark top-left"></div>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>Brand Assets</h4>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>Download official logos, typeface documentation, and brand guidelines authorized by the Directorate.</p>
                            <span style={{ fontSize: '0.7rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Download Kit (ZIP, 12MB)</span>
                        </div>
                        <div style={{ padding: '4rem', border: '1px solid #eee', backgroundColor: '#fff', position: 'relative' }}>
                            <div className="corner-mark top-right"></div>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>Executive Portraits</h4>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>High-resolution imagery of the Artificialyze leadership team and laboratory environments.</p>
                            <span style={{ fontSize: '0.7rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Access Image Library</span>
                        </div>
                    </div>
                </section>

            </main >
            <Footer />
        </div >
    );
};

export default CompanyPress;
