import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Mission = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>

                <section style={{ padding: '10rem 4rem', borderBottom: '1px solid #eaeaea', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '1px',
                        height: '200%',
                        background: '#f0f0f0',
                        zIndex: -1
                    }}></div>

                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 7rem)', fontWeight: 300, marginBottom: '3rem', letterSpacing: '-0.04em' }}>
                        Mission Statement.
                    </h1>
                    <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '2rem', lineHeight: 1.4, fontWeight: 300, color: '#000' }}>
                        "We make <span style={{ textDecoration: 'underline' }}>specialized AI tools</span> and agentic applications that help humanity across specialized fields."
                    </p>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', minHeight: '60vh' }}>

                    {[
                        {
                            id: '01',
                            title: 'Vertical Specialization',
                            desc: 'The era of the "jack-of-all-trades" AI is ending. For AI to be truly useful in high-stakes environments—law, medicine, engineering—it must be deeply specialized. We obsess over specific problems, reinforcing our systems with domain-specific logic.'
                        },
                        {
                            id: '02',
                            title: 'Agentic Framework',
                            desc: 'Passive tools are relics. The future belongs to agents. Our products observe, plan, and act. They break down reasoning into constituent tasks and execute them. The shift from "chat" to "agency" is our defining philosophy.'
                        },
                        {
                            id: '03',
                            title: 'Human-Centric Utility',
                            desc: 'Technology without utility is vanity. We measure success by tangible benefit: time saved, errors avoided, insights gained. If it does not dramatically improve the human workflow, we do not build it.'
                        }
                    ].map((item, i) => (
                        <div key={i} style={{
                            borderRight: i !== 2 ? '1px solid #eaeaea' : 'none',
                            padding: '6rem 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            transition: 'background 0.3s'
                        }}>
                            <span style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                fontSize: '4rem',
                                fontWeight: 800,
                                opacity: 0.05
                            }}>{item.id}</span>

                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '5rem', display: 'block', color: '#222' }}>Pillar {item.id}</span>

                            <h3 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.1 }}>{item.title}</h3>

                            <div style={{ width: '40px', height: '2px', background: '#000', marginBottom: '3rem' }}></div>

                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#111', marginTop: 'auto' }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

                <div style={{ borderTop: '1px solid #eaeaea', padding: '8rem 4rem', textAlign: 'center', backgroundColor: '#fafafa' }}>
                    <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', color: '#111', fontWeight: 300, lineHeight: 1.6 }}>
                        Our purpose is to empower humanity. Not to replace, but to extend. We turn complex cognitive tasks into streamlined, reliable, and agentic workflows that operate with a level of precision that generates trust.
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Mission;
