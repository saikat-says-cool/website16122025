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
                <section className="reveal" style={{
                    padding: '8rem 2rem 6rem 2rem',
                    textAlign: 'center',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 10rem)',
                        fontWeight: 300,
                        lineHeight: 0.95,
                        marginBottom: '4rem',
                        letterSpacing: '-0.05em'
                    }}>
                        Specialized AI <br />
                        <span style={{ display: 'block' }}>for humanity.</span>
                    </h1>

                    <div className="mobile-grid-1" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6rem',
                        textAlign: 'left',
                        maxWidth: '1000px',
                        margin: '4rem auto 0 auto'
                    }}>
                        <div>
                            <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: '#000', fontWeight: 300, marginBottom: '2rem' }}>
                                Welcome to Artificialyze. We represent the next evolutionary step in cognitive infrastructure, overseeing the development of highly specialized AI tools and agentic applications.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                                Our organization was founded on a singular premise: that the era of "jack-of-all-trades" AI is coming to an end. As technology matures, the demand for precision, reliability, and domain-specific mastery becomes paramount. We are the architects of that precision.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', marginBottom: '2rem' }}>
                                We champion the philosophy of <span style={{ textDecoration: 'underline' }}>vertical excellence</span>. Our mandate is not to create digital companions or entertainment systems, but to build specialized tools that strictly augment human capability in high-value domains.
                            </p>
                            <div style={{ width: '40px', height: '1px', background: '#000' }}></div>
                        </div>
                    </div>

                    <div style={{ marginTop: '6rem', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/deepex" className="btn-primary" style={{
                            padding: '1.4rem 4rem',
                            backgroundColor: '#000',
                            color: '#fff',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            border: '1px solid #000'
                        }}>Discover DeepEx</Link>

                        <Link to="/mission" className="hover-underline" style={{
                            padding: '1.4rem 0',
                            color: '#000',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase'
                        }}>Our Mission</Link>
                    </div>
                </section>

                {/* The Philosophy Section - Deepening the copy */}
                <section style={{ backgroundColor: '#fafafa', padding: '10rem 4rem' }} className="mobile-padding-tight">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>
                            <div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#666', marginBottom: '2rem', display: 'block' }}>The Vertical Path</span>
                                <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>The specialized <br /> advantage.</h2>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111', marginBottom: '2rem' }}>
                                    Generalized AI is a miracle of probability; specialized AI is a masterwork of engineering. At Artificialyze, we don't believe in "one size fits all." We believe that for AI to be truly useful in professional, scientific, and industrial contexts, it must understand the nuance, the jargon, and the logic of those fields as deeply as a human expert.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#444' }}>
                                    By constraining the scope of our models, we are able to achieve higher levels of accuracy, reduce hallucinations, and implement more sophisticated reasoning capabilities that general-purpose models simply cannot match.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                                <div style={{ borderLeft: '2px solid #000', paddingLeft: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Sovereignty of Data</h4>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
                                        We treat data not as a mass-market commodity, but as a specialized asset. Our training methodologies prioritize quality and relevance over sheer volume, ensuring our tools grow in wisdom, not just size.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '2px solid #000', paddingLeft: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Deterministic Utility</h4>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
                                        While others chase the excitement of unpredictable AI, we chase the value of predictable outcomes. Our systems are built to be agentic—performing complex tasks with a level of reliability that generates trust.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '2px solid #000', paddingLeft: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Architectural Integrity</h4>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
                                        Every line of code and every training parameter is governed by our Charter. We do not drift into consumer distraction; we remain focused on the infrastructure of progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sub-Brand Navigation */}
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    borderTop: '1px solid #f0f0f0',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }} className="mobile-grid-1">
                    {[
                        { num: '01', title: 'Identity', link: '/identity' },
                        { num: '02', title: 'Mission', link: '/mission' },
                        { num: '03', title: 'Reasoning', link: '/deepex' },
                        { num: '04', title: 'Governance', link: '/governance' }
                    ].map((item, i) => (
                        <Link to={item.link} key={i} className="nav-card" style={{
                            padding: '6rem 2rem',
                            borderRight: i !== 3 ? '1px solid #f0f0f0' : 'none',
                            textAlign: 'center',
                            display: 'block'
                        }}>
                            <span style={{ display: 'block', fontSize: '3rem', marginBottom: '1rem', fontWeight: 200, color: '#eee', transition: 'color 0.3s' }}>{item.num}</span>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.25em', fontWeight: 500, color: '#000' }}>{item.title}</span>
                        </Link>
                    ))}
                </section>

                {/* Final Call to Action Section */}
                <section style={{ padding: '10rem 4rem', textAlign: 'center' }} className="mobile-padding-tight reveal">
                    <h2 style={{ fontSize: '4rem', fontWeight: 300, marginBottom: '3rem', letterSpacing: '-0.04em' }}>The future is specialized.</h2>
                    <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '600px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
                        Artificialyze is not just building software; we are building the cognitive standard for the next century of human advancement. Join us in the pursuit of vertical excellence.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <Link to="/identity" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Learn the Identity</Link>
                        <span style={{ color: '#ccc' }}>|</span>
                        <Link to="/governance" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>View the Charter</Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Home;
