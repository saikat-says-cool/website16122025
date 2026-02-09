import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Governance = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fcfcfc' }}>
            <Header />
            <main style={{ flex: 1, padding: '8rem 4rem' }}>

                <div style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    border: '1px solid #e0e0e0',
                    padding: '8rem',
                    backgroundColor: '#fff',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.03)'
                }}>

                    <div style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', marginBottom: '2rem', color: '#333' }}>Supreme Document</span>
                        <h1 style={{ fontSize: '5rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0, color: '#111' }}>The Charter</h1>
                        <div style={{ width: '80px', height: '1px', background: '#000', margin: '3rem auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
                        <div style={{ paddingRight: '2rem', borderRight: '1px solid #f0f0f0' }}>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem', color: '#111' }}>
                                The Artificialyze Charter is not merely a suggestion; it is the supreme governing document of our organization. It outlines the boundaries within which we operate and the principles that guide our product development.
                            </p>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                In an industry often criticized for moving "too fast" and "breaking things," we have chosen a different path: purposeful, governed evolution.
                            </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem', color: '#111' }}>
                                As our product portfolio expands to include various verticals—every single entity and sub-organization must remain subordinate to the overarching mission of specialized excellence.
                            </p>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                There will be no feature bloat. There will be no deviation into mass-market entertainment. The integrity of our vertical focus is absolute. We hold ourselves accountable to the standard of "tangible utility."
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#f9f9f9', padding: '6rem', textAlign: 'center', border: '1px solid #eee' }}>
                        <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#333', marginBottom: '3rem' }}>The Promise</h2>
                        <p style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1.2, color: '#000' }}>
                            We do not build chatbots. <br />
                            We build the <span style={{ textDecoration: 'underline' }}>specialized infrastructure</span> for a smarter future.
                        </p>
                    </div>

                    <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e0e0e0', paddingTop: '2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#333' }}>
                        <span>Signed: Artificialyze</span>
                        <span>Est. 2026</span>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Governance;
