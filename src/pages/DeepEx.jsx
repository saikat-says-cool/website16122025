import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DeepEx = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                <div style={{ display: 'grid', gridTemplateColumns: '45% 55%' }}>

                    {/* Left Panel - Dark */}
                    <div style={{
                        backgroundColor: '#0a0a0a',
                        color: '#fff',
                        padding: '8rem 6rem',
                        minHeight: '90vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        {/* Abstract glow */}
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            right: '20%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }}></div>

                        <span style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '2rem', fontSize: '0.8rem' }}>Project Focus // 001</span>
                        <h1 style={{ fontSize: 'clamp(5rem, 10vw, 12rem)', lineHeight: 0.8, fontWeight: 200, marginLeft: '-0.8rem', marginBottom: '6rem', letterSpacing: '-0.05em' }}>
                            Deep<br />Ex.
                        </h1>
                        <p style={{ fontSize: '1.8rem', fontWeight: 200, opacity: 0.9, maxWidth: '400px', lineHeight: 1.4, borderLeft: '1px solid #333', paddingLeft: '2rem', marginBottom: '4rem' }}>
                            The Vanguard of Reasoning. <br />
                            Minimizing Hallucinations. <br />
                            Maximizing Truth.
                        </p>
                        <div style={{ marginTop: '4rem', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                left: '-6rem',
                                top: '50%',
                                transform: 'translateY(-50%) rotate(-90deg)',
                                fontSize: '0.7rem',
                                letterSpacing: '0.4em',
                                color: '#444',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Core Philosophy
                            </div>
                            <p style={{
                                fontSize: '2rem',
                                fontWeight: 300,
                                color: '#fff',
                                margin: 0,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.2
                            }}>
                                DeepX means <br />
                                <span style={{
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '8px',
                                    color: '#fff'
                                }}>Deep Execution</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Technical Details */}
                    <div style={{ padding: '8rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <div style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '5rem', marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 300, color: '#000' }}>The Problem with Probability</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                In a market flooded with stochastic parrots that guess the next word based on probability, DeepEx is engineered for <span style={{ textDecoration: 'underline' }}>reasoning</span>. It is built to pause, to think, and to verify. The core directive of DeepEx is simple yet incredibly difficult: bringing AI closer to perfection and reality.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                            {[
                                { title: 'Directive', desc: 'To bridge the gap between AI capability and human reality. We strive to create a system where output is not just "plausible," but "correct."' },
                                { title: 'Mandate', desc: 'The relentless minimization of errors. We employ adversarial testing frameworks that actively try to break our models.' },
                                { title: 'Objective', desc: 'Helping humanity make better decisions. Providing a reasoning engine that transforms probabilistic nature into deterministic utility.' },
                                { title: 'Status', desc: 'Active Development // Beta Phase', special: true }
                            ].map((item, i) => (
                                <div key={i} style={item.special ? {
                                    border: '1px solid #000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                } : {}}>
                                    {item.special ? (
                                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600 }}>{item.desc}</span>
                                    ) : (
                                        <>
                                            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.7rem', borderBottom: '1px solid #eee', paddingBottom: '0.8rem', marginBottom: '1.5rem', color: '#333' }}>{item.title}</h4>
                                            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#111' }}>{item.desc}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default DeepEx;
