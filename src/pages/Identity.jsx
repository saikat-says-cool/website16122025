import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Identity = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                {/* Title Block */}
                <section className="reveal" style={{
                    padding: '10rem 6rem 8rem 6rem',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}>
                    <div className="mobile-text-center" style={{ flex: 1 }}>
                        <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.4em', marginBottom: '2rem', color: '#111', textTransform: 'uppercase' }}>Manifesto I</span>
                        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 10vw)', fontWeight: 300, lineHeight: 0.8, letterSpacing: '-0.06em', margin: 0, color: '#000' }}>
                            Identity.
                        </h1>
                    </div>
                    <div className="desktop-only" style={{ fontSize: '15rem', lineHeight: 0.8, fontWeight: 100, color: '#f9f9f9' }}>I</div>
                </section>

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 25%) 1fr' }}>

                    {/* Sidebar */}
                    <aside className="mobile-padding-tight" style={{
                        borderRight: '1px solid #f0f0f0',
                        padding: '6rem 4rem',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '4rem', color: '#000' }}>Core Tenets</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                { title: 'Rigorous Development', desc: 'Engineering over hype.' },
                                { title: 'Specialized Mastery', desc: 'Depth over breadth.' },
                                { title: 'Agentic Workflows', desc: 'Action over conversation.' },
                                { title: 'Deterministic Logic', desc: 'Truth over probability.' }
                            ].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '3rem',
                                    borderLeft: '1px solid #000',
                                    paddingLeft: '1.5rem'
                                }}>
                                    <span style={{ display: 'block', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</span>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#666' }}>{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <article className="mobile-padding-tight" style={{ padding: '8rem 10rem', maxWidth: '1200px' }}>
                        <div className="reveal">
                            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '4rem', lineHeight: 1.1 }}>We define the <br /> infrastructure of intent.</h2>
                            <p style={{ fontSize: '1.6rem', lineHeight: 1.4, marginBottom: '4rem', fontWeight: 300, color: '#111', maxWidth: '800px' }}>
                                Artificialyze is more than a company; it is a repository of specialized intelligence. We exist to solve the "generalist problem"—the dilution of capability that occurs when AI tries to be everything to everyone.
                            </p>
                        </div>

                        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6rem' }}>
                            <div style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#111' }}>The Transition</h4>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
                                    We stand at a critical juncture where the initial fascination with generalized models is giving way to the necessity for precision and reliability. The era of the "stochastic parrot"—models that guess based on massive datasets—is reaching its limit for high-stakes human endeavors.
                                </p>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }}>
                                    Our identity is built on the transition from "approximate conversation" to "precise execution." We fundamentally reject the generalist paradigm. True power lies in constraints.
                                </p>
                            </div>

                            <div style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#111' }}>The Specialized Paradox</h4>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
                                    It is often assumed that building a specialized model is easier than building a general one. We believe the opposite is true. Specialized AI requires a deeper understanding of domain logic, a more rigorous vetting of training data, and a far more uncompromising approach to error rates.
                                </p>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }}>
                                    By focusing on a vertical, we are forced to confront the complexities that general models simply gloss over. We do not hide behind "vibes" or "personality"; we stand behind <span style={{ textDecoration: 'underline' }}>deterministic performance</span>.
                                </p>
                            </div>

                            <div style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#111' }}>Architects of the Vertical</h4>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
                                    We are architects, not artists. Our work is structural. We construct the cognitive engines that power industry, governance, and research. Every system we deploy is a testament to our commitment to depth and utility.
                                </p>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }}>
                                    Artificialyze is the home of the specialists. Our pride is not in how many users we have, but in the critical nature of the problems we solve. This is the Artificialyze distinction: a rejection of noise, and an unwavering focus on the specialized tool.
                                </p>
                            </div>
                        </div>

                        {/* New Content: The Engineering Ethos */}
                        <div className="reveal" style={{ marginTop: '10rem', padding: '6rem', backgroundColor: '#fafafa', border: '1px solid #f0f0f0' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '3rem' }}>The Engineering Ethos</h3>
                            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                                <div>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                        Performance at the edge of possibility requires a different kind of engineering. At Artificialyze, we prioritize small, highly curated datasets over massive, unvetted pools. We favor reasoning-based architectures over traditional transformers when precision is required.
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444' }}>
                                        Our developers operate under the "Rule of Three": 1. Does it solve a specific vertical problem? 2. Is its reasoning verifiable? 3. Does it augment human agency rather than just mimicking it? If the answer to any is no, the project ceases.
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
