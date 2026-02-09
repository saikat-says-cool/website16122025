import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Identity = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Title Block */}
                <section style={{
                    padding: '10rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    backgroundColor: '#fafafa'
                }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.4em', marginBottom: '2rem', color: '#333', textTransform: 'uppercase' }}>Manifesto I</span>
                        <h1 style={{ fontSize: '9vw', fontWeight: 300, lineHeight: 0.8, letterSpacing: '-0.06em', margin: 0, color: '#000' }}>
                            Identity.
                        </h1>
                    </div>
                    <div style={{ fontSize: '10rem', lineHeight: 0.8, fontWeight: 100, color: '#f0f0f0' }}>I</div>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 25%) 1fr', minHeight: '80vh' }}>

                    {/* Sidebar / Context */}
                    <aside style={{
                        borderRight: '1px solid #f0f0f0',
                        padding: '6rem 4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4rem', color: '#333' }}>Core Tenets</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Rigorous Development', 'Specialized Mastery', 'Agentic Workflows'].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '2rem',
                                    borderLeft: '2px solid #000',
                                    paddingLeft: '1.5rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 400
                                }}>{item}</li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <article style={{ padding: '8rem 10rem' }}>
                        <div style={{ maxWidth: '900px' }}>
                            <p style={{ fontSize: '2.5rem', lineHeight: 1.3, marginBottom: '6rem', fontWeight: 300, color: '#111' }}>
                                Artificialyze is not merely a technology company; it is a parent organization established to oversee the rigorous development of highly specialized AI tools.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                                <div style={{ borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#333' }}>The Transition</h4>
                                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                        We stand at a critical juncture in the history of artificial intelligence, where the initial fascination with generalized models is giving way to the necessity for precision, reliability, and domain-specific mastery. We fundamentally reject the "generalist" AI paradigm. The belief that a single model can be all things to all people—historian, coder, poet, and analyst—is a fallacy that leads to mediocrity.
                                    </p>
                                </div>

                                <div style={{ borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#333' }}>Vertical Excellence</h4>
                                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                        True excellence requires focus. It requires a vertical approach where depth is prioritized over breadth. Our identity is forged in the pursuit of <span style={{ textDecoration: 'underline' }}>Vertical Excellence</span>. We build specialized infrastructures that do not strictly "simulate" human conversation, but rather "augment" human capability in specific, high-value domains.
                                    </p>
                                </div>

                                <div style={{ borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#333' }}>Architects of Intelligence</h4>
                                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#111' }}>
                                        We are architects of intelligence, designing systems that understand the nuance, jargon, and logic of their specific fields better than any generalist model ever could. We are not here to build chatbots. We are here to build the cognitive engines that will power the next generation of industry, research, and governance. This is the Artificialyze distinction: a commitment to depth, a rejection of noise, and an unwavering focus on the utility of the tool.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Identity;
