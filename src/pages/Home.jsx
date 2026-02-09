import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Hero Section */}
                <section style={{
                    padding: '4rem 4rem 8rem 4rem',
                    textAlign: 'center',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Background Graphic Element */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60vw',
                        height: '60vw',
                        border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: '50%',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40vw',
                        height: '40vw',
                        border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: '50%',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}></div>

                    <h1 style={{
                        fontSize: 'clamp(4rem, 10vw, 12rem)',
                        fontWeight: 300,
                        lineHeight: 0.9,
                        marginBottom: '4rem',
                        letterSpacing: '-0.06em',
                        maxWidth: '1400px',
                        margin: '0 auto 5rem auto'
                    }}>
                        Specialized AI <br />
                        <span style={{ display: 'block' }}>for humanity.</span>
                    </h1>

                    <div style={{
                        height: '120px',
                        width: '1px',
                        background: 'linear-gradient(to bottom, #000, transparent)',
                        margin: '0 auto 6rem auto'
                    }}></div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem', textAlign: 'left', maxWidth: '1100px', margin: '0 auto' }}>
                        <div>
                            <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: '#111', fontWeight: 300, marginBottom: '2rem' }}>
                                Welcome to Artificialyze. We are established with a singular, unyielding purpose: to oversee the development of highly specialized AI tools and agentic applications.
                            </p>
                            <div style={{ width: '100%', height: '1px', background: '#eee' }}></div>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#111' }}>
                                We reject the notion that one model can solve all problems. Instead, we champion the philosophy of <span style={{ textDecoration: 'underline' }}>vertical excellence</span>. Our mandate is to empower humanity by building tools that are not just conversational, but strictly functional.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '10rem', display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to="/deepex" style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem 5rem',
                            backgroundColor: '#000',
                            color: '#fff',
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                            border: '1px solid #000',
                            overflow: 'hidden'
                        }}>
                            <span style={{ position: 'relative', zIndex: 2 }}>Discover DeepEx</span>
                        </Link>

                        <Link to="/mission" style={{
                            display: 'inline-block',
                            padding: '1.5rem 0',
                            backgroundColor: 'transparent',
                            color: '#000',
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            borderBottom: '1px solid #000',
                            transition: 'all 0.3s ease'
                        }}>Our Mission</Link>
                    </div>
                </section>

                {/* Visual Footer Nav */}
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                    {[
                        { num: '01', title: 'Identity', link: '/identity' },
                        { num: '02', title: 'Mission', link: '/mission' },
                        { num: '03', title: 'Reasoning', link: '/deepex' },
                        { num: '04', title: 'Governance', link: '/governance' }
                    ].map((item, i) => (
                        <Link to={item.link} key={i} style={{
                            padding: '4rem 2rem',
                            borderRight: i !== 3 ? '1px solid #eaeaea' : 'none',
                            textAlign: 'center',
                            transition: '0.2s',
                            display: 'block'
                        }}>
                            <span style={{ display: 'block', fontSize: '4rem', marginBottom: '1rem', fontWeight: 200, color: '#999' }}>{item.num}</span>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 500, color: '#000' }}>{item.title}</span>
                        </Link>
                    ))}
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Home;
